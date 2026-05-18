"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface DoubleBezelCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export function DoubleBezelCard({
  children,
  className,
  innerClassName,
  ...props
}: DoubleBezelCardProps) {
  return (
    <motion.div
      className={cn("bezel-outer group", className)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      {...props}
    >
      <div className={cn("bezel-inner w-full h-full relative", innerClassName)}>
        {children}
      </div>
    </motion.div>
  );
}
