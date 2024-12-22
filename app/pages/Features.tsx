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
        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold text-black mb-4 lg:sticky lg:top-24">Solutions</h3>
          </div>
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
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
    </div>
  );
}
