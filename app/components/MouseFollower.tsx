
"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MouseFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);

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

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed w-5 h-5 bg-orange-500 rounded-full pointer-events-none mix-blend-difference hidden md:block"
      style={{
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    />
  );
}
