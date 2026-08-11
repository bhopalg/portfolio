import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import AIEngineering from "@/components/AIEngineering";
import Skills from "@/components/Skills";
import FeaturedProject from "@/components/FeaturedProject";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <AIEngineering />
      <Skills />
      <FeaturedProject />
      <Education />
      <Contact />
    </main>
  );
}
