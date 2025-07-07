"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-gray-50 py-2 ${
        isScrolled || !isHomePage
          ? "bg-white shadow-md "
          : "bg-transparent  text-white"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <Image
              src="/images/logo.png"
              width={1000}
              height={1000}
              className="w-full h-20"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-16 pr-16">
          <Link
            href="/"
            className="text-gray-800 hover:text-sky-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-800 hover:text-sky-500 transition-colors"
          >
            About
          </Link>
          {/* <Link
            href="/mission-vision"
            className="text-gray-800 hover:text-sky-500 transition-colors"
          >
            Mission & Vision
          </Link>
          <Link
            href="/mentorship-programs"
            className="text-gray-800 hover:text-sky-500 transition-colors"
          >
            Mentorship & Programs
          </Link> */}
        </nav>

        <Link
          href="/contact"
          className="bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition-colors"
        >
          Contact us
        </Link>
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-800 hover:text-sky-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-sky-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="/price"
              className="text-gray-800 hover:text-sky-500 transition-colors"
            >
              Price
            </Link>
            <Link
              href="/tracking"
              className="text-gray-800 hover:text-sky-500 transition-colors"
            >
              Tracking
            </Link>
            <Link
              href="/schedules"
              className="text-gray-800 hover:text-sky-500 transition-colors"
            >
              Schedules
            </Link>
            <Link
              href="/contact"
              className="bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-600 transition-colors text-center"
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
