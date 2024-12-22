
"use client";

import React from "react";
import FeatureCard from "../components/FeatureCard";

export default function Features() {
  const features = [
    {
      title: "Solutions",
      description: "Discover tailored AI solutions for your enterprise needs.",
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
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">FEATURES</h2>
          <p className="text-2xl text-black/90 max-w-2xl">
            The Work AI platform for quickly & securely bringing AI into the enterprise.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-8 justify-center">
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
