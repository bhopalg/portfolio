import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import FeaturedProject from "@/components/FeaturedProject";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Skills />
      <FeaturedProject />
    </main>
  );
}
