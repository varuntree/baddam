
"use client";

import { ReactNode } from 'react';

interface AboutCardProps {
  title?: string;
  description: string | ReactNode;
  className?: string;
}

export default function AboutCard({ title, description, className = "" }: AboutCardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-3xl transform-gpu border border-white/10 shadow-xl transition-all hover:bg-white/15 ${className}`}>
      {title && <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h3>}
      <div className="text-white/70">{description}</div>
    </div>
  );
}
