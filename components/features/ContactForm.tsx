"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Check, Loader2, Sparkles } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Real-time Validation States
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBlur = (field: string) => {
    setActiveField(null);
    
    // Quick inline validation
    const newErrors = { ...errors };
    if (field === "name" && !formData.name.trim()) {
      newErrors.name = "Name is required to address you.";
    } else if (field === "name") {
      newErrors.name = "";
    }

    if (field === "email") {
      if (!formData.email.trim()) {
        newErrors.email = "An email is required to reply.";
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "Please specify a valid email format.";
      } else {
        newErrors.email = "";
      }
    }

    if (field === "type" && !formData.projectType) {
      newErrors.projectType = "Please select a spatial narrative category.";
    } else if (field === "type") {
      newErrors.projectType = "";
    }

    if (field === "message" && !formData.message.trim()) {
      newErrors.message = "A short description helps us understand your needs.";
    } else if (field === "message") {
      newErrors.message = "";
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submitting
    const newErrors = {
      name: !formData.name.trim() ? "Name is required." : "",
      email: !formData.email.trim() 
        ? "Email is required." 
        : !validateEmail(formData.email) 
        ? "Invalid email format." 
        : "",
      projectType: !formData.projectType ? "Project type is required." : "",
      message: !formData.message.trim() ? "Description is required." : "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== "");
    if (hasErrors) return;

    setIsSubmitting(true);

    // Simulate elite architectural system processing lag
    await new Promise((resolve) => setTimeout(resolve, 1800));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <AnimatePresence mode="wait">
      {!isSuccess ? (
        <motion.form 
          key="contact-form"
          onSubmit={handleSubmit} 
          className="flex flex-col gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Name Field */}
            <div className="relative group">
              <label 
                className={cn(
                  "absolute left-0 transition-all duration-300 pointer-events-none text-[10px] uppercase tracking-[0.2em] font-bold",
                  (activeField === "name" || formData.name) 
                    ? "-top-6 opacity-100 italic text-black dark:text-white" 
                    : "top-4 opacity-40 text-black dark:text-white"
                )}
              >
                Your Name
              </label>
              <input
                type="text"
                required
                className={cn(
                  "w-full bg-transparent border-b py-4 focus:outline-none transition-colors font-display text-lg",
                  errors.name 
                    ? "border-red-500/50 focus:border-red-500" 
                    : "border-black/10 dark:border-white/10 focus:border-black dark:focus:border-white"
                )}
                onFocus={() => setActiveField("name")}
                onBlur={() => handleBlur("name")}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.span 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 -bottom-5 text-[9px] font-bold text-red-500 uppercase tracking-widest"
                  >
                    {errors.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Email Field */}
            <div className="relative group">
              <label 
                className={cn(
                  "absolute left-0 transition-all duration-300 pointer-events-none text-[10px] uppercase tracking-[0.2em] font-bold",
                  (activeField === "email" || formData.email) 
                    ? "-top-6 opacity-100 italic text-black dark:text-white" 
                    : "top-4 opacity-40 text-black dark:text-white"
                )}
              >
                Email Address
              </label>
              <input
                type="email"
                required
                className={cn(
                  "w-full bg-transparent border-b py-4 focus:outline-none transition-colors font-display text-lg",
                  errors.email 
                    ? "border-red-500/50 focus:border-red-500" 
                    : "border-black/10 dark:border-white/10 focus:border-black dark:focus:border-white"
                )}
                onFocus={() => setActiveField("email")}
                onBlur={() => handleBlur("email")}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.span 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 -bottom-5 text-[9px] font-bold text-red-500 uppercase tracking-widest"
                  >
                    {errors.email}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Project Type Select */}
          <div className="relative group">
            <label className={cn(
              "absolute left-0 transition-all duration-300 pointer-events-none text-[10px] uppercase tracking-[0.2em] font-bold",
              (activeField === "type" || formData.projectType) 
                ? "-top-6 opacity-100 italic text-black dark:text-white" 
                : "top-4 opacity-40 text-black dark:text-white"
            )}>
              Project Type
            </label>
            <select
              required
              value={formData.projectType}
              className={cn(
                "w-full bg-transparent border-b py-4 focus:outline-none transition-colors font-display text-lg appearance-none cursor-pointer",
                errors.projectType 
                  ? "border-red-500/50 focus:border-red-500" 
                  : "border-black/10 dark:border-white/10 focus:border-black dark:focus:border-white"
              )}
              onFocus={() => setActiveField("type")}
              onBlur={() => handleBlur("type")}
              onChange={(e) => {
                setFormData({ ...formData, projectType: e.target.value });
                if (errors.projectType) setErrors({ ...errors, projectType: "" });
              }}
            >
              <option value="" disabled className="dark:bg-zinc-900">Select an option</option>
              <option value="residential" className="dark:bg-zinc-900">Residential Interior</option>
              <option value="commercial" className="dark:bg-zinc-900">Commercial Architectural</option>
              <option value="consultation" className="dark:bg-zinc-900">Strategic Consultation</option>
            </select>
            <AnimatePresence>
              {errors.projectType && (
                <motion.span 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 -bottom-5 text-[9px] font-bold text-red-500 uppercase tracking-widest"
                >
                  {errors.projectType}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Message Field */}
          <div className="relative group">
            <label className={cn(
              "absolute left-0 transition-all duration-300 pointer-events-none text-[10px] uppercase tracking-[0.2em] font-bold",
              (activeField === "message" || formData.message) 
                ? "-top-6 opacity-100 italic text-black dark:text-white" 
                : "top-4 opacity-40 text-black dark:text-white"
            )}>
              Tell us about your space
            </label>
            <textarea
              required
              rows={4}
              className={cn(
                "w-full bg-transparent border-b py-4 focus:outline-none transition-colors font-display text-lg resize-none",
                errors.message 
                  ? "border-red-500/50 focus:border-red-500" 
                  : "border-black/10 dark:border-white/10 focus:border-black dark:focus:border-white"
              )}
              onFocus={() => setActiveField("message")}
              onBlur={() => handleBlur("message")}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: "" });
              }}
            />
            <AnimatePresence>
              {errors.message && (
                <motion.span 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 -bottom-5 text-[9px] font-bold text-red-500 uppercase tracking-widest"
                >
                  {errors.message}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
            disabled={isSubmitting}
            className="group relative flex items-center justify-between w-full p-6 bg-brand-espresso text-white dark:bg-brand-silver dark:text-black rounded-[1.5rem] font-display font-bold text-xl transition-all overflow-hidden cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 uppercase tracking-tight flex items-center gap-3">
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Verifying Structural Intent
                </>
              ) : (
                "Submit Inquiry"
              )}
            </span>
            <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight size={24} />
            </div>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.form>
      ) : (
        <motion.div
          key="contact-success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col items-center text-center py-12 px-6"
        >
          {/* Animated Success Path Drawing */}
          <div className="relative mb-8 w-24 h-24 rounded-full bg-brand-concrete/30 dark:bg-zinc-800/50 border border-brand-concrete dark:border-zinc-700 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="w-12 h-12 rounded-full bg-brand-espresso dark:bg-brand-silver flex items-center justify-center text-white dark:text-black shadow-soft"
            >
              <Check size={24} />
            </motion.div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-black/10 dark:border-white/10 rounded-full"
            />
          </div>

          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold flex items-center gap-1.5 mb-2">
            <Sparkles size={10} className="text-amber-500 animate-pulse" /> Inquiry Locked
          </span>
          
          <h3 className="text-4xl font-display font-bold mb-6 tracking-tight">
            Thank you, <span className="italic font-normal">{formData.name}</span>.
          </h3>
          
          <p className="text-lg opacity-60 max-w-md leading-relaxed mb-12">
            We have reserved a structural design consultation block under your address: <strong className="font-semibold text-black dark:text-white">{formData.email}</strong>.
          </p>

          <div className="w-full grid grid-cols-2 gap-4 border-t border-black/5 dark:border-white/5 pt-8 mb-12">
            <div className="text-left">
              <span className="text-[8px] uppercase tracking-widest opacity-40 font-bold">Category</span>
              <p className="text-sm font-semibold capitalize mt-1">{formData.projectType} Intervention</p>
            </div>
            <div className="text-left">
              <span className="text-[8px] uppercase tracking-widest opacity-40 font-bold">Consultation Slot</span>
              <p className="text-sm font-semibold mt-1">Gated — 24h Response</p>
            </div>
          </div>

          <motion.button
            onClick={() => {
              setFormData({ name: "", email: "", projectType: "", message: "" });
              isSuccess && setIsSuccess(false);
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full border border-black/10 dark:border-white/10 text-[10px] uppercase tracking-widest font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            Submit Another Inquiry
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
