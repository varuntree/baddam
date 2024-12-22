
"use client";

import React, { useRef } from "react";
import StepCard from "../components/StepCard";

export default function HowWeWork() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === 'left' ? -800 : 800;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex items-center justify-between gap-8">
          <h1 className="text-5xl font-bold text-white w-1/2">
            AI that works for everyone.
          </h1>
          <p className="text-xl text-white/70 w-1/2 pl-8">
            Delivering AI that works for everyone, from individuals to large enterprises.
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex space-x-8 overflow-x-hidden scroll-smooth"
          >
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex-shrink-0 w-full transition-all duration-300 ${
                  index === 0 ? 'w-full' : 'w-[25%]'
                }`}
              >
                <StepCard
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={() => scrollTo('left')}
              className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
            >
              ←
            </button>
            <button 
              onClick={() => scrollTo('right')}
              className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
