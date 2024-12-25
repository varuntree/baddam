"use client";

import React from 'react';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
        </div>

        {/* Virtual Assistant Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-32">
          {/* Left Image */}
          <div className="relative">
            <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-3xl transform -rotate-6 opacity-20"></div>
              <img 
                src="/test.png" 
                alt="Virtual Assistant Interface"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="text-orange-500 text-sm font-medium mb-2">
              [ 02 ]
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Virtual Assistant
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Enhance your business operations with our AI-powered virtual assistant. From handling customer inquiries to managing schedules and automating routine tasks, our virtual assistant provides 24/7 support to streamline your workflow and boost productivity.
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300">
              Learn More
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Ways We Can Work Together Section */}
        <div className="pt-32">
          <div className="text-center mb-16">
            <div className="text-orange-500 text-sm font-medium mb-2">[ WORK ]</div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">Ways We Can Work Together</h2>
            <p className="text-gray-600 text-lg">
              We are creating a world where everyone has the coach and mentor they need 
              to unlock their potential and fulfill their purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'In-Person Events',
                description: 'Immersive experiences to grow your leadership and your business simultaneously'
              },
              {
                number: '02',
                title: 'Training programs',
                description: 'Leadership training, business mentorship, and masterclasses'
              },
              {
                number: '03',
                title: 'Executive coaching',
                description: '1:1 coaching from Ryan and his executive team helps employees to improve their skills'
              },
              {
                number: '04',
                title: 'AI-powered coaching',
                description: 'Scaling the coaching industry globally with groundbreaking AI'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-3xl ${index === 1 ? 'bg-gradient-to-br from-orange-500 to-orange-400 text-white' : 'bg-gray-50'}`}
              >
                <div className="text-sm mb-4">{item.number}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className={`text-sm ${index === 1 ? 'text-white/90' : 'text-gray-600'}`}>
                  {item.description}
                </p>
                <button className={`mt-6 w-8 h-8 rounded-full border ${index === 1 ? 'border-white/20 text-white hover:bg-white hover:text-orange-500' : 'border-gray-300 text-gray-600 hover:bg-black hover:text-white hover:border-black'} flex items-center justify-center transition-all duration-300`}>
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
