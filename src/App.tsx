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

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-commerce Platform",
    description: "Built with Laravell & React",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
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
    description: "Custom PHP Framework",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tags: ["PHP", "MySQL", "REST API"],
    carouselImages: [
      "https://via.placeholder.com/800x400?text=CMS+1",
      "https://via.placeholder.com/800x400?text=CMS+2",
      "https://via.placeholder.com/800x400?text=CMS+3",
    ],
  },
  {
    title: "Real-time Chat",
    description: "WebSocket Application",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
    tags: ["Node.js", "Socket.io", "MongoDB"],
    carouselImages: [
      "https://via.placeholder.com/800x400?text=Chat+1",
      "https://via.placeholder.com/800x400?text=Chat+2",
      "https://via.placeholder.com/800x400?text=Chat+3",
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
            Full Stack Developer
          </AnimatedText>
          <AnimatedText
            className="text-xl md:text-2xl text-white/80 mb-8"
            delay={0.5}
          >
            Crafting elegant solutions with PHP, Symfony, & Angular
          </AnimatedText>
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-neon-green transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-neon-green transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-white/80 hover:text-neon-green transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

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
                <ProjectCard {...project} index={index} />
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
            Let's Connect
          </AnimatedText>
          <AnimatedText className="text-xl text-white/80 mb-8" delay={0.2}>
            Interested in working together? Let's talk about your project.
          </AnimatedText>
          <a
            href="mailto:contact@example.com"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            Get in Touch
          </a>
        </div>
      </ParallaxSection>
    </div>
  );
}

export default App;
