import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/images/moi.jpeg';
import tecktimeImage from '../assets/images/image.png'; 
import tmaImmoImage from '../assets/images/image copy.png'; 
import solageImage from '../assets/images/image copy 2.png'; 

const featuredProjects = [
  {
    title: 'TeckTime',
    description: "Application de gestion du temps de travail et de facturation. Optimisation de la gestion des ressources et amélioration de la productivité globale.",
    technos: ['Symfony', 'TypeScript'],
    link: '/projects',
    image: tecktimeImage,
  },
  {
    title: 'TMA Agence Immobilière',
    description: "Module Symfony pour la gestion efficace d'agences immobilières, interfaces dynamiques en JavaScript. Suivi et maintenance sur 8 mois.",
    technos: ['Symfony', 'JavaScript'],
    link: 'https://opost.fr/login',
    external: true,
    image: tmaImmoImage,
  },
  {
    title: 'Solage',
    description: "Application web moderne en ligne.",
    technos: ['React', 'TypeScript'],
    link: 'https://solage.netlify.app/',
    external: true,
    image: solageImage,
  },
];

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-8 pt-24">
      <img
        src={profilePic}
        alt="Nathan Musielak"
        className="w-40 h-40 rounded-full object-cover border-4 border-amber-500 shadow-lg mb-4"
      />
      <h1 className="heading-1">Nathan Musielak</h1>
      <p className="text-lg text-amber-400 font-semibold">Développeur web full stack</p>
      <p className="text-gray-300 max-w-xl mt-2">
        Passionné par le développement web moderne, je conçois des applications  en <span className="text-amber-400 font-bold">Symfony</span>, <span className="text-amber-400 font-bold">React</span>, <span className="text-amber-400 font-bold">Angular</span> et <span className="text-amber-400 font-bold">Node.js</span>.
        Basé à <span className="text-amber-400 font-bold">Montpellier</span>
      </p>
      <div className="flex gap-4 mt-6">
        <Link to="/projects" className="btn-primary">Voir mes projets</Link>
        <Link to="/contact" className="btn-secondary">Me contacter</Link>
      </div>
      <div className="flex gap-4 mt-8 justify-center">
        <a href="https://github.com/astrokke" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 text-2xl transition-colors duration-200">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/nathan-musielak-developpeur/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 text-2xl transition-colors duration-200">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>

      {/* Section Projets en vedette */}
      <section className="w-full max-w-5xl mt-16">
        <h2 className="heading-2 mb-8 text-center">Projets en vedette</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <div key={idx} className="card flex flex-col items-start text-left h-full">
              <div className="w-full h-32 rounded-lg mb-4 overflow-hidden">
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
              </div>
              <h3 className="heading-3 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technos.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold">{tech}</span>
                ))}
              </div>
              {project.external ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Voir le projet</a>
              ) : (
                <Link to={project.link} className="btn-primary w-full text-center">En savoir plus</Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home; 