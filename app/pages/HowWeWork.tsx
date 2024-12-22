
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

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4">
            AI that works for <br /> everyone.
          </h1>
          <p className="text-xl text-black/70">
            Delivering AI that works for everyone, from individuals to large enterprises.
          </p>
        </div>
        
        <div className="space-y-24">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
