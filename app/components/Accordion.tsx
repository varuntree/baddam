
"use client";

import React, { useState } from 'react';

const accordionData = [
  {
    title: "How do you tailor Google Ads strategies for different businesses?",
    content: "We create customized Google Ads strategies based on your industry, target audience, and business goals. This includes keyword research, ad copy optimization, and budget allocation to maximize ROI."
  },
  {
    title: "What's unique about your Meta Ads approach?",
    content: "Our Meta Ads approach combines advanced targeting capabilities with AI-driven optimization to reach your ideal customers across Facebook and Instagram platforms."
  },
  {
    title: "How do you ensure effective TikTok Ads targeting and engagement?",
    content: "We leverage TikTok's unique algorithm and trending content patterns to create engaging ad campaigns that resonate with your target audience while maintaining brand authenticity."
  },
  {
    title: "How do you choose ad formats and placements across platforms?",
    content: "We analyze performance data and user behavior to select the most effective ad formats and placements that align with your campaign objectives and target audience preferences."
  },
  {
    title: "What reporting and analytics do you provide for ad campaign tracking?",
    content: "Our comprehensive reporting includes real-time performance metrics, ROI analysis, and actionable insights through interactive dashboards and regular performance reviews."
  },
  {
    title: "Do you offer ongoing ad optimization and management services?",
    content: "Yes, we provide continuous campaign monitoring, A/B testing, and optimization services to ensure your ads maintain peak performance and deliver the best possible results."
  }
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-orange-500 text-sm uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-4xl md:text-6xl font-bold">
            Common <span className="text-orange-500">Questions</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Find answers to frequently asked questions about our services
          </p>
        </div>
        
        <div className="space-y-4">
          {accordionData.map((item, index) => (
            <div key={index} className="border border-white/10 rounded-2xl overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-medium">{item.title}</span>
                <span className={`transform transition-transform ${activeIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 p-6 pt-0' : 'max-h-0'
                }`}
              >
                <p className="text-gray-400">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
