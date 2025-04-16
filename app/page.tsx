import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Timeline from "@/components/main/Timeline"; 
import ProjectSection from "@/components/main/ProjectCard";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-5">
        <Hero />
        <Timeline />
        <Skills />
        <ProjectSection />
      </div>
    </main>
  );
}
