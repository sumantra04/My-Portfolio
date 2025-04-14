"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    <section className="lg:py-14 mt-40 ml-20">
      <div className="grid grid-cols-1 sm:grid-cols-12 relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start relative"
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
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"></p>
          <div>
            <a
              href="/Sumantra Bandyopadhyay_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-cyan-500 hover:bg-slate-200 text-white flex items-center justify-center gap-2 z-50 relative"
              style={{ zIndex: 9999 }}
            >
              <img
                src="/cv.png"
                alt="Resume Emoji"
                className="w-6 h-6"
              />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroContent;
