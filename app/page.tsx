import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Skills />
    </main>
  );
}
