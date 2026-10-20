import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Be_Vietnam_Pro, Cal_Sans } from "next/font/google";
import { HashScroll } from "@/components/HashScroll";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { personJsonLd, seo, SITE_URL } from "@/lib/seo";
import { withBasePath } from "@/lib/paths";
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
  metadataBase: new URL(`${SITE_URL}/`),
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: "Kayla Kautai", url: SITE_URL }],
  creator: "Kayla Kautai",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/",
    siteName: "Kayla Kautai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: seo.ogImage,
        alt: seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  icons: {
    icon: "/img/avatar.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html id="top" lang="en" className={`${beVietnam.variable} ${calSans.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href={withBasePath("/img/avatar.svg")}
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-oatmeal font-sans text-blueberry">
        <HashScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
