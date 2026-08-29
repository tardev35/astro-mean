// @ts-check
import fs from "node:fs";
import path from "node:path";

import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// src/assets/bg.json picks how the page background is painted. Two of its three
// modes are meant to cost nothing:
//
//   { "mode": "image" }                      → MainLayout <Image>s bg.png
//   { "mode": "color",    "color": "#rgb" }  → CSS background-color, 0 bytes
//   { "mode": "gradient", "css":   "…"    }  → CSS gradient,         0 bytes
//
// "0 bytes" was not true. The uploader keeps bg.png on disk in every mode (so a
// flip back to image mode always has a source), MainLayout imports it
// unconditionally, and Vite emits an asset for anything the module graph
// references — whether or not the tag that would draw it ever renders. So a
// colour-mode brand shipped the whole wallpaper to Cloudflare for nobody: 90 kB
// on BETKUB77, the first brand to use the mode.
//
// The import cannot be made conditional from inside the layout; a lazy
// import.meta.glob still emits (measured). Dropping the orphan here is the one
// place that both honours bg.json and leaves the file on disk for next time.
// tools/verify-build.mjs runs after this and fails on any _astro image nothing
// references, which is what caught it — and what keeps this honest.
function pruneUnusedBackground() {
  return {
    name: "prune-unused-background",
    hooks: {
      "astro:build:done": ({ dir, logger }) => {
        let mode = "image";
        try {
          mode = JSON.parse(fs.readFileSync(new URL("./src/assets/bg.json", import.meta.url), "utf8")).mode ?? "image";
        } catch {
          return; // No bg.json — image mode is the default, nothing to prune.
        }
        if (mode === "image") return;

        const assets = path.join(fileURLToPathish(dir), "_astro");
        if (!fs.existsSync(assets)) return;
        for (const name of fs.readdirSync(assets)) {
          if (!/^bg\.[A-Za-z0-9_-]+\.(png|webp|jpe?g|avif)$/.test(name)) continue;
          const full = path.join(assets, name);
          const kb = Math.round(fs.statSync(full).size / 1024);
          fs.rmSync(full);
          logger.info(`background is "${mode}" mode — dropped unused ${name} (${kb} kB)`);
        }
      },
    },
  };
}

const fileURLToPathish = (dir) => (typeof dir === "string" ? dir : new URL(dir).pathname.replace(/^\/([A-Za-z]:)/, "$1"));

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    // "auto" (Astro's default) externalises anything over ~4 kB and keeps the
    // genuinely tiny page-level blocks inline.
    //
    // This used to be "always", which is a good setting for a small stylesheet
    // and a bad one for this project's: the sheet is ~227 kB, so 82% of every
    // byte of HTML the site shipped was the same CSS pasted into each page —
    // 1.83 MB across the build, none of it cacheable, and re-downloaded on
    // every navigation. It also pushed the hero <img> ~230 kB down the
    // document, so the preload scanner reached the LCP image late on the one
    // request where it matters.
    //
    // The trade is one render-blocking request on a cold visit. With
    // public/_headers marking /_astro/* immutable for a year, that is paid once
    // per visitor instead of once per page view.
    inlineStylesheets: "auto",
  },

  redirects: {
    "/line": "https://tinyurl.com/suhng",
  },

  site: "https://www.guess168-game.com",
  integrations: [
    pruneUnusedBackground(),
    sitemap({
      // /login, /register and /line are forwarding pages that all ship
      // noindex. Listing a noindex URL in the sitemap is a contradiction —
      // it asks Google to crawl a page it is simultaneously told to drop, and
      // Search Console reports it as "Submitted URL marked noindex". These
      // three are also the only pages carrying the affiliate and LINE short
      // links, so there is nothing here to gain from the crawl either.
      // Match against the pathname, anchored at the front. The old form tested
      // the whole URL unanchored, so a future page whose path merely ENDED in
      // one of these words — /promotion/login, say — would have been dropped
      // from the sitemap silently.
      filter: (page) => !/^\/(login|register|line)\/?$/.test(new URL(page).pathname),
    }),
  ],
});
