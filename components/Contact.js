// components/Contact.js 
import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

export default function Contact() {
  const contactInfo = [
    {
      icon: EnvelopeIcon,
      text: "seb-dac67@hotmail.fr",
      link: "mailto:seb-dac67@hotmail.fr",
    },
    {
      icon: PhoneIcon,
      text: "+33 7 50 15 29 08",
      link: "tel:+33750152908",
    },
    {
      icon: MapPinIcon,
      text: "Bouches-du-Rhône",
      link: "#",
    },
  ];

  const cardClasses = "rounded-lg bg-white p-6 shadow-md h-[450px] overflow-y-auto border-t-4 border-blue-600";

  return (
    <section id="contact" className="w-full pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> 
        
        <div className="mb-10"> 
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Contact
          </h2>
          <p className="text-gray-600">
            Une question, un projet ou une opportunité ? Parlons-en.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Carte 1 : Infos */}
          <div className={cardClasses}>
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-3">
              Informations
            </h3>

            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition"
                >
                  <item.icon className="w-6 h-6 text-primary-500" />
                  <span className="font-medium">{item.text}</span>
                </a>
              ))}
            </div>

            <p className="mt-8 text-gray-600">
              Je réponds généralement sous 24 heures. N’hésitez pas à me
              transmettre les détails de votre projet ou de votre offre.
            </p>
          </div>

          {/* Carte 2 : Formulaire */}
          <div className={cardClasses}>
            <form
              action="https://formspree.io/f/movgzvyg"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom / Prénom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John"
                  className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="votre.seb-dac67@hotmail.fr"
                  className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  required
                  placeholder="Décrivez votre besoin ou votre projet…"
                  className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-primary-500 focus:ring-primary-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-primary-600 py-3 font-medium text-white hover:bg-primary-700 transition"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}