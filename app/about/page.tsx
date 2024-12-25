
"use client";

import React from 'react';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-3xl transform -rotate-6 opacity-20"></div>
              <img 
                src="/test.png" 
                alt="Virtual Coach Interface"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="text-orange-500 text-sm font-medium mb-2">
              [ 01 ]
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Virtual Coach
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              With the Zoom integration, conversations in meetings and webinars are converted to text on the screen in real time, and minutes are automatically saved after the call is over. The visualization of conversations deepens understanding and increases productivity even when working remotely.
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300">
              Book a Demo
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
