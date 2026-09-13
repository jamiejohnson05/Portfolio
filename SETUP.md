# Setup reference

What's connected to what, and how to fix it if something comes loose.

---

## The chain

```
Your machine                GitHub                        Vercel
─────────────               ──────                        ──────
~/Documents/portfolio  ──►  jamiejohnson05/portfolio  ──►  live site
     (git push)              (main branch)                 (auto-deploy)
```

Every push to `main` triggers a Vercel build automatically. No deploy button,
no upload step. Push, wait about a minute, refresh.

Vercel also builds a **preview** for any other branch, at its own temporary
URL — useful for trying something big without touching the live site:

```bash
git checkout -b try-light-mode
# ...changes...
git push -u origin try-light-mode
```

Merge it into `main` when you like it, or delete the branch and nothing
happened.

---

## The very first push

Only needed once, and only if the repo on GitHub is still empty.

```bash
cd path/to/portfolio
git remote add origin https://github.com/jamiejohnson05/portfolio.git
git push -u origin main
```

If git says the remote already exists, use `git remote set-url origin …`
instead of `add`.

---

## Everyday commands

Run from inside the project folder.

| What you want | Command |
| --- | --- |
| Work on the site locally | `npm run dev` → http://localhost:3000 |
| Stop the local server | `Control + C` |
| Check it'll build before pushing | `npm run build` |
| See what you've changed | `git status` |
| Publish | `git add .` · `git commit -m "message"` · `git push` |
| Throw away uncommitted changes | `git restore .` |
| Pull down changes made elsewhere | `git pull` |

---

## A custom domain

Worth doing before you start applying — `jamiejohnson.com` on a résumé reads
differently than `portfolio-abc123.vercel.app`.

1. Buy it. Namecheap, Porkbun, or Cloudflare; $10–15/year. Your own name if
   it's available.
2. Vercel → the project → **Settings** → **Domains** → **Add**.
3. Vercel shows the DNS records; add them at your registrar.
4. Wait. Usually minutes. Vercel handles HTTPS on its own.
5. Update `url` in `src/content/site.ts`, then push.

---

## Accounts

- **GitHub** — `jamiejohnson05`. Turn on two-factor if you haven't.
- **Vercel** — signed in with GitHub, so there's no separate password. The free
  Hobby plan covers a personal portfolio with room to spare.

Any personal access token used to set this up should be revoked at
[github.com/settings/tokens](https://github.com/settings/tokens) once the first
push has landed. Your own machine authenticates as you and won't need one.

---

## If Vercel stops auto-deploying

1. **Deployments** tab in Vercel — a failed build shows the log. The same error
   reproduces locally with `npm run build`.
2. Settings → Git: confirm the connected repo is `jamiejohnson05/portfolio` and
   the production branch is `main`.
3. Force a rebuild:
   `git commit --allow-empty -m "Trigger rebuild" && git push`

---

## What's in here

```
portfolio/
├── src/
│   ├── content/              ← the only folder you normally edit
│   │   ├── work.ts                every project
│   │   ├── categories.ts          the thirteen disciplines
│   │   ├── profile.ts             bio, experience, skills, contact
│   │   ├── testimonials.ts        quotes
│   │   └── site.ts                title, nav, canonical URL
│   ├── app/
│   │   ├── page.tsx               home — intro, full-bleed panels, category index
│   │   ├── work/page.tsx          filterable archive
│   │   ├── work/[slug]/page.tsx   one piece (object page or case study)
│   │   ├── category/[id]/page.tsx one discipline
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── layout.tsx             shared shell, fonts, metadata
│   │   └── globals.css            design tokens — colors and type live here
│   ├── components/           ← header, footer, panel, cards, lightbox, metrics
│   └── lib/types.ts          ← the shape content files must match
├── public/
│   ├── work/<slug>/          ← project images
│   ├── images/portrait.jpg
│   ├── resume.pdf
│   └── og-default.jpg        ← social link preview
└── package.json
```

Next.js 16, React 19, Tailwind CSS v4, TypeScript. Every page is pre-rendered
as static HTML at build time — which is why it loads instantly and costs
nothing to host.
