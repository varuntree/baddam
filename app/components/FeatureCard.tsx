
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
      className={`bg-neutral-900 rounded-3xl overflow-hidden transition-all duration-500 transform cursor-pointer ${
        isHovered ? 'w-[400px]' : 'w-[300px]'
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
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isHovered ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
