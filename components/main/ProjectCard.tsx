"use client";
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

interface Tag {
  name: string;
  color: string;
}

interface Props {
  index: number;
  src: string;
  title: string;
  description: string;
  github: string;
  live: string;
  tags: Tag[];
}

const ProjectCard = ({ index, src, title, description, github, live, tags }: Props) => {
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

export default ProjectCard;
