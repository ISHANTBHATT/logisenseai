// "use client";

// import { Tabs } from "@/components/ui/tabs";
// import Image from "next/image";

// function TabsDemo() {
//   const tabs = [
//     {
//       title: "Mission",
//       value: "mission",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#25ABBE] to-[#1A6DAF]">
//           <div className="flex flex-col md:flex-row  justify-between items-center w-full h-full">
//             <div className="md:ml-6 ">
//               <h2 className="text-6xl md:text-7xl font-semibold text-white text-center sm:text-left mb-10">
//                 Our Mission
//               </h2>
//               <p className="text-gray-50 text-lg md:text-xl max-w-2xl text-center md:text-left">
//                 To empower startups across industries by providing strategic
//                 mentorship, fostering innovation, and guiding them toward
//                 becoming scalable and impactful enterprises. Through
//                 personalized interventions, we help founders build strong
//                 foundations, embrace corporate governance, and connect with key
//                 industry stakeholders.
//               </p>
//             </div>
//             <div className="w-1/2 lg:w-1/3 min-w-[100px]">
//               <Image
//                 src="/images/mission.png"
//                 alt="Mission Icon"
//                 width={1000}
//                 height={100}
//                 className="object-contain w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Vision",
//       value: "vision",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#25ABBE] to-[#1A6DAF]">
//           <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full h-full">
//             <div className="w-1/2 lg:w-1/3 min-w-[100px]">
//               <Image
//                 src="/images/mission.png"
//                 alt="Mission Icon"
//                 width={1000}
//                 height={100}
//                 className="object-contain w-full h-full"
//               />
//             </div>
//             <div className="ml-6 ">
//               <h2 className="text-6xl md:text-7xl font-semibold text-white text-center sm:text-left mb-10">
//                 Our Vision
//               </h2>
//               <p className="text-gray-50 text-lg md:text-xl max-w-2xl text-center md:text-left">
//                 To position Logisense.AI as a global hub for entrepreneurial
//                 transformation. We envision a world where startups evolve into
//                 future-ready enterprises that drive operational excellence,
//                 inspire collaboration, and redefine business standards across
//                 sectors.
//               </p>
//             </div>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="h-[80vh] md:h-[40rem] [perspective:1000px] relative  flex flex-col mx-auto w-full  items-start justify-start my-40">
//       <Tabs tabs={tabs} />
//     </div>
//   );
// }

// export default TabsDemo;

import React from "react";
import MissionVision from "../components/Mission-vision";

function Page() {
  return (
    <div className="py-20">
      <MissionVision />
    </div>
  );
}

export default Page;
