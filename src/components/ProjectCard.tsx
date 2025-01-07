import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index?: number;
  link?: string;
  carouselImages?: string[];
  onClick?: () => void;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  index = 0,
  link,
  carouselImages,
  onClick,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Animation setup similar to previous implementation
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

  const handleCardClick = () => {
    if (link) {
      window.open(link, "_blank");
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div ref={cardRef} className="project-card group" onClick={handleCardClick}>
      <div className="aspect-video overflow-hidden">
        {title === "Solage" && link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform transition-transform duration-500"
            />
          </a>
        ) : (
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
            className="carousel"
          >
            {carouselImages?.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent">
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
