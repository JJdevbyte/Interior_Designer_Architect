
import { projects } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DoubleBezelCard } from "@/components/ui/DoubleBezelCard";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="pt-40 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-24">
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8">
              Structural <br />
              <span className="opacity-40 italic font-normal">Archive.</span>
            </h1>
            <p className="max-w-xl opacity-60 text-xl font-medium leading-relaxed">
              A comprehensive collection of our architectural interventions and interior narratives.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <Link href={`/portfolio/${project.slug}`}>
                <DoubleBezelCard className="aspect-[3/4]">
                  <Image
                    src={project.afterImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                    <p className="text-[10px] uppercase tracking-widest font-bold mb-2">{project.location}</p>
                    <h3 className="text-2xl font-display font-bold">{project.title}</h3>
                    <p className="text-xs opacity-80 mt-2 line-clamp-2">{project.description}</p>
                  </div>
                </DoubleBezelCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
