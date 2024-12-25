"use client";

import React, { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const services = [
  {
    id: 1,
    title: "Conversational AI",
    description:
      "Empower your business with intelligent chatbots and virtual assistants that deliver human-like interactions in real time. Our Conversational AI solutions are designed to seamlessly integrate across websites, social media platforms, and messaging apps, providing 24/7 support to your customers. By leveraging advanced Natural Language Processing (NLP), our tools not only resolve customer inquiries efficiently but also learn from each interaction to improve over time, ensuring a personalized and consistent user experience.",
    category: "01",
    imagePath: "/test.png",
  },
  {
    id: 2,
    title: "Content AI Creation",
    description: 
      "Elevate your brand's presence with AI-powered tools that create stunning visuals, videos, and social media content in minutes. From designing eye-catching graphics and producing professional-grade videos to crafting automated, personalized posts for your campaigns, our Content AI adapts to your brand's unique identity. Streamline your content creation process and focus on strategy while AI handles the creative workload, ensuring consistent, high-quality materials that resonate with your audience.",
    category: "02",
    imagePath: "/workflow.png",
  },
  {
    id: 3,
    title: "Social Media Automation AI",
    description:
      "Stay ahead of the curve with our AI-powered social media automation tools, designed to streamline your online presence. Automate routine tasks like posting and responding to comments, while leveraging AI analytics to understand audience behavior and optimize engagement. By ensuring timely and consistent communication across platforms, you can focus on building meaningful connections and driving brand growth.",
    category: "03",
    imagePath: "/reputational.png",
  },
  {
    id: 4,
    title: "Construction AI Solutions",
    description:
      "Streamline construction processes with tailored AI solutions designed to optimize safety, efficiency, and resource management. Our tools enable real-time safety monitoring using AI-powered cameras, automate project scheduling, and enhance on-site decision-making through predictive analytics. Whether it's reducing downtime, managing resources effectively, or ensuring compliance, our AI solutions are built to address the unique challenges of the construction industry and drive productivity to new heights.",
    category: "04",
    imagePath: "/robo.jpg",
  },
  {
    id: 5,
    title: "Automated Prospecting Systems (APS)",
    description:
      "Transform how you connect with clients using our Automated Prospecting Systems (APS), specifically designed for real estate professionals. From lead generation and qualification to personalized follow-ups, our AI-driven tools streamline the entire prospecting process. Boost your branding, nurture client relationships, and achieve measurable ROI while focusing on closing deals instead of chasing leads.",
    category: "05",
    imagePath: "/workflow.png",
  },
  {
    id: 6,
    title: "Web Crawler AI",
    description:
      "Harness the power of data with our AI-driven web crawlers that automate the collection and analysis of online information. Whether you need competitor insights, market trends, or customer sentiment analysis, our web crawlers deliver actionable intelligence at scale. Stay ahead of the competition by leveraging precise, up-to-date data to make smarter business decisions.",
    category: "06",
    imagePath: "/reputational.png",
  },
];

export default function Services() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the header in from below
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    });

    // For each card, create a ScrollTrigger to update the background
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveImage(services[index].imagePath),
        onEnterBack: () => setActiveImage(services[index].imagePath),
      });
    });

    // Clean up triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* FIXED BACKGROUND IMAGE */}
      {activeImage && (
        <div className="fixed inset-0 -z-10">
          <Image
            src={activeImage}
            alt="Service background"
            fill
            quality={100}
            priority
            className="object-cover transition-opacity duration-500"
            sizes="100vw"
          />
        </div>
      )}

      {/* DARK OVERLAY (to help text stand out) */}
      <div className="fixed inset-0 -z-0 bg-black/70" />

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        {/* Header Section */}
        <div
          ref={headerRef}
          className="flex flex-col items-center justify-center h-screen px-6 text-center"
        >
          <p className="text-orange-500 text-sm md:text-base mb-4">OUR SERVICES</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            What We Offer
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base">
            Your company tagline or mission statement goes here. Describe
            what makes your services unique and valuable.
          </p>
        </div>

        {/* Each service as a full-screen "section/card" */}
        {services.map((service, index) => (
          <section
            key={service.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="h-screen flex flex-col items-center justify-center px-6 
                       text-center border-t border-white/10"
          >
            <span className="text-orange-500 text-sm mb-2">
              {service.category}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              {service.title}
            </h2>
            <p className="text-white/70 max-w-lg mx-auto text-sm md:text-base">
              {service.description}
            </p>

            <div className="mt-8">
              <button
                className="w-8 h-8 rounded-full border border-white/20 
                          flex items-center justify-center text-white 
                          hover:bg-white hover:text-orange-500
                          transition-all duration-300"
              >
                +
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
