// components/Projects.js 
import React from "react";
import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

// Définition des projets 
const projectsData = [
  {
    title: "Application de Gestion de Stock (Projet de Fin d'Année)",
    description:
      "Développement d'une application CRUD complète pour la gestion des produits, des commandes et des fournisseurs. Axé sur la sécurité et la performance des requêtes SQL.",
    technologies: ["PHP", "Symfony", "MySQL", "Twig", "JavaScript"],
    githubLink: "URL_GITHUB_PROJET_STOCK",
    demoLink: "URL_DEMO_ALWAYS_DATA",
  },
  {
    title: "Plateforme de Sondage en Temps Réel",
    description:
      "Création d'une application pour lancer des sondages instantanés avec mises à jour en temps réel via WebSockets.",
    technologies: ["React", "Node.js", "MongoDB", "WebSockets"],
    githubLink: "URL_GITHUB_PROJET_SONDAGE",
    demoLink: "URL_DEMO_SONDAGE",
  },
  {
    title: "Client Lourd de Base de Données (TP Licence)",
    description:
      "Implémentation d'un client lourd pour interagir avec une base de données complexe en utilisant le pattern MVC.",
    technologies: ["C#", ".NET WinForms", "SQL Server"],
    githubLink: "URL_GITHUB_PROJET_CSHARP",
    demoLink: null,
  },
];

export default function Projects() {
  return (
    <section id="projets" className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> 
        
        {/* Titre (Centrage hérité du conteneur parent) */}
        <div className="mb-10"> 
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Mes Projets</h2>
          <p className="text-gray-600">
            Quelques réalisations représentatives de mon travail.
          </p>
        </div>

        {/* Grille des projets (alignement des cartes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg bg-white p-6 shadow-md border-t-4 border-primary-600 h-[450px] w-full overflow-y-auto"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-4 border-t flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary-600 hover:text-primary-800 font-medium"
                >
                  <CodeBracketIcon className="w-5 h-5" />
                  Code
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-green-600 hover:text-green-800 font-medium"
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