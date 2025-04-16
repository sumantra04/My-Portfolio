"use client";
import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Socials } from "@/constants";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [navVisible, setNavVisible] = useState(true);
  const [socialAndLogoVisible, setSocialAndLogoVisible] = useState(true); 
  const prevScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    const direction = current - prevScrollY.current;
    prevScrollY.current = current;

    if (current < 100) {
      setNavVisible(true);
    } else {
      setNavVisible(direction < 0);
    }

    setSocialAndLogoVisible(current <= 10);
  });

  const navItems = [
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "contact", link: "#contact" },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {navVisible && (
          <motion.div
            key="navbar"
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "flex max-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg shadow-lg items-center justify-between space-x-4 w-full"
            )}
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.75)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            <div className="flex items-center justify-center space-x-4">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300"
                  )}
                >
                  <span className="text-sm cursor-pointer">{navItem.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {socialAndLogoVisible && (
          <>

            <motion.img
              key="logo"
              src="/Logo.png"
              alt="Logo"
              className="absolute top-4 left-10 w-28 h-28 object-contain z-[30]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            <motion.div
              key="social-icons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed top-14 right-10 flex gap-5 z-[5001]"
            >
              {Socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.name}`}
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={30}
                    height={30}
                  />
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
