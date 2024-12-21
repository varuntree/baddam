
"use client";
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import CornerEdgeCard from '../components/CornerEdgeCard';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const imageContainerRef = useRef(null);
    
    return (
        <div className="relative h-screen w-full">
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
                <div className="relative w-[70%] mx-auto mt-12" ref={imageContainerRef}>
                    <Image 
                        src="/header-automation.png"
                        alt="Automation"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    );

    const imageContainerRef = useRef(null);

    useEffect(() => {
        if (imageContainerRef.current) {
            gsap.set(imageContainerRef.current, { perspective: 1000 });
            
            gsap.to(imageContainerRef.current, {
                scrollTrigger: {
                    trigger: imageContainerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                },
                rotateX: 30,
                scale: 0.9,
                yPercent: -5,
                ease: "none",
            });
        }
    }, []);
}
