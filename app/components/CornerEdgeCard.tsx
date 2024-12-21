
"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

interface CornerEdgeCardProps {
  highlightedWords?: string[];
}

export default function CornerEdgeCard({ highlightedWords = ["Transforming", "AI-Driven", "Automation"] }: CornerEdgeCardProps) {
  const topLeftRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(topLeftRef.current, {
      x: '-50%',
      y: '-50%',
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    })
    .to(bottomRightRef.current, {
      x: '50%',
      y: '50%',
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");

  }, []);

  const renderText = (text: string, highlightWords: string[]) => {
    const words = text.split(' ');
    return words.map((word, index) => {
      const isPrimary = highlightWords.includes(word);
      return (
        <span 
          key={index} 
          className={`${isPrimary ? 'text-primary' : 'text-white'}`}
        >
          {word}{' '}
        </span>
      );
    });
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto p-12 bg-black/30 backdrop-blur-sm rounded-lg">
      <div ref={topLeftRef} className="absolute top-0 left-0 -translate-x-[200%] -translate-y-[200%] opacity-0">
        <Image src="/top-left.svg" alt="Top Left Corner" width={40} height={40} />
      </div>
      <div ref={bottomRightRef} className="absolute bottom-0 right-0 translate-x-[200%] translate-y-[200%] opacity-0">
        <Image src="/bottom-right.svg" alt="Bottom Right Corner" width={40} height={40} />
      </div>
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold">
          {renderText("Transforming Businesses with AI-Driven Automation.", highlightedWords)}
        </h1>
        <p className="text-xl text-white/90">
          Empowering you to streamline workflows, enhance customer engagement, and drive measurable growth.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
