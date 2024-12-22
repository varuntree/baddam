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
        isHovered ? 'md:scale-105' : ''
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
        <div className="absolute inset-0 flex flex-col p-6">
          <h3 
            className={`text-xl font-semibold text-white z-10 transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {title}
          </h3>
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 flex items-center justify-center p-6 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-gray-100 text-center line-clamp-[12]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}