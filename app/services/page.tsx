"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function ServicesPage() {
  return (
    <div className="pt-40 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-24 leading-[0.9]">
            Structural <br />
            <span className="opacity-40 italic font-normal">Offerings.</span>
          </h1>
        </ScrollReveal>

        <div className="flex flex-col gap-32">
          {[
            {
              title: "Interior Architecture",
              desc: "Full-scale interior transformations. We handle everything from non-load-bearing wall removal to custom lighting systems and material selection.",
              services: ["Space Planning", "Material Sourcing", "Lighting Design", "Custom Millwork"]
            },
            {
              title: "Residential Curation",
              desc: "Tailored interior design for luxury residences. Focus on 'Soft Structuralism'—integrating high-end furniture and tactile textures into precise architectural shells.",
              services: ["Furniture Selection", "Art Advisory", "Textile Consultation", "Object Styling"]
            },
            {
              title: "Strategic Consulting",
              desc: "High-level architectural perspective for developers and homeowners. We provide a structural narrative and aesthetic direction for new builds.",
              services: ["Concept Development", "Aesthetic Audit", "Structural Narrative", "Feasibility Study"]
            }
          ].map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-black/5 dark:border-white/5 pt-16">
                <div className="lg:col-span-5">
                  <h2 className="text-4xl font-display font-bold mb-6">{service.title}</h2>
                  <p className="text-lg opacity-60 leading-relaxed mb-8">{service.desc}</p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-4">
                  {service.services.map((s) => (
                    <div key={s} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-espresso dark:bg-brand-silver" />
                      <span className="text-sm font-medium tracking-tight">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="lg:col-span-3 flex justify-end items-start">
                  <MagneticButton strength={20} className="px-6 py-3 text-[8px]">
                    Learn More
                  </MagneticButton>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Final CTA */}
        <ScrollReveal>
          <div className="mt-40 text-center">
            <h2 className="text-3xl font-display font-bold mb-8">Ready to define your space?</h2>
            <MagneticButton onClick={() => window.location.href = '/contact'}>
              Request a Quote
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
