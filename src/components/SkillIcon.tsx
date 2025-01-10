import React, { useState } from "react";
// Front-end development images
import frontEndImage from "../asset/img/glow-robo-hands-laptop-and-digital-marketing.gif";
import angularIcon from "../asset/img/icons8-angularjs-50.png";
import tailwindIcon from "../asset/img/icons8-tailwind-css-192.png";
import reactIcon from "../asset/img/icons8-react-120.png";

// Back-end development images
import backEndImage from "../asset/img/incut-coding-window-and-programming-languages.png";
import phpIcon from "../asset/img/icons8-php-128.png";
import symfonyIcon from "../asset/img/icons8-symfony-128.png";
import sqlIcon from "../asset/img/icons8-sql-64.png";

// CMS images
import cmsImage from "../asset/img/glow-data-analytics-and-visualization-on-screen.png";
import figmaIcon from "../asset/img/icons8-figma-150.png";
import wordpressIcon from "../asset/img/icons8-wordpress-150.png";
import prestashopIcon from "../asset/img/prestashop.png";
const SkillCards = () => {
  const skillsData = [
    {
      title: "Front end Development",
      image: frontEndImage,
      decorationColor: "#8de13d",
      tools: [
        {
          img: angularIcon,
          width: "48px",
          name: "Angular",
        },
        {
          img: tailwindIcon,
          width: "48px",
          name: "Tailwind CSS",
        },
        {
          img: reactIcon,
          width: "48px",
          name: "React",
        },
      ],
    },
    {
      title: "Back end Development",
      image: backEndImage,
      decorationColor: "rgb(99 102 241)",
      tools: [
        {
          img: phpIcon,
          width: "48px",
          name: "PHP",
        },
        {
          img: symfonyIcon,
          width: "48px",
          name: "Symfony",
        },
        {
          img: sqlIcon,
          width: "48px",
          name: "SQL",
        },
      ],
    },
    {
      title: "CMS|Maquetage",
      image: cmsImage,
      decorationColor: "#8de13d",
      tools: [
        {
          img: figmaIcon,
          name: "Figma",
        },
        {
          img: wordpressIcon,
          name: "WorldPress",
          width: "48px",
        },
        {
          img: prestashopIcon,
          name: "prestashop",
          width: "48px",
        },
      ],
    },
  ];

  const [hoveredTool, setHoveredTool] = useState(null);

  return (
    <div className="grid flex-wrap sm:grid-cols-2 gap-1 lg:flex lg:justify-around">
      {skillsData.map((skill) => (
        <div
          key={skill.title}
          className={`card w-full sm:w-96 bg-base-100 shadow-xl mb-6`}
        >
          <div className="relative group">
            <div className="card bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
              <div
                className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-radial from-emerald-500/20 via-transparent to-transparent"
                style={{
                  filter: "blur(20px)",
                  zIndex: 0,
                }}
              />

              <div className="relative z-10">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="card-body p-6">
                  <h3 className="text-2xl flex justify-center font-bold mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
                    {skill.title}
                  </h3>

                  <div className="flex justify-between gap-4">
                    {skill.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/40 hover:scale-110 transition-transform duration-200 group-hover:shadow-lg group-hover:shadow-emerald-500/20"
                        onMouseEnter={() => setHoveredTool(tool.name)}
                        onMouseLeave={() => setHoveredTool(null)}
                      >
                        <img
                          src={tool.img}
                          alt="tool icon"
                          className="w-8 h-8 object-contain"
                        />
                        {hoveredTool === tool.name && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1">
                            {tool.name}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCards;