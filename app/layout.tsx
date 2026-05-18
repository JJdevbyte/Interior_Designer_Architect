import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { FluidNavbar } from "@/components/ui/FluidNavbar";
import { PageTransition } from "@/components/ui/PageTransition";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Studio Structural | Premium Interior Design & Architecture",
  description: "Exquisite interior design and architecture focusing on structural comfort and aesthetic precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased overflow-x-hidden selection:bg-brand-concrete selection:text-brand-espresso">
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
