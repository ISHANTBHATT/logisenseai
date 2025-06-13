"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { FaRoute } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
export default function Solutions() {
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
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block py-2 px-4 rounded-full bg-gray-100 text-gray-800 font-medium text-sm">
              Solution
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                Smart solutions to simplify your supply chain
              </h2>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="md:max-w-sm md:ml-auto "
            >
              <p className="text-gray-600">
                Revolutionizing the way you manage logistics, our smart
                solutions streamline your supply chain, enhancing efficiency,
                reducing costs, and ensuring seamless operations from start to
                finish.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="gri-col-1 md:grid  lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            className="bg-white text-neutral-700  rounded-2xl overflow-hidden shadow-sm hover:bg-blue-400 hover:text-white transition-colors duration-300 group"
            variants={itemVariants}
          >
            <div className="p-6 flex flex-col justify-between h-full">
              <div className="bg-sky-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-blue-400 transition-colors duration-300">
                <FaRoute className="" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 md:mb-8">Supply Chain</h3>
                <p className="">
                  By leveraging innovative strategies and cutting-edge
                  technology, we help streamline
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white text-neutral-700  rounded-2xl overflow-hidden shadow-sm hover:bg-blue-400 hover:text-white transition-colors duration-300 group"
            variants={itemVariants}
          >
            <div className="p-6 flex flex-col justify-between h-full">
              <div className="bg-sky-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-blue-400 transition-colors duration-300">
                <GoChecklist className="" size={24} />
              </div>
              <div className="">
                <h3 className="text-xl font-bold mb-2 md:mb-8">
                  Customs Clearance
                </h3>
                <p>
                  Navigating the complexities of customs clearance with ease, we
                  ensure your shipments meet
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-sm h-96 col-span-2"
            variants={itemVariants}
          >
            <Image
              src="/images/2.jpg"
              alt="Container ship"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 bg-white/30 m-6 p-6 flex flex-col justify-end rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">
                International Shipping
              </h3>
              <p className="text-white text-sm">
                Our logistics company is committed to transforming the
                transportation of goods. Our expert team handles every step of
                the process
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
