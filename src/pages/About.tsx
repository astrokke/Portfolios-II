import profilePic from '../assets/images/moi.jpeg';

const About = () => {
  return (
    <section className="section min-h-[80vh] flex flex-col items-center justify-center">
      <div className="container-custom max-w-4xl bg-gray-900/80 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-10 items-center">
        {/* Photo et infos principales */}
        <div className="flex flex-col items-center md:items-start gap-4 md:w-1/3">
          <img
            src={profilePic}
            alt="Nathan Musielak"
            className="w-36 h-36 rounded-full object-cover border-4 border-amber-500 shadow-lg"
          />
          <h2 className="heading-2 text-center md:text-left">Nathan Musielak</h2>
          <p className="text-amber-400 font-semibold">Développeur web full stack</p>
          <p className="text-gray-300">Montpellier, France</p>
          <a href="mailto:nathan@musielak.net" className="text-amber-400 hover:underline">nathan@musielak.net</a>
          <div className="flex gap-3 mt-2">
            <a href="https://github.com/astrokke" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 text-2xl transition-colors duration-200">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/nathan-musielak-developpeur/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 text-2xl transition-colors duration-200">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        {/* Bio et compétences */}
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h3 className="heading-3 mb-2">Profil</h3>
            <p className="text-gray-300">
              Passionné par le développement web moderne, je conçois des applications en <span className="text-amber-400 font-bold">Symfony</span>, <span className="text-amber-400 font-bold">Node</span>, <span className="text-amber-400 font-bold">Angular</span> .<br/>
            </p>
          </div>
          <div>
            <h3 className="heading-3 mb-2">Compétences principales</h3>
            <ul className="flex flex-wrap gap-3">
              <li className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold">Symfony</li>
              <li className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold">React</li>
              <li className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold">Angular</li>
              <li className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold">Tailwind</li>
              <li className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold">Node.js</li>
              <li className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold">TypeScript</li>
              <li className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold">PHP</li>
              <li className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold">SQL</li>
              <li className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold">Docker</li>
              <li className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold">Git</li>
              <li className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold">Figma</li>
            </ul>
          </div>
          <div>
            <h3 className="heading-3 mb-2">Formation</h3>
            <ul className="text-gray-300 space-y-1">
              <li><span className="font-bold text-amber-400">2025-2023</span> : Concepteur Développeur full stack (IA bac+4) – Diginamic, Perols</li>
              <li><span className="font-bold text-amber-400">2025-2023</span> : Développeur web et web mobile (BAC+2) – Diginamic, Perols</li>
              <li><span className="font-bold text-amber-400">2022-2019</span> : Bac Pro laboratoire contrôle qualité – Honoré de Balzac, Castelnau-le-Lez</li>
            </ul>
          </div>
          <div>
            <h3 className="heading-3 mb-2">Centres d'intérêt</h3>
            <ul className="flex flex-wrap gap-3">
              <li className="px-3 py-1 bg-gray-800 text-amber-400 rounded-full text-sm font-semibold">Échecs</li>
              <li className="px-3 py-1 bg-gray-800 text-amber-400 rounded-full text-sm font-semibold">Scoutisme</li>
              <li className="px-3 py-1 bg-gray-800 text-amber-400 rounded-full text-sm font-semibold">Blockchain</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 