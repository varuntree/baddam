"use client";

import React, { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const services = [
  {
    id: 1,
    title: "Conversational AI",
    description:
      "Transform customer interactions with intelligent chatbots and virtual assistants that deliver human-like interactions in real time. Seamlessly integrate across platforms for 24/7 support.",
    category: "01",
    imagePath: "/conversational.png",
  },
  {
    id: 2,
    title: "Content AI Creation",
    description: 
      "Say goodbye to writer's block with our AI-driven content creation tools that generate high-quality, personalized materials for your marketing needs.",
    category: "02",
    imagePath: "/workflow.png",
  },
  {
    id: 3,
    title: "Social Media Automation AI",
    description:
      "Streamline your online presence with AI-powered social media automation tools. Focus on building meaningful connections while AI handles routine tasks.",
    category: "03",
    imagePath: "/reputational.png",
  },
  {
    id: 4,
    title: "Construction AI Solutions",
    description:
      "Optimize safety, efficiency, and resource management in construction with AI-driven solutions for real-time monitoring and predictive analytics.",
    category: "04",
    imagePath: "/robo.jpg",
  },
  {
    id: 5,
    title: "Real Estate APS",
    description:
      "Transform client connections with Automated Prospecting Systems designed specifically for real estate professionals.",
    category: "05",
    imagePath: "/workflow.png",
  },
  {
    id: 6,
    title: "Web Crawler AI",
    description:
      "Harness the power of data with AI-driven web crawlers that automate the collection and analysis of online information for actionable insights.",
    category: "06",
    imagePath: "/reputational.png",
  },
];

export default function Services() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the header in from below
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    });

    // For each card, create a ScrollTrigger to update the background
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveImage(services[index].imagePath),
        onEnterBack: () => setActiveImage(services[index].imagePath),
      });
    });

    // Clean up triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* FIXED BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 -z-10 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: activeImage ? `url(${activeImage})` : "none",
          transition: "background-image 0.5s ease-in-out",
        }}
      />

      {/* DARK OVERLAY (to help text stand out) */}
      <div className="fixed inset-0 -z-0 bg-black/70" />

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        {/* Header Section */}
        <div
          ref={headerRef}
          className="flex flex-col items-center justify-center h-screen px-6 text-center"
        >
          <p className="text-orange-500 text-sm md:text-base mb-4">OUR SERVICES</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            What We Offer
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base">
            Your company tagline or mission statement goes here. Describe
            what makes your services unique and valuable.
          </p>
        </div>

        {/* Each service as a full-screen "section/card" */}
        {services.map((service, index) => (
          <section
            key={service.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="h-screen flex flex-col items-center justify-center px-6 
                       text-center border-t border-white/10"
          >
            <span className="text-orange-500 text-sm mb-2">
              {service.category}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              {service.title}
            </h2>
            <p className="text-white/70 max-w-lg mx-auto text-sm md:text-base">
              {service.description}
            </p>

            <div className="mt-8">
              <button
                className="w-8 h-8 rounded-full border border-white/20 
                          flex items-center justify-center text-white 
                          hover:bg-white hover:text-orange-500
                          transition-all duration-300"
              >
                +
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
