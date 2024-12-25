
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.2,
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

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {hoveredCardIndex !== null && (
        <div 
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            backgroundImage: `url('${services[hoveredCardIndex].bgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
      )}

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-12">
        <div className={`text-center mb-20 transition-opacity duration-300 ${hoveredCardIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => cardsRef.current[index] = el}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                hoveredCardIndex === null ? 'opacity-100 scale-100' :
                hoveredCardIndex === index ? 'opacity-100 scale-110 z-20' : 'opacity-0 scale-95 pointer-events-none'
              }`}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative h-[400px] p-6 flex flex-col justify-end">
                <p className="mb-2 text-white/60">0{index + 1}</p>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
