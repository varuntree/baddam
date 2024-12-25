
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  bgImage: string;
}

const services: ServiceCard[] = [
  {
    id: "conversational",
    title: "Conversational AI",
    description: "Intelligent chatbots and virtual assistants powered by advanced natural language processing.",
    bgImage: "/conversational.png"
  },
  {
    id: "workflow",
    title: "Workflow Automation",
    description: "Streamline your business processes with intelligent automation solutions.",
    bgImage: "/workflow.png"
  },
  {
    id: "testing",
    title: "AI Testing",
    description: "Advanced testing methodologies powered by artificial intelligence.",
    bgImage: "/test.png"
  },
  {
    id: "reputation",
    title: "Reputation Management",
    description: "AI-powered reputation monitoring and management solutions.",
    bgImage: "/reputational.png"
  }
];

export default function Services() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate cards on mount
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          { 
            y: 50, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
            }
          }
        );
      }
    });
  }, []);

  useEffect(() => {
    if (bgImageRef.current) {
      if (hoveredCardIndex !== null) {
        gsap.to(bgImageRef.current, {
          opacity: 0.3,
          duration: 0.6,
          ease: "power2.inOut",
          backgroundImage: `url('${services[hoveredCardIndex].bgImage}')`
        });
      } else {
        gsap.to(bgImageRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut"
        });
      }
    }
  }, [hoveredCardIndex]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div 
        ref={bgImageRef}
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0"
      />

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-12">
        <div className={`text-center mb-20 transition-opacity duration-300 ${hoveredCardIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge AI solutions
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => cardsRef.current[index] = el}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 bg-white flex-1 ${
                hoveredCardIndex === null ? 'opacity-100 scale-100' :
                hoveredCardIndex === index ? 'opacity-100 scale-105 z-20' : 'opacity-50 scale-95'
              }`}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${hoveredCardIndex === index ? 'to-black/60' : 'to-transparent'} transition-colors duration-300`} />
              <div className={`absolute inset-0 ${hoveredCardIndex === index ? 'bg-primary/20 backdrop-blur-md' : ''} transition-all duration-300`} />
              <div className="relative h-[350px] p-6 flex flex-col justify-end">
                <p className={`mb-2 transition-colors duration-300 ${hoveredCardIndex === index ? 'text-white/60' : 'text-black/60'}`}>0{index + 1}</p>
                <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${hoveredCardIndex === index ? 'text-white' : 'text-black'}`}>{service.title}</h3>
                <p className={`transition-colors duration-300 ${hoveredCardIndex === index ? 'text-white/80' : 'text-black/80'}`}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
