import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 min-h-[90vh] flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Titre : Taille de police adaptative */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
          Développeur Web Full-Stack.
          <br className="hidden md:inline" />
          <span className="text-blue-600 block md:inline"> Performance et Robustesse.</span>
        </h1>

        {/* Paragraphe : Largeur max pour la lisibilité */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Expert en <span className="font-semibold text-gray-900">React/Next.js</span> pour le Front-End, avec une solide maîtrise de <span className="font-semibold text-gray-900">C# (.NET Core)</span> et <span className="font-semibold text-gray-900">PHP (Laravel)</span>.
        </p>

        {/* Boutons : Flex-col sur mobile, Flex-row sur PC */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="#projets"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-xl shadow-blue-500/20"
          >
            Voir mes Projets
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-base font-bold rounded-full text-gray-900 bg-transparent hover:bg-gray-50 transition duration-300"
          >
            Contactez-moi
          </Link>
        </div>

      </div>
    </section>
  );
}