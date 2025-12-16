// components/Projects.js
import React from 'react';
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/solid';


const projectsData = [
  {
    title: "Application de Gestion de Stock (Projet de Fin d'Année)",
    description: "Développement d'une application CRUD complète pour la gestion des produits, des commandes et des fournisseurs. Axé sur la sécurité et la performance des requêtes SQL.",
    technologies: ["PHP", "Symfony (Framework)", "MySQL", "Twig", "JavaScript"],
    githubLink: "URL_GITHaUB_PROJET_STOCK", 
    demoLink: "URL_DEMO_ALWAYS_DATA", 
  },
  {
    title: "Plateforme de Sondage en Temps Réel",
    description: "Création d'une application pour lancer des sondages instantanés. Utilisation de WebSockets pour les mises à jour en direct, démontrant une expertise Full-Stack.",
    technologies: ["React.js", "Node.js", "MongoDB", "WebSockets"],
    githubLink: "URL_GITHUB_PROJET_SONDAGE",
    demoLink: "URL_DEMO_SONDAGE",
  },
  {
    title: "Client Lourd de Base de Données (TP Licence)",
    description: "Implémentation d'un client lourd pour interagir avec une base de données complexe. Utilisation du pattern MVC pour une architecture propre.",
    technologies: ["C#", ".NET WinForms", "SQL Server"],
    githubLink: "URL_GITHUB_PROJET_CSHARP",
    demoLink: null, 
  },
];

export default function Projects() {
  return (
    <section id="projets" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre de la Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Mes Projets Récents
          </h2>
          <p className="text-xl text-gray-600">
            Réalisations concrètes développées lors de ma Licence, démontrant mon savoir-faire Full-Stack.
          </p>
        </div>

        {/* Grille des Projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              // Ajout de bg-white pour contraster avec le fond général
              className="p-6 rounded-lg shadow-lg border-t-4 border-primary-600 flex flex-col h-full bg-white"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
            </div>

              {/* Liens (GitHub & Démo) */}
              <div className="mt-auto pt-4 border-t border-gray-200 flex space-x-4">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 transition duration-300 font-medium"
                >
                  <CodeBracketIcon className="w-5 h-5 mr-1" />
                  Code Source
                </a>
                
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-800 transition duration-300 font-medium"
                  >
                    <GlobeAltIcon className="w-5 h-5 mr-1" />
                    Voir Démo
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