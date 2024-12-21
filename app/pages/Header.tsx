
import React from 'react';
import Navbar from '../components/Navbar';
import MainHeading from '../components/MainHeading';

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
            <div className="relative z-10 container mx-auto px-4 flex items-center justify-center h-full">
                <MainHeading />
            </div>
        </div>
    );
}
