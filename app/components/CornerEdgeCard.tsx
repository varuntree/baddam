"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface CornerEdgeCardProps {
  highlightedWords?: string[];
}

export default function CornerEdgeCard({
  highlightedWords = ["Businesses", "Automation"],
}: CornerEdgeCardProps) {
  const topLeftRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLSpanElement>(null);
  const automationRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Corner icon animations
    const tl = gsap.timeline();

    tl.to(topLeftRef.current, {
      x: "-50%",
      y: "-50%",
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }).to(
      bottomRightRef.current,
      {
        x: "50%",
        y: "50%",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Color-changing animation for highlighted words
    gsap.to([businessRef.current, automationRef.current], {
      color: "orange",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      // Cleanup animations
      tl.kill();
      gsap.killTweensOf([businessRef.current, automationRef.current]);
    };
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto p-8 rounded-lg">
      {/* Top Left Corner */}
      <div
        ref={topLeftRef}
        className="absolute top-0 left-0 -translate-x-[200%] -translate-y-[200%] opacity-0"
      >
        <Image
          src="/top-left.svg"
          alt="Top Left Corner Decoration"
          width={40}
          height={40}
        />
      </div>

      {/* Bottom Right Corner */}
      <div
        ref={bottomRightRef}
        className="absolute bottom-0 right-0 translate-x-[200%] translate-y-[200%] opacity-0"
      >
        <Image
          src="/bottom-right.svg"
          alt="Bottom Right Corner Decoration"
          width={40}
          height={40}
        />
      </div>

      {/* Content */}
      <div className="space-y-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Transforming{" "}
          <span ref={businessRef} className="text-primary">
            {highlightedWords[0]}
          </span>{" "}
          with AI-Driven{" "}
          <span ref={automationRef} className="text-primary">
            {highlightedWords[1]}
          </span>.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90">
          Empowering you to streamline workflows, enhance customer engagement,
          and drive measurable growth.
        </p>
      </div>
    </div>
  );
}
