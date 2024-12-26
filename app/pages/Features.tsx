
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
            From Google ads, to Meta ads, to TikTok ads, and even content creation, we've got you covered on everything front.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Meta Ads */}
          <div className="bg-gradient-to-br from-blue-800 via-blue-900 to-transparent p-8 rounded-3xl backdrop-blur-sm border border-blue-800/50">
            <h3 className="text-3xl font-bold text-white mb-4">{features[0].title}</h3>
            <p className="text-gray-300">{features[0].description}</p>
          </div>
          
          {/* Google Ads */}
          <div className="bg-gradient-to-br from-orange-800 via-orange-900 to-transparent p-8 rounded-3xl backdrop-blur-sm border border-orange-800/50">
            <h3 className="text-3xl font-bold text-white mb-4">{features[1].title}</h3>
            <p className="text-gray-300">{features[1].description}</p>
          </div>
        </div>

        {/* TikTok Ads - Full Width */}
        <div className="bg-gradient-to-r from-orange-900 via-blue-900 to-blue-800 p-8 rounded-3xl backdrop-blur-sm border border-blue-800/50">
          <h3 className="text-3xl font-bold text-white mb-4">{features[2].title}</h3>
          <p className="text-gray-300">{features[2].description}</p>
        </div>
      </div>
    </div>
  );
}
