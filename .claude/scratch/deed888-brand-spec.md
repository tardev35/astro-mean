# DEED888 — brand spec (rebrand run 2026-09-04)

Single source of truth for this rebrand. **Do not re-extract the docx and do not
re-choose variants.** Everything you need is here.

---

## 1. Brand identity

| field | value |
|---|---|
| Brand name (exact casing everywhere) | `DEED888` |
| Real domain | `https://www.deed888plus.com` |
| Previous brand (to purge) | `AWIN8` (also watch for `awin8`, `A-WIN8`) |
| Font | `google-sans` (rotated off Kanit) |
| Mood | fire-horse / gold-luxury: flaming stallion, molten-gold wordmark, casino chips, roulette, on a near-black scorched-brown ground |

Set already by the orchestrator in `src/lib/brandProfile.ts`
(`BRAND_NAME` / `BRAND_FONT` / `BRAND_TEXT`), `astro.config.mjs` (`site:`),
`wrangler.toml` (`name`), `public/site.webmanifest`. **Do not touch those files.**

---

## 2. Palette — old → new (this is the whole retheme)

Every hex below appears literally in the old files. Swap by exact string.

| role | OLD (AWIN8) | NEW (DEED888) |
|---|---|---|
| page background, deepest | `#02081c` | `#150401` |
| panel / raised surface | `#08172f` | `#2a0a02` |
| **primary accent (flame orange)** | `#1f6fea` | `#e95b0b` |
| primary deep (borders, shade) | `#0d3f9e` | `#93300a` |
| primary light (hover, links) | `#7fb2ff` | `#ff9d4d` |
| gold accent | `#fca311` | `#f4940c` |
| gold light (gradient top) | `#ffd27a` | `#ffcf6b` |
| gold deep (gradient bottom) | `#b06a02` | `#a35c02` |
| body copy | `#d8e6fb` | `#fbe3d0` |
| bright/heading text | `#e8f1ff` | `#fff4e8` |

**rgba() glows — swap the triplet, keep the alpha:**

| old | new |
|---|---|
| `rgba(31,111,234,` | `rgba(233,91,11,` |
| `rgba(13,63,158,` | `rgba(147,48,10,` |
| `rgba(127,178,255,` | `rgba(255,157,77,` |
| `rgba(252,163,17,` | `rgba(244,148,12,` |
| `rgba(2,8,28,` | `rgba(21,4,1,` |

**Tailwind class families:** any `blue-*` / `sky-*` / `indigo-*` / `cyan-*`
→ the same shade number in `orange-*`. Any `amber-*` / `yellow-*` used as the
gold accent **stays** (it already reads correct on this brand). Deep reds
(`red-800`..`red-950`) are on-brand here and may stay where they read as ember.

**Never change:** LINE green `#00B900`, success/live green, real bank brand
colours in `src/assets/banks/*` markup.

Other old-brand hexes you may meet in inventory files being newly wired in
(these variants last shipped on **OKHENG18**, a purple/emerald brand): treat any
purple `#7c3aed`/`#a855f7`/`violet-*`/`purple-*` and emerald `#10b981`/
`emerald-*` as the accent slot and map it to `#e95b0b` / `orange-*` the same way.

---

## 3. Variant rotation — before → after

Every family rotates off the outgoing pick. **Use exactly these.**

| family | AWIN8 (out) | DEED888 (in) | owner |
|---|---|---|---|
| Navbar | `NavbarStyle3` | **`NavbarStyle9`** | orchestrator (P1) |
| Footer | `FooterCyber` | **`FooterPremiumSumo`** | orchestrator (P1) |
| Announcement | `Announcement3` | **`Announcement5`** | orchestrator retheme (P1); each page swaps its own import |
| LatestWinners | `LatestWinners4` | **`LatestWinnersPremium`** | Agent A |
| ProviderGrid | `ProviderGrid` | **`ProviderGridPremium`** | Agent A |
| ReviewCard | `ReviewCardSumo` | **`ReviewCardSumo2`** | Agent A |
| FAQ | `Faq3` | **`Faq4`** | Agent A |
| ContentBox mix | FloatingBadge + CyberCut + Neumorphism led | **Premium-led + Special + plain** | Agent A |
| Font | `kanit` | **`google-sans`** | orchestrator (P1) |

### ContentBox mix for `index.astro` (Agent A)

Previous brand led with `FloatingBadge`/`CyberCut`/`Neumorphism`. This brand is a
**Premium + Special** page — visibly different shape, and the gold-bevel Premium
look matches the molten-gold wordmark.

| docx § | component |
|---|---|
| 1 (H1) | `ContentBoxPremium` `as="h1"` |
| 2 (H2) | `ContentBox3ThreePremium` `as="h2"` + `ProviderGridPremium` after it |
| 3 (H2) | `ContentBoxTwoPremium` `as="h2"` |
| 4 (H2) | `ContentBoxSevenThreePremium` `as="h2"` + **slide1** |
| 5 (H2) | `ContentBoxSpecial` `as="h2"` + `FeatureHighlights` (the 3 × h3) |
| 6 (H2) | `ContentBoxTwo` (plain) `as="h2"` + `SmoothCarousel` + `GameRankingBoard` after it |
| 7 (H2) | `ContentBoxSevenThree` (plain) `as="h2"` + **slide4** + `LatestWinnersPremium` after it |

That is **2 SevenThree blocks exactly** (the playbook cap) using **slide1 and
slide4**. `slide2` / `slide3` stay unused on the landing page — `/promotion`
uses all four. `banner2/3/4` are dated Aug 4 / Aug 18, i.e. **stale inventory
from earlier brands — do not import them anywhere.**

`ContentBoxTwo.astro` is also rendered by `LoginRtpSection` → it is Agent A's,
retheme it once and both uses follow.

---

## 4. docx heading checklist — all 7 must survive, in this order

Source: `src/assets/content.txt`. **Brand name substituted `AWIN8` → `DEED888`;
every other word is verbatim from the brief.** Body paragraph after each heading
must ship in full — no summarising, no merging.

1. **H1** — `DEED888 สล็อตเกมแท้ตัวท็อป จัดโปรฮิตมาเป็นชุด ฟีเจอร์ใหม่น่าลอง`
2. **H2** — `DEED888 สล็อตเกมแท้ตัวท็อป คัดของเด่นจากค่ายดังมาไว้แบบไม่หลุดกระแส`
3. **H2** — `เกมกระแสมีครบ ตัวใหม่ก็พร้อมมา DEED888 เติมทางเลือกให้สายสล็อตได้ตามต่อ`
4. **H2** — `จัดโปรฮิตมาเป็นชุด DEED888 รวมสิทธิ์น่าสนใจให้เลือกตามจังหวะที่ต้องการ`
5. **H2** — `ฟีเจอร์ใหม่น่าลองมีอะไรเด็ด เจาะลูกเล่นที่ช่วยเปลี่ยนฟีลแต่ละเกม`
6. **H2** — `ล็อบบี้อัปเดตต่อเนื่อง ตัวไหนมาใหม่ก็มีพื้นที่ให้เจอก่อนเลือกขึ้นสปิน`
7. **H2** — `พร้อมฝากถอนออโต้ทันใจ DEED888 ลดขั้นตอนทำรายการให้คล่องตั้งแต่ฝากถึงถอน`

Expected homepage inventory: **h1 × 1, h2 × 6, h3 × 3** (the h3s are
`FeatureHighlights` under § 5 — the one sanctioned exception).

Home `title` / `description` (docx Title/Des lines, brand swapped; description
padded to 156 chars to clear the 150–160 gate):

- title: `DEED888 | สล็อตเกมแท้ตัวท็อป จัดโปรฮิตมาเป็นชุด ฟีเจอร์ใหม่น่าลอง`
- description: `DEED888 สล็อตเกมแท้ตัวท็อป รวมทั้งเกมกระแสและตัวใหม่จากค่ายดัง จัดโปรฮิตมาเป็นชุด ฟีเจอร์ใหม่น่าลอง ล็อบบี้อัปเดตต่อเนื่อง พร้อมฝากถอนออโต้ทันใจ ไม่ติดล็อคยูส`

> ⚠️ **Known input gap, already decided — do not re-litigate.** The artwork is
> dated 2026-09-04 but `content.txt` is dated 2026-09-03 and is the **AWIN8**
> brief; the operator uploaded new images without a new docx. The banner art
> positions DEED888 as a live-casino brand ("คาสิโนรวมดีลเด็ด โต๊ะสดค่ายดังน่าโดน")
> while the brief is slot copy. **Decision: ship the brief's structure and prose
> verbatim with the brand name swapped.** Do not rewrite slot copy into casino
> copy — the playbook requires every docx heading and its full paragraph to
> survive. Flagged to the operator in the closing summary.

---

## 5. Slide / banner artwork — what each picture actually shows

Write `alt` from these, never a counter.

- **`banner1.png` / `banner1-mobile.png`** (hero, `MainLayout` owns it — nobody
  else imports it): flaming red-orange stallion rearing on the left, molten-gold
  `DEED888.COM` wordmark, a woman in a red-and-gold outfit holding three aces on
  the right, roulette wheel, dice, casino chips and gold coins. Thai lines:
  `คาสิโนรวมดีลเด็ด` / `โต๊ะสดค่ายดังน่าโดน` / `โปรเด็ดไม่ตกเทรน` and a
  `สมัครสมาชิก` button.
- **`slide1.png`** — gold rounded panel: `สมาชิกใหม่ รับโบนัส 30%`,
  `สูงสุด 1,000 บาท`, `เล่นได้เฉพาะสล็อต`. Leprechaun with a pot of gold top-left,
  a golden Ganesha figure top-right, a donkey character in a red jacket giving a
  thumbs-up bottom-right, gold ingots and coins.
- **`slide2.png`** — gold panel: `ฝากแรกของวัน รับโบนัสสูงสุด 20%`. Leprechaun
  top-left, a smiling man in a dark jacket holding a spray can, a green cartoon
  crocodile bottom-right, gold ingots and coins.
- **`slide3.png`** — gold panel: `ลูกค้าไม้ใหญ่ รับโบนัส 10%`. Leprechaun
  top-left, a cheering man in a yellow PG jersey, a woman reclining in a large
  purple cocktail glass, gold ingots and coins.
- **`slide4.png`** — gold panel: `เปิดกล่องสุ่ม ลุ้นรับเครดิตฟรี สูงสุดถึง 1,000`.
  Leprechaun top-left, a woman in a pink top holding a gold trophy, white gift
  boxes with red ribbons bottom-right, gold ingots and coins.

Landing page uses **slide1 (§ 4, the deposit-bonus section)** and **slide4
(§ 7, the withdraw section)**. `/promotion` uses all four.

---

## 6. Rules that bite — short form (full text in the skill)

- **Never delete an unused component variant.** They are inventory for the next
  brand, not dead code.
- **Only article content may take a heading tag.** Chrome (navbar, footer,
  ticker, winners feed, provider grid, review cards, FAQ block title, login box,
  card labels) renders its label as `<p>`/`<span>` + `aria-label` on the
  container. Never promote one to `<h2>` to "fix" an accessibility warning.
- **No HTML comments (`<!-- … -->`)** in anything that renders — Astro ships them
  verbatim. Frontmatter `//` comments are fine and are stripped.
- **Body copy is `text-left text-base leading-relaxed`.** No `text-sm`/`text-lg`
  for prose, no `mx-auto max-w-*` narrowing on `<p>` in pages.
- **Never write `isActive` by hand in a navbar** — `import { isActivePath } from
  "../lib/nav"`.
- **No `define:vars`, no `href="#"`, no `onclick=`, no bare `<script>`** on an
  indexable page. Decorative emoji go in their own `<span aria-hidden="true">`.
- **JSON-LD only via `pageGraph()`** from `src/lib/schema.ts`. Never type a
  domain, never build a URL with `+`. No `Review`/`AggregateRating`/`sameAs`/
  `address` nodes.
- **Meta descriptions: 150–160 characters** (characters, not bytes — Thai is 3
  bytes/char, so `wc -c` lies; use `wc -m`).
- **Do not add a `<style>` block that only declares `.font-sans`.**
- **Do not run `npm run build`** — the orchestrator runs the single build.
- Lottery pages stay **OFF** (DEED888 is slot/casino). They are already in
  `src/pages-disabled/`; the incoming navbar/footer carry no links to them.
