"use client";

import { WebGLHero } from "@/components/features/WebGLHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DoubleBezelCard } from "@/components/ui/DoubleBezelCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { projects } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-20">
        <WebGLHero />
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <ScrollReveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium">
              Studio Structural — 2026
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-8">
              Structural <br />
              <span className="italic font-normal opacity-40">Comfort.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-balance opacity-60 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              We design spaces that bridge the gap between architectural precision and the emotional necessity of comfort.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                View Projects
              </MagneticButton>
              <Link href="/contact" className="px-8 py-4 rounded-full border border-black/10 dark:border-white/10 text-[10px] uppercase tracking-widest font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                Book Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <div className="w-[1px] h-12 bg-foreground" />
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </section>

      {/* Featured Projects - Asymmetrical Bento Grid */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
                Selected <br /> Works
              </h2>
              <p className="max-w-sm opacity-60 font-medium leading-relaxed">
                A curation of structural transformations that redefine how we experience private and public environments.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
            {/* Project 1 - Large */}
            <div className="md:col-span-8">
              <ScrollReveal direction="right">
                <Link href={`/portfolio/${projects[0].slug}`}>
                  <DoubleBezelCard className="aspect-[4/3] md:aspect-[16/9]">
                    <Image
                      src={projects[0].afterImage}
                      alt={projects[0].title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                      <p className="text-[10px] uppercase tracking-widest font-bold mb-2">{projects[0].location}</p>
                      <h3 className="text-3xl font-display font-bold">{projects[0].title}</h3>
                    </div>
                  </DoubleBezelCard>
                </Link>
              </ScrollReveal>
            </div>

            {/* Project 2 - Small */}
            <div className="md:col-span-4 flex flex-col justify-center">
              <ScrollReveal delay={0.2} direction="left">
                <Link href={`/portfolio/${projects[1].slug}`}>
                  <DoubleBezelCard className="aspect-[4/5]">
                    <Image
                      src={projects[1].afterImage}
                      alt={projects[1].title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                      <p className="text-[10px] uppercase tracking-widest font-bold mb-2">{projects[1].location}</p>
                      <h3 className="text-3xl font-display font-bold">{projects[1].title}</h3>
                    </div>
                  </DoubleBezelCard>
                </Link>
              </ScrollReveal>
            </div>

            {/* Project 3 - Medium Offset */}
            <div className="md:col-span-5 md:col-start-3">
              <ScrollReveal delay={0.1} direction="up">
                <Link href={`/portfolio/${projects[2].slug}`}>
                  <DoubleBezelCard className="aspect-[1/1]">
                    <Image
                      src={projects[2].afterImage}
                      alt={projects[2].title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                      <p className="text-[10px] uppercase tracking-widest font-bold mb-2">{projects[2].location}</p>
                      <h3 className="text-3xl font-display font-bold">{projects[2].title}</h3>
                    </div>
                  </DoubleBezelCard>
                </Link>
              </ScrollReveal>
            </div>
            
            {/* View More Grid */}
            <div className="md:col-span-3 flex items-center">
              <ScrollReveal delay={0.3} direction="up">
                <Link href="/portfolio" className="group flex flex-col gap-4">
                  <div className="w-20 h-20 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center transition-fluid group-hover:bg-brand-espresso group-hover:text-white dark:group-hover:bg-brand-silver dark:group-hover:text-black">
                    <ArrowUpRight size={32} />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold">Explore Full Gallery</span>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6 bg-brand-silver dark:bg-brand-espresso/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <ScrollReveal direction="right">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-tight">
              Spaces that <br />
              <span className="opacity-40 italic font-normal">breathe</span> with you.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} direction="left">
            <div className="flex flex-col gap-8">
              <p className="text-xl opacity-60 leading-relaxed">
                We believe that architecture is not just about the structure, but about the void within it. Our philosophy focuses on "Soft Structuralism" — where raw materials like concrete and steel meet the tactile softness of curated life.
              </p>
              <Link href="/about" className="text-xs uppercase tracking-[0.3em] font-bold border-b border-black/20 dark:border-white/20 pb-2 w-max hover:border-black dark:hover:border-white transition-colors">
                Our Methodology
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-20 px-6 border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="font-display font-bold text-xl tracking-tighter">STUDIO STRUCTURAL</h2>
            <p className="text-xs opacity-40">© 2026 Studio Structural. All rights reserved.</p>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] uppercase tracking-widest font-bold mb-2 opacity-40">Contact</p>
              <a href="mailto:hello@studiostructural.com" className="text-sm font-medium hover:opacity-60 transition-opacity">hello@studiostructural.com</a>
              <p className="text-sm font-medium">+49 30 123 456 78</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[10px] uppercase tracking-widest font-bold mb-2 opacity-40">Social</p>
              <a href="#" className="text-sm font-medium hover:opacity-60 transition-opacity">Instagram</a>
              <a href="#" className="text-sm font-medium hover:opacity-60 transition-opacity">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
