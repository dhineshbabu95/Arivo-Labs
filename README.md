# Dhinesh Babu - Personal Brand Website

A production-ready personal brand website for Cloud, Web & Data Solutions consulting.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Deployable to Vercel

## Getting Started

### Run Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push your code to GitHub (or GitLab/Bitbucket).

2. Go to [vercel.com](https://vercel.com) and sign in with your Git provider.

3. Click **Add New Project** and import your repository.

4. Vercel will auto-detect Next.js. Click **Deploy**.

5. After deployment, update `src/content.ts`:
   - Set `site.url` to your Vercel URL (e.g. `https://your-site.vercel.app`)
   - Update `site.email` with your email
   - Update `site.whatsapp` with your WhatsApp link (format: `https://wa.me/COUNTRYCODE_NUMBER`)

### Custom Domain

In your Vercel project: **Settings → Domains** → Add your domain.

## Editing Content

All website text lives in `src/content.ts`. Edit this file to update:

- Hero copy and CTAs
- Services descriptions
- Case studies
- About page content
- Contact form labels
- Site metadata (url, email, WhatsApp)
- Privacy policy
- Navigation and footer links

## Project Structure

```
src/
├── app/
│   ├── api/contact/     # Contact form API
│   ├── about/
│   ├── contact/
│   ├── privacy/
│   ├── services/
│   ├── work/
│   ├── layout.tsx
│   ├── page.tsx         # Homepage
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Container.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── Section.tsx
└── content.ts           # All editable content
```

## Contact Form

The `/api/contact` route validates inputs and returns JSON. To actually send emails or store submissions, add your preferred service in `src/app/api/contact/route.ts` (e.g. Resend, SendGrid, or a database).
