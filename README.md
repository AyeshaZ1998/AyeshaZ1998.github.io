# Ayesha Zafar — Portfolio Website

A simple, fast personal website. No build tools, no frameworks — just HTML/CSS that
works anywhere, including free GitHub Pages hosting.

## Pages
- `index.html` — Home, About, Education, Skills
- `projects.html` — Research & policy projects
- `experience.html` — Work history
- `writing.html` — Writing samples + code samples
- `maps.html` — ArcGIS Story Maps + videos

## Folders
- `css/` — `style.css` (all styling) and `main.js` (small script)
- `assets/docs/` — your PDFs (CV, reports, writing samples)
- `assets/code/` — code files you want to show
- `assets/videos/` — self-hosted videos (keep these small, see note below)

---

## How to put this online with GitHub Pages (free)

You do NOT need to learn the command line / push-pull. You can do everything in the
browser. Here is the easy route.

### Step 1 — make a GitHub account
Go to github.com and sign up (free).

### Step 2 — create a repository
1. Click the **+** in the top-right → **New repository**.
2. Name it exactly: `your-username.github.io`
   (use YOUR github username — e.g. if your username is `ayeshaz`, name it `ayeshaz.github.io`).
   This special name makes your site live at `https://your-username.github.io`.
3. Set it to **Public**. Don't add a README (we have one). Click **Create repository**.

### Step 3 — upload these files (drag and drop, no command line)
1. On the empty repo page click **uploading an existing file**
   (or **Add file → Upload files**).
2. Open this `site` folder on your computer, select EVERYTHING inside it
   (index.html, the other .html files, the css folder, the assets folder),
   and drag it all into the browser upload box.
   - Tip: drag the folder *contents*, not the folder itself, so `index.html`
     ends up at the top level of the repo.
3. Scroll down, click **Commit changes**.

### Step 4 — turn on GitHub Pages
1. In your repo go to **Settings** → **Pages** (left sidebar).
2. Under "Build and deployment", Source = **Deploy from a branch**.
3. Branch = **main**, folder = **/ (root)**. Click **Save**.
4. Wait ~1 minute. Your site is live at `https://your-username.github.io`.

That's it. No pull/push needed.

---

## How to make changes later (also browser-only)

**Option A — edit directly on GitHub (simplest):**
1. Open the file on GitHub (e.g. `projects.html`).
2. Click the **pencil ✏️ icon** (top right of the file).
3. Make your edit, scroll down, **Commit changes**. The live site updates in ~1 min.

**Option B — re-upload a file:** Add file → Upload files → drag the new version → Commit.
This overwrites the old one.

> If you ever want the "real" developer workflow (cloning, pull/push), GitHub Desktop
> (desktop.github.com) gives you a button-click version of it. But you don't need it.

---

## How to add YOUR content (the parts with placeholders)

### Your CV
Already included as `assets/docs/Ayesha_Zafar_Resume.pdf` and linked on the Home page.
To update it, upload a new PDF with the same name.

### LinkedIn link
In `index.html`, find `<a href="#" target="_blank">LinkedIn</a>` and replace `#`
with your LinkedIn URL.

### Writing samples (`writing.html`)
1. Put each PDF in `assets/docs/`.
2. In `writing.html` find the `<li>` blocks and change the title, description,
   and the `href="assets/docs/...pdf"` to match your file name.
3. To add another, copy a whole `<li> ... </li>` block and edit it.

### Code samples (`writing.html`)
- To link a GitHub repo: change the `href` on the "View on GitHub" button.
- To show a file: drop it in `assets/code/` and point the button's `href` at it.

### ArcGIS Story Maps (`maps.html`)
1. Open your published StoryMap, copy its URL
   (looks like `https://storymaps.arcgis.com/stories/abc123...`).
2. In `maps.html`, paste it into the `src="..."` of the matching `<iframe>`.

### Videos (`maps.html`) — two choices
- **YouTube (recommended):** upload the video to YouTube (can be Unlisted),
  copy the video ID from the URL, and put it in
  `src="https://www.youtube.com/embed/VIDEO-ID"`. This keeps your repo small and fast.
- **Self-hosted:** drop an `.mp4` into `assets/videos/` and point the
  `<source src="assets/videos/your-file.mp4">` at it.
  ⚠️ Keep files under ~25 MB — GitHub blocks files over 100 MB and large videos
  make the page slow. YouTube is better for anything long.

---

## Changing colors / fonts
Open `css/style.css`. The block at the very top (`:root { ... }`) controls all
colors in one place. Change a value there and it updates site-wide.
