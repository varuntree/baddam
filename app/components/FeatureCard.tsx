
"use client";

import { useState } from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function FeatureCard({ title, description, imageSrc }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-neutral-900 rounded-3xl overflow-hidden transition-all duration-500 transform cursor-pointer w-full md:flex-1 ${
        isHovered ? 'scale-105 z-10' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[300px] w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
        <div className={`absolute inset-0 flex flex-col justify-center p-6 transition-all duration-500 ${
          isHovered ? 'bg-black/60 backdrop-blur-sm' : 'bg-black/40 backdrop-blur-[2px]'
        }`}>
          <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
          <p className={`text-gray-100 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
