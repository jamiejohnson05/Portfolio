# Setup reference

The wiring is already done. This document exists so you know what's connected
to what, and so you can fix it if something ever comes loose.

---

## What's connected

```
Your machine                GitHub                      Vercel
─────────────               ──────                      ──────
~/Documents/portfolio  ──►  jamiejohnson05/portfolio ──► live site
     (git push)              (main branch)                (auto-deploy)
```

Every `git push` to `main` triggers a Vercel build automatically. There is no
deploy button to press and no upload step. Push, wait about a minute, refresh.

Vercel also builds a **preview** for any other branch you push, at its own
temporary URL. Useful if you want to try a big change without touching the
live site:

```bash
git checkout -b try-new-layout
# ...make changes...
git push -u origin try-new-layout
```

Vercel comments the preview URL on the branch. Merge it into `main` when you
like it, or delete the branch and nothing happened.

---

## Everyday commands

Run these from inside `~/Documents/portfolio`.

| What you want | Command |
| --- | --- |
| Work on the site locally | `npm run dev` → open http://localhost:3000 |
| Stop the local server | `Control + C` in that terminal |
| Check it will build before pushing | `npm run build` |
| See what you've changed | `git status` |
| Publish your changes | `git add .` then `git commit -m "message"` then `git push` |
| Throw away uncommitted changes | `git restore .` |
| Pull down changes made elsewhere | `git pull` |

---

## Adding a custom domain

Worth doing before you start applying — `jamiejohnson.com` on a résumé reads
differently than `portfolio-abc123.vercel.app`.

1. Buy the domain. Namecheap, Porkbun, and Cloudflare are all fine; expect
   $10–15/year. Your own name is the right choice if it's available.
2. In Vercel: open the project → **Settings** → **Domains** → **Add**.
3. Vercel shows you the DNS records to create. Add them at your registrar.
4. Wait. Usually minutes, occasionally a few hours. Vercel handles the HTTPS
   certificate on its own.
5. Update `url` in `src/content/site.ts` to the new address, then push.

---

## Access and accounts

- **GitHub** — `jamiejohnson05`. This is where the code lives. Turn on
  two-factor authentication if you haven't; GitHub requires it now anyway.
- **Vercel** — signed in with the GitHub account, so there's no separate
  password to keep track of. The free Hobby plan covers a personal portfolio
  with room to spare.

The push token used to create this repo was temporary and scoped to this one
repository. **Revoke it** at
[github.com/settings/tokens](https://github.com/settings/tokens) once you've
confirmed you can push from your own machine — you won't need it again, since
your machine authenticates as you.

---

## If Vercel stops auto-deploying

Rare, but the fix is usually one of these:

1. Check the **Deployments** tab in Vercel — a failed build shows the error log.
   The same error will reproduce locally with `npm run build`.
2. Confirm the project's connected Git repository is still
   `jamiejohnson05/portfolio` and the production branch is `main`
   (Settings → Git).
3. Push an empty commit to force a rebuild:
   `git commit --allow-empty -m "Trigger rebuild" && git push`

---

## What's actually in here

```
portfolio/
├── src/
│   ├── content/          ← the only folder you normally edit
│   │   ├── profile.ts
│   │   ├── case-studies.ts
│   │   ├── testimonials.ts
│   │   └── site.ts
│   ├── app/              ← pages and routing
│   │   ├── page.tsx              home
│   │   ├── work/page.tsx         the filterable grid
│   │   ├── work/[slug]/page.tsx  one case study
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── layout.tsx            shared shell + typography
│   │   └── globals.css           colors and design tokens
│   ├── components/       ← reusable pieces (header, cards, lightbox…)
│   └── lib/types.ts      ← the shape the content files must match
├── public/               ← images, résumé, anything served as-is
└── package.json
```

Built with Next.js 16, React 19, Tailwind CSS v4, and TypeScript. Every page is
pre-rendered as static HTML at build time, which is why it loads instantly and
costs nothing to host.
