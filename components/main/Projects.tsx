import React from "react";
import ProjectCard from "../sub/ProjectCard";

const projects = [
  {
    src: "/cybersleuths.png",
    title: "Cyber Sleuths Website",
    description:
      "Developed a sleek and responsive website for my college cybersecurity club using HTML, CSS, Javascript, React, and Node.js.",
    github: "https://github.com/your/cyber-sleuths",
    live: "https://cybersleuths.co.in/",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "node.js", color: "text-green-400" },
    ],
  },
  {
    src: "/thinkiot.png",
    title: "Think-IOT Website",
    description:
      "Created a dynamic website for my college IOT lab (Think-IOT) using HTML, CSS, JavaScript, React.js, Tailwind CSS, Vite, and Node.js.",
    github: "https://thinkiot.vercel.app",
    live: "",
    tags: [
      { name: "react", color: "text-pink-400" },
      { name: "Typescript", color: "text-pink-400" },
      { name: "node.js", color: "text-purple-400" },
      { name: "next.js", color: "text-pink-400" },
    ],
  },
  {
    src: "/streetlight.jpg",
    title: "Automatic Fault Detection of Street Lights",
    description:
      "Developed a cost-effective system for automated street light fault detection using ESP32 mesh networks with real-time monitoring.",
    github: "https://github.com/your/street-light",
    live: "",
    tags: [
      { name: "iot", color: "text-yellow-400" },
      { name: "esp32", color: "text-orange-400" },
    ],
  },
  {
    src: "/SpaceWebsite.png",
    title: "SWARM SOS",
    description:
      "AI-based distress signal coordination system for space emergencies, enabling intelligent satellite swarm communication.",
    github: "https://github.com/your/swarm-sos",
    live: "",
    tags: [
      { name: "ai", color: "text-pink-400" },
      { name: "space", color: "text-purple-400" },
    ],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        My Projects
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
