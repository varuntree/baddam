
"use client";

import React from 'react';
import gsap from 'gsap';

const teamMembers = [
  {
    name: "James Dunn",
    role: "Head of Conversion",
    image: "/team1.jpg"
  },
  {
    name: "Ayesha Dune",
    role: "Head of Sales",
    image: "/team2.jpg"
  },
  {
    name: "Joshua Brown",
    role: "Social Media Executive",
    image: "/team3.jpg"
  },
  {
    name: "Sarah Chen",
    role: "AI Developer",
    image: "/team4.jpg"
  }
];

export default function AboutUs() {
  React.useEffect(() => {
    // Auto scroll animation for team members
    const scrollTeam = gsap.to(".team-scroll", {
      x: `-${100 / 2}%`,
      duration: 20,
      ease: "none",
      repeat: -1
    });

    // Pause on hover
    const teamContainer = document.querySelector(".team-container");
    teamContainer?.addEventListener("mouseenter", () => scrollTeam.pause());
    teamContainer?.addEventListener("mouseleave", () => scrollTeam.play());

    return () => {
      scrollTeam.kill();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Team Section */}
      <div className="py-32">
        <div className="text-center mb-16">
          <div className="inline-block bg-zinc-900 px-4 py-1.5 rounded-full text-sm text-zinc-500 mb-4">
            Team
          </div>
          <h2 className="text-7xl font-bold text-white mb-4">
            Meet the <span className="italic text-orange-500">incredible</span> team.
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            We pride ourselves of being the best of the best and our team encapsulates that.
          </p>
          <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">
            Book a 15-min call →
          </button>
        </div>

        <div className="team-container relative w-full overflow-hidden">
          <div className="team-scroll flex gap-6 whitespace-nowrap">
            {/* First set */}
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] bg-zinc-900 rounded-3xl overflow-hidden"
              >
                <div className="h-[400px] bg-zinc-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-zinc-400">{member.role}</p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless scroll */}
            {teamMembers.map((member, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-[300px] bg-zinc-900 rounded-3xl overflow-hidden"
              >
                <div className="h-[400px] bg-zinc-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-zinc-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
