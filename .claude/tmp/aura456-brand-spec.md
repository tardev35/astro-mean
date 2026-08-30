# AURA456 — brand spec (rebrand round 2026-08-31)

**Read this file. Do NOT re-extract the docx and do NOT re-choose variants.**
Everything you need about name / domain / palette / variants / docx headings is here.

---

## 1. Identity

| key | value |
|---|---|
| Brand name | `AURA456` |
| Previous brand (must reach 0 hits) | `NEOCLUB88` (also `neoclub88`, `neoclub88plus`, `www.neoclub88.com`) |
| Real URL | `https://www.aura456-th.com` |
| Font | `kanit` (rotated from `google-sans`) |
| Genre / mood | neon **cyber-mystic** casino — the slide artwork literally captions itself `CYBER MYSTIC CASINO`. Hot magenta + electric blue neon glow on near-black indigo. Not gold, not luxury. |

Set already by the orchestrator (do NOT touch these files):
`src/lib/brandProfile.ts`, `astro.config.mjs`, `wrangler.toml`, `public/site.webmanifest`.

---

## 2. Palette — swap table (old hex → new hex)

The outgoing brand themed with **raw hex**, not Tailwind colour-family classes.
So the retheme is a hex substitution. Grep each file you own for the left column.

### Primary accent — gold ➜ **neon magenta**

| old | new | role |
|---|---|---|
| `#ffe89a` | `#ffc9ee` | palest highlight |
| `#f6d977` | `#ff7fd4` | light |
| `#f2cc53` | `#ff2fb0` | **primary accent** |
| `#c39b3c` | `#c81d8e` | mid / gradient tail |
| `#eeca54` | `#ff2fb0` | (alt spelling of primary) |

### Secondary accent — platinum ➜ **electric blue / cyan**

| old | new | role |
|---|---|---|
| `#eef1f5` | `#d8f2ff` | palest |
| `#c6ccd4` | `#7fd0ff` | light |
| `#e6ecf3` | `#3ba9ff` | **secondary accent** |
| `#8d949e` | `#5f7fb8` | muted |

### Structure — brown/deep gold ➜ **violet**

| old | new | role |
|---|---|---|
| `#a8842c` | `#8b3cf7` | borders |
| `#8a6415` | `#4a179e` | deep gradient tail |

### Surfaces — near-black brown ➜ **near-black indigo**

| old | new |
|---|---|
| `#33230b` | `#1c1046` |
| `#241303` | `#120a33` |
| `#140b02` | `#0b0528` |
| `#0a0602` | `#05021a` |
| `#050301` | `#03010f` |

### Text

| old | new | role |
|---|---|---|
| `#fbf4e4` | `#f6ebff` | bright text |
| `#ede0c4` | `#d8d3f0` | **body copy** (= `BRAND_TEXT`) |
| `#a8977a` | `#9b93c4` | muted |

### rgba() glows — substitute the RGB triple, keep the alpha

| old triple | new triple |
|---|---|
| `rgba(242,204,83,α)` | `rgba(255,47,176,α)` |
| `rgba(195,155,60,α)` | `rgba(200,29,142,α)` |
| `rgba(168,132,44,α)` | `rgba(139,60,247,α)` |
| `rgba(230,236,243,α)` | `rgba(59,169,255,α)` |
| `rgba(20,11,2,α)` | `rgba(11,5,40,α)` |
| `rgba(5,3,1,α)` | `rgba(3,1,14,α)` |

### Components carrying a DIFFERENT old brand's hexes

Some newly-rotated-in variants were last themed for an older brand. Map by **role**,
not by the table above:

* `NavbarCyber` (GEN4 blue/red): `#0071d5`/`#01a3f3`→`#ff2fb0`, `#6fd2ff`→`#ff7fd4`,
  `#e8241c`→`#3ba9ff`, `#050b1a`→`#05021a`, `#0b1b3a`→`#1c1046`, `#eaf4ff`→`#f6ebff`,
  `#93b4dd`→`#9b93c4`. *(orchestrator handles this file)*
* `FooterCyber` (XTOP666 orange/red): `#fc5b03`→`#ff2fb0`, `#ff8a3d`→`#ff7fd4`,
  `#a33200`→`#4a179e`, `#e11212`→`#3ba9ff`, `#ff5a4d`→`#7fd0ff`, `#0a0403`→`#05021a`,
  `#1a0603`→`#1c1046`, `#f6e5dc`→`#f6ebff`, `#c9a394`→`#9b93c4`. *(orchestrator)*
* Any other variant you rotate in: grep it for hex, work out which value is the
  primary accent / border / surface / text, and map it onto the **new** roles above.

### Semantic colours to LEAVE ALONE
LINE green `#00B900` / `#009900`, real bank brand colours in `src/assets/banks*`,
green "live"/success dots, `border-white/15` + `bg-black/20` in the footer
`<address>` block (that block is deliberately un-themed — paste it verbatim).

---

## 3. Chosen variants (before → after). DO NOT re-choose.

| family | previous (NEOCLUB88) | **this round (AURA456)** |
|---|---|---|
| Navbar | `NavbarPremium` | **`NavbarCyber`** |
| Footer | `FooterStyle3` | **`FooterCyber`** |
| Announcement | `Announcement5` | **`AnnouncementCyber`** |
| LatestWinners | `LatestWinnersPremium` | **`LatestWinnersCyber`** |
| FAQ | `Faq3` | **`Faq4`** |
| Brand font | `google-sans` | **`kanit`** |
| ContentBox mix | Premium-led (`ContentBoxPremium` ×2, `ContentBoxTwoPremium`, `ContentBoxSevenThreePremium`, `ContentBox3ThreePremium`, `ContentBoxSevenThree`, `ContentBoxTwoFloatingBadge`) | **CyberCut-led** — see section 5 |

Unchanged on purpose (not rotation families, retheme only): `ProviderGrid`,
`GameRankingBoard`, `ReviewCardSumo2`, `LoginRtpSection` (+ `ContentBoxTwo`),
`SmoothCarousel`, `Navfoot`, `ContentBox`.

**Unused variants are inventory for the next brand. NEVER delete one.**

---

## 4. 🚨 Asset reality — only ONE promo slide belongs to this brand

`src/assets` mtimes: the AURA456 drop is `logo.webp`, `banner1.png`,
`banner1-mobile.png`, `slide1.png`, `bg.png`, `og.png`, `content.*` (all 2026-08-31).

**`slide2.png`, `slide3.png`, `slide4.png` are dated 2026-08-30 and are NEOCLUB88
artwork** — gold-on-black posters with the NEOCLUB88 logo and `www.neoclub88.com`
printed on them. `banner.png`, `banner2/3/4.png` are older brands' too.

**Therefore: `slide1.png` is the only promo image that may be rendered anywhere.
Do not import `slide2/3/4`, `banner.png` or `banner2/3/4` in any file.**
(An imported image is an *emitted* image even if nothing renders it.)

`slide1.png` artwork, for `alt` text — a wide neon banner: the AURA456 logo at
top-left over the caption `CYBER MYSTIC CASINO`, the word `RANKING` in large neon
letters, Thai lines `ลำดับขั้น` / `ยิ่งฝาก ยิ่งอัพเลเวล` / `เพื่อรับโบนัสในการเล่น` /
`รีเซ็ตทุก 2 เดือน`, and a row of six glowing diamond-shaped tier badges labelled
`Spark จุดประกาย`, `Pulse พลังชีพจร`, `Nova ออร่าพุ่ง`, `Prism พลังหลากมิติ`,
`Radiant เปล่งประกาย`, `Eclipse ขั้นสูงสุด ผู้ครองเงาออร่า`.

`banner1` / `banner1-mobile` belong to `MainLayout`'s hero `<picture>` alone —
never import them elsewhere, never put them in a ContentBox.

---

## 5. docx heading checklist — h1 ×1 + h2 ×6, flat, no h3

Source: `src/assets/content.txt`. Every heading below must survive **in this order**
on `index.astro`, each with the **full** paragraph that follows it in the docx.

| # | tag | heading | component slot (index.astro) |
|---|---|---|---|
| — | `<title>` | `AURA456 \| สล็อตตัวตึงออร่าพุ่ง ระบบแรง เกมเด็ดพร้อมลั่น โปรดีน่าตาม` | |
| 1 | `h1` | `AURA456 สล็อตตัวตึงออร่าพุ่ง ระบบแรง เกมเด็ดพร้อมลั่น โปรดีน่าตาม` | `ContentBoxCyberCut as="h1"` |
| 2 | `h2` | `AURA456 สล็อตตัวตึงออร่าพุ่ง เปิดฟอร์มระบบแรงให้ทุกจังหวะไปต่อได้คล่อง` | `ContentBoxTwoCyberCut` |
| 3 | `h2` | `เกมเด็ดพร้อมลั่นจากหลายค่าย AURA456 รวมตัวน่าเล่นไว้แน่นแค่ไหน?` | `ContentBox3Three` → then `<ProviderGrid />` |
| 4 | `h2` | `ตัวฮิตขึ้นหน้าไม่ต้องตามหา เปิดล็อบบี้แล้วเจอเกมกระแสได้ง่ายกว่าเดิม` | `ContentBoxSpecial` → then `<GameRankingBoard />` → `<SmoothCarousel />` |
| 5 | `h2` | `ฟีเจอร์หลากหลายของ AURA456 แต่ละเกมมีลูกเล่นอะไรให้ลองบ้าง` | `ContentBoxNeumorphism` |
| 6 | `h2` | `โปรดีน่าตาม AURA456 เติมสิทธิ์เด็ดให้มีอะไรน่าสนใจตลอดวัน` | `ContentBoxSevenThreeCyberCut` + **slide1** → then `<LatestWinnersCyber />` |
| 7 | `h2` | `ออโต้พร้อมทำรายการตลอดวัน ลดขั้นตอนให้ฝากถอนคล่องไม่ขัดจังหวะ` | `ContentBoxFloatingBadge` |

Then the non-docx widgets, all after heading 7: `LoginRtpSection`,
`ReviewCardSumo2`, the register/login button row, `Faq4`, `Navfoot`.

**Exactly one `SevenThree` block this round** (playbook cap is 2; only one usable
slide exists). `slide1` is used once on index and once on `/promotion` — nowhere else.

Body paragraphs (docx lines, use in full, do not summarise or merge):

1. `AURA456 เว็บตรงสล็อตคัดเกรด รันบนเซิร์ฟเวอร์หลัก API แท้ 100% สล็อตแตกง่าย ค่า RTP โปร่งใส ไม่มีการดัดแปลงระบบหลังบ้าน มาพร้อมระบบออโต้ประมวลผลไว 3 วินาที กดฝากปุ๊บเงินเข้าปั๊บ ถอนกำไรเด้งเข้าบัญชีทันใจ ไร้เงื่อนไขจุกจิก ปั่นง่าย ทำกำไรคล่อง ตอบโจทย์สายสปินที่ต้องการผลลัพธ์ชัดเจน`
2. `ระบบแรงไม่ต้องรอโหลดนาน AURA456 วางโครงสร้างสถาปัตยกรรมเว็บให้ตอบสนองฉับไวตั้งแต่คลิกแรก อินเทอร์เฟซสะอาดตา ไร้ป๊อปอัปโฆษณากวนใจ โหลดตัวเกมและกราฟิก 3D ได้ลื่นไหลไม่มีกระตุก แม้จะเป็นช่วงเวลาพีคที่มีผู้เล่นหนาแน่น จังหวะสปินของคุณก็จะยังสมูธ ไม่มีปัญหาเกมค้างหรือเด้งหลุดมาทำลายอารมณ์บวก`
3. `ไม่ต้องกลัวว่าจะไม่มีเกมให้ปั่น AURA456 กวาดเกมสล็อตลิขสิทธิ์แท้จากค่ายยักษ์ใหญ่ทั่วโลกมาไว้ในล็อบบี้เพียบ ทั้ง PG Soft, Pragmatic Play, Joker และอีกมากมาย คัดเน้นๆ เฉพาะเกมที่มีอัตราจ่ายรางวัลเป็นธรรม จ่ายเงินจริงตามระบบอัลกอริทึมโรงงาน เบทเริ่มต้นเบาๆ แค่ 1 บาท ก็พร้อมลุ้นโบนัสก้อนโตได้ทันที`
4. `ไม่ต้องเสียเวลาเลื่อนหาเกมเด็ด AURA456 จัดระเบียบหน้าล็อบบี้ให้ใช้งานง่ายสุดๆ หมวดหมู่ "เกมฮิตกระแสแรง" ขึ้นโชว์เด่นหราทันทีที่เข้าสู่ระบบ ค่ายดังเปิดตัวเกมไหน หรือคนกำลังฮิตปั่นเกมอะไร เราดึงมาเสิร์ฟให้ถึงหน้าแรก พร้อมสลับค่ายเล่นได้ทันทีแบบไม่ต้องโยกเงินในกระเป๋า`
5. `สปินที่นี่ไม่มีคำว่าน่าเบื่อ เพราะเกมบน AURA456 อัดแน่นด้วยกลไกทำเงินยุคใหม่ ทั้งระบบ Cascading คอมโบสัญลักษณ์แตกต่อเนื่อง, Multiplier สุ่มแจกตัวคูณหนักแบบทวีคูณ, สัญลักษณ์ Wild ยืดขยายทับรีล และโหมด Bonus Buy สำหรับสายใจร้อนที่อยากซื้อฟรีสปินพุ่งชนแจ็คพอตใหญ่ได้เลย`
6. `โปรโมชันที่กดรับแล้วถอนได้จริง AURA456 แจกสิทธิประโยชน์ที่ใช้งานได้จริง ไม่ว่าจะเป็นโบนัสต้อนรับสมาชิกใหม่ โปรเพิ่มทุนสำหรับยอดฝากแรกของวัน และระบบคืนยอดเสีย Cash Back ที่ช่วยซัพพอร์ตทุนให้คุณนำกลับมาแก้ตัวได้ใหม่ เงื่อนไขตรงไปตรงมา ถอนได้จริง ไม่ติดเทิร์นโอเวอร์มหาโหด`
7. `หมดปัญหาระบบการเงินล้าหลัง AURA456 ใช้ระบบฝากถอนออโต้ 100% เชื่อมต่อตรงกับธนาคารและแอปพลิเคชันวอลเล็ท ทำรายการเสร็จสิ้นใน 3-5 วินาที ไม่ต้องคอยส่งสลิปยืนยันให้แอดมิน ไม่ต้องรอคิวอนุมัติ ฝากยอดปุ๊บเข้าเล่นได้ทันที ปั่นได้กำไรก็กดถอนเงินเข้ากระเป๋าได้เลยตลอด 24 ชั่วโมง`

Facts available for sub-page copy (do not copy the paragraphs above verbatim onto a
sub-page — they are already used in full on index): เว็บตรง API แท้ 100% ·
เซิร์ฟเวอร์หลัก · RTP โปร่งใส ไม่ดัดแปลงหลังบ้าน · ออโต้ 3–5 วินาที ·
ค่าย PG Soft / Pragmatic Play / Joker · เบทเริ่ม 1 บาท · หมวด "เกมฮิตกระแสแรง" ·
กลไก Cascading / Multiplier / Wild ขยาย / Bonus Buy · โบนัสต้อนรับ · โปรฝากแรกของวัน ·
Cash Back คืนยอดเสีย · ไม่ติดเทิร์นโอเวอร์ · กระเป๋าเดียวสลับค่ายได้ · ดูแล 24 ชม. ·
กราฟิก 3D ลื่นไม่กระตุก · ไร้ป๊อปอัปโฆษณา

---

## 6. Site-wide state (already decided — check, don't re-derive)

* **Non-lottery brand** (slot/casino). `ตรวจหวย.astro` / `แนวทาง.astro` are NOT in
  `src/pages/` and `src/pages-disabled/` is empty — nothing to enable or disable.
  No navbar/footer link to either may exist.
* `login.astro` / `register.astro` are still **noindex interstitials** (`meta refresh`
  + `targetUrl`), NOT cta button pages. So `/ทางเข้า` stays in the menu and there are
  no `/login` `/register` menu entries to order. `CtaRedirect.astro` is **not**
  rendered by anything this round.
* No `TODO(rebrand)` placeholder pages exist. `about-us.astro` has real (NEOCLUB88)
  content and stays on — rebrand it in full.
* Pages in scope: `index`, `promotion`, `about-us`, `contact-us`, `ทางเข้า`,
  `ทดลองเล่น`, `login`, `register`, `terms`, `privacy`, `404`.
* `terms.astro` / `privacy.astro` are brand-neutral via `BRAND_NAME` — verify only.

## 7. Hard rules that still apply to you

1. Never delete an unused component variant — it is inventory.
2. Chrome may not take a heading tag. Only docx/article content produces
   `<h1>/<h2>/<h3>`. Widget titles are `<p>`/`<span>` + `aria-label` on the section.
3. No HTML comments (`<!-- -->`) in anything that renders — Astro ships them.
   Strip them from every component you retheme. Notes go in the frontmatter.
4. Never type a domain and never build a URL with `+`. All JSON-LD goes through
   `pageGraph()`.
5. `alt` must describe the picture. Decorative emoji need `aria-hidden="true"` in
   their own span. No `href="#"`, no `onclick=`.
6. Body copy in a content box: `text-left text-base leading-relaxed`. No
   `mx-auto max-w-4xl` on page paragraphs.
7. Meta `description`: 150–160 **characters** (not bytes — Thai is 3 bytes/char).
8. **Do NOT run `npm run build`.** The orchestrator runs the single build.
