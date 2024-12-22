
"use client";

import React from "react";
import FeatureCard from "../components/FeatureCard";

export default function Features() {
  const features = [
    {
      title: "Find & understand information",
      description:
        "Easily find and understand the information you need with our advanced search and explore capabilities.",
      imageSrc: "/conversational.png",
    },
    {
      title: "Create & summarize content",
      description:
        "Generate and summarize content efficiently using AI-powered tools.",
      imageSrc: "/reputational.png",
    },
    {
      title: "Automate work",
      description:
        "Streamline your workflow with intelligent automation solutions.",
      imageSrc: "/workflow.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">FEATURES</h2>
          <p className="text-2xl text-black/90 max-w-2xl">
            The Work AI platform for quickly & securely bringing AI into the
            enterprise.
          </p>
        </div>
        
        {/* First Row */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="lg:w-1/4">
            <h3 className="text-3xl font-bold text-secondary mb-4 lg:mb-0">Solutions</h3>
          </div>
          <div className="lg:w-3/4">
            <FeatureCard
              key={0}
              title={features[0].title}
              description={features[0].description}
              imageSrc={features[0].imageSrc}
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="lg:ml-[25%] mt-8">
          <div className="grid md:grid-cols-2 gap-8">
            {features.slice(1).map((feature, index) => (
              <FeatureCard
                key={index + 1}
                title={feature.title}
                description={feature.description}
                imageSrc={feature.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
