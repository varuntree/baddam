
"use client";

import React from "react";
import FeatureCard from "../components/FeatureCard";

export default function Features() {
  const features = [
    {
      title: "Find & understand information",
      description: "Easily find and understand the information you need with our advanced search and explore capabilities.",
      imageSrc: "/feature1.png"
    },
    {
      title: "Create & summarize content",
      description: "Generate and summarize content efficiently using AI-powered tools.",
      imageSrc: "/feature2.png"
    },
    {
      title: "Automate work",
      description: "Streamline your workflow with intelligent automation solutions.",
      imageSrc: "/feature3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-black/95 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">FEATURES</h2>
          <p className="text-2xl text-white/90 max-w-2xl">
            The Work AI platform for quickly & securely bringing AI into the enterprise.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
