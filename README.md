# trokky.build

The configurator: pick where a Trokky project runs, where its content lives and how much of the
stack you want, then download it ready to run.

## How it works

It is a static page. The whole thing runs in the browser:

- Options come from [`create-trokky`](https://github.com/Trokky/generator)'s `manifest.json`.
- Availability comes from `optionsFor()`. **This page contains no rules of its own** — when a
  combination is impossible it shows the constraint's own explanation, so a refusal teaches
  instead of just refusing.
- The download is `generate()` plus a zip, in the browser. **Nothing is uploaded**, there is no
  server on the download path, and it keeps working once the page has loaded.

The generator's template files are inlined into modules at build time. They are split so the
magazine's photographs and PDFs — most of the payload — load only if someone actually picks that
content model.

## Develop

```bash
npm install
npm run dev
npm run build && npm run preview   # wrangler dev, as it will be served
```

## Deploy

```bash
npm run build && npm run deploy
```

An assets-only Worker: no script, because there is nothing for a server to do.
