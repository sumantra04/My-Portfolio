"use client";
import React, { useState } from "react";
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
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const navItems = [
    { name: "About me", link: "#about-me" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {visible && (
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
            <Link href="#about-me" className="flex flex-row items-center"></Link>

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
      <div className="fixed top-16 right-10 flex gap-5 z-[5001]">
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
