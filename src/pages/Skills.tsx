import React, { useState } from 'react';

const skillCategories = [
  {
    id: 'frontend',
    category: 'Développement Frontend',
    description: 'Technologies et frameworks pour le développement d\'interfaces utilisateur modernes et réactives.',
    skills: [
      { name: 'React', years: 2 },
      { name: 'Angular', years: 3 },
      { name: 'TypeScript', years: 3 },
      { name: 'TailwindCSS', years: 2 },
      { name: 'SCSS', years: 3 },
    ],
  },
  {
    id: 'backend',
    category: 'Développement Backend',
    description: 'Technologies et frameworks pour le développement de serveurs et d\'APIs robustes.',
    skills: [
      { name: 'PHP', years: 3 },
      { name: 'Symfony', years: 3 },
      { name: 'Node.js', years: 1 },
      { name: 'SQL', years: 3 },
      { name: 'MongoDB', years: 1 },
      { name: 'MariaDB', years: 1 },
    ],
  },
  {
    id: 'tools',
    category: 'Outils & Plateformes',
    description: 'Outils et plateformes essentiels pour le développement, le déploiement et la gestion de projet.',
    skills: [
      { name: 'Git', years: 3 },
      { name: 'GitHub', years: 3 },
      { name: 'Docker', years: 1 },
      { name: 'Linux', years: 2 },
      { name: 'Figma', years: 3 },
    ],
  },
];

const additionalSkills = [
  {
    title: 'Concepts & Méthodologies',
    skills: [
      'Agile',
      'UML',
      'Tests Unitaires/Fonctionnels',
      'Sécurité Web',
      'Architecture Web',
      'UI/UX Design',
    ],
  },
  {
    title: 'Autres',
    skills: [
      'Blockchain (Concepts)',
      'IA (Pandas, TensorFlow, Keras - Notions)',
    ],
  },
  {
    title: 'Langues',
    skills: ['Anglais (C1)'],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Toutes' },
    ...skillCategories.map(cat => ({ id: cat.id, label: cat.category }))
  ];

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section className="section min-h-[80vh]">
      <div className="container-custom">
        <h1 className="heading-1 text-center mb-12 animate-fade-in">Mes Compétences</h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-500 text-gray-900 font-bold'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
            <div
              key={category.id}
              className="card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h2 className="heading-3 mb-4 text-amber-400">{category.category}</h2>
              <p className="text-gray-300 mb-6">{category.description}</p>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.years} ans</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className="w-full mt-16">
          <h2 className="heading-2 text-center mb-8">Compétences Complémentaires</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalSkills.map((category, index) => (
              <div
                key={index}
                className="card animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + filteredCategories.length * 0.1}s` }}
              >
                <h3 className="heading-3 mb-4 text-amber-400">{category.title}</h3>
                <ul className="space-y-2 text-gray-300">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full mt-16 text-center">
          <h2 className="heading-2 mb-6">
            Envie de collaborer ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Je suis toujours ouvert à discuter de nouveaux projets et opportunités
            de collaboration. N'hésitez pas à me contacter.
          </p>
          <a href="/contact" className="btn-primary">
            Me contacter
          </a>
        </section>
      </div>
    </section>
  );
};

export default Skills; 