
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import InfoCard from "../components/InfoCard";

export default function AboutUsPage() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          { y: 0 },
          {
            y: -90,
            scrollTrigger: {
              trigger: card,
              start: "top center",
              end: "bottom top",
              scrub: 1.5,
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
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/headerVideo.mp4"
        autoPlay
        loop
        muted
      />

      <div className="min-h-screen bg-black/50 backdrop-blur-lg py-12 md:py-24">
        <div className="w-full px-4 md:px-12">
          <div className="py-8 md:py-16">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">Welcome to Baddam Agency</h1>
              <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4">
                Where innovation meets automation. Our mission is to empower businesses to thrive in a competitive digital landscape by leveraging cutting-edge AI solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
              <InfoCard
                cardRef={el => {cardsRef.current[0] = el}}
                title="Our Vision"
                description="At Baddam Agency, we envision a future where AI drives operational excellence and fuels innovation for businesses of all sizes. Our goal is to enable companies to adapt, evolve, and excel in an ever-changing market."
              />
              <InfoCard
                cardRef={el => {cardsRef.current[1] = el}}
                title="Our Story"
                description="Baddam Agency was founded with a vision to make AI accessible, impactful, and transformative for businesses worldwide. Our journey began with a desire to bridge the gap between complex AI technologies and real-world business needs."
              />
            </div>

            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">What Drives Us</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {[
                  {
                    title: "Innovation",
                    description: "Staying at the forefront of AI advancements to provide state-of-the-art solutions."
                  },
                  {
                    title: "Client Success",
                    description: "Partnering with businesses to achieve their goals through AI-driven insights and automation."
                  },
                  {
                    title: "Scalability",
                    description: "Ensuring every solution grows alongside your business."
                  },
                  {
                    title: "Excellence",
                    description: "Striving for results that exceed expectations."
                  }
                ].map((value, index) => (
                  <InfoCard
                    key={index}
                    cardRef={el => {cardsRef.current[index + 2] = el}}
                    title={value.title}
                    description={value.description}
                  />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              <InfoCard
                cardRef={el => {cardsRef.current[6] = el}}
                title="Why Choose Baddam Agency?"
                description="We deliver custom solutions tailored to your unique business needs, leverage advanced technology, bring proven expertise, and provide end-to-end support to ensure your success."
              />
              <InfoCard
                cardRef={el => {cardsRef.current[7] = el}}
                title="Join the AI Revolution"
                description="Are you ready to unlock the full potential of your business? Whether it's automating processes, boosting engagement, or achieving measurable growth, Baddam Agency is here to lead the way."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
