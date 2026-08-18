# BRAND SPEC — GDK88 (rebrand scratchpad, 2026-08-18)

อ่านไฟล์นี้ให้จบก่อนแก้อะไร **ห้ามไปแกะ docx เองซ้ำ และห้ามเลือก variant เอง** —
orchestrator เลือกไว้แล้วทั้งหมดด้านล่าง

---

## 1. แบรนด์

| อะไร | ค่า |
|---|---|
| ชื่อแบรนด์ | **GDK88** (ตัวพิมพ์ใหญ่ทั้งหมดเสมอ) |
| แบรนด์เดิมที่ต้องกวาดออกให้เกลี้ยง | **MONACO89** / `Monaco89` / `monaco89` |
| โดเมนจริง | `https://www.gdk88-plus.com` |
| ฟอนต์ | `kanit` (หมุนมาจาก `google-sans`) |
| อารมณ์/แนว | นีออนม่วง + ทอง สายฟ้า คาสิโน — ตามโลโก้และแบนเนอร์ |

**ห้าม deploy ห้าม `git push` ห้าม `git commit`** — จบที่ build + verify

---

## 2. พาเลตต์ GDK88

โค้ดเบสนี้ใช้ hex ดิบเป็นหลัก (ไม่ใช่คลาส Tailwind สี) ให้ยึดตารางนี้

### โทเคนหลัก

| บทบาท | hex | ใช้ตรงไหน |
|---|---|---|
| **primary** ม่วงสว่าง | `#a855f7` | สีเน้นหลัก ขอบ เงา เรืองแสง ปุ่มหลัก |
| light lavender | `#d8b4fe` | hover / ตัวหนังสือเน้น |
| pale lilac | `#f3e8ff` | ไฮไลต์สว่างสุด |
| deep purple | `#5b1497` | ความลึกระดับกลาง |
| royal deep | `#3c0a6b` | ขอบ/พื้นลึก |
| **gold** (สีรอง) | `#f0b429` | ตัวอักษรโลโก้ "88" จุดเน้นเล็กๆ badge |
| bright gold | `#ffd85e` | ไฮไลต์ทอง |
| surface raised | `#2a0f45` | การ์ดยกระดับ |
| surface | `#1b0733` | พื้นการ์ด |
| page bg | `#0f0320` | พื้นหลังเว็บ |
| deepest | `#0a0118` | พื้นลึกสุด / ตัวหนังสือบนพื้นทอง |
| **body text** | `#ece0ff` | = `BRAND_TEXT` |

เงา rgba: ม่วง `rgba(168,85,247,α)` · ทอง `rgba(240,180,41,α)`

### กฎการแมป (สำคัญกว่าตารางตัวเลข)

1. **สีเน้นเด่นสุดของไฟล์เดิม → ม่วง `#a855f7`** ไม่ว่าเดิมจะเป็นส้ม ทอง เขียว หรือชมพู
2. **สีเน้นรองของไฟล์เดิม (แดง/ชมพู/ส้มเข้ม) → ทอง `#f0b429`**
3. พื้นเข้มอมน้ำตาล/เขียว/ดำ → ไล่ระดับม่วงเข้ม `#0a0118 → #0f0320 → #1b0733 → #2a0f45 → #3c0a6b`
4. ตัวหนังสือครีม/เขียวอ่อน → `#ece0ff` (เนื้อความ) หรือ `#f3e8ff` (ไฮไลต์)
5. **ห้ามแตะสีที่มีความหมายเชิงระบบ** — LINE `#00B900` / `#009900`, จุด "Live"/success สีเขียว
   (`green-400`, `#22c55e` ที่เป็น status dot), สีแบรนด์ธนาคารจริง, โลโก้ค่ายเกม
6. คลาส Tailwind สีของแบรนด์เก่า (`amber-*`, `orange-*`, `yellow-*`, `red-*`, `rose-*`,
   `emerald-*`, `green-*` ที่ไม่ใช่ status) → `purple-*` / `fuchsia-*` ระดับใกล้เคียง
   (400→`purple-400`, 600→`purple-600`, 950→`purple-950`)

### ตารางแมป hex ที่เจอบ่อย (ตระกูล MONACO89 ส้ม-ทอง-แดง)

```
#ef8f22 → #a855f7      #ffd77a → #d8b4fe      #ffe9b8 → #f3e8ff
#f6e3c0 → #ece0ff      #d1201a → #f0b429      #7e120e → #7a1fd1
#a44516 → #5b1497      #3a2109 → #3c0a6b      #3a1f08 → #3c0a6b
#26150a → #2a0f45      #1a0d03 → #150329      #160d05 → #0f0320
#0b0602 → #0a0118      #c9a06a → #c9a6f0      #9c7648 → #9d6fd0
```

### ตารางแมป hex ตระกูล "ทอง-แดง" (Neumorphism / CyberCut / SevenThree* / LatestWinners3 / ProviderGridPremium / NavbarStyle9)

```
#e8b923 → #a855f7      #ffe98a → #d8b4fe      #ffe974 → #e9c6ff
#ffcc4b → #c084fc      #f3e2b8 → #ece0ff      #f6e6c2 → #f3e8ff
#a5760a → #5b1497      #b8801f → #6d2bb0      #b8862c → #6d2bb0
#c2a469 → #c9a6f0      #c9ab7a → #c9a6f0      #ddc8a4 → #ded4f5
#f0cd6a → #d8b4fe      #e3b64a → #c084fc      #5c3a10 → #3c0a6b
#b4231c → #f0b429      #6d1410 → #7a1fd1      #e01a1a → #ffd85e
#e40613 → #ffd85e      #ff6a13 → #f0b429      #eb9a1d → #f0b429
#ce5a03 → #f0b429      #e09a05 → #f0b429      #fcc30b → #ffd85e
#f2b024 → #f0b429      #ffa34d → #d8b4fe      #ffe9a3 → #f3e8ff
#ffe9a8 → #f3e8ff      #f7e6c4 → #ece0ff      #33230b → #2a0f45
#221708 → #1b0733      #1e1105 → #150329      #0a0704 → #0a0118
#170806 → #150329      #15100a → #1b0733      #1c110a → #1b0733
#0d0705 → #0a0118      #150c07 → #150329      #050301 → #0a0118
#3f2c0e → #3c0a6b      #fcd34d → #ffd85e      #c3a98e → #c9a6f0
#ddc8a4 → #ded4f5      #9dbfa8 → #c9a6f0
```

### ตารางแมป hex ตระกูล "เขียวไซเบอร์" (FooterCyber / AnnouncementCyber / Faq4)

```
#22c55e → #a855f7*     #4ade80 → #c084fc      #15803d → #5b1497
#dcfce7 → #ece0ff      #e2e8e4 → #ece0ff      #eafff1 → #f3e8ff
#f2f7f4 → #f3e8ff      #d6ecdd → #ded4f5      #071a0e → #0f0320
#040d07 → #0a0118      #04150a → #0f0320      #0a2312 → #1b0733
#0f3d22 → #2a0f45      #052e16 → #1b0733      #062011 → #150329
#14532d → #3c0a6b
```
\* ยกเว้นจุดที่เป็น status/live dot สีเขียวจริงๆ — ตรงนั้นคงไว้

### ตารางแมป hex ตระกูล "ชมพู-แมเจนต้า" (Faq4 / SevenThreeFloatingBadge)

```
#ff4d9c → #d8b4fe      #d41c6b → #a855f7      #9e154a → #5b1497
#5a0526 → #3c0a6b      #f7dce8 → #ded4f5      #ffe6f2 → #f3e8ff
#1f0311 → #150329      #12010a → #0a0118      #3c0214 → #3c0a6b
#f0c274 → #d8b4fe      #f7e6c4 → #ece0ff      #ffe0a3 → #f3e8ff
#b8801f → #6d2bb0      #e09a05 → #f0b429      #fcc30b → #ffd85e
```

ตระกูลที่เป็นม่วงอยู่แล้ว (`ContentBoxTwoCyberCut`, `ContentBox3ThreeNeumorphism`,
`ContentBoxSevenThreeFloatingBadge` บางส่วน, `#8b5cf6 #6d28d9 #4c1d95 #bc07e2 #e879f9
#b794ff #ded4f5 #ede9fe #f3e8ff #1b0d2e #1c0343 #2a0a52 #35116b #4c0a6b #930ac5 #7e3ac7
#3c0f52 #4e1c80 #c79bf0 #a99ac9 #05000e #0a0118`) — **ยังต้องจัดให้ตรงพาเลตต์นี้**
อย่าปล่อยไว้เฉยๆ ให้ดันค่าเน้นหลักไปที่ `#a855f7` และเพิ่มทอง `#f0b429` เป็นสีรอง
เพื่อให้เข้ากับโลโก้ (ตัวอักษร GDK ทอง / 88 ม่วง)

---

## 3. variant ที่เลือกแล้ว (ห้ามเปลี่ยน)

| ตระกูล | เดิม (MONACO89) | **ใหม่ (GDK88)** |
|---|---|---|
| Navbar | `NavbarStyle7` | **`NavbarStyle9`** |
| Footer | `FooterPremium` | **`FooterCyber`** |
| Announcement | `Announcement5` | **`AnnouncementCyber`** |
| LatestWinners | `LatestWinnersPremium` | **`LatestWinners3`** |
| ProviderGrid | `ProviderGrid` | **`ProviderGridPremium`** |
| Faq | `Faq3` | **`Faq4`** |
| ฟอนต์ | `google-sans` | **`kanit`** |

### ส่วนผสม ContentBox บนหน้าแรก (เดิม: Premium + Special + SevenThreePremium + 3ThreeFloatingBadge + TwoPremium + SevenThree + plain)

| หัวข้อ docx | component ใหม่ |
|---|---|
| 1 (H1) | `ContentBoxCyberCut` `as="h1"` |
| 2 (H2) | `ContentBoxSevenThreeNeumorphism` `as="h2"` + **slide1** |
| 3 (H2) | `ContentBoxTwoCyberCut` `as="h2"` |
| 4 (H2) | `ContentBoxSevenThreeFloatingBadge` `as="h2"` + **slide3** |
| 5 (H2) | `ContentBox3ThreeNeumorphism` `as="h2"` |
| 6 (H2) | `ContentBoxNeumorphism` `as="h2"` |
| 7 (H2) | `ContentBox` `as="h2"` (ตัวกลางที่ terms/privacy ใช้ร่วม) |

SevenThree ใช้ 2 บล็อกพอดีเพดาน playbook · slide2 กับ slide4 **ปล่อยไม่ใช้บนหน้าแรก**
(ยังขึ้นในกริดของ /promotion ตามปกติ)

หน้าย่อยใช้ `ContentBoxCyberCut` / `ContentBoxPremium` / `ContentBox` ตามที่ระบุในบรีฟของแต่ละ agent
— ทั้งสามตัวนี้อยู่ในชุด shared chrome ที่ orchestrator retheme ให้แล้ว **ห้ามแก้ไฟล์เหล่านั้น**

---

## 4. เนื้อหาจาก docx — checklist หัวข้อ (ต้องครบและเรียงตามนี้)

`Title:` GDK88 | เว็บสล็อตลื่นจัด เกมค่ายฮิตครบ ฝากถอนวอเลทไม่กั้นทุน
`Des:` GDK88 เว็บสล็อตลื่นจัด เกมค่ายฮิตครบ ฝากถอนวอเลทไม่กั้นทุน จัดระบบให้ทุกอย่าง Flow ตั้งแต่เลือกเกมถึงทำรายการ เล่นต่อเนื่องได้แบบไม่ขัดฟีล

1. **H1** — GDK88 เว็บสล็อตลื่นจัด เกมค่ายฮิตครบ ฝากถอนวอเลทไม่กั้นทุน
2. **H2** — GDK88 เว็บสล็อตลื่นจัด เปิดเกมค่ายฮิตครบให้เลือกตามฟีลได้ทุกแนว
3. **H2** — ตั้งแต่เลือกเกมถึงหน้าสปิน ระบบของ GDK88 ทำไมถึงไหลต่อได้แบบไม่ติดขัด?
4. **H2** — ฝากถอนวอเลทไม่กั้นทุน เปิดทางให้จัดการยอดได้ยืดหยุ่นตามสไตล์
5. **H2** — เกมเปลี่ยน ฟีลเปลี่ยน แต่ความลื่นยังอยู่ จุดที่ GDK88 เน้นตลอดการใช้งาน
6. **H2** — ลดขั้นตอนที่ไม่จำเป็น ให้การทำรายการคล่องและไปต่อได้โดยไม่เสียอารมณ์
7. **H2** — ไม่ปล่อยให้จังหวะสะดุด GDK88 จัดทั้งเกมและระบบให้เล่นต่อเนื่องแบบสมูท

docx เป็น H1+H2 ล้วน ไม่มี H3 → **หน้าแรกต้องไม่มี `<h3>` เลย**

ย่อหน้าเต็มของแต่ละหัวข้ออยู่ใน `src/assets/content.txt` บรรทัด 10–23
(หัวข้อ n อยู่บรรทัดเลขคู่/คี่สลับกัน — บรรทัด 10/11 = หัวข้อ 1, 12/13 = 2, 14/15 = 3,
16/17 = 4, 18/19 = 5, 20/21 = 6, 22/23 = 7) **ต้องใช้ย่อหน้าเต็ม ห้ามย่อ ห้ามยุบรวม**

---

## 5. รูป

| ไฟล์ | บทบาท | หมายเหตุ |
|---|---|---|
| `banner1.png` | **hero** | orchestrator เอา `banner4.png` (อาร์ต GDK88 จริง) มาทับแล้ว — MainLayout จัดการเอง |
| `banner2/3.png` | — | อาร์ตค้างของแบรนด์เก่า (4 ส.ค.) **ห้าม import** |
| `banner4.png` | — | ตัวเดียวกับ hero แล้ว ไม่ต้องใช้ซ้ำ |
| `slide1.png` | SevenThree #1 (หัวข้อ 2) | "สะสมพ้อย รับรางวัลก้อนโต" ตัวละครเกมหลายค่าย พื้นน้ำเงิน มีโลโก้ OLYPLAY มุมซ้ายบน |
| `slide2.png` | ไม่ใช้บนหน้าแรก | "แนะนำเพื่อน รับโบนัส 10% จากยอดเสียของเพื่อน" |
| `slide3.png` | SevenThree #2 (หัวข้อ 4) | "คืนยอดเสีย 5% รับได้ทุกวัน" |
| `slide4.png` | ไม่ใช้บนหน้าแรก | "คอมมิชชั่น 1% รับได้ทุกวัน" |
| `bg.png` | wallpaper | ม่วงอยู่แล้ว ตรงแบรนด์ |
| `og.png` | og:image | 1200x630 letterbox ของ slide1 — MainLayout จัดการเอง |

**`alt` ต้องบรรยายภาพจริง** (ข้อความที่พิมพ์อยู่บนแบนเนอร์ + สิ่งที่วาด) ห้ามใส่ `"ภาพที่ 3"`
สไลด์ทุกใบเป็นแบนเนอร์โปรฯ พื้นน้ำเงิน-ส้ม มีโลโก้ `OLYPLAY` มุมซ้ายบน — เขียน alt ตามที่เห็นจริง

---

## 6. กฎที่ทุก agent ต้องถือ

- **ห้ามลบ component variant ที่ไม่ได้ใช้** — เป็นสต๊อกไว้ใช้แบรนด์หน้า ไม่ใช่ dead code
- **ห้ามรัน `npm run build`** — orchestrator บิลด์รอบเดียวตอนจบ
- **ห้ามแตะไฟล์ของ agent อื่น หรือไฟล์ใน shared chrome** (รายชื่อในบรีฟ)
- **ห้ามมี HTML comment `<!-- -->`** ในไฟล์ที่ render จริง — Astro ส่งออกไป dist ตรงๆ
  คอมเมนต์อธิบายให้ไว้ใน frontmatter (`// ...`) เท่านั้น
- **chrome ห้ามกิน heading tag** — ป้ายของ widget/navbar/footer/ticker/การ์ด เป็น `<p>`/`<span>`
  พร้อม `aria-label` บน `<section>` ไม่ใช่ `<h2>`/`<h3>`
- **หนึ่ง `<h1>` ต่อหน้า** เท่านั้น
- emoji ตกแต่งต้องอยู่ใน element ที่มี `aria-hidden="true"` แยกจากข้อความ
- ห้าม `href="#"`, ห้าม `onclick=`, ห้าม `define:vars` บนหน้า indexable
- ห้ามเขียน JSON-LD เอง — เรียก `pageGraph()` จาก `src/lib/schema.ts`
  ห้ามใส่ `Review`/`AggregateRating`/`sameAs`/`address`/`PostalAddress`/`email`
- `description` ที่เขียนเอง = **150–160 ตัวอักษร** (นับ character ไม่ใช่ byte)
- ย่อหน้าเนื้อความในกล่อง: `text-left text-base leading-relaxed` — ห้าม `mx-auto max-w-*`
  บน `<p>` ในหน้า
- แต่ละ slot ส่ง **element เดียว** เท่านั้น
- ห้ามใส่ `<style>` ที่มีแค่ `.font-sans { font-family: var(--font-sans) }`
- `isActive` ใน navbar ต้องใช้ `isActivePath` จาก `../lib/nav`

---

## 7. สถานะหน้าเว็บ

- แบรนด์นี้เป็น **สล็อต ไม่ใช่หวย** → `ตรวจหวย.astro` / `แนวทาง.astro` อยู่ใน
  `src/pages-disabled/` ถูกต้องแล้ว และ navbar/footer ที่เลือกใหม่ไม่มีลิงก์ทั้งสอง (เช็กแล้ว)
- `login.astro` / `register.astro` เป็น **interstitial redirect stub** (noindex, มี
  `<meta http-equiv="refresh">`) **ไม่ใช่** preset button page → `ทางเข้า` ยังอยู่ในเมนู
  และ `CtaRedirect.astro` ไม่ถูก render ที่ไหน (นอกสโคป)
- `about-us.astro` เปิดอยู่ มีเนื้อหาจริงของ MONACO89 → **เขียนใหม่เป็นของ GDK88** ไม่ park
- ไม่มี `บทความ.astro` และไม่มี `TODO(rebrand)` ค้างที่ไหน
