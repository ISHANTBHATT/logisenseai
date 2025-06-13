"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import CountUp from "./CountUp";

export default function Metrics() {
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
    <section
      className="max-w-7xl px-4 md:px-8 lg:px-16 mx-auto py-16 md:py-24 bg-gray-50 relative "
      ref={ref}
    >
      <div className="container mx-auto px-4 ">
        <motion.div
          className="mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.p
            className="inline-block px-4 py-1 text-neutral-800 bg-gray-100 rounded-full text-sm font-medium mb-4 mx-auto text-center "
            variants={itemVariants}
          >
            Key metrics
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2  border-y  ">
          <div className="grid gap-12 border-r pt-8">
            <motion.div
              className="border-b pb-12"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <motion.h3
                className="text-6xl md:text-7xl font-bold text-gray-800 mb-4"
                variants={itemVariants}
              >
                <CountUp end={1.2} decimals={1} suffix=" million" />
              </motion.h3>
              <motion.p className="text-gray-600" variants={itemVariants}>
                processed efficiently, bridging companies globally.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="pb-10"
            >
              <motion.h3
                className="text-6xl md:text-7xl font-bold text-gray-800 mb-4"
                variants={itemVariants}
              >
                <CountUp end={100} suffix="+" />
              </motion.h3>
              <motion.p className="text-gray-600" variants={itemVariants}>
                Reaching 100+ nations, delivering seamless logistics solutions
                worldwide.
              </motion.p>
            </motion.div>
          </div>

          <div className="grid gap-8 pt-8">
            <motion.div
              className="border-b pb-12 pl-10"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                variants={itemVariants}
              >
                Demonstrate Our Quality
              </motion.h3>
              <motion.p className="text-gray-600" variants={itemVariants}>
                We believe success starts with reliability. That's why we focus
                on exceptional quality.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex items-center gap-8 pl-10 py-20 "
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4">
                  <CountUp end={99} suffix="%" />
                </h3>
                <p className="text-gray-600">Shipment arrive on time</p>
              </motion.div>
              <motion.div
                className=" absolute w-full h-96 -right-1/2 "
                variants={itemVariants}
              >
                <Image
                  src="/images/container7.png"
                  alt="Container diagram"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
