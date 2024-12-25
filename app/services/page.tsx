"use client";

import React, { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const services = [
  {
    id: 1,
    title: "In-Person Events",
    description:
      "Immersive experiences to grow your leadership and your team in a collaborative way",
    category: "01",
    imagePath: "/test.png",
  },
  {
    id: 2,
    title: "Training Programs",
    description: "Leadership training, business mentoring, and masterclasses",
    category: "02",
    imagePath: "/workflow.png",
  },
  {
    id: 3,
    title: "Executive Coaching",
    description:
      "1:1 coaching from Ryan and his executive team helps employees to drive growth",
    category: "03",
    imagePath: "/reputational.png",
  },
  {
    id: 4,
    title: "AI-powered Coaching",
    description:
      "Scaling the coaching industry globally with groundbreaking AI solutions",
    category: "04",
    imagePath: "/robo.jpg",
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
