"use client";

import { ContactForm } from "@/components/features/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="pt-40 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Header & Info */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
                Let's <br />
                <span className="opacity-40 italic font-normal">Collaborate.</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="text-xl opacity-60 max-w-md leading-relaxed mb-16">
                Whether you have a specific vision or need a strategic architectural perspective, we are here to define the structure of your next space.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-8 border-t border-black/5 dark:border-white/5 pt-12">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 mb-2">Inquiries</p>
                  <a href="mailto:hello@studiostructural.com" className="text-2xl font-display font-bold hover:opacity-60 transition-opacity">hello@studiostructural.com</a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 mb-2">Studio</p>
                  <p className="text-lg font-medium opacity-80">Linienstraße 123, 10115 <br /> Berlin, Germany</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.3}>
              <div className="bezel-outer p-8 md:p-12">
                <div className="bezel-inner bg-brand-paper dark:bg-zinc-950 p-8 md:p-16">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
