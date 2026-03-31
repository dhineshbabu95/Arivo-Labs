# Image slots — where to add assets

## Resize to exact layout sizes (recommended)

1. Put **large originals** in **`public/images/_source/`** using the names in [`public/images/_source/README.md`](public/images/_source/README.md) (e.g. `hero-visual.jpg`, `profile.png`).
2. Run:

   ```bash
   npm run images:resize
   ```

3. Sharp writes **WebP** files at the exact pixel sizes below (cover crop, subject-aware).
4. In **`src/content.ts`**, set each `src` to the path in the **“After resize”** column.

| Slot | After resize (exact) | Set in `content.ts` |
|------|----------------------|---------------------|
| **Hero** | `public/images/home/hero-visual.webp` — **1200×900** (4:3) | `home.hero.visual.src` → `"/images/home/hero-visual.webp"` |
| **Beyond work** | `public/images/home/beyond-work.webp` — **1200×800** (3:2) | `home.beyondWork.visual.src` |
| **About portrait** | `public/images/profile.webp` — **832×832** | `about.portrait` → `"/images/profile.webp"` (or keep `.png` if you skip resize) |
| **Project 1** | `public/images/projects/deployments.webp` — **1600×1000** (16:10) | `work.caseStudies[0].coverImage` |
| **Project 2** | `public/images/projects/ops-dashboards.webp` — **1600×1000** | `work.caseStudies[1].coverImage` |
| **Project 3** | `public/images/projects/secure-workflows.webp` — **1600×1000** | `work.caseStudies[2].coverImage` |

### Story timeline — boxed chapter art (8)

**Portrait 3:4** image in a **framed box** beside short text (layout alternates left/right). Set each milestone’s **`posterImage`** in `home.story.milestones` (keep **`posterAlt`** accurate).

| Chapter | Output file | Example `posterImage` |
|--------|-------------|------------------------|
| Growing up — Curious kid | `public/images/story/growing-up.webp` — **900×1200** (3:4) | `"/images/story/growing-up.webp"` |
| Study — Engineering, then data | `images/story/study-data.webp` | `"/images/story/study-data.webp"` |
| AI — Alexa moment | `images/story/alexa-moment.webp` | `"/images/story/alexa-moment.webp"` |
| Melbourne — A slower chapter | `images/story/melbourne.webp` | `"/images/story/melbourne.webp"` |
| Sydney — Fresh start | `images/story/sydney.webp` | `"/images/story/sydney.webp"` |
| Work — Pipelines and platforms | `images/story/work-pipelines.webp` | `"/images/story/work-pipelines.webp"` |
| Path — Still building | `images/story/path-building.webp` | `"/images/story/path-building.webp"` |
| Today — What I focus on | `images/story/today-focus.webp` | `"/images/story/today-focus.webp"` |

`_source` names: `story-growing-up`, `story-study-data`, `story-alexa-moment`, `story-melbourne`, `story-sydney`, `story-work-pipelines`, `story-path-building`, `story-today-focus`.

`next/image` will still generate smaller variants for each device; these sizes match how wide each slot appears on screen (including ~2× for retina).

## Manual drop (no script)

You can still place files under `public/images/...` at **at least** the sizes above and point `src` at `.jpg` / `.png` / `.webp`. Prefer WebP for smaller downloads.

## After you add a file

1. File in `public/` (or run resize, then use the `.webp` output).
2. Open **`src/content.ts`** and set the matching `src` (keep `alt` / `coverAlt` accurate).

Placeholders show until `src` is non-`null`.

## Optional reference

`src/content/media.ts` lists the same slots (`mediaSlots`).
