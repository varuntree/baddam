
"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

interface CornerEdgeCardProps {
  text: string;
  highlightedWords: string[];
}

export default function CornerEdgeCard({ text, highlightedWords }: CornerEdgeCardProps) {
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

  const renderText = () => {
    const words = text.split(' ');
    return words.map((word, index) => {
      const isPrimary = highlightedWords.includes(word);
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
    <div className="relative w-full max-w-2xl mx-auto p-12 rounded-lg">
      <div ref={topLeftRef} className="absolute top-0 left-0 -translate-x-[200%] -translate-y-[200%] opacity-0">
        <Image src="/top-left.svg" alt="Top Left Corner" width={40} height={40} />
      </div>
      <div ref={bottomRightRef} className="absolute bottom-0 right-0 translate-x-[200%] translate-y-[200%] opacity-0">
        <Image src="/bottom-right.svg" alt="Bottom Right Corner" width={40} height={40} />
      </div>
      <div className="text-2xl font-medium text-center">
        {renderText()}
      </div>
    </div>
  );
}
