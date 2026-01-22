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
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* ZONE LOGO ET NOM ALIGNÉS */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Logo"
                width={120} 
                height={120}
                className="object-contain"
                priority 
              />
              {/* Le -mt-1 ici permet de remonter le texte pour l'aligner au logo */}
              <span className="text-2xl font-black tracking-tighter hidden sm:block leading-none mt-6">
                DevCodeMaster<span className="text-white">_13</span>
              </span>
            </Link>
          </div>

          {/* NAVIGATION DESKTOP AGRANDIE */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg font-semibold hover:text-blue-400 transition duration-300 mt-6"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* BOUTON MOBILE */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-4xl">
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-xl font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}