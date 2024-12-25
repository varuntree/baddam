
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
      className={`bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-3xl transform-gpu border border-white/10 shadow-xl ${className}`}
    >
      {title && <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h3>}
      <p className="text-white/70">{description}</p>
    </div>
  );
}
