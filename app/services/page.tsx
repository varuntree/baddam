
"use client";

import { useEffect, useRef } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    <div className="min-h-screen relative">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/headerVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Ways</span> We Can Work Together
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            We are creating a world where everyone has the coach and mentor they need
            to unlock their potential and fulfill their purpose
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => cardsRef.current[index] = el}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative h-[400px] p-6 flex flex-col justify-end">
                <p className="text-white/60 mb-2">0{index + 1}</p>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
