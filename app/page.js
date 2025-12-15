// app/page.js

// Importation des composants
import Header from '../components/Header'; 
import Hero from '../components/Hero';     
import Skills from '../components/Skills'; 
import Projects from '../components/Projects'; 
import Contact from '../components/Contact'; 
export default function Home() {
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
      
      {/* 3. Le Pied de Page */}
      <footer className="bg-gray-800 text-center text-white p-4">
          &copy; {new Date().getFullYear()} DevCodeMaster_13. Tous droits réservés.
      </footer>
    </div>
  );
}