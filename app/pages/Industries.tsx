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
    <div className="relative min-h-screen overflow-hidden">
      <img
        src="/robo.jpg"
        alt="Robot Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Industries We <span className="text-orange-500">Transform</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our AI solutions are tailored to revolutionize operations across various sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/20"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {industry.title}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-300 mt-2">
                      {industry.description}
                    </p>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className={`text-2xl text-orange-500 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45 transform' : ''
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
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}