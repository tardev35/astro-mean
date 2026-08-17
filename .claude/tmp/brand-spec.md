# BRAND SPEC — MAHAHENG333 (rebrand run 2026-08-17)

Read this file. **Do NOT re-extract the docx and do NOT re-pick variants.**

## 1. Brand identity

- **Brand name:** `MAHAHENG333` (always uppercase in visible copy)
- **Real domain:** `https://mahaheng333-main.com` — already set in `astro.config.mjs` `site:`,
  `wrangler.toml` `name = "mahaheng333"`, and `public/site.webmanifest`. **Do not touch those three files.**
- **Font:** `BRAND_FONT = "kanit"` (rotated from `google-sans`). Already set. Never hardcode a font-family.
- `BRAND_NAME`, `BRAND_TEXT` already set in `src/lib/brandProfile.ts`. **Do not edit that file.**
- **Mood/genre:** gold-luxury Chinese casino — twin gold dragons, red-and-gold money pots (อั่งเปา),
  red lanterns, gold ingots, live baccarat/roulette floor. Everything sits on near-black.
- **Category:** LIVE CASINO (คาสิโนสด / บาคาร่า / รูเล็ต) — **not** a slot brand and **not** a lottery brand.
  Copy must talk about โต๊ะเดิมพันสด, ดีลเลอร์, ห้องเล่น, บาคาร่า, รูเล็ต, เสือมังกร, ไฮโล — not การปั่นสล็อต.

## 2. Palette — replace old hexes with these

New brand colours (use these exact hexes):

| role | hex |
|---|---|
| gold-light (highlight/gradient top) | `#ffe98a` |
| **gold (PRIMARY accent)** | `#e8b923` |
| gold-deep (gradient bottom / bronze) | `#a5760a` |
| red (secondary accent, use sparingly) | `#b4231c` |
| red-deep | `#6d1410` |
| bg-darkest | `#0a0704` |
| bg-dark (page/body surface) | `#15100a` |
| surface (card) | `#221708` |
| surface-2 (elevated / hover) | `#33230b` |
| **text-body** | `#f3e2b8` |
| text-muted | `#c2a469` |
| text-dim (fine print) | `#9a8253` |

Tailwind hue family when a numbered utility class is needed: **`amber`** (with `yellow` for the brightest
highlights). Old brands' families to eradicate: `pink-`/`rose-`/`fuchsia-`/`purple-`/`violet-`.

Glow rgba: `rgba(232,185,35,…)` for gold, `rgba(180,35,28,…)` for red.

### Old hexes you will meet (map them)

GALA89 (pink/rose + gold) — in `Navfoot`, `ContentBox*`, `LoginRtpSection`, most index components:
`#d41c6b` `#ff4d9c` `#9e154a` → gold `#e8b923` / red `#b4231c`;
`#3c0214` `#5a0526` `#2b0210` `#1f0311` `#12010a` → `#221708` / `#15100a` / `#0a0704`;
`#f0c274` → `#e8b923`; `#ffe0a3` → `#ffe98a`; `#b8801f` → `#a5760a`;
`#f7dce8` → `#f3e2b8`; `rgba(212,28,107,…)` → `rgba(232,185,35,…)`.

TANGTEM168 (purple + gold) — in `NavbarStyle9`, `FooterStyle3`:
`#1c0620` `#3c0f52` `#2a0a2e` `#54178f` `#7e3ac7` → `#0a0704` / `#221708` / `#33230b` / `#6d1410`;
`#fcc30b` → `#e8b923`; `#ffe9a8` → `#ffe98a`; `#e09a05` → `#a5760a`;
`#f7e6c4` → `#f3e2b8`; `#c3a98e` → `#c2a469`; `#a08a72` → `#9a8253`;
`rgba(252,195,11,…)` → `rgba(232,185,35,…)`.

THUNDER87 (yellow/black) — in `Announcement3`:
`#fae61c` → `#e8b923`; `#fff89a` → `#ffe98a`; `#2b2606` → `#221708`; `#080703` → `#0a0704`.

Leave alone: LINE green `#00B900`, real bank brand colours, green "live"/success dots.

## 3. Variant picks — LOCKED, do not re-choose

| family | previous (GALA89) | **this brand** |
|---|---|---|
| Navbar | `NavbarStyle7` | **`NavbarStyle9`** |
| Footer | `FooterPremium` | **`FooterStyle3`** |
| Announcement | `Announcement5` | **`Announcement3`** |
| LatestWinners | `LatestWinners2` | **`LatestWinners3`** |
| Faq | `Faq4` | **`Faq2`** |
| ProviderGrid | `ProviderGrid` | **`ProviderGridPremium`** |
| ContentBox mix | Premium + FloatingBadge + Special + 3ThreePremium | **CyberCut + Neumorphism + plain** |
| Font | google-sans | **kanit** |

`ReviewCardSumo2`, `GameRankingBoard`, `LoginRtpSection`, `SmoothCarousel`, `Navfoot`, `BankStrip`
stay as-is structurally (retheme only).

## 4. index.astro section map — LOCKED

docx heading checklist (7 headings: **H1 ×1 + H2 ×6**, flat — no H3 anywhere on the page):

1. **(H1)** `MAHAHENG333 คาสิโนฟลอร์ใหญ่ เปิดโต๊ะมหาเฮง เกมสดหลายโต๊ะ` → `ContentBoxCyberCut as="h1"`
2. **(H2)** `MAHAHENG333 เปิดฟลอร์คาสิโนมหาเฮง ยกเกมสดหลายโต๊ะมาให้เลือกครบ` → `ContentBoxSevenThreeNeumorphism as="h2"` + **slide2**
3. **(H2)** `บาคาร่าและรูเล็ตพร้อมเปิดโต๊ะ เลือกห้องง่ายใน MAHAHENG333 ตามสไตล์ที่ชอบ` → `ContentBox3ThreeCyberCut as="h2"`
4. **(H2)** `อยากเปลี่ยนฟีลก็สลับโต๊ะคล่อง เกมสดพร้อมให้ไปต่อแบบไม่จำเจ` → `ContentBoxTwoNeumorphism as="h2"`
5. **(H2)** `ฝากถอน 5 วิ จัดการรายการคล่องทุกจังหวะกับระบบ MAHAHENG333 ออโต้ไวจริง` → `ContentBoxSevenThreeCyberCut as="h2"` + **slide3**
6. **(H2)** `เปิดประสบการณ์คาสิโนฟลอร์ใหญ่ เกมสดหลายสไตล์พร้อมบรรยากาศเรียลไทม์` → `ContentBoxNeumorphism as="h2"`
7. **(H2)** `พร้อมดูแลทุกเวลา ตั้งแต่เลือกโต๊ะจนถึงเรื่องการใช้งานที่ MAHAHENG333` → `ContentBox as="h2"` (plain — shared, already rethemed)

Plus the page's own FAQ heading → total rendered **h1×1, h2×7, h3×0**.

SevenThree used exactly twice (playbook cap). Slides used: **slide2** (โปรโมชั่นกงล้อรับโชค) and
**slide3** (คืนยอดเสีย 4% ทุกวันอาทิตย์). slide1 and slide4 stay in `SmoothCarousel`/`/promotion` only.
`banner1` is the hero (MainLayout handles it). `banner2/3/4` and `banner.png` are stale art from older
brands (mtime 2026-08-04, older than this drop) — **do not import them anywhere.**

## 5. docx body text — verbatim source

Full brief is `src/assets/content.txt`. Each heading's following paragraph is that section's body —
use the **full** paragraph, never a summary, never merged.

## 6. Sub-page decisions — LOCKED

- **Lottery pages stay OFF.** `ตรวจหวย.astro` / `แนวทาง.astro` remain in `src/pages-disabled/`.
  No `/ตรวจหวย` or `/แนวทาง` links anywhere in the active navbar or footer.
- `login.astro` / `register.astro` are the **noindex auto-redirect interstitials** (they have
  `<meta http-equiv="refresh">` + `define:vars`). They are NOT the button-page preset.
  **Never change `targetUrl` (`https://tinyurl.com/bp4sd4b4`).** Retheme their inline `<style>` +
  `.brand-identity` copy only. They keep `noindex` and keep `define:vars` (exempt).
- `/contact-us` and `/ทางเข้า` are **button pages**: h1 + (contact only: LINE image + address block) +
  buttons. **No `<h2>`, no prose paragraphs.**
- `/promotion` is an **image page**: h1 + ONE ~4-line intro paragraph + slide grid + one CTA button.
  **No `<h2>`.**
- `/about-us`, `/ทดลองเล่น`, `/terms`, `/privacy`, `/404` are normal.
  `terms`/`privacy` must keep rendering through **`ContentBox.astro`** and must name **no colour**
  inside the boxes.
- No `TODO(rebrand)` placeholder pages exist this run.

## 7. Meta rules

- Every `description` you write: **150–160 CHARACTERS** (Thai chars, not bytes).
- Home page title/description (from docx, extended to length):
  - title: `MAHAHENG333 | คาสิโนฟลอร์ใหญ่ เปิดโต๊ะมหาเฮง เกมสดหลายโต๊ะ`
  - description: use the docx `Des` line, trimmed/extended to 150–160 chars.
- No HTML comments (`<!-- -->`) in anything that renders.
- Chrome (navbar/footer/ticker/widgets/cards/badges) must **never** use a heading tag — `<p>`/`<span>`
  + `aria-label` on the section.
- Emoji always in its own `<span aria-hidden="true">`, sibling of the label, never inside the text.
- Never `href="#"`, never `onclick=`.
- `alt` must describe the actual picture.
- JSON-LD only via `pageGraph()`; never type a domain, never `Review`/`AggregateRating`/`sameAs`/`address`.
