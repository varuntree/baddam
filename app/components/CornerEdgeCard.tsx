
"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

interface CornerEdgeCardProps {
  highlightedWords?: string[];
}

export default function CornerEdgeCard({ highlightedWords = ["Businesses", "Automation"] }: CornerEdgeCardProps) {
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

  return (
    <div className="relative w-full max-w-3xl mx-auto p-12 rounded-lg">
      <div ref={topLeftRef} className="absolute top-0 left-0 -translate-x-[200%] -translate-y-[200%] opacity-0">
        <Image src="/top-left.svg" alt="Top Left Corner" width={40} height={40} />
      </div>
      <div ref={bottomRightRef} className="absolute bottom-0 right-0 translate-x-[200%] translate-y-[200%] opacity-0">
        <Image src="/bottom-right.svg" alt="Bottom Right Corner" width={40} height={40} />
      </div>
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold text-white">
          Transforming{' '}
          <span className="text-primary">Businesses</span>{' '}
          with AI-Driven{' '}
          <span className="text-primary">Automation</span>.
        </h1>
        <p className="text-xl text-white/90">
          Empowering you to streamline workflows, enhance customer engagement, and drive measurable growth.
        </p>
      </div>
    </div>
  );
}
