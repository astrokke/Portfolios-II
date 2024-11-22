import React, { useState } from "react";

const SkillCards = () => {
  const skillsData = [
    {
      title: "Front end Development",
      image:
        "http://nathan.musielak.net/LELE/img/icone-code/glow-robo-hands-laptop-and-digital-marketing.gif",
      decorationColor: "#8de13d",
      tools: [
        {
          img: "http://nathan.musielak.net/LELE/img/icone-code/icons8-angularjs-50.png",
          width: "48px",
        },
        {
          img: "http://nathan.musielak.net/LELE/img/icone-code/icons8-tailwind-css-192.png",
          width: "48px",
        },
        {
          img: "http://nathan.musielak.net/LELE/img/icone-code/icons8-r%C3%A9agir-120.png",
          width: "48px",
        },
      ],
    },
    {
      title: "Back end Development",
      image:
        "http://nathan.musielak.net/LELE/img/icone-code/incut-coding-window-and-programming-languages.png",
      decorationColor: "rgb(99 102 241)",
      tools: [
        {
          img: "http://nathan.musielak.net/LELE/img/icone-code/icons8-php-128.png",
          width: "48px",
        },
        {
          img: "http://nathan.musielak.net/LELE/img/icone-code/icons8-symfony-128.png",
          width: "48px",
        },
        {
          img: "http://nathan.musielak.net/LELE/img/icone-code/icons8-sql-64.png",
          width: "48px",
        },
      ],
    },
    {
      title: "CMS|Maquetage",
      image:
        "http://nathan.musielak.net/LELE/img/icone-code/glow-data-analytics-and-visualization-on-screen.png",
      decorationColor: "#8de13d",
      tools: [
        {
          img: "http://nathan.musielak.net/LELE/img/icone-code/icons8-figma-150.png",
        },
        {
          img: "http://nathan.musielak.net/LELE/img/icone-code/icons8-wordpress-150.png",
          width: "48px",
        },
        {
          img: "http://nathan.musielak.net/LELE/img/icone-code/prestashop.png",
          width: "48px",
        },
      ],
    },
  ];

  return (
    <div className="grid flex-wrap sm:grid-cols-2 gap-1 lg:flex lg: lg:justify-around">
      {skillsData.map((skill) => (
        <div
          key={skill.title}
          className={` card w-full sm:w-96 bg-base-100 shadow-xl mb-6`}
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

              {/* Card content */}
              <div className="relative z-10">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="card-body p-6">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
                    {skill.title}
                  </h3>

                  <div className="flex gap-4">
                    {skill.tools.map((tool) => (
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/40 hover:scale-110 transition-transform duration-200 group-hover:shadow-lg group-hover:shadow-emerald-500/20">
                        <img
                          src={tool.img}
                          alt="tool icon"
                          className="w-8 h-8 object-contain"
                        />
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
