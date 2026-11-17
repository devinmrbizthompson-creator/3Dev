# TriDev Manga — Chapter 2 GitHub Upload Bundle

This folder contains everything needed to add **Chapter 2 (Pages 1–8, Full Color)** to `https://devinmrbizthompson-creator.github.io/3Dev/`.

## Included Files (Exact Filenames Preserved)
- `chapter2.html` — Complete standalone Full-Color Chapter 2 Manga Reader (supports Vertical Webtoon Scroll, Single Page Reader, and toggleable Bilingual EN/JP Subtitles + Panel Storyboard).
- `chapter2-data.js` — Structured JavaScript dataset containing all 8 page titles, image paths, panel scripts, SFX, and English/Japanese subtitles.
- `TriDev Manga Chapter 2 - Page 1 (The Rebirth).jpg`
- `TriDev Manga Chapter 2 - Page 2 (The Merged Harmony).jpg`
- `TriDev Manga Chapter 2 - Page 3 (The Shadow Returns).jpg`
- `TriDev Manga Chapter 2 - Page 4 (The Rematch Begins).jpg`
- `TriDev Manga Chapter 2 - Page 5 (The Severing Strike).jpg`
- `TriDev Manga Chapter 2 - Page 6 (Silence After the Storm).jpg`
- `TriDev Manga Chapter 2 - Page 7 (The Domain of Clarity).jpg`
- `TriDev Manga Chapter 2 - Page 8 (The Tactical Edge).jpg`
- `images/ch2/` — Duplicate copies of all 8 images inside `images/ch2/` in case your repository organizes manga pages under an `images/` subfolder.

## How to Add to Your GitHub Repo (`devinmrbizthompson-creator/3Dev`)
1. Extract this ZIP archive.
2. Upload `chapter2.html`, `chapter2-data.js`, and the 8 `.jpg` files into the root of your `3Dev` GitHub repository (or alongside your existing `index.html`).
3. Add a link/button in your main `index.html` pointing to `chapter2.html`:
   ```html
   <a href="chapter2.html" class="ch2-btn">Read Chapter 2: The Rebirth (Full Color) →</a>
   ```
4. Commit and push to `main` — GitHub Pages will publish it at `https://devinmrbizthompson-creator.github.io/3Dev/chapter2.html`.
