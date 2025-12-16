// app/page.js

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';


export default function Page() {
  return (
    <div className="min-h-screen">
      {/* 1. La Barre de Navigation */}
      <Header />

      {/* 2. Le Contenu Principal */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}