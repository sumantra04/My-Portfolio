import React from "react";
import HeroContent from "../sub/HeroContent";
import Timeline from "../main/Timeline";
const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <HeroContent />
      <Timeline />
    </div>
  );
};

export default Hero;
