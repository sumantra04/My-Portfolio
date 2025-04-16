"use client";
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import projects from "../sub/ProjectsData"; 

interface Tag {
  name: string;
  color: string;
}

interface Project {
  src: string;
  title: string;
  description: string;
  github: string;
  live: string;
  tags: Tag[];
}

const ProjectCard = ({
  index,
  src,
  title,
  description,
  github,
  live,
  tags,
}: Project & { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable={false}
        className="bg-[#111827]/50 border border-[#2A0E61] rounded-2xl p-3 w-full shadow-lg"
      >
        <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            {live && (
              <button
                onClick={() => window.open(live, "_blank")}
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
              >
                🔗
              </button>
            )}
            {github && (
              <button
                onClick={() => window.open(github, "_blank")}
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
              >
                🐙
              </button>
            )}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-white text-xl font-semibold">{title}</h2>
          <p className="text-gray-300 text-sm mt-2">{description}</p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className={`text-sm ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10" id="projects">
      <motion.h2
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="text-5xl md:text-6xl text-white font-extrabold mb-16 text-center">
      <span className="bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text">
      My Projects
      </span>
      </motion.h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
