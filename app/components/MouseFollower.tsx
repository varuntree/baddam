
"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function MouseFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    const handleCardHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isIndustryCard = target.closest('.industry-card');
      
      if (isIndustryCard) {
        setIsHovered(true);
        gsap.to(cursor, {
          scale: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(8px)',
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        setIsHovered(false);
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: 'rgb(249, 115, 22)',
          backdropFilter: 'blur(0px)',
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleCardHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleCardHover);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed w-5 h-5 bg-orange-500 rounded-full pointer-events-none mix-blend-difference hidden md:flex items-center justify-center transition-all duration-300"
      style={{
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    >
      {isHovered && (
        <span className="text-white text-xs whitespace-nowrap">
          click here
        </span>
      )}
    </div>
  );
}
