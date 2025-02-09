import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </main>
  )
}

