"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import LogoScroll from '../components/LogoScroll';

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
              Who We Are
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Welcome to Baddam Agency, where innovation meets automation. Our mission is to empower businesses to thrive in a competitive digital landscape by leveraging cutting-edge AI solutions. From automating workflows to enhancing customer experiences, we specialize in transforming businesses with scalable and tailor-made technologies.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              We are a team of passionate technologists, innovators, and problem-solvers dedicated to helping businesses unlock their true potential.
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
              Our Story
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Baddam Agency was founded with a vision to make AI accessible, impactful, and transformative for businesses worldwide. Our journey began with a desire to bridge the gap between complex AI technologies and real-world business needs. Today, we stand as a trusted partner for companies seeking to innovate, grow, and stay ahead of the curve.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              At Baddam Agency, we envision a future where AI drives operational excellence and fuels innovation for businesses of all sizes. Our goal is to enable companies to adapt, evolve, and excel in an ever-changing market by delivering solutions that make a difference.
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
            <div className="text-orange-500 text-sm font-medium mb-2">[ 03 ]</div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">What Drives Us</h2>
            <p className="text-gray-600 text-lg">
              At the heart of Baddam Agency is a commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
          number: '01',
          title: 'Innovation',
          description: 'Staying at the forefront of AI advancements to provide state-of-the-art solutions'
              },
              {
          number: '02',
          title: 'Client Success',
          description: 'Partnering with businesses to achieve their goals through AI-driven insights and automation'
              },
              {
          number: '03',
          title: 'Scalability',
          description: 'Ensuring every solution grows alongside your business'
              },
              {
          number: '04',
          title: 'Excellence',
          description: 'Striving for results that exceed expectations'
              }
            ].map((item, index) => (
              <div 
          key={index} 
          className={`p-8 rounded-3xl ${
            index === 1 
              ? 'bg-gradient-to-br from-orange-500 to-orange-400 text-white' 
              : 'bg-white/10 text-black backdrop-blur-lg border border-gray-200 shadow-lg hover:border-orange-200 transition-all duration-300'
          }`}
              >
          <div className="text-sm mb-4">{item.number}</div>
          <h3 className="text-xl font-bold mb-4">{item.title}</h3>
          <p className={`text-sm ${index === 1 ? 'text-white/90' : 'text-gray-600'}`}>
            {item.description}
          </p>
          <button className={`mt-6 w-8 h-8 rounded-full border ${
            index === 1 
              ? 'border-white/20 text-white hover:bg-white hover:text-orange-500' 
              : 'border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500'
          } flex items-center justify-center transition-all duration-300`}>
            +
          </button>
              </div>
            ))}
          </div>
        </div>

        {/* Add Logo Scroll Section */}
        <LogoScroll />

        {/* Call to Change Button */}
        <div className="flex justify-center mt-16">
            <button className="group relative flex items-center overflow-hidden border border-orange-200 text-orange-500 px-6 py-3 rounded-full transition-all duration-300">
              <div className="absolute inset-0 bg-orange-500 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4 z-10">
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 32 32" 
              className="w-5 h-5 fill-orange-500 group-hover:fill-white transition-colors duration-300"
              >
              <path d="M31 0H15v2h13.59L.29 30.29 1.7 31.7 30 3.41V16h2V1a1 1 0 0 0-1-1z" />
              </svg>
              </div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Call to change</span>
            </button>
        </div>
      </div>
    </div>
  );
}
