import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Public_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { site } from "@/content/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.metadata.homeTitle,
    template: "%s",
  },
  description: site.metadata.homeDescription,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.metadata.homeTitle,
    description: site.metadata.homeDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: site.metadata.homeTitle,
    description: site.metadata.homeDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#28352D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-chalk font-sans text-olive">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="grain" aria-hidden />
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
