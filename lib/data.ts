export interface Project {
  slug: string;
  title: string;
  description: string;
  location: string;
  year: string;
  beforeImage: string;
  afterImage: string;
  vision: string;
  process: string;
  stats: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "brutalist-sanctuary",
    title: "Brutalist Sanctuary",
    description: "A conversion of a 1970s warehouse into a soft, concrete-laden minimalist home.",
    location: "Berlin, DE",
    year: "2024",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    vision: "Deconstructing rigidity to introduce a narrative of flow. We utilized raw, industrial materials as a base, then meticulously layered soft textures to create a 'Soft Structuralist' environment.",
    process: "Every line was calculated to maximize natural light refraction. By removing non-load-bearing partitions and replacing them with structural glass and oak, we transformed a dark, segmented space into a monolithic sanctuary.",
    stats: [
      { label: "Area", value: "340 sqm" },
      { label: "Material", value: "Raw Concrete" },
      { label: "Duration", value: "14 Months" },
    ]
  },
  {
    slug: "ethereal-loft",
    title: "Ethereal Loft",
    description: "Maximizing natural light through structural glass and floating oak staircase.",
    location: "London, UK",
    year: "2023",
    beforeImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    vision: "An exploration of verticality and transparency. The goal was to erase the boundary between the internal volumes and the shifting London sky.",
    process: "We suspended a custom-engineered oak staircase using hidden steel cables, creating a centerpiece that feels weightless. Light-diffusing glass panels were used to partition zones without sacrificing the sense of infinity.",
    stats: [
      { label: "Area", value: "180 sqm" },
      { label: "Material", value: "Oak & Glass" },
      { label: "Duration", value: "9 Months" },
    ]
  },
  {
    slug: "monolithic-villa",
    title: "Monolithic Villa",
    description: "A study in volume and mass, blending stone foundations with soft linen interiors.",
    location: "Zurich, CH",
    year: "2024",
    beforeImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    vision: "Creating a dialogue between the heavy stone landscape of the Alps and the delicate requirements of modern domesticity.",
    process: "Native stone was sourced and hand-cut to form the primary axis of the home. This monumental coldness is balanced by deep-pile linen, warm timber, and architectural lighting that mimics the golden hour.",
    stats: [
      { label: "Area", value: "520 sqm" },
      { label: "Material", value: "Local Stone" },
      { label: "Duration", value: "22 Months" },
    ]
  },
];
