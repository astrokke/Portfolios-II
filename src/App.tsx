import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Github, Linkedin, Mail } from "lucide-react";
import Cursor from "./components/Cursor";
import Navigation from "./components/Navigation";
import ProjectCard from "./components/ProjectCard";
import SkillIcon from "./components/SkillIcon";
import AnimatedText from "./components/AnimatedText";
import ParallaxSection from "./components/ParallaxSection";
import ProjectModal from "./components/ProjectModal";
import acceuil from "./asset/img/acceuil.png";
import dashboard from "./asset/img/dashboard.png";
import planning from "./asset/img/planning.png";
import client from "./asset/img/client.png";
import activiter from "./asset/img/activiter.png";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-commerce Platform",
    description: "Built with Laravell & React",
    image:
      "https://private-user-images.githubusercontent.com/145656139/325912075-87bcdd1e-2d6f-4152-b291-4ca3279d13ed.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzI1MzU1NDYsIm5iZiI6MTczMjUzNTI0NiwicGF0aCI6Ii8xNDU2NTYxMzkvMzI1OTEyMDc1LTg3YmNkZDFlLTJkNmYtNDE1Mi1iMjkxLTRjYTMyNzlkMTNlZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEyNVQxMTQ3MjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zOTUwM2ZmMjBmMjU5Y2RjYWQ1ZDUzODA5Zjk1OWZjZTM2Yzc1N2ViNTE5MTA0Y2Q0ZDE1ZTM2N2YxZDc4MjAwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.dMjgso4OF9YYclJyCxE0onmL_Ji94OBhcOwujVtr-uw",
    tags: ["Laravell", "React", "MySQL"],
    carouselImages: [
      "https://github.com/astrokke/E-commerce/assets/145656139/87bcdd1e-2d6f-4152-b291-4ca3279d13ed",
      "https://github.com/astrokke/E-commerce/assets/145656139/ce575a74-617d-45ec-8c03-c5ee4be4d916",
      "https://github.com/astrokke/E-commerce/assets/145656139/d29843a7-4efe-40ab-ae13-f7de9f844fb2",
      "https://github.com/astrokke/E-commerce/assets/145656139/6364a7ed-42cb-44fb-a9ca-f787b48df171 ",
      "https://github.com/astrokke/E-commerce/assets/145656139/7537e1d0-5989-43be-94ab-3a8874b19905",
    ],
  },
  {
    title: "Gestion Times Project",
    description: "Built with Symfony and TypeScript",
    image: acceuil,
    tags: ["Symfony", "Bootstrap", "TypeScript"],
    carouselImages: [dashboard, planning, client, activiter],
  },

  {
    title: "Solage",
    description:
      "Application web de chat en temps réel utilisant les wallets Solana pour la connexion, garantissant l'anonymat et la sécurité des utilisateurs.",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
    tags: ["vite.js", "React", "NOSQL"],
    link: "https://solage.netlify.app/",
    carouselImages: [
      "https://via.placeholder.com/800x400?text=Chat+1",
      "https://via.placeholder.com/800x400?text=Chat+2",
      {
        src: "https://solage.netlify.app/",
        link: "https://solage.netlify.app/",
      },
    ],
  },
];

function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background effect
      gsap.to(".parallax-bg", {
        y: (i, el) => el.offsetHeight * 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Cursor />
      <Navigation />
      {/* Hero Section */}
      <header
        ref={headerRef}
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <div className="parallax-bg absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
        </div>
        <div className="max-w-4xl text-center z-10">
          <AnimatedText className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Nathan Musielak Developer
          </AnimatedText>
          <AnimatedText
            className="text-xl md:text-2xl text-white/80 mb-8"
            delay={0.5}
          >
            Développeur fullstack look for a alternance
          </AnimatedText>
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/astrokke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-purple-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nathan-musielak-developpeur/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-neon-green transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nathan@musielak.net"
              className="text-white/80 hover:text-purple-500 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>
      {/* talk Section */}
      <div className="relative m flex items-center justify-center ">
        <div className="max-w-4xl text-center z-10">
          <AnimatedText
            className="text-xl md:text-2xl text-white/80 mb-8"
            delay={0.2}
          >
            Je me présente, Nathan Musielak, 21 ans, passionné par le code et le
            Web3.
            <br />
            Titulaire d’un Bac+2 en développement web et web mobile, je vais
            intégrer un Bachelor Fullstack avec une spécialisation en
            intelligence artificielle (Machine Learning et Data).
            <br />
            Curieux et motivé, j'aime explorer les nouvelles technologies et
            innover dans le domaine du Web3.
            <br />
            Actuellement en recherche d’une entreprise pour une alternance à
            partir d’avril 2025, je suis prêt à relever de nouveaux défis et à
            apporter mes compétences techniques, ma rigueur et ma créativité au
            sein de votre équipe.
          </AnimatedText>
        </div>
      </div>
      {/* Skills Section */}
      <ParallaxSection className="py-20 mb-10 px-4" speed={0.2}>
        <div id="skills">
          <AnimatedText className="text-4xl font-bold mb-16 text-center gradient-text">
            Skills & Expertise
          </AnimatedText>
          <SkillIcon />
        </div>
      </ParallaxSection>
      {/* Projects Section */}
      <section className="py-20 px-4" id="projects">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => openModal(project)}
              >
                <ProjectCard
                  {...project}
                  index={index}
                  link={
                    typeof project.carouselImages[2] === "object"
                      ? project.carouselImages[2].link
                      : undefined
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
      {/* Contact Section */}
      <ParallaxSection className="py-20 px-4" speed={0.3}>
        <div className="max-w-4xl mx-auto text-center" id="contact">
          <AnimatedText className="text-4xl font-bold mb-8 gradient-text">
            Contacter moi
          </AnimatedText>
          <AnimatedText className="text-xl text-white/80 mb-8" delay={0.2}>
            Intéressé à collaborer ? Discutons de votre projet !
          </AnimatedText>
          <a
            href="https://www.linkedin.com/in/nathan-musielak-developpeur/"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            Me contacter
          </a>
        </div>
      </ParallaxSection>
    </div>
  );
}

export default App;
