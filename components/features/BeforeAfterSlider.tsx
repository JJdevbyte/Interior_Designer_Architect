"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterImageLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterImageLabel = "After",
}: BeforeAfterSliderProps) {
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion value for the slider position (0 to 100 percentage)
  const sliderX = useMotionValue(50);
  
  // Smooth spring for the slider line and handle
  const springSliderX = useSpring(sliderX, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  // Transform percentage to clip-path inset string (GPU-accelerated)
  const clipPath = useTransform(springSliderX, (value) => `inset(0 ${100 - value}% 0 0)`);

  // Transform spring value to percentage string for handle left position (GPU-accelerated, prevents React re-renders!)
  const handleLeft = useTransform(springSliderX, (value) => `${value}%`);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    sliderX.set(Math.min(Math.max(x, 0), 100));
  };

  const onMouseMove = (e: React.MouseEvent) => {
    // Only calculate position and update spring if the user is actively dragging (clicking) the slider
    if (!isResizing) return;
    handleMove(e.clientX);
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  // Prevent dynamic scroll scrolling issues on mobile touch-drag
  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      if (isResizing) {
        e.preventDefault();
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchmove", preventScroll, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener("touchmove", preventScroll);
      }
    };
  }, [isResizing]);

  return (
    <div 
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] cursor-ew-resize select-none border border-black/5 dark:border-white/10 touch-none"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onMouseDown={(e) => {
        setIsResizing(true);
        handleMove(e.clientX);
      }}
      onMouseUp={() => setIsResizing(false)}
      onMouseLeave={() => setIsResizing(false)}
      onTouchStart={() => setIsResizing(true)}
      onTouchEnd={() => setIsResizing(false)}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image 
          src={afterImage} 
          alt="After" 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute bottom-6 right-8 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold text-white">
          {afterImageLabel}
        </div>
      </div>

      {/* Before Image (Foreground with Clip Path) */}
      <motion.div 
        style={{ clipPath }}
        className="absolute inset-0 z-10 will-change-[clip-path]"
      >
        <Image 
          src={beforeImage} 
          alt="Before" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute bottom-6 left-8 px-3 py-1 bg-black/20 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold text-white">
          {beforeLabel}
        </div>
      </motion.div>

      {/* Slider Line & Handle - bound dynamically to prevent React re-renders! */}
      <motion.div
        style={{ left: handleLeft }}
        className="absolute inset-y-0 z-20 w-[2px] bg-white/50 backdrop-blur-sm pointer-events-none will-change-[left]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-soft">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-white rounded-full opacity-60" />
            <div className="w-1 h-3 bg-white rounded-full opacity-60" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

