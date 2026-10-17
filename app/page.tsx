// ===== ข้อมูลร้าน — แก้ตรงนี้ได้เลย =====
// LINE ID ตัวอย่าง: เปลี่ยนเป็น LINE ID จริงของร้าน (ถ้าเป็น LINE OA ให้มี @ นำหน้า)
const LINE_ID = "@amiee";
const LINE_URL = `https://line.me/R/ti/p/${encodeURIComponent(LINE_ID)}`;

const highlights = [
  {
    title: "น้อย แต่มาก",
    text: "ดีไซน์เรียบแต่มีลูกเล่น ใส่เป็น everyday look ได้ทุกวัน แต่ยังดูมีสไตล์แบบสายแฟ",
    icon: SparkleIcon,
  },
  {
    title: "ราคาจับต้องได้",
    text: "แต่งตัวสวยได้บ่อย ๆ โดยไม่ต้องคิดหนัก มิกซ์แอนด์แมตช์ได้หลายลุคในงบสบายกระเป๋า",
    icon: TagIcon,
  },
  {
    title: "ตัดเย็บเนี้ยบ",
    text: "เลือกผ้าดี ใส่สบาย เก็บงานละเอียดทุกตะเข็บ ใส่ได้นาน ทรงไม่เสีย",
    icon: NeedleIcon,
  },
];

const products = [
  { name: "เสื้อ", text: "เสื้อเชิ้ต เสื้อยืด เสื้อครอป ใส่ง่าย แมตช์ได้กับทุกตัว", icon: TopIcon },
  { name: "เดรส", text: "เดรสตัวเดียวจบ ใส่ไปทำงาน ไปคาเฟ่ หรือเดตก็ได้", icon: DressIcon },
  { name: "กางเกง", text: "ทรงสวย เก็บสัดส่วน ใส่สบายตลอดวัน", icon: PantsIcon },
  { name: "กระโปรง", text: "สั้น ยาว พลีท ทรงเอ เติมความน่ารักให้ทุกลุค", icon: SkirtIcon },
];

// คำถามที่พบบ่อย — คำตอบเป็นตัวอย่าง แก้ให้ตรงกับนโยบายร้านจริง
const faqs = [
  {
    q: "สั่งซื้อยังไง?",
    a: "ทักไลน์ส่งรูปหรือชื่อสินค้าที่ชอบมาได้เลย แอดมินจะเช็คไซซ์ สี และสต็อกให้ แล้วแจ้งยอดพร้อมวิธีชำระเงิน",
  },
  {
    q: "เลือกไซซ์ไม่ถูก ทำยังไงดี?",
    a: "บอกสัดส่วน (รอบอก เอว สะโพก) หรือส่วนสูงน้ำหนักมาในไลน์ แอดมินช่วยแนะนำไซซ์ที่ใส่แล้วสวยให้",
  },
  {
    q: "ส่งของกี่วันถึง?",
    a: "ปกติจัดส่งภายใน 1–2 วันหลังชำระเงิน และได้รับของภายใน 2–3 วันทำการ พร้อมแจ้งเลขพัสดุให้ติดตามได้",
  },
  {
    q: "เปลี่ยนไซซ์หรือคืนสินค้าได้ไหม?",
    a: "ถ้าสินค้ามีตำหนิจากร้าน หรือส่งผิดไซซ์ เปลี่ยนให้ได้ภายใน 7 วัน ทักไลน์แจ้งแอดมินพร้อมรูปสินค้าได้เลย",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-blush-deep/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="font-display text-2xl font-semibold tracking-tight text-accent">
            amiee
          </a>
          <LineButton size="sm" />
        </div>
      </header>

      <main className="flex-1">
        {/* ส่วนหัว */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-blush sm:size-96" />
          <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-20 size-56 rounded-full bg-blush-deep/50" />
          <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-24">
            <div>
              <p className="mb-4 inline-block rounded-full bg-surface px-4 py-1 text-sm text-rose shadow-sm">
                เสื้อผ้าสายแฟ ใส่ได้ทุกวัน
              </p>
              <h1 className="font-display text-hero font-semibold text-foreground sm:text-5xl sm:leading-tight">
                แต่งตัว{" "}
                <span className="whitespace-nowrap text-accent">น้อย แต่มาก</span>
                <br />
                ในแบบที่เป็นคุณ
              </h1>
              <p className="mt-5 max-w-md text-lead text-muted">
                เสื้อ เดรส กางเกง กระโปรง ดีไซน์เรียบแต่มีสไตล์ ใส่เป็น everyday look ได้จริง
                ราคาจับต้องได้ ตัดเย็บเนี้ยบทุกตัว
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <LineButton />
                <a
                  href="#products"
                  className="rounded-full border border-blush-deep bg-surface px-6 py-3 font-medium text-foreground transition hover:border-rose"
                >
                  ดูสินค้า
                </a>
              </div>
            </div>
            <HeroArt />
          </div>
        </section>

        {/* จุดเด่น */}
        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <SectionTitle eyebrow="ทำไมต้อง amiee" title="ใส่สวย ใส่สบาย ใส่ได้บ่อย" />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-card bg-surface p-6 shadow-sm ring-1 ring-blush-deep/50">
                <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-blush text-accent">
                  <Icon />
                </div>
                <h3 className="font-display text-xl font-medium">{title}</h3>
                <p className="mt-2 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* สินค้า */}
        <section id="products" className="scroll-mt-20 bg-blush/60">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
            <SectionTitle eyebrow="สินค้าของเรา" title="ครบทุกชิ้นสำหรับลุคประจำวัน" />
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {products.map(({ name, text, icon: Icon }) => (
                <div key={name} className="flex flex-col rounded-card bg-surface p-5 text-center shadow-sm">
                  <div className="mx-auto mb-4 grid size-20 place-items-center rounded-full bg-blush text-accent">
                    <Icon />
                  </div>
                  <h3 className="font-display text-xl font-medium">{name}</h3>
                  <p className="mt-1 flex-1 text-sm text-muted">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-card bg-surface p-6 text-center shadow-sm">
              <p className="text-lead">
                อยากดูแบบล่าสุดและราคา? <span className="text-muted">ทักไลน์ แอดมินส่งรูปให้ดูทุกแบบ</span>
              </p>
              <div className="mt-4 flex justify-center">
                <LineButton />
              </div>
            </div>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <SectionTitle eyebrow="คำถามที่พบบ่อย" title="สงสัยตรงไหน ถามได้เลย" />
          <div className="mt-8 space-y-3">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl bg-surface p-5 shadow-sm ring-1 ring-blush-deep/50 open:ring-rose/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-blush text-accent transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section id="contact" className="px-4 pb-16 sm:px-6">
          <div className="mx-auto max-w-3xl rounded-[2rem] bg-blush px-6 py-12 text-center">
            <p className="text-rose">ติดต่อเรา</p>
            <h2 className="mt-2 font-display text-section font-semibold">
              เจอตัวที่ชอบแล้ว?
              <br />
              ทักมาคุยกันได้เลย
            </h2>
            <p className="mt-3 text-muted">
              สั่งซื้อ สอบถามไซซ์ หรือขอดูรูปเพิ่ม ทักไลน์ได้ทุกเรื่อง
            </p>
            <div className="mt-6 flex justify-center">
              <LineButton />
            </div>
            <p className="mt-4 text-sm text-muted">
              LINE ID: <span className="font-medium text-foreground">{LINE_ID}</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-blush-deep/60 py-8 text-center text-sm text-muted">
        <p className="font-display text-lg font-semibold text-accent">amiee</p>
        <p className="mt-1">เสื้อผ้าสายแฟ ใส่ได้ทุกวัน</p>
        <p className="mt-3">© amiee</p>
      </footer>
    </>
  );
}

function LineButton({ size = "md" }: { size?: "sm" | "md" }) {
  const sizing = size === "sm" ? "px-4 py-2 text-sm" : "px-7 py-3 text-base";
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-accent font-medium text-white shadow-md shadow-accent/20 transition hover:bg-accent-hover ${sizing}`}
    >
      <LineIcon />
      ทักไลน์เลย
    </a>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-rose">{eyebrow}</p>
      <h2 className="mt-1 font-display text-section font-semibold">{title}</h2>
    </div>
  );
}

function HeroArt() {
  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-xs md:max-w-sm">
      <div className="absolute inset-0 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] bg-blush-deep" />
      <div className="absolute inset-6 grid place-items-center rounded-[55%_45%_40%_60%/45%_55%_45%_55%] bg-surface shadow-lg">
        <svg viewBox="0 0 120 160" className="h-3/4 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M60 10v10" />
          <path d="M48 12a12 8 0 0 1 24 0" />
          <path d="M44 26c6 6 26 6 32 0l10 14-10 6v14l26 86H18l26-86V46l-10-6z" fill="var(--blush)" />
          <path d="M44 60c10 6 22 6 32 0" />
        </svg>
      </div>
      <span className="absolute -left-2 top-8 rounded-full bg-surface px-3 py-1 text-sm shadow">✿ everyday look</span>
      <span className="absolute -right-1 bottom-10 rounded-full bg-accent px-3 py-1 text-sm text-white shadow">น้อย แต่มาก</span>
    </div>
  );
}

/* ===== ไอคอน ===== */
function svgProps(size = 24) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
}

function SparkleIcon() {
  return (
    <svg {...svgProps()}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M19 17l.7 1.8 1.8.7-1.8.7L19 22l-.7-1.8-1.8-.7 1.8-.7z" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg {...svgProps()}>
      <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z" />
      <circle cx="8" cy="8" r="1.5" />
    </svg>
  );
}

function NeedleIcon() {
  return (
    <svg {...svgProps()}>
      <path d="M20 4L6 18" />
      <path d="M17 4h3v3" />
      <path d="M4 14c2 0 3 1 3 3s1 3 3 3" strokeDasharray="2 2" />
    </svg>
  );
}

function TopIcon() {
  return (
    <svg {...svgProps(40)}>
      <path d="M8 3l4 2 4-2 5 4-3 3-2-1v12H8V9l-2 1-3-3z" />
    </svg>
  );
}

function DressIcon() {
  return (
    <svg {...svgProps(40)}>
      <path d="M9 2v4l-1 4h8l-1-4V2" />
      <path d="M8 10l-4 12h16l-4-12" />
    </svg>
  );
}

function PantsIcon() {
  return (
    <svg {...svgProps(40)}>
      <path d="M6 3h12l2 19h-5l-3-12-3 12H4z" />
      <path d="M6 6h12" />
    </svg>
  );
}

function SkirtIcon() {
  return (
    <svg {...svgProps(40)}>
      <path d="M7 5h10" />
      <path d="M7 5L3 20h18L17 5" />
      <path d="M10 5l-2 15M14 5l2 15M12 5v15" />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.5 1.1-.5 5.9-3.5 8-6C21.4 14.3 22 12.7 22 11c0-4.4-4.5-8-10-8zM8.4 13.4H6.4c-.3 0-.5-.2-.5-.5V9c0-.3.2-.5.5-.5s.5.2.5.5v3.4h1.5c.3 0 .5.2.5.5s-.2.5-.5.5zm2 -.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9c0-.3.2-.5.5-.5s.5.2.5.5zm4.8 0c0 .2-.1.4-.3.5h-.2c-.2 0-.3-.1-.4-.2l-2-2.7v2.4c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9c0-.2.1-.4.3-.5h.2c.2 0 .3.1.4.2l2 2.7V9c0-.3.2-.5.5-.5s.5.2.5.5zm3.2-2.4c.3 0 .5.2.5.5s-.2.5-.5.5h-1.5v1h1.5c.3 0 .5.2.5.5s-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5V9c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5h-1.5v1z" />
    </svg>
  );
}
