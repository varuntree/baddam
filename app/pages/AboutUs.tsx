
"use client";

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    bio: "With over 15 years in AI and machine learning, John leads our vision of making AI accessible to all businesses.",
    image: "/team1.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "A pioneer in AI development with a focus on creating scalable, enterprise-ready solutions.",
    image: "/team2.jpg"
  },
  {
    name: "Michael Brown",
    role: "Lead Developer",
    bio: "Expert in AI implementation and integration, specializing in custom business solutions.",
    image: "/team3.jpg"
  },
  {
    name: "Emily Davis",
    role: "Product Manager",
    bio: "Bridging the gap between AI technology and business needs with innovative product strategies.",
    image: "/team4.jpg"
  },
  {
    name: "David Wilson",
    role: "Design Lead",
    bio: "Creating intuitive interfaces that make AI technology accessible and user-friendly.",
    image: "/team5.jpg"
  }
];

const coreValues = [
  {
    title: "Client-Centricity",
    description: "We put your needs first to create customized, effective solutions."
  },
  {
    title: "Innovation",
    description: "We leverage the latest advancements in AI to deliver transformative results."
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every solution we deliver."
  }
];

export default function AboutUs() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin();

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      const offset = 15;

      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.to(card, {
            duration: 0.5,
            x: moveX / offset,
            y: moveY / offset,
            rotation: moveX / (offset * 4),
            ease: "power2.out"
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (teamMembers.length * 100));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We are a team of passionate individuals dedicated to revolutionizing the way
            businesses interact with AI technology.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div 
            ref={el => {cardsRef.current[0] = el}}
            className="bg-neutral-900 p-8 rounded-3xl transform-gpu"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/70">
              We aim to empower businesses by transforming their operations through AI innovation,
              ensuring they are equipped for the challenges of tomorrow.
            </p>
          </div>
          <div 
            ref={el => {cardsRef.current[1] = el}}
            className="bg-neutral-900 p-8 rounded-3xl transform-gpu"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-white/70">
              To revolutionize industries by making AI an integral, accessible, and impactful
              part of every business.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                ref={el => {cardsRef.current[index + 2] = el}}
                className="bg-neutral-900 p-8 rounded-3xl transform-gpu"
              >
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div 
          ref={el => {cardsRef.current[5] = el}}
          className="mb-16 bg-neutral-900 p-8 rounded-3xl transform-gpu"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Story</h2>
          <p className="text-white/70 text-center max-w-4xl mx-auto">
            Founded with the belief that AI can empower businesses of all sizes, we've grown
            into a leading agency delivering impactful solutions for industries worldwide.
            Our journey began with a simple mission: to make AI accessible and practical for
            every business, regardless of their size or technical expertise.
          </p>
        </div>

        {/* Leadership Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Leadership Team</h2>
          <div className="relative overflow-hidden py-8">
            <div 
              className="flex gap-8 transition-transform duration-500"
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                width: `${teamMembers.length * 400}px`
              }}
            >
              {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
                <div
                  key={index}
                  ref={el => {cardsRef.current[index + 6] = el}}
                  className="flex-shrink-0 w-[350px] bg-neutral-900 rounded-3xl overflow-hidden transform-gpu"
                >
                  <div className="h-[400px] relative bg-neutral-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-primary mb-2">{member.role}</p>
                    <p className="text-white/70 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
