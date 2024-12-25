
"use client";

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import AboutCard from '../components/AboutCard';

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
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      cardsRef.current.forEach((card, i) => {
        if (card) {
          const speed = 0.1 + i * 0.05;
          gsap.to(card, {
            y: scrollTop * speed,
            ease: "power2.out"
          });
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (teamMembers.length * 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/headerVideo.mp4"
        autoPlay
        loop
        muted
      />

      <div className="min-h-screen bg-black/50 backdrop-blur-lg py-12 md:py-24">
        <div className="w-full px-4 md:px-12">
          <div className="py-8 md:py-16">
            {/* Header Section */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">
                About Us
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                We are a team of passionate individuals dedicated to revolutionizing the way
                businesses interact with AI technology.
              </p>
            </div>

            {/* Mission & Vision Section */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
              <div ref={el => {cardsRef.current[0] = el}}>
                <AboutCard
                  title="Our Mission"
                  description="We aim to empower businesses by transforming their operations through AI innovation,
                    ensuring they are equipped for the challenges of tomorrow."
                />
              </div>
              <div ref={el => {cardsRef.current[1] = el}}>
                <AboutCard
                  title="Our Vision"
                  description="To revolutionize industries by making AI an integral, accessible, and impactful
                    part of every business."
                />
              </div>
            </div>

            {/* Core Values Section */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Core Values</h2>
              <div className="grid md:grid-cols-3 gap-4 md:gap-8">
                {coreValues.map((value, index) => (
                  <div key={index} ref={el => {cardsRef.current[index + 2] = el}}>
                    <AboutCard
                      title={value.title}
                      description={value.description}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Story Section */}
            <div ref={el => {cardsRef.current[5] = el}} className="mb-12 md:mb-16">
              <AboutCard
                title="Our Story"
                description="Founded with the belief that AI can empower businesses of all sizes, we've grown
                  into a leading agency delivering impactful solutions for industries worldwide.
                  Our journey began with a simple mission: to make AI accessible and practical for
                  every business, regardless of their size or technical expertise."
                className="text-center"
              />
            </div>

            {/* Leadership Team Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Leadership Team</h2>
              <div className="relative overflow-hidden py-8">
                <div 
                  className="flex gap-4 md:gap-8 transition-transform duration-500"
                  style={{
                    transform: `translateX(-${scrollPosition}px)`,
                    width: `${teamMembers.length * 400}px`
                  }}
                >
                  {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
                    <div
                      key={index}
                      ref={el => {cardsRef.current[index + 6] = el}}
                      className="flex-shrink-0 w-[300px] md:w-[350px]"
                    >
                      <AboutCard
                        description={
                          <>
                            <div className="h-[300px] md:h-[400px] relative bg-white/5 mb-4 rounded-2xl overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                            <p className="text-primary mb-2">{member.role}</p>
                            <p className="text-sm">{member.bio}</p>
                          </>
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
