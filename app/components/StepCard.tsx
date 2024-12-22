
"use client";

import React from "react";
import Image from "next/image";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
}

export default function StepCard({ stepNumber, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 h-full items-center p-4 md:p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-500">
      <div className="relative w-full md:w-1/2 h-[200px] md:h-[300px]">
        <Image
          src={`/step${stepNumber}.png`}
          alt={`Step ${stepNumber}`}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm md:text-base">
          Step {stepNumber}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
        <p className="text-sm md:text-base text-white/70">{description}</p>
      </div>
    </div>
  );
}
