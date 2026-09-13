# Setup — getting this running on your machine

One-time setup, start to finish. Twenty minutes, most of it waiting for
downloads. After this, [START-HERE.md](./START-HERE.md) covers the actual work.

---

## What you need installed

**1. Node.js** — [nodejs.org](https://nodejs.org), the **LTS** version (the
left-hand button). This runs the site locally. Accept all the defaults.

**2. Git** — how the code moves between your machine and GitHub.

- **Mac:** open Terminal (`⌘ + Space`, type "Terminal") and run
  `xcode-select --install`. Click through the installer.
- **Windows:** [git-scm.com/download/win](https://git-scm.com/download/win).
  Accept the defaults.

**3. Claude desktop app** — [claude.ai/download](https://claude.ai/download).
This is how you'll talk to Claude about the project.

To check Node and Git landed, open Terminal (Mac) or PowerShell (Windows) and
run:

```
node --version
git --version
```

Two version numbers means you're good. "Command not found" means that one
didn't install — or that you need to close and reopen the terminal, which
fixes it more often than you'd think.

---

## Get the code

In Terminal / PowerShell, one line at a time:

```bash
cd ~/Documents
git clone https://github.com/jamiejohnson05/Portfolio.git portfolio
cd portfolio
npm install
```

`npm install` takes a minute or two and prints a lot. Warnings are normal;
errors say "error."

The first `git clone` may open a browser asking you to sign in to GitHub. Use
your `jamiejohnson05` account.

### See it running

```bash
npm run dev
```

Open **http://localhost:3000**. That's your portfolio, running on your own
machine. Nothing you do here touches the live site until you push.

Leave that terminal window open — it watches for changes and refreshes the
browser as you edit. `Control + C` stops it. To start again later: `cd
~/Documents/portfolio` then `npm run dev`.

---

## Connect the folder to Claude

This is the part that makes everything else easy.

1. Open the **Claude desktop app**
2. Start a new chat
3. Click **Add folder**
4. Choose `~/Documents/portfolio` — on a Mac that's Documents → portfolio

Claude can now read and edit the project. There's a `CLAUDE.md` file in the
folder that explains the whole structure to it, so you don't have to.

### What that lets you do

Instead of editing code, you describe what you want:

> "Add the Pepper's Grill menu redesign as a new piece. It was 2024, menus and
> brand creation. Photos are in my Downloads folder in a folder called
> peppers-menus."

> "The gold accent is too warm — try something cooler, more of a bone white."

> "Rewrite my bio. Here's how I'd actually describe what I do: …"

> "I'm interviewing at a running brand. Reorder my work so the medal and the
> race campaign are first."

Claude makes the change, you look at http://localhost:3000, you say "closer,
but make the headline smaller." Normal conversation.

---

## The Project

Chris set up a claude.ai Project called **Jamie Marketing Portfolio**. It holds
the background on this build — the design direction, why the structure is what
it is, what's outstanding. Any chat started inside that Project already knows
all of it.

Ask Chris to share it with you. Whether he can depends on the kind of Claude
account he's on, so if sharing isn't available, it's no loss — the same context
lives in `CLAUDE.md` inside the folder, which is what a chat with the folder
connected reads anyway.

---

## Publishing changes

When you've made something you want live:

```bash
git add .
git commit -m "Added the Pepper's Grill menus"
git push
```

Vercel rebuilds automatically. A minute later it's live. That's the entire
deployment process, permanently.

Or just ask Claude to publish it for you — it knows these commands.

---

## The order to do things in

1. **Read [START-HERE.md](./START-HERE.md)** — it walks through what to edit
2. **`src/content/profile.ts`** — your bio, in your voice. Three paragraphs are
   marked TODO
3. **`public/resume.pdf`** — drop your résumé in under exactly that name
4. **Photograph your work** — see [CONTENT-GUIDE.md](./CONTENT-GUIDE.md). This
   layout runs images nearly full-screen, so it's the step that decides whether
   the site lands
5. **`src/content/work.ts`** — replace the ten examples. Five or six marked
   `featured: true`
6. **Push**, then put the live URL on your résumé

---

## If something goes wrong

- **Red error page in the browser** — it names the file and the line. Copy it,
  paste it to Claude, it'll fix it.
- **`npm run dev` won't start** — something's already using port 3000. Close
  other terminal windows, or run `npm run dev -- -p 3001`.
- **`git push` rejected** — someone else pushed since you last pulled. Run
  `git pull` first, then push again.
- **You've broken something and want to start over** — `git restore .` throws
  away every uncommitted change. Nothing you haven't pushed can hurt the live
  site.

Genuinely: you can't break this in a way that can't be undone. The live site
only changes when you push, and every version is kept.
