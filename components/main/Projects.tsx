import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-2"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-5px">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/cybersleuths.png"
          title="Cyber Sleuths Website"
          description="Developed a sleek and responsive website for my college cybersecurity club using HTML, CSS,Javascript, React, and Node.js."
        />
        <ProjectCard
          src="/streetlight.jpg"
          title="Automatic Fault Detection of Street Lights(Patented)"
          description="Developed a cost-effective system for automated street light fault detection using ESP32 mesh networks with real-time monitoring."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="SWARM SOS"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;
