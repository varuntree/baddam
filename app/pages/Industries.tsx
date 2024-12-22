
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
    <div className="relative min-h-screen">
      <img
        src="/robo.jpg"
        alt="Robot Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Side Card */}
      <div className="absolute top-0 bottom-0 left-0 w-1/4 bg-white/10 backdrop-blur-md border-r border-white/20">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-black mb-4">Industries</h2>
          <div className="space-y-2">
            {industries.map((industry, index) => (
              <div key={index} className="border-b border-white/20">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-4 px-2 text-left text-black hover:bg-white/10 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{industry.title}</span>
                    <span className="transform transition-transform duration-200">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-2 pb-4 text-black/80 text-sm">
                    {industry.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
