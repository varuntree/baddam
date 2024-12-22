
"use client";

import React from "react";

export default function Industries() {
  return (
    <div className="relative min-h-screen">
      <img
        src="/robo.jpg"
        alt="Robot Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 " />
      
      {/* Side Card */}
      <div className="absolute top-0 bottom-0 left-0 w-1/4 bg-white/10 backdrop-blur-md border-r border-white/20">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Industries</h2>
          <p className="text-white/80">
            Our AI solutions are tailored for various industries, providing cutting-edge automation and intelligent decision-making capabilities.
          </p>
        </div>
      </div>
    </div>
  );
}
