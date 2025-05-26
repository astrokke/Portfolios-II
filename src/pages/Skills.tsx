import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const skillCategories = [
  {
    id: 'frontend',
    category: 'Développement Frontend',
    description: 'Technologies et frameworks pour le développement d\'interfaces utilisateur modernes et réactives.',
    skills: [
      { name: 'React', level: 30, years: 3 },
      { name: 'Angular', level: 85, years: 2 },
      { name: 'TypeScript', level: 85, years: 2 },
      { name: 'JavaScript', level: 90, years: 3 },
      { name: 'HTML5', level: 95, years: 3 },
      { name: 'CSS3', level: 95, years: 3 },
      { name: 'TailwindCSS', level: 90, years: 2 },
      { name: 'SCSS', level: 85, years: 3 },
      { name: 'Bootstrap', level: 80, years: 2 },
      { name: 'Figma', level: 70, years: 2 },
    ],
  },
  {
    id: 'backend',
    category: 'Développement Backend',
    description: 'Technologies et frameworks pour le développement de serveurs et d\'APIs robustes.',
    skills: [
      { name: 'PHP', level: 90, years: 3 },
      { name: 'Symfony', level: 90, years: 3 },
      { name: 'Laravel', level: 75, years: 1 },
      { name: 'Node.js', level: 85, years: 1 },
      { name: 'SQL', level: 85, years: 2 },
      { name: 'MySQL', level: 85, years: 2 },
      { name: 'PostgreSQL', level: 70, years: 2 },
      { name: 'MongoDB', level: 75, years: 2 },
      { name: 'MariaDB', level: 80, years: 1 },
      { name: 'Apache', level: 70, years: 2 },
    ],
  },
  {
    id: 'tools',
    category: 'Outils & Plateformes',
    description: 'Outils et plateformes essentiels pour le développement, le déploiement et la gestion de projet.',
    skills: [
      { name: 'Git', level: 90, years: 4 },
      { name: 'GitHub', level: 90, years: 4 },
      { name: 'Docker', level: 70, years: 2 },
      { name: 'Linux', level: 75, years: 1 },
     
    ],
  },
];

const additionalSkills = [
  {
    title: 'Concepts & Méthodologies',
    skills: [
      'Agile',
      'UML',
      'TDD',
      'Tests Unitaires/Fonctionnels',
      'Sécurité Web',
      'Architecture Web',
      'UI/UX Design',
      'Performance Web',
      'Code Review',
      'Documentation technique',
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

  // Fonction pour générer des couleurs pastel aléatoires
  const generatePastelColors = (numColors: number) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const hue = Math.floor(Math.random() * 360); // Teinte aléatoire (0-360)
      const saturation = Math.floor(Math.random() * 25) + 70; // Saturation entre 70 et 95 (pour le pastel)
      const lightness = Math.floor(Math.random() * 15) + 80; // Luminosité entre 80 et 95 (pour le pastel)
      colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    }
    return colors;
  };

  return (
    <section className="section min-h-[80vh]">
      <div className="container-custom">
        <h1 className="heading-1 text-center mb-12 animate-fade-in">Mes Compétences</h1>

        {/* Category Filters */}
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

        {/* Skills Grid with Charts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => {
            const chartData = {
              labels: category.skills.map(skill => skill.name),
              datasets: [
                {
                  data: category.skills.map(skill => skill.level),
                  backgroundColor: generatePastelColors(category.skills.length),
                  borderColor: '#0f172a', // Couleur de la bordure (fond sombre)
                  borderWidth: 2,
                },
              ],
            };

            const chartOptions = {
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  callbacks: {
                    label: function(context: any) {
                      const label = context.label || '';
                      const value = context.raw || 0;
                      return `${label}: ${value}%`;
                    }
                  }
                }
              }
            };

            return (
              <div
                key={category.id}
                className="card animate-fade-in h-full flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h2 className="heading-3 mb-4 text-amber-400 text-center">{category.category}</h2>
                <p className="text-gray-300 mb-6 flex-grow text-center">{category.description}</p>
                
                {/* Graphique en camembert */}
                <div className="relative h-48 flex items-center justify-center">
                   <Pie data={chartData} options={chartOptions} />
                </div>

                 {/* Légende sous le graphique */}
                <div className="mt-6 text-center">
                   {category.skills.map((skill, skillIndex) => (
                     <span key={skillIndex} className="inline-block text-sm text-gray-300 mr-4 mb-2">
                        <span
                          className="inline-block w-3 h-3 mr-2 rounded-full"
                          style={{ backgroundColor: chartData.datasets[0].backgroundColor[skillIndex] as string }}
                        ></span>
                       {skill.name} ({skill.level}%) ({skill.years} ans)
                     </span>
                   ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
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

        {/* CTA Section */}
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