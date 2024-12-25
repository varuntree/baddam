"use client";

import React, { useEffect, useRef, useState } from "react";
import StepCard from "../components/StepCard";
import gsap from "gsap";

export default function HowWeWork() {
  const [currentStep, setCurrentStep] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      title: "Consultation & Goal Setting",
      description:
        "We begin by understanding your business needs, challenges, and objectives to ensure our AI solutions align perfectly with your goals and deliver maximum value to your organization.",
    },
    {
      title: "Custom AI Design",
      description:
        "Our team creates tailored AI solutions that seamlessly integrate with your existing workflows, ensuring a perfect fit for your specific business requirements and processes.",
    },
    {
      title: "Implementation & Support",
      description:
        "We provide comprehensive support throughout the implementation process, helping you integrate, optimize, and scale your AI operations for sustainable long-term success.",
    },
  ];

  const slideNext = () => {
    if (currentStep < steps.length - 1) {
      const currentCard = cardRefs.current[currentStep];
      const nextCard = cardRefs.current[currentStep + 1];

      if (currentCard && nextCard) {
        gsap.to(currentCard, {
          x: "-100%",
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        });

        gsap.fromTo(
          nextCard,
          { x: "100%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
          }
        );
      }

      setCurrentStep((prev) => prev + 1);
    }
  };

  const slidePrev = () => {
    if (currentStep > 0) {
      const currentCard = cardRefs.current[currentStep];
      const prevCard = cardRefs.current[currentStep - 1];

      if (currentCard && prevCard) {
        gsap.to(currentCard, {
          x: "100%",
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        });

        gsap.fromTo(
          prevCard,
          { x: "-100%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
          }
        );
      }

      setCurrentStep((prev) => prev - 1);
    }
  };

  useEffect(() => {
    // Initialize card positions
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, {
          x: index === 0 ? "0%" : "100%",
          opacity: index === 0 ? 1 : 0,
        });
      }
    });
  }, []);

  return (
    <div className="min-h-screen w-screen bg-black px-6 md:px-12 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white w-full md:w-1/2">
            AI that works for everyone.
          </h1>
          <p className="text-base md:text-xl text-white/70 w-full md:w-1/2">
            Delivering AI that works for everyone, from individuals to large
            enterprises.
          </p>
        </div>

        {/* Slides Section */}
        <div className="relative overflow-hidden">
          {/* Use min-h instead of a fixed height so content can grow as needed */}
          <div className="relative min-h-[400px]">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="absolute top-0 left-0 w-full px-4 sm:px-2 md:px-0"
              >
                <StepCard
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>

          {/* Navigation + Book Now Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3  md:mt-8 mt-44 relative z-10">
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

            {/* Book Now Button */}
            <button
              className="
                px-6 py-2 
                rounded-full 
                border border-primary
                text-white 
                bg-transparent 
                hover:bg-primary 
                hover:text-white 
                transition-colors
              "
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
