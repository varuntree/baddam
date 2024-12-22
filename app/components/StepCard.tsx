
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
    <div className="flex flex-col gap-8 h-full">
      <div className="relative w-full aspect-[2/1]">
        <Image
          src={`/step${stepNumber}.png`}
          alt={`Step ${stepNumber}`}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="space-y-4">
        <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-white">
          Step {stepNumber}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
}
