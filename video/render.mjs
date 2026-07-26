#!/usr/bin/env node
/**
 * Renders video/index.html (deterministic seek(t) timeline) to an H.264 MP4.
 *   node video/render.mjs                 -> dist/TrueCyberSafePRO_Demo_TH.mp4
 *   node video/render.mjs --stills        -> dist/stills/*.png  (review frames)
 *   node video/render.mjs --from 8 --to 20 --out dist/scene01.mp4
 * Frames are piped straight into ffmpeg (image2pipe) so nothing large hits disk.
 */
import { chromium } from "playwright-core";
import { spawn } from "node:child_process";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PAGE = "file://" + path.join(__dirname, "index.html");
const EXEC = "/opt/pw-browsers/chromium";

const FPS = 30, W = 1080, H = 1920;

const args = process.argv.slice(2);
const getArg = (name, dflt) => {
  const i = args.indexOf("--" + name);
  return i >= 0 ? args[i + 1] : dflt;
};
const STILLS = args.includes("--stills");
const FROM = parseFloat(getArg("from", "0"));
const OUT = getArg("out", path.join(ROOT, "dist", "TrueCyberSafePRO_Demo_TH.mp4"));

async function main() {
  const browser = await chromium.launch({
    executablePath: EXEC,
    args: ["--no-sandbox", "--force-color-profile=srgb", "--font-render-hinting=none", "--disable-lcd-text"],
  });
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  page.on("pageerror", (e) => { console.error("PAGE ERROR:", e.message); process.exitCode = 1; });
  page.on("console", (m) => { if (m.type() === "error") console.error("console:", m.text()); });
  await page.goto(PAGE, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  const TOTAL = await page.evaluate(() => window.TOTAL);
  const SCENES = await page.evaluate(() => window.SCENES);
  const TO = parseFloat(getArg("to", String(TOTAL)));

  if (STILLS) {
    const dir = path.join(ROOT, "dist", "stills");
    fs.mkdirSync(dir, { recursive: true });
    // 3 review frames per scene: mid-beat1, mid-beat2, mid-beat3
    for (const s of SCENES) {
      const D = s.end - s.start;
      const pts = s.id === "in" || s.id === "out"
        ? [s.start + 0.3 * D, s.start + 0.65 * D, s.end - 0.8]
        : [s.start + 1.6, s.start + 3 + (D - 6) * 0.62, s.end - 1.2];
      for (let i = 0; i < pts.length; i++) {
        await page.evaluate((t) => window.seek(t), pts[i]);
        const f = path.join(dir, `${s.id}_b${i + 1}_t${pts[i].toFixed(1)}.png`);
        await page.screenshot({ path: f });
        console.log("still:", path.basename(f));
      }
    }
    await browser.close();
    return;
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  const ff = spawn("ffmpeg", [
    "-y", "-hide_banner", "-loglevel", "error",
    "-f", "image2pipe", "-framerate", String(FPS), "-i", "-",
    "-c:v", "libx264", "-preset", "medium", "-crf", "18",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart",
    OUT,
  ], { stdio: ["pipe", "inherit", "inherit"] });
  const ffDone = new Promise((res, rej) => {
    ff.on("close", (code) => (code === 0 ? res() : rej(new Error("ffmpeg exit " + code))));
  });

  const nFrames = Math.round((TO - FROM) * FPS);
  const t0 = Date.now();
  for (let i = 0; i < nFrames; i++) {
    const t = FROM + i / FPS;
    await page.evaluate((tt) => window.seek(tt), t);
    const buf = await page.screenshot({ type: "png" });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
    if (i % 150 === 0) {
      const el = (Date.now() - t0) / 1000;
      console.log(`frame ${i}/${nFrames}  t=${t.toFixed(1)}s  elapsed=${el.toFixed(0)}s  rate=${(i / el || 0).toFixed(1)}fps`);
    }
  }
  ff.stdin.end();
  await ffDone;
  await browser.close();
  console.log("done:", OUT, `${((Date.now() - t0) / 1000).toFixed(0)}s wall`);
}

main().catch((e) => { console.error(e); process.exit(1); });
