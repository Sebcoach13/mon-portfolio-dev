// components/Skills.js
import React from 'react';
import { BoltIcon, CodeBracketIcon, ServerStackIcon } from '@heroicons/react/24/solid';

const skillsData = [
  {
    icon: CodeBracketIcon, 
    title: "Front-End Development",
    description: "Maîtrise complète de l'écosystème React, assurant des interfaces utilisateur modernes, rapides et maintenables.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "Redux/Zustand"],
    color: "text-indigo-600",
  },
  {
    icon: ServerStackIcon, 
    title: "Back-End C# / .NET",
    description: "Conception et déploiement de services web RESTful et d'APIs robustes en utilisant l'environnement .NET Core.",
    technologies: ["C#", ".NET Core", "ASP.NET Web API", "SQL Server", "Architecture Microservices"],
    color: "text-red-600",
  },
  {
    icon: BoltIcon, 
    title: "Back-End PHP / Laravel",
    description: "Expérience dans le développement rapide et sécurisé d'applications web complexes avec le framework Laravel.",
    technologies: ["PHP", "Laravel", "MySQL", "Doctrine ORM", "Tests Unitaires (PHPUnit)"],
    color: "text-amber-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Titre de la Section */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Mon Stack Technique
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Un développeur Full-Stack avec un focus sur les solutions modernes et performantes.
        </p>

        {/* Grille des Compétences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] border-t-4 border-indigo-600"
            >
              <skill.icon className={`w-12 h-12 mx-auto mb-4 ${skill.color}`} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{skill.title}</h3>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              
              {/* Liste des Technologies */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {skill.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-sm font-medium bg-gray-200 text-gray-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}