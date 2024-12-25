
"use client";

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animation
    gsap.from(headerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1
      }
    });

    // Horizontal scroll animation
    if (window.innerWidth > 768) {
      gsap.to(containerRef.current, {
        x: () => -(containerRef.current!.scrollWidth - window.innerWidth + 32),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20%",
          end: "+=2000",
          scrub: 1,
          pin: true
        }
      });
    }

    // Background change on scroll for all screen sizes
    services.forEach((service, index) => {
      ScrollTrigger.create({
        trigger: cardsRef.current[index],
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveImage(service.imagePath),
        onEnterBack: () => setActiveImage(service.imagePath),
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 transition-opacity duration-700 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${activeImage || ''})`,
          opacity: activeImage ? 0.3 : 0,
          transition: 'opacity 0.7s ease-in-out'
        }}
      />
      
      <div className="relative z-10">
        <div ref={headerRef} className="text-center mb-20 px-6">
          <p className="text-orange-500 mb-4 text-sm md:text-base">OUR SERVICES</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What We Offer
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            Your company tagline or mission statement goes here. Describe your overall 
            value proposition and what makes your services unique.
          </p>
        </div>

        <div 
          ref={containerRef} 
          className="flex md:pl-[10vw] gap-6 md:gap-8 px-6 md:px-0"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => cardsRef.current[index] = el}
              className="relative flex-shrink-0 w-full md:w-[600px] p-6 rounded-3xl border border-white/10 overflow-hidden"
              onMouseEnter={() => {
                setActiveImage(service.imagePath);
                gsap.to(cardsRef.current[index], {
                  scale: 1.05,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 768) {
                  setActiveImage(null);
                }
                gsap.to(cardsRef.current[index], {
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black to-neutral-900 opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-orange-600/30 backdrop-blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <span className="text-orange-500 text-sm">{service.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-4">{service.title}</h3>
                <p className="text-white/70 text-sm">{service.description}</p>
                <div className="mt-8">
                  <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-orange-500 transition-all duration-300">
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
