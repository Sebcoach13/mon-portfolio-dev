// components/Hero.js - VERSION CORRIGÉE
import React from 'react';

export default function Hero() {
  return (
    <section id="accueil" className="bg-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Développeur Web Full-Stack.
          <br />
          <span className="text-primary-600">Performance et Robustesse.</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Expert en **React/Next.js** pour le Front-End, avec une solide maîtrise de **C# (.NET Core)** et **PHP (Laravel)** pour des solutions Back-End évolutives.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projets" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-300 shadow-lg"
          >
            Voir mes Projets Récents
          </a>
          <a
            href="#contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition duration-300"
          >
            Contactez-moi
          </a>
        </div>
      </div>
    </section>
  );
}