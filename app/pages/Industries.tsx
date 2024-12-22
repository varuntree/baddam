
"use client";

import React from "react";

export default function Industries() {
  const industries = [
    {
      title: "Manufacturing",
      description: "Automating production lines and optimizing supply chains",
    },
    {
      title: "Healthcare",
      description: "Enhancing patient care and streamlining operations",
    },
    {
      title: "Finance",
      description: "Automating transactions and risk assessment",
    },
    {
      title: "Retail",
      description: "Personalizing customer experiences and inventory management",
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
      
      <div className="relative z-10 container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-white mb-12">INDUSTRIES WE SERVE</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{industry.title}</h3>
              <p className="text-gray-200">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
