
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DoubleBezelCard } from "@/components/ui/DoubleBezelCard";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-40 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-24 leading-[0.9]">
            Architectural <br />
            <span className="opacity-40 italic font-normal">Mindset.</span>
          </h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-8">
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Our Philosophy</h2>
              <p className="text-3xl font-display font-bold leading-tight">
                We believe that architecture is a dialogue between the permanent and the transient.
              </p>
              <p className="text-xl opacity-60 leading-relaxed">
                Studio Structural was founded on the principle of "Soft Structuralism". We move beyond the cold rigidity of traditional modernism to create spaces that are structurally precise yet emotionally resonant.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <DoubleBezelCard className="aspect-square">
              <Image 
                src="https://images.unsplash.com/photo-1518005020451-aba3a5a470f7?q=80&w=1200&auto=format&fit=crop" 
                alt="Architecture Studio" 
                fill 
                className="object-cover"
              />
            </DoubleBezelCard>
          </ScrollReveal>
        </div>

        {/* Methodology Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
          {[
            { step: "01", title: "Deconstruction", desc: "We begin by analyzing the core structural narrative of a space, stripping away the unnecessary to reveal the essential." },
            { step: "02", title: "Curation", desc: "Materiality is our language. We select textures and tones that harmonize with the structural skeleton." },
            { step: "03", title: "Atmosphere", desc: "The final layer is light and volume—ensuring the space doesn't just look balanced, but feels alive." }
          ].map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 0.1}>
              <div className="flex flex-col gap-6">
                <span className="text-4xl font-display font-bold opacity-10">{item.step}</span>
                <h3 className="text-2xl font-display font-bold">{item.title}</h3>
                <p className="opacity-60 leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
