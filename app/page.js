// app/page.js

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
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
