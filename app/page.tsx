import Hero from "@/components/main/Hero";
import Projects from "@/components/sub/ProjectsData";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-5">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
