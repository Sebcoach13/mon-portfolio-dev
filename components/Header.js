// components/Header.js
import React from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projets' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Nom */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-extrabold text-gray-900">
              DevCodeMaster_13
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-600 hover:text-primary-600 font-medium transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Bouton CV */}
          <a 
            href="/chemin/vers/votre/cv.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Télécharger CV
          </a>
        </div>
      </div>
    </header>
  );
}