
"use client";

import React from "react";
import Link from "next/link";
import FeatureCard from "../components/FeatureCard";

export default function Features() {
  const features = [
    {
      title: "Conversational AI",
      description:
        "Empower your business with intelligent chatbots and virtual assistants that deliver human-like interactions across websites, social media, and messaging platforms. These AI-driven tools handle customer queries, streamline support, and boost engagement by providing instant, 24/7 assistance. By reducing response times and personalizing interactions, Conversational AI ensures an exceptional customer experience while freeing up your team to focus on higher-value tasks.",
      imageSrc: "/conversational.png",
    },
    {
      title: "Reputation Management AI",
      description:
        "Take control of your brand's image with advanced AI tools designed to monitor, analyze, and respond to online reviews and feedback. Reputation Management AI identifies trends, highlights critical areas for improvement, and generates actionable insights. By maintaining a positive digital presence, you'll foster trust with your audience and make data-driven decisions to continuously enhance your services.",
      imageSrc: "/reputational.png",
    },
    {
      title: "Workflow Optimization AI",
      description:
        "Streamline your business processes and supercharge productivity with Workflow Optimization AI. By automating repetitive tasks and providing actionable insights, this solution helps you save time and resources. Whether it's scheduling, data analysis, or task management, Workflow Optimization AI eliminates inefficiencies and creates a seamless operational flow, enabling your team to focus on strategic initiatives.",
      imageSrc: "/workflow.png",
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-white px-6 md:px-12 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
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
        <div className="flex justify-center mt-16">
          <Link href="/solutions" className="px-8 py-3 bg-black text-white rounded-3xl hover:bg-black/80 transition-colors">
            More Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}
