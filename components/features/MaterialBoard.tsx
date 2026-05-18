"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DoubleBezelCard } from "@/components/ui/DoubleBezelCard";
import Image from "next/image";
import { Info } from "lucide-react";

interface Material {
  name: string;
  source: string;
  feel: string;
  description: string;
  image: string;
}

const materialData: Record<string, Material[]> = {
  "brutalist-sanctuary": [
    {
      name: "Raw Concrete",
      source: "Brandenburg, DE",
      feel: "Cold, Monumental, Structured",
      description: "Cast-in-place raw concrete slabs showing natural formwork grain. Left untreated to emphasize the structural weight of the space.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Brushed Aluminium",
      source: "Nordrhein-Westfalen, DE",
      feel: "Industrial, Matte, Linear",
      description: "Ultra-fine brushed aluminium profiles used for concealed door frames, window mullions, and clean structural track lights.",
      image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Rough-Hewn Oak",
      source: "Spessart Forest, DE",
      feel: "Warm, Organic, Deep Grain",
      description: "Wide-plank solid oak floorboards finished with custom white-oiled wax to balance the monumental coldness of raw concrete.",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=600&auto=format&fit=crop",
    },
  ],
  "ethereal-loft": [
    {
      name: "Structural Glass",
      source: "Saint-Gobain, FR",
      feel: "Weightless, Celestial, Translucent",
      description: "Low-iron structural glass panels designed to maximize light diffusion throughout the upper level while ensuring perfect spatial volume separation.",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Floating White Oak",
      source: "Sussex Wood, UK",
      feel: "Fine Grain, Weightless, Radiant",
      description: "Meticulously selected straight-grain white oak utilized to carve the floating stair threads, suspended by ultra-thin steel cables.",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Polished Concrete",
      source: "London Custom Mix, UK",
      feel: "Sleek, Matte, Flowing",
      description: "Micro-cement floor screed polished to a medium-matte sheen to establish a seamless fluid boundary running throughout the entire loft.",
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=600&auto=format&fit=crop",
    },
  ],
  "monolithic-villa": [
    {
      name: "Alpine Granite",
      source: "Vals Valley, CH",
      feel: "Monumental, Rough, Eternal",
      description: "Hand-chiselled local Valser quartzite stone blocks structured along the villa's primary axis, reflecting ancient glacial patterns.",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Belgian Raw Linen",
      source: "Flanders, BE",
      feel: "Tactile, Breathable, Soft",
      description: "Heavy raw-weave natural linen curtains and upholstery designed to absorb harsh alpine light and add sensory warmth into the stone shell.",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Smoked Chestnut",
      source: "Ticino Forest, CH",
      feel: "Deep, Rich, Charred",
      description: "Smoked and dark-stained chestnut wood panels used for structural ceiling beams and bespoke millwork, grounding the spatial narrative.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop",
    },
  ],
};

export function MaterialBoard({ slug }: { slug: string }) {
  const materials = materialData[slug] || [];
  const [activeMaterial, setActiveMaterial] = useState<Material | null>(null);

  if (materials.length === 0) return null;

  return (
    <div className="mt-32">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-[1px] bg-black/10 dark:bg-white/10" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-60">Materiality & Swatches</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Interactive Swatch Selection */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <p className="text-xl opacity-60 leading-relaxed mb-4">
            Materials define our spatial narrative. Hover over any architectural swatch to inspect its structural properties, origin, and sensory response.
          </p>

          <div className="flex flex-col gap-4">
            {materials.map((material, idx) => (
              <motion.button
                key={material.name}
                onMouseEnter={() => setActiveMaterial(material)}
                onMouseLeave={() => setActiveMaterial(null)}
                className={`flex items-center justify-between p-6 border rounded-[1.5rem] text-left transition-all ${
                  activeMaterial?.name === material.name
                    ? "bg-black/5 dark:bg-white/5 border-black dark:border-white shadow-soft"
                    : "border-black/5 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold opacity-30">0{idx + 1}</span>
                  <div>
                    <h4 className="font-display font-bold text-lg">{material.name}</h4>
                    <span className="text-[10px] uppercase tracking-wider opacity-40">{material.source}</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center">
                  <Info size={14} className="opacity-60" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tactical Preview Panel */}
        <div className="lg:col-span-6 h-[400px]">
          <div className="bezel-outer w-full h-full">
            <div className="bezel-inner w-full h-full bg-brand-silver dark:bg-zinc-950 flex flex-col relative overflow-hidden">
              <AnimatePresence mode="wait">
                {activeMaterial ? (
                  <motion.div
                    key={activeMaterial.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-0 flex flex-col p-8 justify-between z-10 text-white"
                  >
                    {/* Background Texture Image */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={activeMaterial.image}
                        alt={activeMaterial.name}
                        fill
                        className="object-cover opacity-35 filter grayscale brightness-50"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    </div>

                    <div className="relative z-10">
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-60">Architectural Swatch</span>
                      <h4 className="text-3xl font-display font-bold mt-1">{activeMaterial.name}</h4>
                    </div>

                    <div className="relative z-10 flex flex-col gap-4">
                      <p className="text-sm opacity-80 leading-relaxed font-medium">
                        {activeMaterial.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                        <div>
                          <span className="text-[8px] uppercase tracking-widest opacity-40 font-bold">Source</span>
                          <p className="text-xs font-semibold">{activeMaterial.source}</p>
                        </div>
                        <div>
                          <span className="text-[8px] uppercase tracking-widest opacity-40 font-bold">Sensory</span>
                          <p className="text-xs font-semibold">{activeMaterial.feel}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center mb-6">
                      <span className="text-xl font-bold opacity-30">+</span>
                    </div>
                    <h4 className="font-display font-bold text-lg mb-2">Tactile Swatch Board</h4>
                    <p className="text-xs opacity-40 max-w-xs leading-relaxed uppercase tracking-wider">
                      Hover over a material on the left to reveal its structural narrative and origin coordinates.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
