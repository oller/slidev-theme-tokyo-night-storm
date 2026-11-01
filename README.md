# slidev-theme-tokyo-night-storm

A [Tokyo Night](https://github.com/enkia/tokyo-night-vscode-theme) inspired theme for [Slidev](https://github.com/slidevjs/slidev). Supports both a **Tokyo Night Storm** dark mode and a **Tokyo Night Day** light mode.

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

```
---
theme: tokyo-night-storm
---
```

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Screenshots

![Slide 1 (dark)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/1.png)
![Slide 1 (light)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/1-light.png)
![Slide 2 (dark)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/2.png)
![Slide 2 (light)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/2-light.png)
![Slide 3 (dark)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/3.png)
![Slide 3 (light)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/3-light.png)
![Slide 4 (dark)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/4.png)
![Slide 4 (light)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/4-light.png)
![Slide 5 (dark)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/5.png)
![Slide 5 (light)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/5-light.png)

## Palette

Dark mode uses [Tokyo Night Storm](https://github.com/enkia/tokyo-night-vscode-theme) (values as in [folke/tokyonight.nvim](https://github.com/folke/tokyonight.nvim)). Light mode uses Tokyo Night Day, with the accent hues darkened slightly so text stays readable on the light background.

| Token | Storm (dark) | Day (light) |
| --- | --- | --- |
| `--tn-bg` | `#24283b` | `#e1e2e7` |
| `--tn-bg-dark` | `#1f2335` | `#d0d5e3` |
| `--tn-bg-highlight` | `#292e42` | `#c4c8da` |
| `--tn-fg` | `#c0caf5` | `#33559f` |
| `--tn-fg-dark` | `#a9b1d6` | `#4a5a99` |
| `--tn-comment` | `#565f89` | `#6b73a0` |
| `--tn-blue` | `#7aa2f7` | `#2759b8` |
| `--tn-cyan` | `#7dcfff` | `#00678a` |
| `--tn-green` | `#9ece6a` | `#4a6a2d` |
| `--tn-magenta` (primary) | `#bb9af7` | `#7f35cc` |
| `--tn-orange` | `#ff9e64` | `#9a4f00` |
| `--tn-purple` | `#9d7cd8` | `#7847bd` |
| `--tn-red` | `#f7768e` | `#c4174a` |
| `--tn-yellow` | `#e0af68` | `#7a5a2e` |
| `--tn-teal` | `#1abc9c` | `#0c705b` |
| `--tn-terminal-black` | `#414868` | `#a1a6c5` |

The tokens are plain CSS variables (defined in [`styles/tokyo-night-storm-theme.css`](styles/tokyo-night-storm-theme.css)) and are wired to Slidev's `--slidev-*` variables for both `html.dark` and `html.light`. Magenta is the primary accent in both modes.

Code blocks use the Shiki `tokyo-night` theme in dark mode and `github-light` in light mode (Shiki has no bundled Tokyo Night Day theme).

## Fonts

Defaults (declared in `package.json` under `slidev.defaults.fonts`, loaded by Slidev from Google Fonts):

- Sans: [Inter](https://rsms.me/inter/), a clean, neutral UI face that lets the neon palette carry the style
- Mono: [Fira Code](https://github.com/tonsky/FiraCode), with programming ligatures for code

Override them in your own headmatter if you prefer, e.g. `fonts: { sans: 'IBM Plex Sans', mono: 'IBM Plex Mono' }`.

## Layouts

This theme uses Slidev's built-in layouts and styles them with the Tokyo Night palette (the same approach as `seriph` and `apple-basic`):

- `cover` / `intro` : centred title slide
- `section` : large title with a neon magenta accent bar
- `fact` : one big number or phrase with a caption
- `statement` : one bold sentence
- `quote` : italic quote with a cyan accent bar and attribution

Other built-in layouts (`two-cols`, `image-right`, `center`, ...) work as normal. See `example.md` for usage.

> **Local images:** Slidev only bundles relative image paths used in markdown or `<img>` tags. For layout frontmatter such as `image:` or `background:`, use a URL or put the file in your project's `public/` folder. `example.md` uses an `<img>` over a theme-coloured overlay for its cover.

![Section (dark)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/7.png)
![Section (light)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/7-light.png)
![Fact (dark)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/8.png)
![Fact (light)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/8-light.png)
![Statement (dark)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/9.png)
![Statement (light)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/9-light.png)
![Quote (dark)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/10.png)
![Quote (light)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/10-light.png)
![Two columns (dark)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/11.png)
![Two columns (light)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/11-light.png)
![Images (dark)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/12.png)
![Images (light)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/12-light.png)

## Components

This theme provides the following components:

- TokyoNightBadge : A button-esque badge component using the Tokyo Night palette. Variants: `default`, `primary`, `success`, `warning`, `danger`.

```html
<TokyoNightBadge variant="primary">New</TokyoNightBadge>
```

![TokyoNightBadge (dark)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/6.png)
![TokyoNightBadge (light)](https://raw.githubusercontent.com/oller/slidev-theme-tokyo-night-storm/main/example-export/6-light.png)

## Credits

- Palette: [Tokyo Night](https://github.com/enkia/tokyo-night-vscode-theme) by enkia and [tokyonight.nvim](https://github.com/folke/tokyonight.nvim) by folke
- Cover photo (`assets/tokyo-night-neon.jpg`): [Marek Okon](https://unsplash.com/photos/9gtODWv-L5I) on [Unsplash](https://unsplash.com/) (Shinjuku neon rain), used under the [Unsplash License](https://unsplash.com/license). The image is used by `example.md` only and is not shipped in the npm package.

## Contributing

- `pnpm install`
- `pnpm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `pnpm run export` to generate the preview PDF
- `pnpm run screenshot` to generate both dark and light preview PNGs (or `pnpm run screenshot:dark` / `pnpm run screenshot:light`). If Playwright's Chromium isn't installed, set `CHROMIUM_PATH` to a system browser, e.g. `CHROMIUM_PATH=/usr/bin/google-chrome pnpm run screenshot`

## Releasing

Releases use [Changesets](https://github.com/changesets/changesets) and GitHub Actions trusted publishing (no local `npm login`).

Workflow: [`.github/workflows/publish.yml`](.github/workflows/publish.yml). On npm, the Trusted Publisher for this package must allow that workflow filename (`publish.yml`).

1. **In your feature PR**, run `pnpm changeset:add`, choose `patch` / `minor` / `major`, write a short summary, and commit the new file under `.changeset/`.
2. **Merge the feature PR** into `main`.
3. The **Publish** workflow opens a **Version Packages** PR (bumps `package.json` + `CHANGELOG.md`).
4. **Merge the Version Packages PR**. The same workflow then publishes to npm via OIDC and creates the release tag when publish succeeds.

If publish does not run after merging Version Packages, check the Publish workflow run on `main` and that npm Trusted Publisher still points at `publish.yml`.
