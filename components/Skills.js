import React from 'react';
import { BoltIcon, CodeBracketIcon, ServerStackIcon } from '@heroicons/react/24/solid';

const skillsData = [
  {
    icon: CodeBracketIcon, 
    title: "Front-End Development",
    description: "Maîtrise complète de l'écosystème React, assurant des interfaces utilisateur modernes, rapides et maintenables.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "Zustand"],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: ServerStackIcon, 
    title: "Back-End C# / .NET",
    description: "Conception et déploiement de services web RESTful et d'APIs robustes en utilisant l'environnement .NET Core.",
    technologies: ["C#", ".NET Core", "Web API", "SQL Server", "Microservices"],
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: BoltIcon, 
    title: "Back-End PHP / Laravel",
    description: "Expérience dans le développement rapide et sécurisé d'applications web complexes avec le framework Laravel.",
    technologies: ["PHP", "Laravel", "MySQL", "Doctrine", "PHPUnit"],
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white"> 
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Titre de la Section Adaptatif */}
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
          Mon Stack Technique
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Un développeur Full-Stack focalisé sur la création de solutions modernes, fluides et performantes.
        </p>

        {/* Grille des Compétences Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icône avec effet au survol */}
              <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl ${skill.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                <skill.icon className={`w-8 h-8 ${skill.color}`} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{skill.title}</h3>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-grow">
                {skill.description}
              </p>
              
              {/* Liste des Technologies (Badges) */}
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {skill.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-lg"
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