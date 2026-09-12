import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FloatingWhatsapp } from "@/components/layout/FloatingWhatsapp";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "iDS Expert | Government Job & Online Form Assistance",
    template: "%s | iDS Expert"
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: "iDS Expert",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: "iDS Expert",
    type: "website",
    images: [{ url: "/logo.png", width: 640, height: 360, alt: "iDS Expert" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "iDS Expert",
    description: siteConfig.description,
    images: ["/logo.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
