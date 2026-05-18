import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { FluidNavbar } from "@/components/ui/FluidNavbar";
import { PageTransition } from "@/components/ui/PageTransition";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Studio Structural | Premium Interior Design & Architecture",
    template: "%s | Studio Structural",
  },
  description: "Studio Structural designs spaces that bridge the gap between architectural precision and structural comfort. Experience soft brutalism and structural deconstruction.",
  metadataBase: new URL("https://studiostructural.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Studio Structural | Premium Interior Design & Architecture",
    description: "Studio Structural designs spaces that bridge the gap between architectural precision and structural comfort. Experience soft brutalism and structural deconstruction.",
    url: "https://studiostructural.com",
    siteName: "Studio Structural",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Studio Structural Interior Design & Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Structural | Premium Interior Design & Architecture",
    description: "Studio Structural designs spaces that bridge the gap between architectural precision and structural comfort. Experience soft brutalism and structural deconstruction.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased overflow-x-hidden selection:bg-brand-concrete selection:text-brand-espresso">
        <SchemaMarkup />
        <SmoothScroll>
          <div className="noise-overlay" />
          <FluidNavbar />
          <main className="relative min-h-screen">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
