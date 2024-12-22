
"use client";

import React, { useEffect, useRef } from "react";
import StepCard from "../components/StepCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function HowWeWork() {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const steps = [
    {
      title: "Find answers & generate content you can trust",
      description: "Access well-researched, accurate answers and confidently generate content that is backed by trustworthy information, allowing you to deliver messages that inspire trust and credibility.",
    },
    {
      title: "Transform Ideas into Solutions",
      description: "Our AI-powered platform takes your ideas and transforms them into practical, implementable solutions that drive real business value and innovation.",
    },
    {
      title: "Scale and Optimize",
      description: "Leverage our advanced AI capabilities to scale your operations efficiently while continuously optimizing performance and outcomes across your organization.",
    },
  ];

  const scrollTo = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    
    const scrollAmount = 600;
    gsap.to(sliderRef.current, {
      scrollLeft: `${direction === 'left' ? '-=' : '+='}${scrollAmount}`,
      duration: 1,
      ease: "power2.out"
    });
  };

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex items-center justify-between gap-8">
          <h1 className="text-5xl font-bold text-white w-1/2">
            AI that works for everyone.
          </h1>
          <p className="text-xl text-white/70 w-1/2">
            Delivering AI that works for everyone, from individuals to large enterprises.
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex overflow-x-scroll gap-8 pb-8 snap-x snap-mandatory scrollbar-hide"
            id="slider"
          >
            {steps.map((step, index) => (
              <div key={index} className="snap-center shrink-0 w-[90vw] md:w-[600px]">
                <StepCard
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => scrollTo('left')}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm"
            >
              ←
            </button>
            <button 
              onClick={() => scrollTo('right')}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
