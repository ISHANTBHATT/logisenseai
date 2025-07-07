"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

export default function Footer() {
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="py-16 md:py-24 bg-[#E3E3E3] " ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center mb-12"
            variants={itemVariants}
          >
            <div>
              <p className="text-neutral-600 mb-4">
                At Logisense.AI, we exist to transform startup ambitions into
                thriving realities. With deep roots in logistics and a passion
                for entrepreneurship, we provide tailored mentorship that
                empowers emerging businesses across industries to grow, scale,
                and lead.
              </p>
              <Link
                href="/quote"
                className="inline-block bg-sky-500 text-white px-6 py-3 rounded-full hover:bg-sky-600 transition-colors"
              >
                Request A Quote
              </Link>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
                Ready to Launch with Confidence?
              </h2>
            </div>
          </motion.div>

          <motion.hr
            className="border-gray-300 border-1 my-12"
            variants={itemVariants}
          />

          <div className="grid md:grid-cols-3 gap-12 text-neutral-400">
            <motion.div variants={itemVariants}>
              <h3 className="text-neutral-600 font-medium mb-4">Email</h3>
              <p className="text-xl font-medium text-neutral-800 mb-8">
                demo@gmail.com
              </p>

              <h3 className="text-neutral-600 font-medium mb-4">Phone</h3>
              <p className="text-xl font-medium text-neutral-800">
                +9999999999
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-neutral-600 font-medium mb-4">Navigation</h3>
              <Link href="/">
                <p className="mb-2 hover:text-black">Home</p>
              </Link>
              <Link href="/about">
                <p className="mb-2 hover:text-black">About</p>
              </Link>
              <Link href="/contact">
                <p className="mb-2 hover:text-black">Contact</p>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-gray-600 font-medium mb-4">Head Office</h3>
              <p className="mb-2">Chowmuhany</p>
              <p className="mb-2">Pahartali, 4202</p>
              <p className="mb-2">Delhi, India</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="text-gray-400 text-6xl font-light opacity-20"
          variants={itemVariants}
        >
          @2025 Copyright
        </motion.div>
      </div>
    </footer>
  );
}
