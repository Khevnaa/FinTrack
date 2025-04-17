"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Initial animations
    setTimeout(() => titleRef.current?.classList.add("active"), 300);
    setTimeout(() => subtitleRef.current?.classList.add("active"), 600);
    setTimeout(() => taglineRef.current?.classList.add("active"), 900);
    setTimeout(() => ctaRef.current?.classList.add("active"), 1200);
    
    // Scroll animation for hero image
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const scrolled = window.scrollY;
      const rate = scrolled * 0.15;
      const opacity = Math.max(1 - scrolled / 700, 0.6);
      const scale = Math.max(1 - scrolled / 2000, 0.95);
      
      imageRef.current.style.transform = `
        perspective(1000px)
        rotateY(${rate * 0.05}deg)
        scale(${scale})
      `;
      imageRef.current.style.opacity = opacity;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 
              className="text-4xl md:text-6xl font-bold gradient-title"
            >
              Smart Financial Management for Modern Life
            </h1>
            
            <p 
              className="text-xl text-gray-300"
            >
              Take control of your finances with our intelligent tracking and analytics platform. Make informed decisions and achieve your financial goals.
            </p>
            
            <p 
              className="text-blue-400 font-medium"
            >
              Join over 10,000+ users who trust FinTrack for their financial journey
            </p>

            <div 
              className="flex gap-4 animate-fade-in"
            >
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce-subtle"
                >
                  Get Started
                </Button>
              </Link>

            </div>
          </div>

          <div className="relative min-h-[400px] w-full lg:min-h-[500px] flex items-center justify-center">
            <div 
              ref={imageRef}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Main image container */}
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <Image
                  src="/banner01.jpg" 
                  alt="Dashboard Preview"
                  fill
                  sizes="100vw"
                  className="object-cover rounded-[20px]"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectPosition: 'center',
                    objectFit: 'cover'
                  }}
                  priority
                />

                {/* Glowing effect behind image */}
                <div className="absolute -inset-4 -z-10 rounded-[30px]">
                  <div className="absolute inset-0 bg-gradient-radial from-blue-500 via-purple-500/100 to-transparent blur-[10px] opacity-100"></div>
                  <div className="absolute inset-0 bg-gradient-radial from-purple-500 via-blue-500/100 to-transparent blur-[10px] opacity-100"></div>
                </div>

                {/* Subtle overlay glow */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-radial from-transparent via-blue-500/100 to-purple-500/100 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
