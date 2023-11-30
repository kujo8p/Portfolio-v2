import AnimatedElement from "@/components/animation/AnimatedElement";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <AnimatedElement element="div" className="border border-red w-[250px] aspect-square shadow-lg" initial={{opacity:0, x:100}} animate={{opacity:1, x:0}}>THIS IS BOX</AnimatedElement>
    </main>
  )
}
