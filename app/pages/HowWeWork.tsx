
"use client";

import React from "react";
import StepCard from "../components/StepCard";

export default function HowWeWork() {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const getOrderedSteps = () => {
    const result = [];
    for (let i = 0; i < steps.length; i++) {
      const index = (currentIndex - 1 + i + steps.length) % steps.length;
      result.push(steps[index]);
    }
    return result;
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
          <div className="flex overflow-x-hidden gap-8 pb-8 snap-x snap-mandatory scroll-smooth transition-all duration-500 ease-in-out" id="slider">
            {getOrderedSteps().map((step, index) => (
              <div 
                key={index} 
                className={`snap-center shrink-0 w-[90vw] md:w-[600px] transition-all duration-500 ${
                  index === 1 ? 'scale-105 opacity-100' : 'scale-90 opacity-70'
                }`}
              >
                <StepCard
                  stepNumber={(currentIndex + index) % steps.length + 1}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={handlePrev}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm"
            >
              ←
            </button>
            <button 
              onClick={handleNext}
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
