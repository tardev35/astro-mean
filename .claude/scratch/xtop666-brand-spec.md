# BRAND SPEC — XTOP666 (rebrand round 2026-08-29)

Single source of truth for this rebrand. **Do not re-extract the docx, do not
re-pick variants, do not re-derive the palette.** Everything you need is here.

---

## 1. Brand identity

| key | value |
|---|---|
| Brand name | `XTOP666` (all caps everywhere) |
| Previous brand (must reach 0 hits in `dist/`) | `ASHTON168` |
| Real URL | `https://www.xtop666th.com` |
| Font | `kanit` (rotated from previous brand's `google-sans`) |
| Genre / mood | high-energy neon **speed** — racing orange + molten red on near-black. Not gold, not luxury. |

Set by the orchestrator in `src/lib/brandProfile.ts` (do NOT edit that file):
`BRAND_NAME = "XTOP666"`, `BRAND_FONT = "kanit"`, `BRAND_TEXT = "#f6e5dc"`.

---

## 2. Palette (measured from `src/assets/palette.json` + the artwork)

Logo `vivid` is orange `#fc5b03 / #fc6303 / #fa5302 / #f54c03 / #fd6b02`.
slide1/slide2 `vivid` is deep red `#9b0101 / #940101 / #8c0101`.
banner1 `dominant` is near-black `#020101 / #1b0201 / #240201`.

So: **primary = orange, secondary = red, surface = near-black warm.**

### Use these exact hex values, by ROLE

| role | hex | where it goes |
|---|---|---|
| `PRIMARY` | `#fc5b03` | main accent, active state, borders, glow centre, gradient middle |
| `PRIMARY_LIGHT` | `#ff8a3d` | hover accent, gradient start |
| `PRIMARY_PALE` | `#ffc9a3` | heading highlight, light gradient stop, icon tint |
| `PRIMARY_ULTRA` | `#ffe4d0` | brightest gradient stop, top highlight |
| `PRIMARY_DEEP` | `#a33200` | gradient end, deep border, pressed state |
| `PRIMARY_MID` | `#d94a02` | mid gradient stop, secondary border |
| `SECONDARY` | `#e11212` | second hue — the red half of the pair (accent lines, badges, "hot" chips) |
| `SECONDARY_LIGHT` | `#ff5a4d` | readable red text/border on dark, secondary hover |
| `SECONDARY_PALE` | `#ffb9b0` | pale red text |
| `SECONDARY_DEEP` | `#7a0101` | deep red fill / gradient end |
| `SURFACE` | `#0a0403` | page & card base (near-black warm) |
| `SURFACE_RAISED` | `#1a0603` | raised panel, nav bar, drawer |
| `SURFACE_MID` | `#2e0c04` | active menu item, hover fill, inner panel |
| `SURFACE_BORDER` | `#4a1405` | subtle divider/border |
| `TEXT` | `#f6e5dc` | body copy (= `BRAND_TEXT`) |
| `TEXT_MUTED` | `#c9a394` | secondary/muted copy, inactive menu label |
| `TEXT_BRIGHT` | `#fff0e6` | brightest text on dark, on-accent-hover text |
| `ON_ACCENT` | `#0a0403` | text drawn ON an orange fill (dark-on-orange) |

### rgba glows

| old shape | new |
|---|---|
| any gold/primary glow `rgba(245,197,24,α)` | `rgba(252,91,3,α)` |
| any secondary glow `rgba(226,229,233,α)` | `rgba(225,18,18,α)` |
| any dark shadow `rgba(8,5,2,α)` | `rgba(10,4,3,α)` |

### Old ASHTON168 hexes → new (for files that currently carry them)

`#f5c518`→`#fc5b03` · `#ffd75e`→`#ff8a3d` · `#ffe9a3`→`#ffc9a3` ·
`#fffd94`→`#ffe4d0` · `#fdf6e6`→`#fff0e6` · `#a87908`→`#a33200` ·
`#dbac1b`→`#d94a02` · `#c8941a`→`#c04002` · `#e2e5e9`→`#ff5a4d` ·
`#f0f2f5`→`#ffd0cb` · `#8d949c`→`#c9a394` · `#080502`→`#0a0403` ·
`#2a1c06`→`#2e0c04` · `#160e03`→`#1a0603` · `#231402`→`#280a04` ·
`#020100`→`#030101` · `#f0e6d2`→`#f6e5dc`

**Several files you own carry a DIFFERENT brand's palette (VIREL168 gold,
a cyan/blue "Cyber" brand, a purple/emerald one). Retheme by ROLE from the
table above — do not look for ASHTON168's hexes and stop there. Every brand
hex in a file you own must end up as one of the values in the role table.**

Leave alone: LINE green `#00B900`/`#009900`, real bank brand colours,
green "live"/success dots, the footer `<address>` block (it carries no brand
colour on purpose — paste it verbatim).

**Do not write any previous brand's hex into a code comment** — Tailwind scans
files as raw text and will emit utilities for it.

---

## 3. Variant rotation (already decided — do not re-choose)

| family | outgoing (ASHTON168) | **new (XTOP666)** |
|---|---|---|
| Navbar | `NavbarPremium` | **`NavbarStyle6`** |
| Footer | `FooterPremium` | **`FooterCyber`** |
| Announcement | `AnnouncementPremium` | **`AnnouncementCyber`** |
| LatestWinners | `LatestWinnersCyber` | **`LatestWinners3`** |
| Faq | `Faq4` | **`Faq2`** |
| Sub-page content box | `ContentBoxPremium` | **`ContentBoxCyberCut`** |
| Font | `google-sans` | **`kanit`** |
| index ContentBox mix | plain + Premium + Special | **Neumorphism + CyberCut + FloatingBadge** (see §5) |

`ContentBox.astro` stays as-is for `terms`/`privacy` only (permanent pages).

**Unused variants are inventory for the next brand — never delete one.**

---

## 4. Docx heading checklist (7 headings: H1 ×1 + H2 ×6, flat — NO h3 anywhere)

Source: `src/assets/content.txt`. Each heading gets its own titled block with
the **full paragraph** that follows it, in this exact document order.

1. **(H1)** `XTOP666 สล็อตสปีดท็อป โหลดเกมไว ระบบพร้อมบวก โบนัสรับได้เลย`
   → body = line 4 (ปลดล็อกความสะใจของการปั่นสล็อต…)
2. **(H2)** `XTOP666 สล็อตสปีดท็อป เร่งจังหวะเข้าเกมให้ไวตั้งแต่คลิกแรก`
   → body = line 6 (หัวใจสำคัญของ XTOP666 คือการปรับแต่งระบบ…)
3. **(H2)** `ลิงก์ตรงของ XTOP666 ช่วยตัดขั้นตอนไหนบ้าง ก่อนพาเข้าสู่เกมค่ายดัง`
   → body = line 8 (ด้วยการพัฒนาลิงก์ตรงทางเข้า…)
4. **(H2)** `เกมค่ายดังไม่ได้มาแค่ให้ครบ XTOP666 คัดหลายแนวให้เลือกตามสไตล์`
   → body = line 10 (การขนเกมจากค่ายชั้นนำ…)
5. **(H2)** `ระบบพร้อมบวก วางทุกเมนูให้หยิบใช้คล่องโดยไม่ต้องวนหาให้เสียเวลา`
   → body = line 12 (สัมผัสความสะดวกสบายของการออกแบบอินเทอร์เฟซ…)
6. **(H2)** `โบนัสรับได้เลย เพิ่มอีกหนึ่งจังหวะน่าตามก่อนเลือกเกมโปรดขึ้นสปิน`
   → body = line 14 (เพิ่มความคุ้มค่าให้กับการเริ่มต้นเดิมพัน…)
7. **(H2)** `มือถือก็ไว คอมก็เต็มจอ XTOP666 พร้อมต่อการใช้งานได้บนทุกอุปกรณ์`
   → body = line 16 (อิสระในการเข้าถึงความบันเทิง…)

The docx has **no `SUB-PAGES` section** — sub-page titles/descriptions are
written by hand (150–160 **characters**, not bytes).

### Home page title / description (verbatim from docx, description padded)

```
title       = "XTOP666 | สล็อตสปีดท็อป โหลดเกมไว ระบบพร้อมบวก โบนัสรับได้เลย"   (61 chars)
description = "XTOP666 สล็อตสปีดท็อป โหลดเกมไวผ่านลิงก์ตรงได้ทันใจ เกมค่ายดังให้เลือกเล่น ระบบพร้อมบวก โบนัสรับได้เลย ใช้งานต่อเนื่องได้ทั้งมือถือและคอม ครบจบในเว็บเดียว"
```
(docx `Des` line is 137 chars — below the 150 gate — so ` ครบจบในเว็บเดียว`
is appended to reach 154.)

---

## 5. Image inventory for THIS drop

Fresh (uploaded 2026-08-29): `logo.webp`, `banner1.png`, `bg.png`, `og.png`,
`slide1.png`, `slide2.png`.

**STALE — belong to previous brands, must NOT be imported anywhere:**
`banner.png`, `banner2.png`, `banner3.png`, `banner4.png`,
`slide3.png`, `slide4.png`.
`slide3`/`slide4` are currently imported by `SmoothCarousel.astro` and
`promotion.astro` — **those imports must be removed this round.**

There is no `banner1-mobile.*` — correct, nothing to do.

| file | what it shows | role |
|---|---|---|
| `logo.webp` | orange/white 3-D "X" mark over ghosted `TXP`, wordmark `XTOP` under it | logo |
| `banner1.png` | hero — chrome `TXP` X-logo, huge `XTOP666` in silver+red, Thai lines `สล็อตสปีดท็อป` / `โหลดเกมไว ระบบพร้อมบวก` / `โบนัสรับได้เลย`, a woman in black-and-red latex with an XTOP choker, red casino chips, rocket, playing cards, and a phone showing a `777` JACKPOT reel; red neon on black | hero (MainLayout only) |
| `slide1.png` | red/black promo strip: `เล่นเสีย ก็ได้คืน` `รับเลย 5%` `เดือนละ 2รอบ`, playing cards, dice, red chips, a woman in a red strapless dress | SevenThree #2 (docx §6, bonus) + carousel + /promotion grid + og |
| `slide2.png` | red/black promo strip: `สล็อต คืนยอดเสีย` `10% ทุกค่าย`, ace card, red chips, a woman in a red dress | SevenThree #1 (docx §4, all providers) + carousel + /promotion grid |

`banner2/3/4` are all stale, so **no single-column `ContentBox` inline
illustration this round.**

---

## 6. index.astro section plan (Agent A1)

Docx order is the page order. Non-docx widgets go after §7 except the three
that illustrate a specific section.

| # | docx heading | component | extras after it |
|---|---|---|---|
| 1 | H1 §1 | `ContentBoxNeumorphism` `as="h1"` | — |
| 2 | H2 §2 | `ContentBoxTwoNeumorphism` | — |
| 3 | H2 §3 | `ContentBox3ThreeCyberCut` | — |
| 4 | H2 §4 | `ContentBoxSevenThreeCyberCut` + **slide2** | `<ProviderGrid />` |
| 5 | H2 §5 | `ContentBoxTwoFloatingBadge` | `<GameRankingBoard />` |
| 6 | H2 §6 | `ContentBoxSevenThreeNeumorphism` + **slide1** | `<LatestWinners3 />` |
| 7 | H2 §7 | `ContentBoxFloatingBadge` | — |

Then, in order: `<LoginRtpSection />`, `<ReviewCardSumo2 />`,
`<SmoothCarousel />`, the register/login CTA button row, `<Faq faqs={faqs} />`
(`Faq2`), `<Navfoot />`.

SevenThree count = **2**, exactly the playbook cap.

`<Announcement message={announcementMessage} />` at the top — and the message
string must be **byte-identical to `AnnouncementCyber`'s default `message`**
(which the orchestrator sets to XTOP666 copy), because sub-pages call
`<Announcement />` bare. No leading emoji.

---

## 7. File ownership — NEVER edit a file you do not own

### P1 shared chrome — orchestrator only. **All four fan-out agents: DO NOT TOUCH.**
```
src/lib/brandProfile.ts          src/lib/schema.ts        src/lib/nav.ts
src/lib/winnersFeed.ts           src/lib/liveCounter.ts   src/lib/thaiProvinces.ts
astro.config.mjs                 wrangler.toml            public/site.webmanifest
src/layouts/MainLayout.astro     src/components/Navfoot.astro
src/components/NavbarStyle6.astro          src/components/FooterCyber.astro
src/components/AnnouncementCyber.astro     src/components/ContentBox.astro
src/components/ContentBoxCyberCut.astro
tools/**                         src/styles/**            workspec.md
```

### Agent A1 — index page + its ContentBox variants
```
src/pages/index.astro
src/components/ContentBoxNeumorphism.astro
src/components/ContentBoxTwoNeumorphism.astro
src/components/ContentBox3ThreeCyberCut.astro
src/components/ContentBoxSevenThreeCyberCut.astro
src/components/ContentBoxTwoFloatingBadge.astro
src/components/ContentBoxSevenThreeNeumorphism.astro
src/components/ContentBoxFloatingBadge.astro
```

### Agent A2 — index-only widgets (does NOT edit index.astro)
```
src/components/ProviderGrid.astro       src/components/GameRankingBoard.astro
src/components/LatestWinners3.astro     src/components/LoginRtpSection.astro
src/components/ContentBoxTwo.astro      src/components/ReviewCardSumo2.astro
src/components/SmoothCarousel.astro     src/components/Faq2.astro
```

### Agent B — article sub-pages
```
src/pages/about-us.astro   src/pages/promotion.astro   src/pages/contact-us.astro
```

### Agent C — button/legal/utility pages
```
src/pages/ทดลองเล่น.astro  src/pages/ทางเข้า.astro
src/pages/terms.astro      src/pages/privacy.astro     src/pages/404.astro
src/pages/login.astro      src/pages/register.astro
```

---

## 8. Rules that bite (short form — the full playbook still applies)

- **Do NOT run `npm run build`.** One build, by the orchestrator, at the end.
- **Never delete an unused component variant** — it is inventory.
- **Only docx article content may produce a heading.** Chrome (ticker, feed,
  cards, widget labels, FAQ section title, carousel captions) renders its label
  as `<p>`/`<span>` + `aria-label` on the `<section>`. Never `<h1>`–`<h6>`.
- **No `<h3>` anywhere** — this docx is flat H1+H2.
- **No HTML comments (`<!-- -->`)** in anything that renders. Astro ships them.
  Strip existing ones from every file you retheme. Notes go in frontmatter `//`.
- **No `{/* */}` next to a tag inside a ternary branch** — build error.
- Body copy in a content box: `text-left text-base leading-relaxed`. No
  `mx-auto max-w-*` on page `<p>` elements.
- One element per slot.
- Emoji → own `<span aria-hidden="true">`, sibling of the label, never inside it.
- No `href="#"`, no `onclick=`. Back-to-top is `href="#top"`.
- `alt` describes the picture (see §5 for what each image shows).
- FAQ = `<details>`/`<summary>`, no `<script>`.
- Never hand-write `isActive` — use `isActivePath` from `../lib/nav`.
- Never write JSON-LD by hand — `pageGraph(Astro, {...})` from `../lib/schema`.
  No `Review`/`AggregateRating`/`sameAs`/`address` in it. Never type a domain.
- Never add a `<style>` block that only contains `.font-sans { … }`.
- Do not reintroduce Swiper; `SmoothCarousel` is CSS-only.
- Do not put a `<script define:vars>` on an indexable page.
- Meta descriptions: **150–160 characters** (Thai chars, not bytes).
