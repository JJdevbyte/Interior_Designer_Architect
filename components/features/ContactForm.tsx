"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Inquiry received. We will be in touch shortly.");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Name Field */}
        <div className="relative group">
          <label 
            className={cn(
              "absolute left-0 transition-all duration-300 pointer-events-none text-[10px] uppercase tracking-[0.2em] font-bold opacity-40",
              (activeField === "name" || formData.name) ? "-top-6 opacity-100 italic" : "top-4"
            )}
          >
            Your Name
          </label>
          <input
            type="text"
            required
            className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:outline-none focus:border-black dark:focus:border-white transition-colors font-display text-lg"
            onFocus={() => setActiveField("name")}
            onBlur={() => setActiveField(null)}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        {/* Email Field */}
        <div className="relative group">
          <label 
            className={cn(
              "absolute left-0 transition-all duration-300 pointer-events-none text-[10px] uppercase tracking-[0.2em] font-bold opacity-40",
              (activeField === "email" || formData.email) ? "-top-6 opacity-100 italic" : "top-4"
            )}
          >
            Email Address
          </label>
          <input
            type="email"
            required
            className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:outline-none focus:border-black dark:focus:border-white transition-colors font-display text-lg"
            onFocus={() => setActiveField("email")}
            onBlur={() => setActiveField(null)}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      {/* Project Type Select */}
      <div className="relative group">
        <label className={cn(
              "absolute left-0 transition-all duration-300 pointer-events-none text-[10px] uppercase tracking-[0.2em] font-bold opacity-40",
              (activeField === "type" || formData.projectType) ? "-top-6 opacity-100 italic" : "top-4"
            )}>
          Project Type
        </label>
        <select
          required
          value={formData.projectType}
          className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:outline-none focus:border-black dark:focus:border-white transition-colors font-display text-lg appearance-none cursor-pointer"
          onFocus={() => setActiveField("type")}
          onBlur={() => setActiveField(null)}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
        >
          <option value="" disabled className="dark:bg-zinc-900">Select an option</option>
          <option value="residential" className="dark:bg-zinc-900">Residential Interior</option>
          <option value="commercial" className="dark:bg-zinc-900">Commercial Architectural</option>
          <option value="consultation" className="dark:bg-zinc-900">Strategic Consultation</option>
        </select>
      </div>

      {/* Message Field */}
      <div className="relative group">
        <label className={cn(
              "absolute left-0 transition-all duration-300 pointer-events-none text-[10px] uppercase tracking-[0.2em] font-bold opacity-40",
              (activeField === "message" || formData.message) ? "-top-6 opacity-100 italic" : "top-4"
            )}>
          Tell us about your space
        </label>
        <textarea
          required
          rows={4}
          className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:outline-none focus:border-black dark:focus:border-white transition-colors font-display text-lg resize-none"
          onFocus={() => setActiveField("message")}
          onBlur={() => setActiveField(null)}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative flex items-center justify-between w-full p-6 bg-brand-espresso text-white dark:bg-brand-silver dark:text-black rounded-[1.5rem] font-display font-bold text-xl transition-fluid overflow-hidden"
      >
        <span className="relative z-10 uppercase tracking-tight">Submit Inquiry</span>
        <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center transition-fluid group-hover:rotate-45">
          <ArrowUpRight size={24} />
        </div>
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>
    </form>
  );
}
