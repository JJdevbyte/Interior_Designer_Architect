"use client";

import { projects } from "@/lib/data";
import { BeforeAfterSlider } from "@/components/features/BeforeAfterSlider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-40 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Navigation / Back */}
        <ScrollReveal>
          <Link 
            href="/portfolio" 
            className="group flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold mb-12 opacity-60 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Back to Archive
          </Link>
        </ScrollReveal>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
                {project.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl md:text-2xl opacity-60 max-w-2xl leading-relaxed">
                {project.description}
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8 justify-end">
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-8 border-t border-black/5 dark:border-white/5 pt-8">
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">
                    <MapPin size={10} /> Location
                  </span>
                  <span className="text-sm font-medium">{project.location}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">
                    <Calendar size={10} /> Year
                  </span>
                  <span className="text-sm font-medium">{project.year}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* The Star: Before/After Slider */}
        <ScrollReveal delay={0.3}>
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-black/10 dark:bg-white/10" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-60">Interactive Transformation</span>
            </div>
            <BeforeAfterSlider 
              beforeImage={project.beforeImage} 
              afterImage={project.afterImage} 
            />
            <p className="mt-6 text-xs italic opacity-40 text-center uppercase tracking-widest">
              Drag the handle to reveal the structural transformation
            </p>
          </div>
        </ScrollReveal>

        {/* Narrative / Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-40">
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-display font-bold">The Vision</h2>
              <p className="opacity-60 leading-relaxed text-lg">
                {project.vision}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} direction="left">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-display font-bold">The Process</h2>
              <p className="opacity-60 leading-relaxed text-lg">
                {project.process}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {project.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="bezel-outer p-8 flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">{stat.label}</span>
                <span className="text-2xl font-display font-bold">{stat.value}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Footer */}
        <ScrollReveal>
          <div className="bezel-outer p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">
              Start your own <br /> transformation.
            </h2>
            <div className="flex flex-col items-center gap-6">
              <p className="max-w-md opacity-60 mb-4">
                Whether it's a structural deconstruction or a curated interior narrative, we are ready to guide your project.
              </p>
              <MagneticButton onClick={() => window.location.href = '/contact'}>
                Book a Consultation
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
