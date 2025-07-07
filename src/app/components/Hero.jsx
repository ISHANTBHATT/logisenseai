// "use client";

// import { useEffect, useRef } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// export default function Hero() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [isInView, controls]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const imageVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       className="relative bg-gray-50 py-16 md:py-24 overflow-hidden"
//       ref={ref}
//     >
//       <div className="container mx-auto px-4">
//         <motion.div
//           className="grid md:grid-cols-2 gap-8 items-center"
//           variants={containerVariants}
//           initial="hidden"
//           animate={controls}
//         >
//           <div className="order-2 md:order-1">
//             <motion.h1
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
//               variants={itemVariants}
//             >
//               Take Your Business to the Next Level
//             </motion.h1>
//             <motion.p
//               className="text-lg text-gray-600 mb-8"
//               variants={itemVariants}
//             >
//               We provide complete solutions for delivering your goods. Efficient
//               Load Logistics Solutions for Global Corporations
//             </motion.p>
//             <motion.div variants={itemVariants}>
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="flex -space-x-2">
//                   {[1, 2, 3, 4].map((i) => (
//                     <div
//                       key={i}
//                       className="w-10 h-10 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-xs"
//                     >
//                       {i}
//                     </div>
//                   ))}
//                 </div>
//                 <div>
//                   <p className="font-bold text-xl">120+</p>
//                   <p className="text-gray-600">Satisfied Clients</p>
//                 </div>
//               </div>
//               <Link
//                 href="/learn-more"
//                 className="inline-block bg-sky-500 text-white px-8 py-3 rounded-full hover:bg-sky-600 transition-colors"
//               >
//                 Learn more
//               </Link>
//             </motion.div>
//           </div>
//           <motion.div
//             className="order-1 md:order-2 relative"
//             variants={imageVariants}
//           >
//             <Image
//               src="/images/container4.png"
//               alt="Container being lifted"
//               width={600}
//               height={400}
//               className="w-full h-auto object-contain"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
// import Header from "./Header";
import ComingSoonContent from "./ComingSoonContent";
// import Footer from "./Footer";
import SwingingObject from "./SwingingObject";
import { SwingingCrane } from "./SwingingElement";
import useParallax from "../hooks/useParallax";
import CustomCursor from "./CustomCursor";

function Hero() {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#E3E3E3] overflow-x-hidden">
      {/* <CustomCursor /> */}
      {/* <Header /> */}

      {/* Decorative Shapes - Subtle floating elements in background */}
      {/* <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-[10%] right-[15%] w-64 h-64 bg-yellow-200 rounded-full opacity-10 blur-3xl transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${bgX * 1.5}px, ${bgY * 1.5}px)` }}
        />
        <div
          className="absolute bottom-[20%] left-[10%] w-48 h-48 bg-blue-200 rounded-full opacity-10 blur-3xl transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${bgX * -1}px, ${bgY * -1}px)` }}
        />
      </div> */}

      <main
        className={`min-h-screen flex flex-col justify-center items-center pt-20 px-4 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
          {/* <SwingingCrane /> */}
          <SwingingObject
            imageSrc="/images/container3.png"
            altText="Project Launch"
            width={1000}
            height={900}
          />
        </div>

        <div
          className=" absolute top-0 left-0 w-full mx-auto grid grid-cols-1 gap-12 items-center mt-40 "
          style={{ transform: `translate(${x}px, ${y}px)` }}
        >
          <div className="order-2 lg:order-1">
            <ComingSoonContent
              title="Welcome to Logisense.AI"
              subtitle="Empowering Startups. Inspiring Innovation."
              description="At Logisense.AI, we exist to transform startup ambitions into thriving realities. With deep roots in logistics and a passion for entrepreneurship, we provide tailored mentorship that empowers emerging businesses across industries to grow, scale, and lead."
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

        <div className="absolute bottom-10 left-20">
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-xs"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-neutral-800 text-xl">120+</p>
                <p className="text-neutral-500 ">Satisfied Clients</p>
              </div>
            </div>
            <Link
              href="/learn-more"
              className="inline-block bg-sky-500 text-white px-8 py-3 rounded-full hover:bg-sky-600 transition-colors"
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
