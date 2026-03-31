# Original photos (before resize)

Drop **high-resolution** originals here, using these **file names** (`.jpg`, `.jpeg`, `.png`, or `.webp`):

| File name | Becomes (after `npm run images:resize`) |
|-----------|----------------------------------------|
| `hero-visual` | `public/images/home/hero-visual.webp` — **1200×900** (4:3) |
| `beyond-work` | `public/images/home/beyond-work.webp` — **1200×800** (3:2) |
| `profile` | `public/images/profile.webp` — **832×832** (square, sharp @ ~416px UI) |
| `deployments` | `public/images/projects/deployments.webp` — **1600×1000** (16:10) |
| `ops-dashboards` | `public/images/projects/ops-dashboards.webp` — **1600×1000** |
| `secure-workflows` | `public/images/projects/secure-workflows.webp` — **1600×1000** |

**Story boxed art (3:4, 900×1200):** `story-growing-up` → `images/story/growing-up.webp`, `story-study-data` → `study-data.webp`, `story-alexa-moment` → `alexa-moment.webp`, `story-melbourne` → `melbourne.webp`, `story-sydney` → `sydney.webp`, `story-work-pipelines` → `work-pipelines.webp`, `story-path-building` → `path-building.webp`, `story-today-focus` → `today-focus.webp`.

Then run:

```bash
npm run images:resize
```

Update `src/content.ts` with the new `/images/...` paths (see **`IMAGE_SLOTS.md`**).
