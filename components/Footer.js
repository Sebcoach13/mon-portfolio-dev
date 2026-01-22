// components/Footer.js

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      
      {/* Conteneur intérieur : limite la largeur et centre le contenu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        
        {/* Contenu du pied de page */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          
          <p className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} DevCodeMaster_13. Tous droits réservés.
          </p>
          
          <div className="flex space-x-4">
            <a href="https://github.com/Sebcoach13" className="hover:text-primary-400 transition duration-300">GitHub</a>
            <a href="https://www.linkedin.com/in/sebastien-da-costa-34431026b" className="hover:text-primary-400 transition duration-300">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}