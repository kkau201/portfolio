import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Be_Vietnam_Pro, Cal_Sans } from "next/font/google";
import { HashScroll } from "@/components/HashScroll";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { siteMeta } from "@/data/portfolioData";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

const calSans = Cal_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  icons: {
    icon: "/img/avatar.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html id="top" lang="en" className={`${beVietnam.variable} ${calSans.variable}`}>
      <body className="min-h-screen bg-oatmeal font-sans text-blueberry">
        <HashScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
