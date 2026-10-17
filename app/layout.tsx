import type { Metadata, Viewport } from "next";
import { Cormorant, Noto_Sans_Thai, Noto_Serif_Thai } from "next/font/google";
import "./globals.css";

const heading = Noto_Serif_Thai({
  variable: "--font-heading",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
});

const paris = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const body = Noto_Sans_Thai({
  variable: "--font-body",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
});

const title = "amiee — เสื้อผ้าสายแฟ ฟีล Paris ใส่ได้ทุกวัน";
const description =
  "เสื้อ เดรส กางเกง กระโปรง สไตล์น้อยแต่มาก ใส่เป็น everyday look ได้ ราคาจับต้องได้ ตัดเย็บเนี้ยบ ทักไลน์ได้เลย";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "amiee",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf7f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${heading.variable} ${paris.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
