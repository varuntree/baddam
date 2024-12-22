"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Added import for Link component

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function FeatureCard({ title, description, imageSrc }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-neutral-900 rounded-3xl overflow-hidden transition-all duration-500 transform cursor-pointer w-full ${
        isHovered ? 'md:scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[400px] md:h-[450px] w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col p-6">
          <h3 
            className={`text-2xl font-semibold text-white z-10 transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {title}
          </h3>
          <div
            className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-all duration-500 flex flex-col items-start justify-between p-8 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-gray-100 text-base line-clamp-[10]">{description}</p>
            <Link 
              href="/solutions" 
              className="self-end mt-4 px-6 py-2 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}