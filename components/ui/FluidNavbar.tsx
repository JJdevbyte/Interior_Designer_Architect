"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function FluidNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className="max-w-7xl mx-auto flex justify-center">
        {/* Main Pill */}
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 25,
            mass: 0.8
          }}
          className={cn(
            "bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full shadow-soft flex items-center",
            isOpen ? "px-8 py-12 w-full max-w-lg rounded-[2.5rem]" : "px-4 py-2 w-max"
          )}
        >
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between gap-8">
              {/* Logo */}
              <Link href="/" className="font-display font-bold text-lg tracking-tighter shrink-0" onClick={() => setIsOpen(false)}>
                STUDIO STRUCTURAL
              </Link>

              {/* Desktop Links (Visible when closed) */}
              {!isOpen && (
                <div className="hidden md:flex items-center gap-6">
                  {navLinks.slice(0, 3).map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-xs uppercase tracking-widest font-medium opacity-60 hover:opacity-100 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* CTA / Toggle */}
              <div className="flex items-center gap-2">
                {!isOpen && (
                  <Link href="/contact" className="hidden md:flex items-center gap-2 bg-brand-espresso dark:bg-brand-silver text-white dark:text-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold group">
                    Inquire
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center transition-fluid group-hover:translate-x-1 group-hover:-translate-y-0.5">
                      <ArrowUpRight size={12} />
                    </div>
                  </Link>
                )}
                
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile / Expanded Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="mt-8 flex flex-col gap-4 items-center text-center"
                >
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-3xl font-display font-bold hover:italic transition-all"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
