"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

function OurCommitment() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section className="py-16 md:py-24 bg-[#E3E3E3] relative">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block py-2 px-4 rounded-full bg-gray-100 text-gray-800 font-medium text-sm">
                Our Commitment
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            >
              Delivering the Future Through Secure
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600 mb-8">
              Delivering the Future Through Secure Solutions and Innovation.Our
              logistics company is committed to transforming the transportation
              of goods.
            </motion.p>

            <motion.div variants={itemVariants}>
              <button className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-full transition-colors">
                Learn more
              </button>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className=" absolute top-0 right-0"
          >
            <Image
              src="/images/f7.png"
              alt="Export and import containers"
              width={700}
              height={500}
              className="object-contain "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default OurCommitment;
