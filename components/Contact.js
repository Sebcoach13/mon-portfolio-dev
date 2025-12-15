// components/Contact.js
import React from 'react';

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';

export default function Contact() {
  const contactInfo = [
    { icon: EnvelopeIcon, text: "seb-dac67@hotmail.fr", link: "mailto:seb-dac67@hotmail.fr" },
    { icon: PhoneIcon, text: "+33 7 50 15 29 08", link: "tel:+33750152908" },
    { icon: MapPinIcon, text: "Bouches-du-Rhône", link: "#" },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Contactez-Moi
          </h2>
          <p className="text-xl text-gray-600">
            Intéressé par mes projets ou mon profil ? Envoyez-moi un message !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="p-6 bg-white rounded-lg shadow-xl h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">Informations de Contact</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.link} className="flex items-center text-gray-700 hover:text-indigo-600 transition duration-300">
                  <item.icon className="w-6 h-6 mr-3 text-indigo-500 flex-shrink-0" />
                  <span className="text-lg font-medium">{item.text}</span>
                </a>
              ))}
            </div>

            <p className="mt-8 text-gray-600">
              Je réponds généralement sous 24 heures. N'hésitez pas à joindre le lien de votre offre ou de votre projet.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-xl">
            <form action="https://formspree.io/f/movgzvyg" method="POST" className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom / Prénom</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border"
                  placeholder="votre.mail@pro.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border"
                  placeholder="Décrivez votre besoin ou votre offre..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
                >
                  Envoyer le Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}