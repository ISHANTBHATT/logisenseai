"use client";
import React, { useEffect, useRef } from "react";
// import { Ship, Truck, Plane, Package, FileCheck } from "lucide-react";
import { Layers, Lightbulb, FileCheck, Link } from "lucide-react";
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
  const hoverVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
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
          <span className="inline-block py-2 px-4 rounded-full bg-gray-100 text-gray-800 font-medium text-lg">
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
          From early-stage ideation to enterprise-level execution, our guidance
          enables founders to:
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants} className="relative">
            <Image
              src="/images/f9.jpg"
              alt="Container loading on truck"
              width={600}
              height={800}
              className="rounded-3xl object-cover w-full h-[80vh]"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-6">
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-3xl p-3 shadow-sm flex items-center gap-4 text-neutral-700 hover:bg-blue-400 hover:text-white transition-colors duration-300 group"
            >
              <motion.div
                variants={hoverVariants}
                className="bg-blue-400 text-white rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center group-hover:bg-white group-hover:text-blue-400 transition-colors duration-300"
              >
                <Layers className="" size={28} />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Build strong foundations
                </h3>
                {/* <p className="">
                  Gathering items from the sender and preparing them for
                  transp-ortation.Properly packaging goods and labeling
                </p> */}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-3xl p-3 shadow-sm flex items-center gap-4 text-neutral-700 hover:bg-blue-400 hover:text-white transition-colors duration-300 group"
            >
              <motion.div
                variants={hoverVariants}
                className="bg-blue-400 text-white rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center group-hover:bg-white group-hover:text-blue-400 transition-colors duration-300"
              >
                <Lightbulb className="" size={28} />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Embrace innovation
                </h3>
                {/* <p>
                  It is one of the most common methods of shipping, especially
                  for domestic or short-distance logistics.
                </p> */}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-3xl p-3 shadow-sm flex items-center gap-4 text-neutral-700 hover:bg-blue-400 hover:text-white transition-colors duration-300 group"
            >
              <motion.div
                variants={hoverVariants}
                className="bg-blue-400 text-white rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center group-hover:bg-white group-hover:text-blue-400 transition-colors duration-300"
              >
                <FileCheck className="" size={28} />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Adopt best-in-class governance practices
                </h3>
                {/* <p className="">
                  It's the fastest shipping method, ideal for high-value,
                  urgent, or lightweight shipments over long distances.
                </p> */}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-3xl p-3 shadow-sm flex items-center gap-4 text-neutral-700 hover:bg-blue-400 hover:text-white transition-colors duration-300 group"
            >
              <motion.div
                variants={hoverVariants}
                className="bg-blue-400 text-white rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center group-hover:bg-white group-hover:text-blue-400 transition-colors duration-300"
              >
                <Link className="" size={28} />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Forge valuable industry connections
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default OurServices;
