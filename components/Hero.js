// components/Hero.js
import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Développeur Web Full-Stack.
          <br className="hidden sm:inline" />
          <span className="text-primary-600">Performance et Robustesse.</span>
        </h1>

        <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
          Expert en **React/Next.js** pour le Front-End, avec une solide maîtrise de **C# (.NET Core)** et **PHP (Laravel)** pour des solutions Back-End évolutives.
        </p>

        <div className="mt-10 flex justify-center space-x-4">
          <Link
            href="#projets"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-300 shadow-lg"
          >
            Voir mes Projets Récents
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition duration-300"
          >
            Contactez-moi
          </Link>
        </div>
      </div>
    </section>
  );
}