// "use client";
// import React, { useEffect, useState } from "react";
// // import Header from "./Header";
// import ComingSoonContent from "./ComingSoonContent";
// // import Footer from "./Footer";
// import SwingingObject from "./SwingingObject";
// import { SwingingCrane } from "./SwingingElement";
// import useParallax from "../hooks/useParallax";
// import CustomCursor from "./CustomCursor";

// function Homepage() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const { x, y } = useParallax({ reverse: true, speed: 0.05, max: 20 });
//   const { x: bgX, y: bgY } = useParallax({ speed: 0.02, max: 10 });

//   useEffect(() => {
//     // Add a small delay to ensure smooth animation entrance
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900 overflow-x-hidden">
//       <CustomCursor />
//       {/* <Header /> */}

//       {/* Decorative Shapes - Subtle floating elements in background */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
//         <div
//           className="absolute top-[10%] right-[15%] w-64 h-64 bg-yellow-200 rounded-full opacity-10 blur-3xl transition-transform duration-1000 ease-out"
//           style={{ transform: `translate(${bgX * 1.5}px, ${bgY * 1.5}px)` }}
//         />
//         <div
//           className="absolute bottom-[20%] left-[10%] w-48 h-48 bg-blue-200 rounded-full opacity-10 blur-3xl transition-transform duration-1000 ease-out"
//           style={{ transform: `translate(${bgX * -1}px, ${bgY * -1}px)` }}
//         />
//       </div>

//       <main
//         className={`min-h-screen flex flex-col justify-center items-center pt-20 px-4 transition-opacity duration-1000 ${
//           isLoaded ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
//           {/* <SwingingCrane /> */}
//           <SwingingObject
//             imageSrc="/images/container.png"
//             altText="Project Launch"
//             width={1000}
//             height={1000}
//           />
//         </div>

//         <div
//           className=" absolute top-0 left-0 w-full  mx-auto grid grid-cols-1 gap-12 items-center mt-40 "
//           style={{ transform: `translate(${x}px, ${y}px)` }}
//         >
//           <div className="order-2 lg:order-1">
//             <ComingSoonContent
//               title="Welcome to Logisense.AI"
//               subtitle="Empowering Startups. Inspiring Innovation."
//               description="At Logisense.AI, we exist to transform startup ambitions into thriving realities. With deep roots in logistics and a passion for entrepreneurship, we provide tailored mentorship that empowers emerging businesses across industries to grow, scale, and lead."
//               ctaText="Notify Me"
//             />
//           </div>

//           {/* <div className="flex justify-center order-1 lg:order-2">
//             <SwingingObject
//               imageSrc="/images/container.png"
//               altText="Project Launch"
//               width={500}
//               height={500}
//             />
//           </div> */}
//         </div>
//       </main>

//     </div>
//   );
// }

// export default Homepage;

import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Solutions from "./Solutions";
import Metrics from "./Metrics";
import Footer from "./Footer";
import WhyChooseUs from "./WhyChooseUs";
import OurServices from "./OurServices";
import OurCommitment from "./OurCommitment";

function Homepage() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      {/* <Navbar /> */}
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <OurCommitment />
      <Solutions />
      <Metrics />
      {/* <Footer /> */}
    </main>
  );
}

export default Homepage;
