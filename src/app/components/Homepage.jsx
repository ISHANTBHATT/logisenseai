"use client";
import React, { useEffect, useState } from "react";
// import Header from "./Header";
import ComingSoonContent from "./ComingSoonContent";
// import Footer from "./Footer";
import SwingingObject from "./SwingingObject";
import { SwingingCrane } from "./SwingingElement";
import useParallax from "../hooks/useParallax";
import CustomCursor from "./CustomCursor";

function Homepage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { x, y } = useParallax({ reverse: true, speed: 0.05, max: 20 });
  const { x: bgX, y: bgY } = useParallax({ speed: 0.02, max: 10 });

  useEffect(() => {
    // Add a small delay to ensure smooth animation entrance
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      <CustomCursor />
      {/* <Header /> */}

      {/* Decorative Shapes - Subtle floating elements in background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-[10%] right-[15%] w-64 h-64 bg-yellow-200 rounded-full opacity-10 blur-3xl transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${bgX * 1.5}px, ${bgY * 1.5}px)` }}
        />
        <div
          className="absolute bottom-[20%] left-[10%] w-48 h-48 bg-blue-200 rounded-full opacity-10 blur-3xl transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${bgX * -1}px, ${bgY * -1}px)` }}
        />
      </div>

      <main
        className={`min-h-screen flex flex-col justify-center items-center pt-20 px-4 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 flex flex-col items-center">
          {/* <SwingingCrane /> */}
          <SwingingObject
            imageSrc="/images/container4.png"
            altText="Project Launch"
            width={700}
            height={700}
          />
        </div>

        <div
          className="w-full max-w-5xl mx-auto grid grid-cols-1 gap-12 items-center mt-40 "
          style={{ transform: `translate(${x}px, ${y}px)` }}
        >
          <div className="order-2 lg:order-1">
            <ComingSoonContent
              title="We're Coming Soon"
              subtitle="Something amazing is on the way"
              description="We're working hard to bring you a revolutionary experience. Our team is putting the finishing touches on our platform. Sign up to be notified when we launch."
              ctaText="Notify Me"
            />
          </div>

          {/* <div className="flex justify-center order-1 lg:order-2">
            <SwingingObject
              imageSrc="/images/container.png"
              altText="Project Launch"
              width={500}
              height={500}
            />
          </div> */}
        </div>

        <div className="my-16 max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Why Wait For Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-yellow-500">🚀</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">
                Innovation
              </h4>
              <p className="text-gray-300">
                Cutting-edge solutions to transform your experience.
              </p>
            </div>

            <div className="feature-card bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-yellow-500">⚡</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">
                Performance
              </h4>
              <p className="text-gray-300">
                Lightning-fast and efficient for optimal results.
              </p>
            </div>

            <div className="feature-card bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-yellow-500">🔒</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">
                Security
              </h4>
              <p className="text-gray-300">
                Your data protected with state-of-the-art measures.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default Homepage;
