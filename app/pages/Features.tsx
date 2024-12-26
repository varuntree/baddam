
"use client";

import React from "react";
import Link from "next/link";
import FeatureCard from "../components/FeatureCard";

export default function Features() {
  const features = [
    {
      title: "Meta Ads",
      description:
        "Our team has decades of combined experience creating winning Facebook & Instagram campaigns. From targeting the right audience to crafting compelling ad content, we help you maximize your social media advertising ROI.",
      imageSrc: "/conversational.png",
    },
    {
      title: "Google Ads",
      description:
        "Put your products in front of active buyers and beat out the competition with expert Google Shopping services. Our data-driven approach ensures your ads reach the most relevant audience at the optimal time.",
      imageSrc: "/reputational.png",
    },
    {
      title: "TikTok Ads",
      description:
        "With over 800 million monthly users in the US, TikTok is the strongest link between your brand and the next generation. We help you create engaging, viral-worthy content that resonates with your target audience.",
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
            <div className=" p-8 rounded-3xl backdrop-blur-sm border border-gray-800 relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-700/90 rounded-full blur-3xl"></div>
            <h3 className="text-3xl font-bold text-white mb-4 relative">{features[0].title}</h3>
            <p className="text-gray-400 relative">{features[0].description}</p>
            </div>
          
          {/* Google Ads */}
          <div className=" p-8 rounded-3xl backdrop-blur-sm border border-gray-800 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-700/90 rounded-full blur-3xl"></div>
                <h3 className="text-3xl font-bold text-white mb-4">{features[1].title}</h3>
                <p className="text-gray-400">{features[1].description}</p>
                </div>
        </div>

        {/* TikTok Ads - Full Width */}
        <div className=" p-8 rounded-3xl backdrop-blur-sm border border-gray-800 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-700/90 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-700/90 rounded-full blur-3xl"></div> 
          <h3 className="text-3xl font-bold text-white mb-4">{features[2].title}</h3>
          <p className="text-gray-400">{features[2].description}</p>
        </div>
      </div>
    </div>
  );
}
