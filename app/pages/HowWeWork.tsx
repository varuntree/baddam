
"use client";

import React, { useState, useEffect, useRef } from "react";
import StepCard from "../components/StepCard";
import { AnimatePresence, motion } from "framer-motion";

export default function HowWeWork() {
  const [currentArrangement, setCurrentArrangement] = useState([2, 0, 1]);
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

  const handleNext = () => {
    setCurrentArrangement(prev => [(prev[0] + 1) % 3, (prev[1] + 1) % 3, (prev[2] + 1) % 3]);
  };

  const handlePrev = () => {
    setCurrentArrangement(prev => [(prev[0] + 2) % 3, (prev[1] + 2) % 3, (prev[2] + 2) % 3]);
  };

  return (
    <div className="min-h-screen bg-black py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white md:w-1/2"
          >
            AI that works for everyone.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-white/70 md:w-1/2"
          >
            Delivering AI that works for everyone, from individuals to large enterprises.
          </motion.p>
        </div>
        
        <div className="relative">
          <motion.div 
            className="flex overflow-x-hidden gap-8 pb-8 snap-x snap-mandatory scroll-smooth"
            ref={sliderRef}
          >
            <AnimatePresence mode="wait">
              {currentArrangement.map((stepIndex, position) => (
                <motion.div
                  key={position}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  className="snap-center shrink-0 w-[90vw] md:w-[600px]"
                >
                  <StepCard
                    stepNumber={stepIndex + 1}
                    title={steps[stepIndex].title}
                    description={steps[stepIndex].description}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          <div className="flex justify-center gap-4 mt-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              ←
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              →
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
