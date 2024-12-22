
"use client";

import React, { useState } from "react";

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  
  const industries = [
    {
      title: "Manufacturing",
      description: "Automating production lines and optimizing supply chains with advanced robotics and AI-driven process optimization. Our solutions help manufacturers increase efficiency, reduce waste, and maintain consistent quality standards.",
    },
    {
      title: "Healthcare",
      description: "Enhancing patient care and streamlining operations through intelligent automation of administrative tasks, patient monitoring systems, and predictive analytics for better healthcare outcomes.",
    },
    {
      title: "Finance",
      description: "Automating transactions and risk assessment with sophisticated algorithms and AI-powered analytics. We help financial institutions streamline operations, detect fraud, and improve customer service.",
    },
    {
      title: "Retail",
      description: "Personalizing customer experiences and inventory management through AI-driven insights, automated stock management, and intelligent customer service solutions.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <img
        src="/robo.jpg"
        alt="Robot Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      <div className="relative z-10 flex flex-col md:flex-row h-screen">
        {/* Sidebar */}
        <div className="w-full md:w-[30%] bg-black/30 backdrop-blur-md p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">INDUSTRIES WE SERVE</h2>
          <div className="flex flex-col space-y-2">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndustry(index)}
                className={`text-left p-4 rounded-lg transition-all duration-300 ${
                  selectedIndustry === index
                    ? "bg-white/20 text-white"
                    : "text-gray-300 hover:bg-white/10"
                }`}
              >
                {industry.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-[70%] p-6 md:p-12 flex items-center">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <h3 className="text-3xl font-semibold text-white mb-6">
              {industries[selectedIndustry].title}
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              {industries[selectedIndustry].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
