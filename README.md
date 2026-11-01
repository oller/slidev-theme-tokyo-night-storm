# slidev-theme-tokyo-night-storm

A [Tokyo Night](https://github.com/enkia/tokyo-night-vscode-theme) inspired theme for [Slidev](https://github.com/slidevjs/slidev). A dark-only theme using the **Tokyo Night Storm** palette.

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

```
---
theme: tokyo-night-storm
---
```

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Screenshots

![Slide 1](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/1.png)
![Slide 2](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/2.png)
![Slide 3](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/3.png)
![Slide 4](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/4.png)
![Slide 5](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/5.png)

## Palette

The theme is dark only and uses [Tokyo Night Storm](https://github.com/enkia/tokyo-night-vscode-theme) (values as in [folke/tokyonight.nvim](https://github.com/folke/tokyonight.nvim)).

| Token | Storm |
| --- | --- |
| `--tn-bg` | `#24283b` |
| `--tn-bg-dark` | `#1f2335` |
| `--tn-bg-highlight` | `#292e42` |
| `--tn-fg` | `#c0caf5` |
| `--tn-fg-dark` | `#a9b1d6` |
| `--tn-comment` | `#565f89` |
| `--tn-blue` | `#7aa2f7` |
| `--tn-cyan` | `#7dcfff` |
| `--tn-green` | `#9ece6a` |
| `--tn-magenta` (primary) | `#bb9af7` |
| `--tn-orange` | `#ff9e64` |
| `--tn-purple` | `#9d7cd8` |
| `--tn-red` | `#f7768e` |
| `--tn-yellow` | `#e0af68` |
| `--tn-teal` | `#1abc9c` |
| `--tn-terminal-black` | `#414868` |

The tokens are plain CSS variables (defined in [`styles/tokyo-night-storm-theme.css`](styles/tokyo-night-storm-theme.css)) and are wired to Slidev's `--slidev-*` variables. Magenta is the primary accent.

Code blocks use the Shiki `tokyo-night` theme.

## Fonts

Defaults (declared in `package.json` under `slidev.defaults.fonts`, loaded by Slidev from Google Fonts by family name):

- Sans: [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)
- Mono: [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)

Override them in your own headmatter if you prefer, e.g. `fonts: { sans: 'IBM Plex Sans', mono: 'IBM Plex Mono' }`.

## Layouts

This theme uses Slidev's built-in layouts and styles them with the Tokyo Night palette (the same approach as `seriph` and `apple-basic`):

- `cover` / `intro` : centred title slide
- `section` : large title with a neon magenta accent bar
- `fact` : one big number or phrase with a caption
- `statement` : one bold sentence
- `quote` : italic quote with a cyan accent bar and attribution

Other built-in layouts (`two-cols`, `image-right`, `center`, ...) work as normal. See `example.md` for usage.

> **Local images:** Slidev only bundles relative image paths used in markdown or `<img>` tags. For layout frontmatter such as `image:` or `background:`, use a URL or put the file in your project's `public/` folder.

![Section](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/6.png)
![Fact](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/7.png)
![Statement](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/8.png)
![Quote](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/9.png)
![Two columns](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/10.png)
![Images](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/11.png)

## Credits

- Palette: [Tokyo Night](https://github.com/enkia/tokyo-night-vscode-theme) by enkia and [tokyonight.nvim](https://github.com/folke/tokyonight.nvim) by folke
- Demo photo (images slide): [Unsplash](https://images.unsplash.com/photo-1604315523775-74cee3df116c?q=80&w=1920&auto=format&fit=crop) (Tokyo neon street at night; photographer not identified), used under the [Unsplash License](https://unsplash.com/license). `example.md` hotlinks it via the `image-right` layout's `image:` URL; the local copy in `assets/tokyo-night-neon.jpg` is not used by the example and is not shipped in the npm package. The cover slide has no photo.

## Contributing

- `pnpm install`
- `pnpm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `pnpm run export` to generate the preview PDF
- `pnpm run screenshot` to generate the dark preview PNGs. If Playwright's Chromium isn't installed, set `CHROMIUM_PATH` to a system browser, e.g. `CHROMIUM_PATH=/usr/bin/google-chrome pnpm run screenshot`

## Releasing

Releases use [Changesets](https://github.com/changesets/changesets) and GitHub Actions trusted publishing (no local `npm login`).

Workflow: [`.github/workflows/publish.yml`](.github/workflows/publish.yml). On npm, the Trusted Publisher for this package must allow that workflow filename (`publish.yml`).

1. **In your feature PR**, run `pnpm changeset:add`, choose `patch` / `minor` / `major`, write a short summary, and commit the new file under `.changeset/`.
2. **Merge the feature PR** into `main`.
3. The **Publish** workflow opens a **Version Packages** PR (bumps `package.json` + `CHANGELOG.md`).
4. **Merge the Version Packages PR**. The same workflow then publishes to npm via OIDC and creates the release tag when publish succeeds.

If publish does not run after merging Version Packages, check the Publish workflow run on `main` and that npm Trusted Publisher still points at `publish.yml`.
