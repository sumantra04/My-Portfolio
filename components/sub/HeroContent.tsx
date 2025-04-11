"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroContent = () => {
  return (
    <section className="lg:py-14 mt-40 ml-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}  // Start from the left
          animate={{ opacity: 1, x: 0 }}     // Animate to normal position
          transition={{ duration: 0.8 }}      // Set the transition duration
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Hello I'm Sumantra{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "JAVA Developer",
                1000,
                "Ethical Hacker",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-cyan-500 hover:bg-slate-200 text-white"
            >
              Learn More!
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                View Projects
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroContent;
