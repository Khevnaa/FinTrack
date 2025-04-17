// "use client";

// import React, { useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import {
//   featuresData,
//   howItWorksData,
//   statsData,
//   testimonialsData,
// } from "@/data/landing";
// import HeroSection from "@/components/hero";
// import Link from "next/link";

// const LandingPage = () => {
//   useEffect(() => {
//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('active');
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, {
//       threshold: 0.1,
//       rootMargin: '0px 0px -50px 0px'
//     });

//     // Observe all elements with reveal class
//     document.querySelectorAll('.reveal, .stat-item').forEach((element) => {
//       observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900">
//       {/* Hero Section */}
//       <HeroSection />

//      {/* Stats Section */}
//      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
//   <div className="container mx-auto px-4">
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
//       {statsData.map((stat, index) => (
//         <div 
//           key={index} 
//           className="stat-item text-center transform transition-all duration-700 hover:translate-y-[-8px]"
//         >
//           <div className="text-5xl font-bold text-blue-400 mb-4">
//             {stat.value}
//           </div>
//           <div className="h-[2px] w-16 mx-auto bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-4"></div>
//           <div className="text-gray-300 text-lg">{stat.label}</div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>


     
//       {/* Features Section */}
// <section id="features" className="py-20 bg-gray-900">
//   <div className="container mx-auto px-4">
//     <div className="mb-16 mx-auto max-w-3xl p-8">
//       <h2 className="text-3xl font-bold text-center text-white reveal">
//         Everything you need to manage your finances
//       </h2>
//     </div>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {featuresData.map((feature, index) => (
//         <div 
//           key={index} 
//           className="feature-card reveal relative rounded-lg p-[1px] overflow-hidden transition-all duration-300 group bg-gradient-to-br from-blue-600/20 to-purple-600/20 hover:from-blue-500 hover:to-purple-500"
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-500 group-hover:to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
//           <div className="relative z-10 h-full rounded-lg bg-gray-900 p-6">
//             <div className="text-blue-400 text-2xl mb-4">{feature.icon}</div>
//             <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
//             <p className="text-gray-300">{feature.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* How It Works Section */}
//       <section className="py-20 bg-gray-800/50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-16 reveal">How It Works</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {howItWorksData.map((step, index) => (
//               <div key={index} className="text-center reveal" style={{ transitionDelay: `${index * 200}ms` }}>
//                 <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <div className="text-blue-400 text-2xl">{step.icon}</div>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
//                 <p className="text-gray-300">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//      {/* Testimonials Section */}
// <section id="testimonials" className="py-20 bg-gray-900">
//   <div className="container mx-auto px-4">
//     <h2 className="text-3xl font-bold text-center mb-16 reveal text-white">
//       What Our Users Say
//     </h2>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//       {testimonialsData.map((testimonial, index) => (
//         <div 
//           key={index} 
//           className="testimonial-card reveal relative rounded-lg p-[1px] overflow-hidden transition-all duration-300 group bg-gradient-to-br from-blue-600/20 to-purple-600/20 hover:from-blue-500 hover:to-purple-500"
//           style={{ transitionDelay: `${index * 200}ms` }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-500 group-hover:to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
//           <div className="relative z-10 h-full rounded-lg bg-gray-900 p-6">
//             <div className="flex items-center mb-6">
//               <div className="relative w-12 h-12">
//                 <Image
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   fill
//                   className="rounded-full object-cover ring-2 ring-blue-400"
//                 />
//               </div>
//               <div className="ml-4">
//                 <div className="font-semibold text-white">{testimonial.name}</div>
//                 <div className="text-sm text-blue-400">
//                   {testimonial.role}
//                 </div>
//               </div>
//             </div>
//             <p className="text-gray-300 italic">{testimonial.quote}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 reveal">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold text-white mb-4">
//             Ready to Take Control of Your Finances?
//           </h2>
//           <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
//             Join thousands of users who are already managing their finances
//             smarter with FinTrack
//           </p>
//           <Link href="/dashboard">
//             <Button
//               size="lg"
//               className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transform transition-all duration-300"
//             >
//               Start Free Trial
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;

 

"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with reveal class
    document.querySelectorAll('.reveal, .stat-item').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Grid Background Overlay - Applied to the entire page */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"></div>
      
      {/* Hero Section */}
      <div className="relative">
        <HeroSection />
      </div>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="stat-item text-center transform transition-all duration-700 hover:translate-y-[-8px]"
              >
                <div className="text-5xl font-bold text-blue-400 mb-4">
                  {stat.value}
                </div>
                <div className="h-[2px] w-16 mx-auto bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-4"></div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900 relative">
        <div className="relative z-10 container mx-auto px-4">
          <div className="mb-16 mx-auto max-w-3xl p-8">
            <h2 className="text-3xl font-bold text-center text-white reveal">
              Everything you need to manage your finances
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card reveal relative rounded-lg p-[1px] overflow-hidden transition-all duration-300 group bg-gradient-to-br from-blue-600/20 to-purple-600/20 hover:from-blue-500 hover:to-purple-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-500 group-hover:to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 h-full rounded-lg bg-gray-900 p-6">
                  <div className="text-blue-400 text-2xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-800/50 relative">
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 reveal text-white">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center reveal" style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-blue-400 text-2xl">{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900 relative">
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 reveal text-white">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card reveal relative rounded-lg p-[1px] overflow-hidden transition-all duration-300 group bg-gradient-to-br from-blue-600/20 to-purple-600/20 hover:from-blue-500 hover:to-purple-500"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-500 group-hover:to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 h-full rounded-lg bg-gray-900 p-6">
                  <div className="flex items-center mb-6">
                    <div className="relative w-12 h-12">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover ring-2 ring-blue-400"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-blue-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 reveal relative">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with FinTrack
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transform transition-all duration-300"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;