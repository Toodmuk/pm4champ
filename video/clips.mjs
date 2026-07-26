#!/usr/bin/env node
/**
 * Cuts the 10 standalone feature clips from the rendered master, per the
 * storyboard CLIP LIBRARY: intro 2s + scene + end card 3s (~15s each).
 *   node video/clips.mjs [path/to/master.mp4]
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MASTER = process.argv[2] || path.join(ROOT, "dist", "TrueCyberSafePRO_Demo_TH.mp4");
const OUTDIR = path.join(ROOT, "dist", "clips");
fs.mkdirSync(OUTDIR, { recursive: true });

const INTRO = [0, 2];        // shield rise from IN
const ENDCARD = [122, 125];  // final USSD + fine print from OUT

const CLIPS = [
  ["01_call.mp4", 8, 20],
  ["02_sms.mp4", 20, 32],
  ["03_block.mp4", 32, 42],
  ["04_web.mp4", 42, 54],
  ["05_scan.mp4", 54, 64],
  ["06_wifi.mp4", 64, 74],
  ["07_password.mp4", 74, 84],
  ["08_kids.mp4", 84, 94],
  ["09_report.mp4", 94, 104],
  ["10_insurance.mp4", 104, 116],
];

for (const [name, a, b] of CLIPS) {
  const fc =
    `[0:v]trim=${INTRO[0]}:${INTRO[1]},setpts=PTS-STARTPTS[i];` +
    `[0:v]trim=${a}:${b},setpts=PTS-STARTPTS[s];` +
    `[0:v]trim=${ENDCARD[0]}:${ENDCARD[1]},setpts=PTS-STARTPTS[e];` +
    `[i][s][e]concat=n=3:v=1:a=0[v]`;
  const out = path.join(OUTDIR, name);
  const r = spawnSync("ffmpeg", [
    "-y", "-hide_banner", "-loglevel", "error",
    "-i", MASTER,
    "-filter_complex", fc, "-map", "[v]",
    "-c:v", "libx264", "-preset", "medium", "-crf", "18",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart",
    out,
  ], { stdio: "inherit" });
  if (r.status !== 0) { console.error("failed:", name); process.exit(1); }
  console.log("clip:", name, `(${b - a + 5}s)`);
}
console.log("done:", OUTDIR);
