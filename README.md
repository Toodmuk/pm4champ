# True CyberSafe PRO — Demo Video (TH)

Motion-graphics demo video generated from
[`storyboard/TrueCyberSafePRO_Storyboard_TH.md`](storyboard/TrueCyberSafePRO_Storyboard_TH.md)
(v4, one feature per scene). 9:16 vertical, 1080×1920, ~2:05, designed to be
fully readable with sound off.

## Output

| File | What |
|---|---|
| `dist/TrueCyberSafePRO_Demo_TH.mp4` | Master video: IN + 10 feature scenes + OUT (125 s) |
| `dist/clips/01_call.mp4` … `10_insurance.mp4` | Standalone ~15 s clips per the storyboard clip library (intro 2 s + scene + end card 3 s) |

## How it works

- `video/index.html` — the whole timeline as deterministic motion graphics.
  `window.seek(t)` renders the exact frame for time `t`; no wall-clock
  animation, so rendering is reproducible. All Thai copy lives in one JS
  object (`T`) on its own layer, so an English version can be produced from
  the same timeline. Open `video/index.html#play` in a browser to preview in
  real time.
- `video/render.mjs` — drives headless Chromium (Playwright) frame by frame
  at 30 fps and pipes PNG frames straight into ffmpeg (libx264, CRF 18,
  yuv420p). `--stills` renders 3 review frames per scene to `dist/stills/`.
- `video/clips.mjs` — cuts the 10 standalone clips from the master.

## Rebuild

```bash
npm install            # playwright-core (Chromium + ffmpeg must be present)
npm run render         # -> dist/TrueCyberSafePRO_Demo_TH.mp4  (~10 min)
npm run clips          # -> dist/clips/*.mp4
npm run stills         # -> dist/stills/*.png  (review frames)
```

## Compliance notes (from the storyboard)

- สถานการณ์จำลอง card is pinned on every scam-depicting scene (01, 02, 04, 05).
- "ใช้ได้เฉพาะเครื่อง Android เท่านั้น" is pinned for the entire Device
  Scanning scene.
- Every price shown carries "ราคายังไม่รวมภาษีมูลค่าเพิ่ม"; the OUT fine print
  also carries "ใช้ได้สูงสุดครั้งละ 1 อุปกรณ์" and the promo period
  4 พ.ย. 2568 – 31 ธ.ค. 2570.
- No real bank / courier / government brands; scam UI uses generic blurred
  logos and example numbers from the deck (083 232 2163, 086 816 7447).
- None of the storyboard's forbidden claims ("ห้ามพูด" list) appear on screen.
- Prices are rendered from the text layer, so the master can be re-rendered
  without prices if packages change (storyboard production note).

## Known gaps (flagged, not invented)

Voice-over is not included — the storyboard's VO lines are shown as on-screen
subtitle text (in-store screens are muted per the storyboard; a human Thai VO
recording session is the intended path for audio). Fonts: Noto Sans Thai /
Noto Sans (OFL); icon shapes based on Feather Icons (MIT).
