
import React from 'react';
import Navbar from '../components/Navbar';
import CornerEdgeCard from '../components/CornerEdgeCard';

export default function Header() {
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
            </div>
        </div>
    );
}
