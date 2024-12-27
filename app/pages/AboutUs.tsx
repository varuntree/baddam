
// "use client";

// import { useEffect, useState, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import InfoCard from '../components/InfoCard';

// const teamMembers = [
//   {
//     name: "John Smith",
//     role: "CEO & Founder",
//     bio: "With over 15 years in AI and machine learning, John leads our vision of making AI accessible to all businesses.",
//     image: "/team1.jpg"
//   },
//   {
//     name: "Sarah Johnson",
//     role: "CTO",
//     bio: "A pioneer in AI development with a focus on creating scalable, enterprise-ready solutions.",
//     image: "/team2.jpg"
//   },
//   {
//     name: "Michael Brown",
//     role: "Lead Developer",
//     bio: "Expert in AI implementation and integration, specializing in custom business solutions.",
//     image: "/team3.jpg"
//   },
//   {
//     name: "Emily Davis",
//     role: "Product Manager",
//     bio: "Bridging the gap between AI technology and business needs with innovative product strategies.",
//     image: "/team4.jpg"
//   },
//   {
//     name: "David Wilson",
//     role: "Design Lead",
//     bio: "Creating intuitive interfaces that make AI technology accessible and user-friendly.",
//     image: "/team5.jpg"
//   }
// ];

// const coreValues = [
//   {
//     title: "Client-Centricity",
//     description: "We put your needs first to create customized, effective solutions."
//   },
//   {
//     title: "Innovation",
//     description: "We leverage the latest advancements in AI to deliver transformative results."
//   },
//   {
//     title: "Excellence",
//     description: "We strive for excellence in every solution we deliver."
//   }
// ];

// export default function AboutUs() {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     cardsRef.current.forEach((card, index) => {
//       if (card) {
//         gsap.fromTo(card, 
//           { y: 0 },
//           {
//             y: -90,
//             scrollTrigger: {
//               trigger: card,
//               start: "top center",
//               end: "bottom top",
//               scrub: 1.5,
//             }
//           }
//         );
//       }
//     });

//     if (videoRef.current) {
//       gsap.to(videoRef.current, {
//         scrollTrigger: {
//           scrub: 1.5
//         },
//         objectPosition: "center 50%",
//         ease: "none"
//       });
//     }
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setScrollPosition((prev) => (prev + 1) % (teamMembers.length * 100));
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen relative">
//       <video
//         ref={videoRef}
//         className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
//         src="/headerVideo.mp4"
//         autoPlay
//         loop
//         muted
//       />

//       <div className="min-h-screen bg-black/50 backdrop-blur-lg py-12 md:py-24">
//         <div className="w-full px-4 md:px-12">
//           <div className="py-8 md:py-16">
//             <div className="text-center mb-12 md:mb-16">
//               <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">About Us</h1>
//               <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4">
//                 We are a team of passionate individuals dedicated to revolutionizing the way
//                 businesses interact with AI technology.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
//               <InfoCard
//                 cardRef={el => {cardsRef.current[0] = el}}
//                 title="Our Mission"
//                 description="We aim to empower businesses by transforming their operations through AI innovation,
//                 ensuring they are equipped for the challenges of tomorrow."
//               />
//               <InfoCard
//                 cardRef={el => {cardsRef.current[1] = el}}
//                 title="Our Vision"
//                 description="To revolutionize industries by making AI an integral, accessible, and impactful
//                 part of every business."
//               />
//             </div>

//             <div className="mb-12 md:mb-16">
//               <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Core Values</h2>
//               <div className="grid md:grid-cols-3 gap-4 md:gap-8">
//                 {coreValues.map((value, index) => (
//                   <InfoCard
//                     key={index}
//                     cardRef={el => {cardsRef.current[index + 2] = el}}
//                     title={value.title}
//                     description={value.description}
//                   />
//                 ))}
//               </div>
//             </div>

//             <InfoCard
//               cardRef={el => {cardsRef.current[5] = el}}
//               title="Our Story"
//               description="Founded with the belief that AI can empower businesses of all sizes, we've grown
//               into a leading agency delivering impactful solutions for industries worldwide.
//               Our journey began with a simple mission: to make AI accessible and practical for
//               every business, regardless of their size or technical expertise."
//               className="mb-12 md:mb-16"
//             />

//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Leadership Team</h2>
//               <div className="relative overflow-hidden py-8">
//                 <div 
//                   className="flex gap-4 md:gap-8 transition-transform duration-500"
//                   style={{
//                     transform: `translateX(-${scrollPosition}px)`,
//                     width: `${teamMembers.length * 400}px`
//                   }}
//                 >
//                   {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
//                     <div
//                       key={index}
//                       ref={el => {cardsRef.current[index + 6] = el}}
//                       className="flex-shrink-0 w-[300px] md:w-[350px] bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden transform-gpu border border-white/10 shadow-xl"
//                     >
//                       <div className="h-[300px] md:h-[400px] relative bg-white/5">
//                         <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
//                       </div>
//                       <div className="p-6">
//                         <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{member.name}</h3>
//                         <p className="text-primary mb-2">{member.role}</p>
//                         <p className="text-white/70 text-sm">{member.bio}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Chris Wright",
    role: "CEO of Wednesday",
    quote: "Thanks to Baddam Agency, our business experienced a remarkable turnaround in automation. Their expertise helped us achieve unprecedented efficiency."
  },
  {
    name: "Sarah Yanna",
    role: "Director of Saturday",
    quote: "Baddam Agency transformed our operations completely. Their innovative solutions tripled our revenue in record time."
  },
  {
    name: "Belinda Meyers",
    role: "COO of Friday",
    quote: "We never realized the power of AI until we found Baddam Agency. It's doubled our productivity in just a few months, absolutely incredible."
  },
  {
    name: "Jonathan Day",
    role: "Co-founder of Monday",
    quote: "Baddam Agency exceeded our expectations! Their approach to AI integration is unparalleled, leading to substantial growth in our systems."
  },
  {
    name: "Melissa Reid",
    role: "Founder of Tuesday",
    quote: "Before discovering Baddam Agency, we were hesitant about investing in AI, but they proved us wrong with their incredible results."
  }
];

export default function AboutUs() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // First row animation
    gsap.to(".row-1", {
      x: "-50%",
      scrollTrigger: {
        trigger: ".testimonials-container",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Middle row animation (opposite direction)
    gsap.to(".row-2", {
      x: "50%",
      scrollTrigger: {
        trigger: ".testimonials-container",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Last row animation (same as first)
    gsap.to(".row-3", {
      x: "-50%",
      scrollTrigger: {
        trigger: ".testimonials-container",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4">
            There's a reason people are{' '}
            <span className="italic text-orange-500">raving</span> about us.
          </h2>
        </div>

        <div className="testimonials-container space-y-8 overflow-hidden">
          {/* First Row */}
          <div className="row-1 flex space-x-6">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-2xl min-w-[400px]">
                <p className="text-lg mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Row */}
          <div className="row-2 flex space-x-6 translate-x-[-50%]">
            {testimonials.slice(2, 4).map((testimonial, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-2xl min-w-[400px]">
                <p className="text-lg mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Last Row */}
          <div className="row-3 flex space-x-6">
            {testimonials.slice(4).map((testimonial, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-2xl min-w-[400px]">
                <p className="text-lg mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
