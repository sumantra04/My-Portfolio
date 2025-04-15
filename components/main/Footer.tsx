"use client";

import { Socials } from "@/constants";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 bg-black text-white relative z-[50]" id="contact">
      <div className="flex flex-col items-center px-4">
        <h1 className="text-center text-4xl sm:text-5xl font-extrabold leading-tight">
          Looking for a{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text">
            driven Web Developer
          </span>{" "}
          to join your team?
        </h1>

        <p className="text-white/70 text-center text-base md:text-lg max-w-xl mt-5 md:mt-8">
          If you're building something great and need a reliable developer, let’s connect and bring your vision to life.
        </p>
        <div className="mt-6">
          <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sumantrab.04@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-[60]"
          >
          <button
            className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-3 rounded-lg mt-6 transition-all duration-300 hover:scale-105 focus:outline-none"
            aria-label="Compose email to work together"
            >
      <FaLocationArrow className="mr-2" />
      Let’s work together
    </button>
  </a>
</div>

      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-6 mt-16">
        <p className="text-white text-sm mb-6 md:mb-0 text-center">
          Copyright © {new Date().getFullYear()} Sumantra Bandyopadhyay
        </p>
        <div className="flex gap-6">
          {Socials.map((info) => (
            <a
              key={info.name}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${info.name}`}
              className="cursor-pointer relative z-[60]"
            >
              <div className="w-12 h-12 bg-black rounded-lg flex justify-center items-center hover:bg-white/10 transition-all duration-300">
                <Image
                  src={info.src}
                  alt={`${info.name} icon`}
                  width={240}
                  height={240}
                  className="p-2"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
