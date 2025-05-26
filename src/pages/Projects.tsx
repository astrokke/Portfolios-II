import React, { useState } from 'react';

const projects = [
  {
    title: 'TeckTime',
    description: "Application de gestion du temps de travail et de facturation. Optimisation de la gestion des ressources et amélioration de la productivité globale. Conception, développement et mise en production avec Symfony 6.4 (back-end) et TypeScript (front-end).",
    technos: ['Symfony', 'TypeScript'],
    features: [
      'Suivi du temps de travail',
      'Facturation automatisée',
      'Gestion des ressources',
      'Interface moderne et responsive',
    ],
    github: 'https://github.com/astrokke/Tecken',
    link: '',
    external: false,
  },
  {
    title: 'TMA Agence Immobilière',
    description: "Module Symfony pour la gestion efficace d'agences immobilières, interfaces dynamiques en JavaScript. Suivi et maintenance sur 8 mois. Réalisation d'un module complémentaire en Symfony 5.4 avec interfaces JavaScript.",
    technos: ['Symfony', 'JavaScript'],
    features: [
      'Gestion des biens et agences',
      'Interfaces dynamiques',
      'Maintenance évolutive',
      'Suivi des utilisateurs',
    ],
    link: 'https://opost.fr/login',
    external: true,
  },
  {
    title: 'Solage',
    description: "Application web moderne en ligne. Projet personnel déployé sur Netlify.",
    technos: ['React', 'TypeScript'],
    features: [
      'Design moderne',
      'Déploiement Netlify',
      'Responsive',
      'Expérience utilisateur soignée',
    ],
    github: 'https://github.com/astrokke/solage',
    link: 'https://solage.netlify.app/',
    external: true,
  },
  
  {
    title: 'pandemonium-theme',
    description: 'theme pour vs code',
    technos: [],
    features: [],
    github: 'https://github.com/astrokke/pandemonium-theme',
    link: '',
    external: false,
  },
  {
    title: 'stoneage',
    description: 'cest un miniframwork en php',
    technos: ['PHP'],
    features: [],
    github: 'https://github.com/astrokke/stoneage',
    link: '',
    external: false,
  },
  {
    title: 'Space-Shooter',
    description: 'un space shooter en js native',
    technos: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    github: 'https://github.com/astrokke/Space-Shooter',
    link: '',
    external: false,
  },
  {
    title: 'PythonToexcel',
    description: 'un convertisseur de fichier python en excel',
    technos: ['Python'],
    features: [],
    github: 'https://github.com/astrokke/PythonToexcel',
    link: '',
    external: false,
  },
  
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="section min-h-[80vh] flex flex-col items-center">
      <div className="container-custom max-w-3xl w-full">
        <h1 className="heading-1 text-center mb-12 animate-fade-in">Mes Projets</h1>
        {/* Carrousel */}
        <div className="relative w-full flex flex-col items-center">
          <div className="card w-full animate-fade-in-delay flex flex-col items-start text-left h-full transition-transform duration-500">
            <div className="w-full h-32 bg-gray-800 rounded-lg mb-4 flex items-center justify-center animate-float">
              <span className="text-4xl text-amber-500 font-bold">{projects[current].title[0]}</span>
            </div>
            <h2 className="heading-3 mb-2 text-amber-400">{projects[current].title}</h2>
            <p className="text-gray-300 mb-4">{projects[current].description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {projects[current].technos.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold">{tech}</span>
              ))}
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-amber-400 mb-2">Fonctionnalités :</h4>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                {projects[current].features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3 mt-2 w-full">
              {projects[current].github && (
                <a href={projects[current].github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 text-center">Voir sur GitHub</a>
              )}
              {projects[current].external ? (
                <a href={projects[current].link} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-center">Voir le projet</a>
              ) : null}
            </div>
          </div>
          {/* Contrôles du carrousel */}
          <div className="flex gap-4 mt-6 justify-center">
            <button onClick={prev} className="btn-secondary px-4 py-2">Précédent</button>
            <button onClick={next} className="btn-primary px-4 py-2">Suivant</button>
          </div>
          {/* Indicateurs */}
          <div className="flex gap-2 mt-4 justify-center">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full border-2 ${current === idx ? 'bg-amber-500 border-amber-500' : 'bg-gray-700 border-gray-600'}`}
                aria-label={`Voir le projet ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 