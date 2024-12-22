
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative backdrop-blur-md bg-black/60 text-white py-20 overflow-hidden">
  <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-orange-500/10 via-orange-400/20 to-transparent blur-3xl"></div>
      <div className="container mx-auto px-4">
        {/* Call to Action */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm mb-2">[ INTERESTED? ]</p>
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            Are you ready to be <span className="text-primary">turbocharged</span>?
          </h2>
          <p className="text-gray-400 mb-8">Fill in your details and we'll connect.</p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary rounded-full text-black hover:bg-primary/90 transition-colors"
          >
            <span>Call to Change</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-medium mb-4 text-gray-300">PROGRAMS & COURSES</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-primary">AI Leadership Summit</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Private Client Mastermind</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Enterprise Coaching</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Retreats</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-gray-300">SUPPORT</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-primary">Support</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Customer Central</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Community</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Help Documentation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Partner Portal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-gray-300">RESOURCES</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Case Studies</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Events and Webinars</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">All Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-gray-300">ACCOUNT</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-primary">Login</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Apply Call</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-gray-300">ABOUT US</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-primary">Overview</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Leadership</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Recognition</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Newsroom</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
