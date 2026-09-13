# Start here, Jamie

This is your portfolio. It's built, it works, and it's ready for your work to
go into it. Nothing is waiting on you to make a technical decision.

**The direction is "Full Bleed"** — the one you picked. Dark ground, big
condensed headlines, featured projects running the full width of the screen,
and a page for each of your thirteen categories underneath.

---

## How it's put together

Everything a visitor sees comes from **five files** in `src/content/`. You edit
those; the site rebuilds itself. You never touch layout code.

| File | What it controls |
| --- | --- |
| `src/content/work.ts` | **Your projects.** The main event. |
| `src/content/categories.ts` | The thirteen disciplines and how they're grouped |
| `src/content/profile.ts` | Bio, experience, education, skills, contact |
| `src/content/testimonials.ts` | Quotes (empty array hides the section) |
| `src/content/site.ts` | Site title, nav, your live URL |

Anywhere you see **TODO** or **EXAMPLE**, that's placeholder text showing on the
live site right now. Search the project for both to find every one.

### The one idea worth understanding

A piece of work can take two shapes, and you choose per project:

**An object.** A medal, a poster, a calendar, a look book. Great photo, a
caption, done. No story attached — because it doesn't need one.

**A case study.** A rebrand, a campaign, a launch plan. Add a `sections` array
and the page grows into the full narrative: situation, what you did, what
happened.

Both sit in the same grid and filter the same way. Don't force a story onto a
piece that doesn't have one — an invented narrative reads as an invented
narrative, and interviewers ask follow-up questions.

---

## Your first hour, in order

### 1. Get it onto your machine

Open Terminal (Mac: `⌘ + Space`, type "Terminal") and run these one at a time:

```bash
cd ~/Documents
git clone https://github.com/jamiejohnson05/portfolio.git
cd portfolio
npm install
npm run dev
```

Open **http://localhost:3000**. That's your site. Leave the terminal running —
it refreshes the browser as you edit. `Control + C` stops it.

> If `git` or `npm` aren't found: install [Node.js](https://nodejs.org) (LTS),
> and on a Mac run `xcode-select --install`. Then reopen Terminal.

### 2. Connect the folder to Cowork

In the Claude desktop app, **Add folder** → `~/Documents/portfolio`. From then
on you can say things like:

> "Add the Pepper's Grill menu redesign as a new piece — here are four
> photos and my notes."

Claude can read the project, knows how it's structured (there's a `CLAUDE.md`
here explaining it), and will write the entry for you.

### 3. Make it yours

In this order:

1. **`src/content/profile.ts`** — three of the bio paragraphs are TODO drafts
   pulled from your résumé. Rewrite them in your voice. Fill in the LinkedIn
   URL and the middle headline stat.
2. **`public/resume.pdf`** — drop your résumé in under exactly that name and
   the download button starts working.
3. **`src/content/work.ts`** — replace the ten examples with real projects. Do
   your five or six strongest first; they're what fill the homepage.
4. **Images** — see [CONTENT-GUIDE.md](./CONTENT-GUIDE.md). This layout lives
   and dies on photography, so this is the step that matters most.
5. **`src/content/categories.ts`** — rename or drop any category. An empty one
   disappears from the site automatically.
6. **`src/content/site.ts`** — set `url` to your real Vercel address.

### 4. Publish

```bash
git add .
git commit -m "Add my real work"
git push
```

Vercel rebuilds automatically. About a minute later it's live. That's the whole
deployment process, forever.

---

## About the photography

Full Bleed was the right call for your work, and it comes with one demand: the
featured images run nearly full-screen, so a weak photo has nowhere to hide.

Five or six strong hero shots is the bar. For physical pieces — medals,
printed menus, look books, calendars — that usually means shooting them rather
than scanning them: natural light near a window, a plain surface, shot slightly
from above, one object in focus. A phone camera is fine. Ask Claude to help
crop and compress once you have them.

If you only have flat artwork for something, that's fine too — put it in the
grid rather than making it a featured panel, and pick something photographable
for the homepage.

---

## Before you send the link to anyone

- [ ] No `TODO` or `EXAMPLE` anywhere — search the project for both
- [ ] Five or six featured pieces, spread across different categories
- [ ] Every image is yours; no placeholder JPGs left in `public/work/`
- [ ] `public/resume.pdf` is your current résumé
- [ ] LinkedIn URL is right, and the profile matches the site
- [ ] `site.url` is your real live URL
- [ ] Opened it on your phone — this layout changes a lot at that size
- [ ] Clicked every category page and every filter chip
- [ ] Someone else has read it for typos
- [ ] The portfolio URL is on your résumé, and it's short

---

## If something breaks

Very little can, because the site is data plus layout. But:

- **Red error page in the dev server** — it names the file and line. Usually a
  missing comma or quote in a content file. Paste it to Claude; it'll fix it.
- **Vercel says the build failed** — run `npm run build` locally first; same
  error, more room to read it.
- **An image doesn't appear** — paths are relative to `public/`. A file at
  `public/work/my-project/hero.jpg` is written `"/work/my-project/hero.jpg"`.
  Leading slash, no `public`.
- **Undo everything since your last push** — `git restore .`

Nothing you do locally touches the live site until you `git push`.

---

## Other docs

- **[CONTENT-GUIDE.md](./CONTENT-GUIDE.md)** — writing a piece, image specs,
  what's safe to publish from past clients
- **[SETUP.md](./SETUP.md)** — GitHub and Vercel wiring, custom domain
- **[CLAUDE.md](./CLAUDE.md)** — notes for Claude, not for you
