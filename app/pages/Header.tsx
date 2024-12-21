
"use client";

import React, { useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CornerEdgeCard from '../components/CornerEdgeCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const imageContainerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: imageContainerRef.current,
                start: "top 70%",
                end: "bottom 20%",
                scrub: 1,
            }
        });

        tl.to(imageContainerRef.current, {
            rotateX: -60,
            skewX: 15,
            y: "-30%",
            duration: 1,
            ease: "power2.inOut"
        });

    }, []);

    return (
        <div className="relative min-h-[200vh]">
            <div className="relative h-screen">
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
                </div>
            </div>
            <div ref={imageContainerRef} className="sticky bottom-0 w-full flex justify-center items-end pb-20">
                <img 
                    src="/header-automation.png" 
                    alt="Automation" 
                    className="w-[70%] rounded-3xl transform-gpu"
                />
            </div>
        </div>
    );
}
