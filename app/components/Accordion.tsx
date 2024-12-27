
"use client";

import React, { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-none">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg md:text-xl font-semibold">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function Accordion() {
  const faqData = [
    {
      question: "What is AI automation, and how can it benefit my business?",
      answer: "AI automation uses artificial intelligence to perform tasks that typically require human effort. This can include customer support, social media management, workflow optimization, and more. It helps save time, reduce costs, and improve accuracy while scaling operations."
    },
    {
      question: "What industries do you provide AI solutions for?",
      answer: "We offer tailored AI solutions for a variety of industries, including real estate, healthcare, retail, and more. Our approach ensures that each solution meets the unique challenges and goals of your business."
    },
    {
      question: "How do your Conversational AI tools work?",
      answer: "Our Conversational AI tools use advanced natural language processing to create chatbots and virtual assistants. These tools provide human-like interactions, improving customer service across websites, social media, and messaging platforms."
    },
    {
      question: "Can AI help with social media management?",
      answer: "Absolutely! Our Social Media Automation AI can schedule posts, engage with followers, and respond to messages, ensuring consistent and timely interactions with your audience while saving you hours of manual work."
    },
    {
      question: "Is AI safe to use for business operations?",
      answer: "Yes, our AI solutions are designed with security and reliability in mind. We use industry-leading practices to ensure your data remains secure while maximizing the efficiency of your workflows."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Common Questions About <span className="italic">AI Automation</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get answers to frequently asked questions about our AI automation solutions and how they can benefit your business.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
