"use client";

import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "In-Person Events",
    description: "Immersive experiences to grow your leadership and your team in a collaborative way",
    category: "01",
    imagePath: "/conversational.png"
  },
  {
    id: 2,
    title: "Training Programs",
    description: "Leadership training, business mentoring, and masterclasses",
    category: "02",
    imagePath: "/workflow.png"
  },
  {
    id: 3,
    title: "Executive Coaching",
    description: "1:1 coaching from Ryan and his executive team helps employees to drive growth",
    category: "03",
    imagePath: "/reputational.png"
  },
  {
    id: 4,
    title: "AI-powered Coaching",
    description: "Scaling the coaching industry globally with groundbreaking AI solutions",
    category: "04",
    imagePath: "/robo.jpg"
  }
];

export default function Services() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    // Header animation
    gsap.from(headerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        end: "top 60%",
        scrub: true
      }
    });

    // Horizontal scrolling setup
    const container = containerRef.current;
    const cards = cardsRef.current;
    const totalWidth = container.scrollWidth;

    gsap.to(container, {
      x: () => -(totalWidth - window.innerWidth) + 100, // Adjust the 100 as needed for padding
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    // Cards sliding in animation
    cards.forEach((card, index) => {
      gsap.from(card, {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          containerAnimation: ScrollTrigger.getById('horizontalScroll'),
          start: "left center",
          end: "right center",
          scrub: true
        }
      });
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Detect touch devices
  const isTouchDevice = () => {
    return ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  };

  return (
    <div className="min-h-screen bg-black py-24 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 transition-opacity duration-700 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${activeImage || ''})`,
          opacity: activeImage ? 0.3 : 0,
          transition: 'opacity 0.7s ease-in-out'
        }}
      />
      
      <div className="relative z-10 w-full px-6 md:px-12">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-20">
          <p className="text-orange-500 mb-4 text-sm md:text-base">WAYS</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            We Can Work Together
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            We are creating a world where everyone has the coach and mentor they need
            to unlock their potential and fulfill their purpose
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div ref={containerRef} className="flex space-x-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => cardsRef.current[index] = el}
              className="group relative min-w-[300px] flex-shrink-0 p-6 rounded-3xl border border-white/10 overflow-hidden transition-transform duration-500 hover:scale-105 active:scale-100"
              onMouseEnter={() => {
                if (!isTouchDevice()) {
                  setActiveImage(service.imagePath);
                  gsap.to(cardsRef.current[index], {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                }
              }}
              onMouseLeave={() => {
                if (!isTouchDevice()) {
                  setActiveImage(null);
                  gsap.to(cardsRef.current[index], {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                }
              }}
            >
              {/* Background Gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-black to-neutral-900 opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-orange-600/30 backdrop-blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Card Content */}
              <div className="relative z-10">
                <span className="text-orange-500 text-sm">{service.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-4">{service.title}</h3>
                <p className="text-white/70 text-sm">{service.description}</p>
                <div className="mt-8">
                  <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-orange-500 transition-all duration-300">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
