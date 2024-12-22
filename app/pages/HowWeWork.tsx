"use client";

import React, { useEffect, useRef, useState } from "react";
import StepCard from "../components/StepCard";
import gsap from "gsap";

export default function HowWeWork() {
  const [currentStep, setCurrentStep] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const slideNext = () => {
    if (currentStep < steps.length - 1) {
      const currentCard = cardRefs.current[currentStep];
      const nextCard = cardRefs.current[currentStep + 1];
      
      if (currentCard && nextCard) {
        gsap.to(currentCard, {
          x: '-100%',
          opacity: 0,
          duration: 0.7,
          ease: "power2.out"
        });
        
        gsap.fromTo(nextCard,
          { x: '100%', opacity: 0 },
          { x: '0%', opacity: 1, duration: 0.7, ease: "power2.out" }
        );
      }
      
      setCurrentStep(prev => prev + 1);
    }
  };

  const slidePrev = () => {
    if (currentStep > 0) {
      const currentCard = cardRefs.current[currentStep];
      const prevCard = cardRefs.current[currentStep - 1];
      
      if (currentCard && prevCard) {
        gsap.to(currentCard, {
          x: '100%',
          opacity: 0,
          duration: 0.7,
          ease: "power2.out"
        });
        
        gsap.fromTo(prevCard,
          { x: '-100%', opacity: 0 },
          { x: '0%', opacity: 1, duration: 0.7, ease: "power2.out" }
        );
      }
      
      setCurrentStep(prev => prev - 1);
    }
  };

  useEffect(() => {
    // Initialize card positions
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, {
          x: index === 0 ? '0%' : '100%',
          opacity: index === 0 ? 1 : 0
        });
      }
    });
  }, []);

  return (
    <div className="h-screen bg-black py-12 md:py-24">
      <div className="container mx-auto px-4 h-full flex flex-col">
        <div className="mb-8 md:mb-16 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white w-full md:w-1/2 text-center md:text-left">
            AI that works for everyone.
          </h1>
          <p className="text-lg md:text-xl text-white/70 w-full md:w-1/2 text-center md:text-left">
            Delivering AI that works for everyone, from individuals to large enterprises.
          </p>
        </div>
        
        <div className="relative overflow-hidden flex-1">
          <div className="relative h-[300px] md:h-[400px]">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => { cardRefs.current[index] = el }}
                className="absolute top-0 left-0 w-full px-2 md:px-0"
              >
                <StepCard
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <button 
              onClick={slidePrev}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm disabled:opacity-50"
              disabled={currentStep === 0}
            >
              ←
            </button>
            <button 
              onClick={slideNext}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm disabled:opacity-50"
              disabled={currentStep === steps.length - 1}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}