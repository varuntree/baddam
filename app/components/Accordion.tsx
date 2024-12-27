
"use client";

import React, { useEffect, useRef, useState } from 'react';

const accordionData = [
  {
    title: "What is AI automation, and how can it benefit my business?",
    content: "AI automation uses artificial intelligence to perform tasks that typically require human effort. This can include customer support, social media management, workflow optimization, and more. It helps save time, reduce costs, and improve accuracy while scaling operations."
  },
  {
    title: "Can AI help with social media management?",
    content: "Absolutely! Our Social Media Automation AI can schedule posts, engage with followers, and respond to messages, ensuring consistent and timely interactions with your audience while saving you hours of manual work."
  },
  {
    title: "What is Automated Prospecting, and how does it work for real estate agents?",
    content: "Automated Prospecting uses AI to enhance branding, qualify leads, and nurture potential clients. It's designed to guarantee ROI for real estate professionals by streamlining the client acquisition process."
  },
  {
    title: "Do you offer custom AI solutions?",
    content: "Yes, we specialize in creating custom AI solutions to address specific challenges in your business. Our team works closely with you to design and implement solutions that drive measurable results."
  },
  {
    title: "Is AI safe to use for business operations?",
    content: "Yes, our AI solutions are designed with security and reliability in mind. We use industry-leading practices to ensure your data remains secure while maximizing the efficiency of your workflows."
  },
  {
    title: "How long does it take to implement an AI solution?",
    content: "The timeline depends on the complexity of your requirements. On average, most solutions can be implemented within a few weeks to a couple of months, ensuring they're customized and optimized for your business."
  },
  {
    title: "How do you support businesses after implementation?",
    content: "We provide ongoing support, training, and updates to ensure your AI solutions continue to meet your business needs as they grow and evolve."
  },
  {
    title: "Do I need technical expertise to use your AI solutions?",
    content: "Not at all! Our solutions are user-friendly and designed for seamless integration into your current operations. We also provide training and support to make the transition smooth."
  }
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const buttons = document.querySelectorAll('.accordion-button');
    const circle = circleRef.current;

    if (!circle) return;

    buttons.forEach(button => {
      button.addEventListener('mouseenter', (e) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        gsap.to(circle, {
          opacity: 1,
          scale: 1,
          x: rect.left + rect.width - 50,
          y: rect.top + rect.height/2 - 25,
          duration: 0.5,
          ease: "power2.out"
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(circle, {
          opacity: 0,
          scale: 0.5,
          duration: 0.3,
          ease: "power2.in"
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div 
        ref={circleRef} 
        className="fixed w-[50px] h-[50px] pointer-events-none opacity-0 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-xs font-medium z-50"
      >
        Click here
      </div>
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
                className="accordion-button w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors relative"
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
