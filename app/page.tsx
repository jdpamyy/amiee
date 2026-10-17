import Image from "next/image";
import { Fragment } from "react";

// ===== ข้อมูลร้าน — แก้ตรงนี้ได้เลย =====
// LINE ID ตัวอย่าง: เปลี่ยนเป็น LINE ID จริงของร้าน (ถ้าเป็น LINE OA ให้มี @ นำหน้า)
const LINE_ID = "@amiee";
const LINE_URL = `https://line.me/R/ti/p/${encodeURIComponent(LINE_ID)}`;

const highlights = [
  {
    fr: "Simple, mais chic",
    title: "น้อย แต่มาก",
    text: "ดีไซน์เรียบแต่มีลูกเล่น ใส่เป็น everyday look ได้ทุกวัน แต่ยังดูมีสไตล์แบบสาวปารีส",
  },
  {
    fr: "Prix doux",
    title: "ราคาจับต้องได้",
    text: "แต่งตัวสวยได้บ่อย ๆ โดยไม่ต้องคิดหนัก มิกซ์แอนด์แมตช์ได้หลายลุคในงบสบายกระเป๋า",
  },
  {
    fr: "Fait avec soin",
    title: "ตัดเย็บเนี้ยบ",
    text: "เลือกผ้าดี ใส่สบาย เก็บงานละเอียดทุกตะเข็บ ใส่ได้นาน ทรงไม่เสีย",
  },
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
      <div className="bg-accent py-2 text-center text-xs text-blush">
        <span className="font-paris text-sm italic tracking-normal">Bonjour</span> · ทักไลน์สั่งได้ทุกวัน
      </div>

      <header className="sticky top-0 z-20 border-b border-hairline bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="leading-none">
            <span className="block font-paris text-3xl font-medium italic text-foreground">amiee</span>
            <span className="block text-[0.6rem] tracking-label text-muted">PARIS MOOD</span>
          </a>
          <LineButton size="sm" />
        </div>
      </header>

      <main className="flex-1">
        {/* ส่วนหัว */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-5xl items-center gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.15fr_1fr] md:py-20">
            <div>
              <Label>Nouvelle collection</Label>
              <h1 className="mt-4 font-display text-hero font-medium sm:text-5xl sm:leading-snug">
                แต่งตัว{" "}
                <span className="whitespace-nowrap text-rose">น้อย แต่มาก</span>
                <br />
                ในแบบสาวปารีส
              </h1>
              <p className="mt-2 font-paris text-2xl italic text-muted">le style au quotidien</p>
              <p className="mt-5 max-w-md text-lead text-muted">
                เสื้อ เดรส กางเกง กระโปรง ดีไซน์เรียบแต่มีสไตล์ ใส่เป็น everyday look ได้จริง
                ราคาจับต้องได้ ตัดเย็บเนี้ยบทุกตัว
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <LineButton />
                <a
                  href="#contact"
                  className="border-b border-foreground px-1 py-2 text-sm tracking-wide transition hover:border-rose hover:text-rose"
                >
                  ขอดูแบบล่าสุด →
                </a>
              </div>
            </div>
            <HeroArt />
          </div>
        </section>

        {/* จุดเด่น */}
        <section className="border-y border-hairline bg-surface/60">
          <div className="mx-auto grid max-w-5xl px-4 sm:px-6 md:grid-cols-3">
            {highlights.map(({ fr, title, text }, i) => (
              <div
                key={title}
                className="border-hairline py-10 not-last:border-b md:px-8 md:not-last:border-r md:not-last:border-b-0 md:first:pl-0 md:last:pr-0"
              >
                <p className="font-paris text-4xl italic text-rose">0{i + 1}</p>
                <p className="mt-3 font-paris text-lg italic text-muted">{fr}</p>
                <h3 className="font-display text-xl font-medium">{title}</h3>
                <p className="mt-2 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section className="bg-blush/50">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
            <SectionTitle fr="Questions fréquentes" title="สงสัยตรงไหน ถามได้เลย" />
            <div className="mt-8 border-t border-blush-deep">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group border-b border-blush-deep py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium [&::-webkit-details-marker]:hidden">
                    {q}
                    <span className="font-paris text-2xl leading-none text-rose transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section id="contact" className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl rounded-t-[10rem] border border-hairline bg-surface px-6 pb-12 pt-16 text-center sm:rounded-t-[14rem]">
            <EiffelIcon />
            <p className="mt-4 font-paris text-2xl italic text-rose">Écrivez-nous</p>
            <h2 className="mt-1 font-display text-section font-medium">
              เจอตัวที่ชอบแล้ว?
              <br />
              ทักมาคุยกันได้เลย
            </h2>
            <p className="mt-3 text-muted">สั่งซื้อ สอบถามไซซ์ หรือขอดูรูปเพิ่ม ทักไลน์ได้ทุกเรื่อง</p>
            <div className="mt-6 flex justify-center">
              <LineButton />
            </div>
            <p className="mt-4 text-sm text-muted">
              LINE ID: <span className="font-medium text-foreground">{LINE_ID}</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-accent py-10 text-center text-sm text-blush/80">
        <p className="font-paris text-3xl italic text-blush">amiee</p>
        <p className="mt-1">เสื้อผ้าสายแฟ ฟีล Paris ใส่ได้ทุกวัน</p>
        <p className="mt-4 font-paris text-base italic">Merci ♡ · © amiee</p>
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
      className={`inline-flex items-center gap-2 rounded-full bg-accent font-medium text-white transition hover:bg-accent-hover ${sizing}`}
    >
      <LineIcon />
      ทักไลน์เลย
    </a>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs uppercase tracking-label text-muted">
      <span className="h-px w-8 bg-rose" />
      {children}
    </p>
  );
}

function SectionTitle({ fr, title }: { fr: string; title: string }) {
  return (
    <div className="text-center">
      <p className="font-paris text-2xl italic text-rose">{fr}</p>
      <h2 className="mt-1 font-display text-section font-medium">
        {/* ตัดบรรทัดเฉพาะตรงเว้นวรรค กันคำไทยถูกตัดกลางคำ */}
        {title.split(" ").map((part, i) => (
          <Fragment key={part}>
            {i > 0 && " "}
            <span className="inline-block">{part}</span>
          </Fragment>
        ))}
      </h2>
    </div>
  );
}

function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[20rem] md:max-w-sm">
      {/* รูปในกรอบหน้าต่างโค้งแบบอาคารปารีส */}
      <div className="aspect-[4/5] rounded-t-full border border-hairline p-3">
        <div className="relative size-full overflow-hidden rounded-t-full bg-blush">
          <Image
            src="/amiee-look.jpg"
            alt="นางแบบสองคนในชุดเซ็ตเสื้อครอปและกระโปรงพองประดับเลื่อม สีขาวและสีดำ จาก amiee"
            fill
            priority
            sizes="(min-width: 768px) 384px, 320px"
            className="object-cover object-top"
          />
        </div>
      </div>
      <span aria-hidden className="absolute -left-3 top-1/3 bg-surface px-3 py-1 font-paris text-lg italic shadow-sm">
        très chic
      </span>
      <span aria-hidden className="absolute -right-2 bottom-12 bg-accent px-3 py-1 text-sm text-white">
        everyday look
      </span>
    </div>
  );
}

/* ===== ไอคอน ===== */
function EiffelIcon() {
  return (
    <svg viewBox="0 0 40 64" width="34" height="54" className="mx-auto text-rose" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 2v6" />
      <path d="M18 8h4l2 14h-8z" />
      <path d="M14 22h12" />
      <path d="M16 22l-4 18h16l-4-18" />
      <path d="M11 40h18" />
      <path d="M12 40L4 62h8a8 8 0 0 1 16 0h8l-8-22" />
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
