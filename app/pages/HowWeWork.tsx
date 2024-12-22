
"use client";

import React, { useState } from "react";
import StepCard from "../components/StepCard";

export default function HowWeWork() {
  const [currentArrangement, setCurrentArrangement] = useState([2, 0, 1]);
  
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

  const handleNext = () => {
    setCurrentArrangement(prev => [(prev[0] + 1) % 3, (prev[1] + 1) % 3, (prev[2] + 1) % 3]);
  };

  return (
    <div className="min-h-screen bg-black py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-white lg:w-1/2 transition-all duration-500 ease-in-out transform hover:scale-105">
            AI that works for everyone.
          </h1>
          <p className="text-lg lg:text-xl text-white/70 lg:w-1/2 transition-all duration-500">
            Delivering AI that works for everyone, from individuals to large enterprises.
          </p>
        </div>
        
        <div className="relative">
          <div 
            className="flex gap-8 pb-8 transition-all duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentArrangement[0] * 33.33}%)`,
            }}
          >
            {currentArrangement.map((stepIndex, position) => (
              <div 
                key={position} 
                className="shrink-0 w-full lg:w-[600px] transform transition-all duration-700 ease-in-out hover:scale-105"
                style={{
                  opacity: position === 1 ? 1 : 0.7,
                  transform: `scale(${position === 1 ? 1 : 0.95})`,
                }}
              >
                <StepCard
                  stepNumber={stepIndex + 1}
                  title={steps[stepIndex].title}
                  description={steps[stepIndex].description}
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => setCurrentArrangement(prev => [prev[2], prev[0], prev[1]])}
              className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 active:scale-95"
            >
              ←
            </button>
            <button 
              onClick={handleNext}
              className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 active:scale-95"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
