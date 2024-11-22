import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  index = 0,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.from(card, {
      y: 100,

      duration: 1,
      delay: index * 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });

    const contentElements = card.querySelectorAll(".content-element");
    const hoverTl = gsap.timeline({ paused: true });

    hoverTl
      .to(card.querySelector("img"), {
        scale: 1.1,
        duration: 0.4,
      })
      .to(
        contentElements,
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.3,
        },
        0
      );

    card.addEventListener("mouseenter", () => hoverTl.play());
    card.addEventListener("mouseleave", () => hoverTl.reverse());

    return () => {
      card.removeEventListener("mouseenter", () => hoverTl.play());
      card.removeEventListener("mouseleave", () => hoverTl.reverse());
    };
  }, [index]);

  return (
    <div ref={cardRef} className="project-card group">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent  ">
        <div className="absolute bottom-0 p-6 w-full">
          <h3 className="content-element text-xl font-bold mb-2 translate-y-4">
            {title}
          </h3>
          <p className="content-element text-white/80 mb-4 translate-y-4 ">
            {description}
          </p>
          <div className="content-element flex gap-2 flex-wrap translate-y-4 ">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-primary/30 rounded-full text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
