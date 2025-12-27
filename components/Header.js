"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projets' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO ET NOM (NOM TOUT EN BLANC) */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Logo"
                width={100} 
                height={100}
                className="object-contain"
                priority 
              />
              <span className="text-2xl font-black tracking-tighter text-white">
                DevCodeMaster_13
              </span>
            </Link>
          </div>

          {/* NAVIGATION DESKTOP */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium hover:text-blue-400 transition"
              >
                {link.name}
              </Link>
            ))}
            
            {/* BOUTON CV (GRANDE TAILLE FORCÉE) */}
            <a 
              href="/cv.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3 text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/40"
            >
              Télécharger CV
            </a>
          </nav>

          {/* BOUTON MOBILE */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-3xl p-2">
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 p-6">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl">
                {link.name}
              </Link>
            ))}
            <a href="/cv.pdf" className="text-center py-4 bg-blue-600 rounded-xl font-bold">
              Télécharger CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}