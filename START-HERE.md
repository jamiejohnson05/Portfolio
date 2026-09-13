# Start here, Jamie

This is your portfolio site. It's already built, already deployed, and already
live on the internet. Nothing about it is broken and nothing is waiting on you
to make a technical decision.

What's left is the part only you can do: replacing the example work with yours.

---

## The shape of it

Everything a visitor sees comes from **four files** in `src/content/`. You edit
those files; the site rebuilds itself. You never have to touch the code that
does the layout.

| File | What it controls |
| --- | --- |
| `src/content/profile.ts` | Your name, tagline, bio, experience, skills, contact links |
| `src/content/case-studies.ts` | Your projects — the heart of the thing |
| `src/content/testimonials.ts` | Quotes from people you've worked with |
| `src/content/site.ts` | Site title, nav labels, your live URL |

Anywhere you see the word **TODO** or **EXAMPLE**, that's placeholder text
showing on the live site right now. Search the project for `TODO` to find
every one of them.

---

## Your first hour, in order

### 1. Get the project onto your machine

Open Terminal (Mac: `⌘ + Space`, type "Terminal") and run these one at a time:

```bash
cd ~/Documents
git clone https://github.com/jamiejohnson05/portfolio.git
cd portfolio
npm install
npm run dev
```

That last command starts the site locally. Open **http://localhost:3000** in
your browser. You're now looking at your own copy. Leave that terminal window
running — it watches for changes and refreshes the browser as you edit.

To stop it later: click the terminal and press `Control + C`.

> If `git` or `npm` aren't found, install [Node.js](https://nodejs.org) (the
> LTS version) and, on a Mac, run `xcode-select --install`. Then reopen Terminal.

### 2. Connect the folder to Cowork

In the Claude desktop app, click **Add folder** and choose
`~/Documents/portfolio`. From then on you can just say things like:

> "Replace the first case study with my Q3 campaign work — here are my notes
> and three screenshots."

Claude can read this repo, understands its structure (there's a `CLAUDE.md`
in here explaining it), and can edit the content files for you.

### 3. Make it yours

Work in this order. Don't skip to the pretty stuff.

1. **`src/content/profile.ts`** — your name, title, tagline, bio, email,
   LinkedIn, the three headline stats, your experience and skills.
2. **`src/content/case-studies.ts`** — replace the three examples. See
   [CONTENT-GUIDE.md](./CONTENT-GUIDE.md) for how to write one that lands.
3. **Images** — drop your screenshots into `public/work/<project-slug>/` and
   point the `src` fields at them.
4. **`public/resume.pdf`** — drop your résumé in as exactly that filename and
   the download button starts working.
5. **`src/content/testimonials.ts`** — two quotes, or set it to `[]` to hide
   the section.
6. **`src/content/site.ts`** — set `url` to your real Vercel address.

### 4. Publish

```bash
git add .
git commit -m "Add my real work"
git push
```

Vercel picks that up automatically and your live site updates in about a
minute. That's the whole deployment process, forever.

---

## The checklist before you send the link to anyone

- [ ] Zero instances of `TODO` or `EXAMPLE` remain — search the project for both
- [ ] Every case study has real numbers, or an honest reason it doesn't
- [ ] Every image is yours; no placeholder JPGs left in `public/work/`
- [ ] `public/resume.pdf` is your current résumé
- [ ] Your email in `profile.ts` is one you actually check
- [ ] LinkedIn URL is correct and the profile matches the site
- [ ] `site.url` in `src/content/site.ts` is your real live URL
- [ ] Opened the live site on your phone and it looks right
- [ ] Clicked every case study and every filter chip
- [ ] Someone else has read it for typos

---

## If something breaks

The honest truth is that very little can break here, because the site is just
data plus layout. But if it does:

- **The dev server shows a red error page** — it names the file and line. Nine
  times out of ten it's a missing comma or quote in a content file. Paste the
  error to Claude in Cowork and it'll fix it.
- **You pushed and Vercel says the build failed** — run `npm run build`
  locally first; it'll show you the same error with more room to read it.
- **An image doesn't show up** — the `src` path is relative to `public/`. A
  file at `public/work/my-project/hero.jpg` is written as
  `"/work/my-project/hero.jpg"`. Leading slash, no `public`.
- **You want to undo everything since your last push** — `git restore .`

Nothing you do locally can hurt the live site until you `git push`.

---

## Other docs in here

- **[CONTENT-GUIDE.md](./CONTENT-GUIDE.md)** — how to write a case study that
  gets you the interview, plus image sizing and file naming
- **[SETUP.md](./SETUP.md)** — the GitHub and Vercel wiring, for reference
- **[CLAUDE.md](./CLAUDE.md)** — notes for Claude, not for you
