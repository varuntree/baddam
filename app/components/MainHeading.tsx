
import React from 'react';

export default function MainHeading() {
    return (
        <div className="relative w-full py-20">
            {/* Top right corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full" />
            
            {/* Bottom left corner */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-tr-full" />
            
            {/* Main heading */}
            <h1 className="text-white text-center text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight">
                Transforming Businesses with AI-Driven Automation
            </h1>
        </div>
    );
}
