/**
 * Resize originals in public/images/_source/ to layout-ready files under public/images/.
 *
 * Usage: npm run images:resize
 *
 * Name your originals to match the "base" below (any of .jpg / .jpeg / .png / .webp).
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const pub = path.join(root, "public");
const sourceDir = path.join(pub, "images", "_source");

const INPUT_EXTS = [".jpg", ".jpeg", ".png", ".webp"];

/** Target dimensions match IMAGE_SLOTS.md (cover crop to exact size). */
const JOBS = [
  {
    base: "hero-visual",
    out: "images/home/hero-visual.webp",
    width: 1200,
    height: 900,
    note: "4:3 hero column",
  },
  {
    base: "beyond-work",
    out: "images/home/beyond-work.webp",
    width: 1200,
    height: 800,
    note: "3:2",
  },
  {
    base: "profile",
    out: "images/profile.webp",
    width: 832,
    height: 832,
    note: "square portrait; UI up to ~416px (@2x sharp)",
  },
  {
    base: "deployments",
    out: "images/projects/deployments.webp",
    width: 1600,
    height: 1000,
    note: "16:10 project card",
  },
  {
    base: "ops-dashboards",
    out: "images/projects/ops-dashboards.webp",
    width: 1600,
    height: 1000,
    note: "16:10",
  },
  {
    base: "secure-workflows",
    out: "images/projects/secure-workflows.webp",
    width: 1600,
    height: 1000,
    note: "16:10",
  },
];

/** Story section — portrait “boxed” chapter art (3:4, 900×1200). */
const STORY_JOBS = [
  { base: "story-growing-up", out: "images/story/growing-up.webp", note: "Story: Growing up" },
  { base: "story-study-data", out: "images/story/study-data.webp", note: "Story: Study" },
  { base: "story-alexa-moment", out: "images/story/alexa-moment.webp", note: "Story: AI" },
  { base: "story-melbourne", out: "images/story/melbourne.webp", note: "Story: Melbourne" },
  { base: "story-sydney", out: "images/story/sydney.webp", note: "Story: Sydney" },
  { base: "story-work-pipelines", out: "images/story/work-pipelines.webp", note: "Story: Work" },
  { base: "story-path-building", out: "images/story/path-building.webp", note: "Story: Path" },
  { base: "story-today-focus", out: "images/story/today-focus.webp", note: "Story: Today" },
].map((j) => ({
  ...j,
  width: 900,
  height: 1200,
}));

const ALL_JOBS = [...JOBS, ...STORY_JOBS];

function findSource(baseName) {
  for (const ext of INPUT_EXTS) {
    const p = path.join(sourceDir, `${baseName}${ext}`);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

async function main() {
  if (!fs.existsSync(sourceDir)) {
    await fs.promises.mkdir(sourceDir, { recursive: true });
    console.log(`Created ${path.relative(root, sourceDir)} — add originals, then run again.`);
  }

  let wrote = 0;
  for (const job of ALL_JOBS) {
    const srcPath = findSource(job.base);
    if (!srcPath) {
      console.warn(
        `Skip: no public/images/_source/${job.base}.{jpg|jpeg|png|webp} (${job.note})`
      );
      continue;
    }

    const outAbs = path.join(pub, job.out);
    await fs.promises.mkdir(path.dirname(outAbs), { recursive: true });

    await sharp(srcPath)
      .rotate()
      .resize(job.width, job.height, {
        fit: "cover",
        position: "attention",
      })
      .webp({ quality: 82, effort: 6 })
      .toFile(outAbs);

    console.log(`OK  ${job.out}  ←  ${path.relative(root, srcPath)}`);
    wrote++;
  }

  if (wrote === 0) {
    console.log("\nNo matching files in public/images/_source/. See public/images/_source/README.md");
  } else {
    console.log(`\nDone. Set src in src/content.ts to the .webp paths above (see IMAGE_SLOTS.md).`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
