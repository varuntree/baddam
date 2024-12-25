
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
    <div className="min-h-screen bg-white">
      <div className="relative z-10 pt-32 pb-20 px-4 md:px-12">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
            Empowering businesses with cutting-edge AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => cardsRef.current[index] = el}
              className="relative rounded-3xl overflow-hidden transition-all duration-500 bg-white border border-gray-200 hover:shadow-xl"
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <div className="relative h-[400px] p-6 flex flex-col justify-end">
                <p className="mb-2 text-black/60">0{index + 1}</p>
                <h2 className="text-2xl font-bold mb-3 text-black">{service.title}</h2>
                <p className="text-black">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
