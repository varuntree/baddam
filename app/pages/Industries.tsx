
"use client";

import React, { useState } from "react";

interface IndustryItem {
  title: string;
  description: string;
}

export default function Industries() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const industries: IndustryItem[] = [
    {
      title: "E-Commerce Retail",
      description: "Automate customer service, order tracking, and personalized marketing through AI-driven chatbots and workflow optimizations."
    },
    {
      title: "Healthcare",
      description: "Streamline patient scheduling, record management, and telehealth services using conversational AI and workflow automation."
    },
    {
      title: "Financial Services",
      description: "Enhance customer interactions, fraud detection, and reporting processes with tailored AI solutions."
    },
    {
      title: "Hospitality",
      description: "Improve guest experiences by automating bookings, check-ins, and personalized engagement."
    },
    {
      title: "Education",
      description: "Facilitate automated student support, content generation, and administrative processes to optimize learning environments."
    },
    {
      title: "Law Firms / Lawyers",
      description: "Automate client onboarding, legal document generation, and case management for increased efficiency."
    },
    {
      title: "Marketing Agencies",
      description: "Streamline social media scheduling, content creation, and performance analytics through AI automation."
    },
    {
      title: "HR and Recruitment",
      description: "Automate resume screening, candidate matching, onboarding processes, and team collaboration with AI tools."
    },
    {
      title: "Real Estate",
      description: "Provide automated lead qualification, property matching, and client nurturing to maximize efficiency and ROI."
    }
  ];

  return (
    <div className="relative min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm uppercase tracking-wider mb-4">Industries We Serve</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transforming <span className="italic text-orange-500">Every</span> Industry
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our AI solutions are tailored to meet the unique challenges and opportunities across different sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-orange-500/50"
            >
              <div 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {industry.title}
                </h3>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-400">
                    {industry.description}
                  </p>
                </div>
                <div className="absolute top-6 right-6">
                  <span className={`text-2xl text-orange-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}
