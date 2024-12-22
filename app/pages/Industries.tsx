
"use client";

import React from "react";
import Image from "next/image";

const industries = [
  {
    title: "Manufacturing",
    description: "Revolutionizing production with smart automation and predictive maintenance.",
  },
  {
    title: "Healthcare",
    description: "Enhancing patient care through AI-powered diagnostics and workflow optimization.",
  },
  {
    title: "Finance",
    description: "Transforming financial services with intelligent automation and risk management.",
  },
  {
    title: "Retail",
    description: "Elevating customer experience with personalized solutions and inventory optimization.",
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-neutral-900 relative overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-20 h-20">
              <Image
                src="/top-left.svg"
                alt="Top Left Decoration"
                width={80}
                height={80}
              />
            </div>
            <Image
              src="/robo.jpg"
              alt="Robot"
              width={600}
              height={800}
              className="rounded-3xl"
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20">
              <Image
                src="/bottom-right.svg"
                alt="Bottom Right Decoration"
                width={80}
                height={80}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-8">INDUSTRIES</h2>
            <div className="grid gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
