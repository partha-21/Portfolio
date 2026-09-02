# Partha Sarathi K — Portfolio

A personal portfolio built with React + Vite. Content is pulled directly from your resumes — no placeholder text, no filler projects.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints.

## Project structure

- `src/data.js` — all the real content (profile, skills, `projects` = the 3 featured, `otherProjects` = real repos linked in a lighter list, education, certifications). Edit this file to update anything on the site; the rest is just layout.
- `src/App.jsx` — page structure and sections.
- `src/styles.css` — the design system (colors, type, layout).
- `src/icons.jsx` — small hand-built icons (no external icon library).
- `public/resume.pdf` — the file the "Resume" buttons download.
- `public/photo.jpg` — profile photo shown in the hero.

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to vercel.com → **Add New → Project**.
3. Import the repository.
4. Vercel auto-detects Vite. Build command: `npm run build`. Output directory: `dist`.
5. Click **Deploy**.

No environment variables needed.

## Updating content later

Everything you'd want to change — your bio, project descriptions, skills, links — lives in `src/data.js` as plain JavaScript objects and arrays. You don't need to touch the components to update the text.
