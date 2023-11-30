import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import History from "@/components/history";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero/>
      <About/>
      <History/>
      <Highlights/>
      <Projects/>
      <Contact/>
    </main>
  )
}
