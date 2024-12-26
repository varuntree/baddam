"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function LogoScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const logos = containerRef.current;
    if (!logos) return;

    // Set duplicated logos for seamless scrolling
    gsap.set(logos, { x: 0 });

    scrollRef.current = gsap.to(logos, {
      x: "-100%",
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    // Pause animation on hover
    logos.addEventListener('mouseenter', () => scrollRef.current?.pause());
    logos.addEventListener('mouseleave', () => scrollRef.current?.play());

    return () => {
      scrollRef.current?.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 p-9 text-center">Trusted by Industry Leaders</h2>
        <div 
          ref={containerRef}
          className="flex items-center whitespace-nowrap"
        >
          {/* Duplicate logos for seamless scrolling */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-16">
              {[1, 2, 3].map((num) => (
                <div 
                  key={`${setIndex}-${num}`} 
                  className="w-48 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center relative"
                >
                  <Image
                    src={`/logo${num}.png`}
                    alt={`Client Logo ${num}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 192px"
                    className="object-contain p-4"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
