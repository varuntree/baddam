
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
      className="relative group bg-white rounded-3xl overflow-hidden transition-all duration-500 transform cursor-pointer shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: isHovered ? '400px' : '300px',
        flex: '1 1 0px'
      }}
    >
      <div className="relative h-[300px] w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 flex flex-col justify-center p-6 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-white">{description}</p>
        </div>
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
      </div>
    </div>
  );
}
