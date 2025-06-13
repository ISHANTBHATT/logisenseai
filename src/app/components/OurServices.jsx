"use client";
import React, { useEffect, useRef } from "react";
import { Ship, Truck, Plane, Package, FileCheck } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

function OurServices() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block py-2 px-4 rounded-full bg-gray-100 text-gray-800 font-medium text-sm">
            Our Services
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        >
          We Have Everything
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center text-gray-600 max-w-3xl mb-12"
        >
          Our logistics company is committed to transforming the transportation
          of goods worldwide. With a strong global network and a team of skilled
          professionals,
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants} className="relative">
            <Image
              src="/images/3.jpg"
              alt="Container loading on truck"
              width={600}
              height={800}
              className="rounded-3xl object-cover w-full h-[80vh]"
            />
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 shadow-sm flex items-center gap-4 text-neutral-700 hover:bg-blue-400 hover:text-white transition-colors duration-300 group"
            >
              <div className="bg-blue-400 text-white rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center group-hover:bg-white group-hover:text-blue-400 transition-colors duration-300">
                <Ship className="" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Shipping Freight</h3>
                <p className="">
                  Gathering items from the sender and preparing them for
                  transp-ortation.Properly packaging goods and labeling
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 shadow-sm flex items-center gap-4 text-neutral-700 hover:bg-blue-400 hover:text-white transition-colors duration-300 group"
            >
              <div className="bg-blue-400 text-white rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center group-hover:bg-white group-hover:text-blue-400 transition-colors duration-300">
                <Truck className="" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Truck Freight</h3>
                <p>
                  It is one of the most common methods of shipping, especially
                  for domestic or short-distance logistics.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 shadow-sm flex items-center gap-4 text-neutral-700 hover:bg-blue-400 hover:text-white transition-colors duration-300 group"
            >
              <div className="bg-blue-400 text-white rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center group-hover:bg-white group-hover:text-blue-400 transition-colors duration-300">
                <Plane className="" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Air Freight</h3>
                <p className="">
                  It's the fastest shipping method, ideal for high-value,
                  urgent, or lightweight shipments over long distances.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default OurServices;
