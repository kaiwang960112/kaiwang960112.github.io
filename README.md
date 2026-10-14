# Kai Wang's Homepage

A static personal academic website: plain HTML, CSS, and JavaScript with no build step. It's served directly by GitHub Pages.

## Updating content

Almost everything lives in **`assets/js/data.js`**:

| What | Where in `data.js` |
| --- | --- |
| Add a paper | `publications`: copy an entry. Set `selected: true` to show it under *Selected*. `topics` drive the filter chips. |
| Add a news item | `news`: add to the top. `hot: true` gives it a pink dot. |
| Experience / education | `experience` |
| Students | `students.current` / `students.alumni` |
| Honors, service, friends | `honors`, `service`, `friends` |

Author strings bold "Kai Wang" automatically. Put `*` (equal contribution) or `+` (corresponding author) right after a name, e.g. `"Kai Wang*+"`.

The hero, About section, and Research cards are written directly in `index.html`.

## Images

- Paper figures: `assets/img/papers/` (WebP, about 960 px wide)
- Logos: `assets/img/logos/`
- Profile photo: `assets/img/profile.webp` (plus `profile.jpg` for link previews)

To convert a new figure: `cwebp -q 80 -resize 960 0 figure.png -o assets/img/papers/figure.webp`

## Publishing changes

After editing `assets/css/style.css` or anything in `assets/js/`, bump the `?v=` version on the three `<link>`/`<script>` tags at the top and bottom of `index.html` (any new value works, e.g. today's date). This makes browsers fetch the new files instead of mixing a cached old stylesheet with the new page.

## Preview locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
