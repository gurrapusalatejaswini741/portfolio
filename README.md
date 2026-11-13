# Tejaswini Gurrapusala, portfolio

React + TypeScript + Tailwind CSS + Framer Motion + Lucide, built with Vite.

## Run locally
```bash
npm install
cp .env.example .env     # then add your Web3Forms key (see below)
npm run dev              # http://localhost:5173
npm run build            # production build into dist/
```
If a stray `node_modules` folder came with this download, delete it and run `npm install` again.

## Contact form (Web3Forms, free)
1. Go to https://web3forms.com and enter `gurrapusalatejaswini572@gmail.com`.
2. Open the email they send you and copy your access key.
3. Put it in `.env`: `VITE_WEB3FORMS_KEY=your_key_here`.
4. Restart `npm run dev`, send a test message, and check your inbox.
Until the key is set, the form shows a message asking visitors to email you directly.

## Before you publish
- [ ] **CGPA:** the resume PDF says 9.2, the site shows 9.01 (`CGPA` in `src/data/content.ts`). Confirm the correct value, then fix the site value and, if needed, your resume PDF.
- [ ] Replace `public/Tejaswini_Gurrapusala_Resume.pdf` if you update your resume (keep the file name).
- [ ] Retake the CrimeAI Sentinel screenshot: it shows "42K+ cases", "31 districts" and "99.9% uptime" design figures.
- [ ] Add repo links in `src/data/projects.ts` once verified (`repoUrl`), and a `liveUrl` for CrimeAI Sentinel.

## Where to edit
- All text: `src/data/content.ts` and `src/data/projects.ts`
- Screenshots: `public/screenshots/<slug>.png`
- Colours: `tailwind.config.js`

## Deploy
**Netlify:** push to GitHub, then Add new site > Import from Git. Build command `npm run build`, publish directory `dist`. Under Site configuration > Environment variables add `VITE_WEB3FORMS_KEY`, then redeploy.
**Vercel:** import the repo (Vite is detected automatically). Add `VITE_WEB3FORMS_KEY` under Settings > Environment Variables, then redeploy.
