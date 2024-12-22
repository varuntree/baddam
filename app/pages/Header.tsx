"use client";
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import CornerEdgeCard from '../components/CornerEdgeCard';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const imageRef = useRef<HTMLDivElement>(null);
    const [hasHydrated, setHasHydrated] = useState(false);

    useEffect(() => {
        setHasHydrated(true); // Ensure animations are client-only
    }, []);

    useEffect(() => {
        if (!imageRef.current || !hasHydrated) return;

        const matchMediaQuery = window.matchMedia('(min-width: 768px)');

        const setupAnimation = (matches: boolean) => {
            ScrollTrigger.killAll(); // Clean up old animations
            gsap.to(imageRef.current, {
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                    end: "bottom 40%",
                    scrub: 1,
                },
                rotateX: matches ? 30 : 20,
                scale: matches ? 1.1 : 1.05,
                transformPerspective: 1000,
                transformOrigin: "center center",
                duration: 1,
                ease: "power2.out"
            });
        };

        setupAnimation(matchMediaQuery.matches);
        matchMediaQuery.addEventListener('change', (e) => setupAnimation(e.matches));

        return () => {
            ScrollTrigger.killAll(); // Cleanup on unmount
            matchMediaQuery.removeEventListener('change', (e) => setupAnimation(e.matches));
        };
    }, [hasHydrated]);

    if (!hasHydrated) {
        return null; // Prevent initial mismatch
    }

    return (
        <div className="relative min-h-screen w-full">
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/headerVideo.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-lg"></div>
            <Navbar />
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-screen">
                <CornerEdgeCard 
                    highlightedWords={["Businesses", "Automation"]} 
                />
                <div className="flex justify-center gap-4 mt-8">
                    <button className="px-6 py-3 bg-white text-black rounded-3xl hover:bg-white/90 transition-colors">
                        Get Started
                    </button>
                    <button className="px-6 py-3 border-2 border-primary text-white rounded-3xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                        Learn More
                    </button>
                </div>
                <div 
                    ref={imageRef} 
                    className="mt-12 w-full max-w-3xl mx-auto p-4 transform-gpu"
                >
                    <img 
                        src="/header-automation.png" 
                        alt="Automation Header" 
                         className="w-[60%] mx-auto h-auto rounded-3xl shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
}
