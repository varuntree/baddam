"use client";

import React from "react";
import Link from "next/link";
import FeatureCard from "../components/FeatureCard";

export default function Features() {
  const features = [
    {
      title: "Conversational AI",
      description:
      "Transform customer interactions with AI-driven chatbots and virtual assistants that handle real-time conversations across platforms, including call centres.",
      imageSrc: "/conversational.png",
    },
    {
      title: "Content AI Generation",
      description:
      "Effortlessly generate high-quality, tailored content for social media, blogs, emails, and websites with AI-powered solutions.",
      imageSrc: "/reputational.png",
    },
    {
      title: "Social Media Automation AI",
      description:
      "Automate social media management, ensuring consistent posts, timely engagement, and seamless audience communication.",
      imageSrc: "/workflow.png",
    },
    ];

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="text-gray-400 mb-2">Services</div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            How can we help <span className="italic">you</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Transform your business with AI-driven solutions tailored to your unique needs. Explore our cutting-edge offerings
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="px-16 py-8 rounded-3xl backdrop-blur-sm border border-gray-800 relative overflow-hidden text-center">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-700/90 rounded-full blur-3xl"></div>
            <h3 className="text-3xl font-bold text-white mb-4 relative">{features[0].title}</h3>
            <p className="text-gray-400 relative">{features[0].description}</p>
            </div>
          
          {/* Google Ads */}
          <div className="px-16 py-8 rounded-3xl backdrop-blur-sm border border-gray-800 relative overflow-hidden text-center">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-700/90 rounded-full blur-3xl"></div>
                <h3 className="text-3xl font-bold text-white mb-4">{features[1].title}</h3>
                <p className="text-gray-400">{features[1].description}</p>
          </div>
        </div>

        {/* TikTok Ads - Full Width */}
        <div className="px-16 py-8 rounded-3xl backdrop-blur-sm border border-gray-800 relative overflow-hidden text-center">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-700/90 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-700/90 rounded-full blur-3xl"></div> 
          <h3 className="text-3xl font-bold text-white mb-4">{features[2].title}</h3>
          <p className="text-gray-400">{features[2].description}</p>
        </div>

        {/* More Services Button */}
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 text-white border-2 border-orange-500 bg-black rounded-full hover:bg-orange-500/10 transition-all duration-300">
            More Services
          </button>
        </div>
      </div>
    </div>
  );
}
