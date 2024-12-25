
"use client";

import { useRef } from 'react';
import gsap from 'gsap';

interface InfoCardProps {
  title?: string;
  description: string;
  className?: string;
  cardRef?: (element: HTMLDivElement | null) => void;
}

export default function InfoCard({ title, description, className = "", cardRef }: InfoCardProps) {
  return (
    <div 
      ref={cardRef}
      className={`bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-3xl transform-gpu border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 group relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -inset-[1000%] bg-gradient-to-r from-white/0 via-white/10 to-white/0 animate-[shimmer_5s_infinite] pointer-events-none" 
        style={{ transform: 'translateX(-50%)', animation: 'shimmer 5s linear infinite' }}
      />
      {title && <h3 className="text-xl md:text-2xl font-bold text-white mb-4 relative z-10">{title}</h3>}
      <p className="text-white/70 relative z-10">{description}</p>
    </div>
  );
}
