
"use client";

import React, { useState } from "react";

const industries = [
  {
    name: "Healthcare",
    description: "Revolutionizing patient care with AI-driven diagnostics and automated healthcare management systems.",
  },
  {
    name: "Finance",
    description: "Transforming financial services with intelligent automation, risk assessment, and fraud detection.",
  },
  {
    name: "Manufacturing",
    description: "Optimizing production lines with smart automation and predictive maintenance solutions.",
  },
  {
    name: "Retail",
    description: "Enhancing customer experience through personalized shopping and inventory management.",
  },
  {
    name: "Education",
    description: "Advancing learning experiences with adaptive educational technology and automated assessment systems.",
  },
];

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <img
        src="/robo.jpg"
        alt="Robot Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Industries We Serve
        </h2>
        
        <div className="absolute left-0 top-0 w-full md:w-[30%] backdrop-blur-md bg-white/10 p-6 border-r border-white/20 h-full">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-2 text-left text-white bg-white/10 rounded-lg flex items-center justify-between"
            >
              {selectedIndustry.name}
              <svg
                className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 backdrop-blur-md bg-white/10 rounded-lg border border-white/20">
                {industries.map((industry) => (
                  <button
                    key={industry.name}
                    onClick={() => {
                      setSelectedIndustry(industry);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-white hover:bg-white/20 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {industry.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-3">{selectedIndustry.name}</h3>
            <p className="text-white/80 leading-relaxed">
              {selectedIndustry.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
