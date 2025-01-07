import React from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

Modal.setAppElement("#root");

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    carouselImages: string[];
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  // Prevent modal from opening for Solage project
  if (!project || project.title === "Solage") return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-gray-900 text-white p-6 rounded-lg max-w mx-auto"
      overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80"
      >
        Close
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center">{project.title}</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
        className="carousel"
      >
        {project.carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </Modal>
  );
};

export default ProjectModal;
