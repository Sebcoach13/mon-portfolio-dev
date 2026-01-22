import React from "react";
import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

const projectsData = [
  {
    title: "Application de Gestion de Stock",
    description: "Développement d'une application CRUD complète pour la gestion des produits, des commandes et des fournisseurs. Axé sur la sécurité et la performance des requêtes SQL.",
    technologies: ["PHP", "Symfony", "MySQL", "JavaScript"],
    githubLink: "#",
    demoLink: "#",
  },
  {
    title: "Plateforme de Sondage Temps Réel",
    description: "Création d'une application pour lancer des sondages instantanés avec mises à jour en temps réel via WebSockets.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubLink: "#",
    demoLink: "#",
  },
  {
    title: "Client Lourd BDD (TP Licence)",
    description: "Implémentation d'un client lourd pour interagir avec une base de données complexe en utilisant le pattern MVC.",
    technologies: ["C#", ".NET WinForms", "SQL Server"],
    githubLink: "#",
    demoLink: null,
  },
];

export default function Projects() {
  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8"> 
        
        {/* En-tête de section */}
        <div className="mb-12 text-center"> 
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Mes Projets</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quelques réalisations représentatives de mon travail technique et académique.
          </p>
        </div>

        {/* Grille responsive : 1 col mobile, 2 col tablette, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              
              <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Badges technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-md bg-blue-50 text-blue-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Liens avec alignement automatique en bas */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-6">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 font-semibold transition-colors"
                >
                  <CodeBracketIcon className="w-5 h-5" />
                  Code
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    <GlobeAltIcon className="w-5 h-5" />
                    Démo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}