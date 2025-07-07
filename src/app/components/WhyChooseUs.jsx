"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { Ship, Truck, Plane, Package, FileCheck, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    // <section className="py-16 md:py-24 bg-gray-50" ref={ref}>
    //   <div className="container mx-auto px-4">
    //     <motion.div
    //       className="mb-12"
    //       variants={containerVariants}
    //       initial="hidden"
    //       animate={controls}
    //     >
    //       <motion.p
    //         className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium mb-4 text-neutral-700 border border-gray-300"
    //         variants={itemVariants}
    //       >
    //         Why Choose Us
    //       </motion.p>
    //       <motion.div variants={itemVariants}>
    //         <div className="grid md:grid-cols-3 gap-6">
    //           <div className="col-span-2">
    //             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
    //               Beyond Cargo – Delivering Confidence, Care, and Excellence.
    //             </h2>
    //             <p className="text-xl text-gray-600">
    //               Your Cargo, Our Commitment. Delivering Trust.
    //             </p>
    //           </div>
    //         </div>
    //       </motion.div>
    //     </motion.div>

    //     <motion.div
    //       className="mt-16"
    //       variants={containerVariants}
    //       initial="hidden"
    //       animate={controls}
    //     >
    //       <motion.h3
    //         className="text-2xl md:text-3xl font-bold text-center mb-12"
    //         variants={itemVariants}
    //       >
    //         We Have Everything
    //       </motion.h3>
    //       <motion.p
    //         className="text-center max-w-3xl mx-auto mb-16 text-gray-600"
    //         variants={itemVariants}
    //       >
    //         Our logistics company is committed to transforming the
    //         transportation of goods worldwide. With a strong global network and
    //         a team of skilled professionals.
    //       </motion.p>

    //       <div className="grid md:grid-cols-2 gap-8 items-center">
    //         <motion.div variants={itemVariants}>
    //           <Image
    //             src="/images/3.jpg"
    //             alt="Container yard"
    //             width={600}
    //             height={400}
    //             className="w-full h-auto rounded-lg shadow-lg"
    //           />
    //         </motion.div>

    //         <div className="grid gap-6">
    //           <motion.div
    //             className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md"
    //             variants={itemVariants}
    //           >
    //             <div className="bg-sky-500 p-3 rounded-full">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="24"
    //                 height="24"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 strokeWidth="2"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 className="text-white"
    //               >
    //                 <path d="M6 18L18 6M8 6h10v10"></path>
    //               </svg>
    //             </div>
    //             <div>
    //               <h4 className="text-xl font-bold mb-2">Shipping Freight</h4>
    //               <p className="text-gray-600">
    //                 Gathering items from the sender and preparing them for
    //                 transportation. Properly packaging goods and labeling.
    //               </p>
    //             </div>
    //           </motion.div>

    //           <motion.div
    //             className="flex items-start gap-4 p-6 bg-sky-500 rounded-lg shadow-md text-white"
    //             variants={itemVariants}
    //           >
    //             <div className="bg-white p-3 rounded-full">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="24"
    //                 height="24"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 strokeWidth="2"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 className="text-sky-500"
    //               >
    //                 <rect width="16" height="16" x="4" y="4" rx="2"></rect>
    //                 <path d="M4 12h16"></path>
    //                 <path d="M12 4v16"></path>
    //               </svg>
    //             </div>
    //             <div>
    //               <h4 className="text-xl font-bold mb-2">Truck Freight</h4>
    //               <p>
    //                 It's one of the most common methods of shipping, especially
    //                 for domestic or short-distance logistics.
    //               </p>
    //             </div>
    //           </motion.div>

    //           <motion.div
    //             className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md"
    //             variants={itemVariants}
    //           >
    //             <div className="bg-sky-500 p-3 rounded-full">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="24"
    //                 height="24"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 strokeWidth="2"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 className="text-white"
    //               >
    //                 <path d="M12 19l9 2-9-18-9 18 9-2z"></path>
    //               </svg>
    //             </div>
    //             <div>
    //               <h4 className="text-xl font-bold mb-2">Air Freight</h4>
    //               <p className="text-gray-600">
    //                 It's the fastest shipping method, ideal for high-value,
    //                 urgent, or lightweight shipments over long distances.
    //               </p>
    //             </div>
    //           </motion.div>
    //         </div>
    //       </div>
    //     </motion.div>
    //   </div>
    // </section>
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="mb-8 relative">
          <span className="inline-block py-2 px-4 rounded-full bg-gray-100 text-gray-800 font-medium text-sm">
            Why Choose us
          </span>
          {/* <div className=" absolute -top-2 -right-0">
            <Sparkles className="w-4 h-4 text-[#8DACA4]" />
          </div>
          <div className=" absolute -bottom-2 -left-0">
            <Sparkles className="w-4 h-4 text-[#8DACA4]" />
          </div> */}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/f1.jpg"
              alt="Container terminal with cranes"
              width={500}
              height={350}
              className="object-cover w-56 h-56"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/f2.jpg"
              alt="Container handler machine"
              width={500}
              height={350}
              className="object-cover w-56 h-56"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/f3.jpg"
              alt="Truck with container"
              width={500}
              height={350}
              className="object-cover w-56 h-56"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {/* Beyond Cargo – Delivering Confidence, Care, and Excellence. */}
            Looking to scale your startup the right way?{" "}
            <span className="text-gray-600">
              You&apos;ve come to the right place.
            </span>
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
