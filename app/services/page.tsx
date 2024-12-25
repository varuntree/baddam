
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    id: "in-person",
    title: "In-Person Events",
    description: "Immersive experiences to grow your leadership and your team's relationship."
  },
  {
    id: "training",
    title: "Training Programs",
    description: "Leadership training, business mentoring, and masterclasses."
  },
  {
    id: "coaching",
    title: "Executive Coaching",
    description: "1:1 coaching from Ryan and his executive team helps employees lead with skill."
  },
  {
    id: "ai-coaching",
    title: "AI-Powered Coaching",
    description: "Scaling the coaching industry globally with groundbreaking AI."
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
    <div className="min-h-screen bg-white relative">
      {hoveredCardIndex !== null && (
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url('${
              hoveredCardIndex === 0 ? '/test.png' :
              hoveredCardIndex === 1 ? '/workflow.png' :
              hoveredCardIndex === 2 ? '/conversational.png' :
              '/reputational.png'
            }')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            <span className="text-primary">Ways</span> We Can Work Together
          </h2>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
            We are creating a world where everyone has the coach and mentor they need
            to unlock their potential and fulfill their purpose
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => cardsRef.current[index] = el}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 ${
                hoveredCardIndex === null || hoveredCardIndex === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
              }`}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative h-[400px] p-6 flex flex-col justify-end">
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
