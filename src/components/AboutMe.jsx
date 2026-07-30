import '../../css/AboutMe.css'; 

import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

function AboutMe() {

  const { t } = useTranslation();

  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Front-end" },
    { id: "backend", label: "Back-end" },
    { id: "mobile", label: "Mobile" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Tools" },
    { id: "design", label: "Design" },
  ];

  const year = t("year");
  const years = t("years");

  const technologies = [
    // Front-end
    {
      name: "HTML",
      experience: "4 " + years,
      icon: "devicon-html5-plain",
      type: "Front-end",
      category: "frontend",
    },
    {
      name: "CSS",
      experience: "4 " + years,
      icon: "devicon-css3-plain",
      type: "Front-end",
      category: "frontend",
    },
    {
      name: "JavaScript",
      experience: "3 " + years,
      icon: "devicon-javascript-plain",
      type: "Front-end",
      category: "frontend",
    },
    {
      name: "React",
      experience: "> 1 " + year,
      icon: "devicon-react-original",
      type: "Front-end",
      category: "frontend",
    },

    // Backend
    {
      name: "PHP",
      experience: "4 " + years,
      icon: "devicon-php-plain",
      type: "Back-end",
      category: "backend",
    },
    {
      name: "Java",
      experience: "2 " + years,
      icon: "devicon-java-plain",
      type: "Back-end / Mobile",
      category: "backend",
    },
    {
      name: "C",
      experience: "1 " + year,
      icon: "devicon-c-plain",
      type: "Back-end",
      category: "backend",
    },

    // Mobile
    {
      name: "Objective-C",
      experience: "1 " + year,
      icon: "devicon-objectivec-plain",
      type: "iOS",
      category: "mobile",
    },

    // Database
    {
      name: "MySQL",
      experience: "4 " + years,
      icon: "devicon-mysql-plain",
      type: "Database",
      category: "database",
    },

    // Tools
    {
      name: "Git",
      experience: "3 " + years,
      icon: "devicon-git-plain",
      type: "Tools",
      category: "tools",
    },
    {
      name: "Postman",
      experience: "2 " + years,
      icon: "devicon-postman-plain",
      type: "Tools",
      category: "tools",
    },

    // Design
    {
      name: "Figma",
      experience: "1 " + year,
      icon: "devicon-figma-plain",
      type: "Design",
      category: "design",
    },
    {
      name: "Canva",
      experience: "4 " + years,
      icon: "devicon-canva-plain",
      type: "Design",
      category: "design",
    },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? technologies
      : technologies.filter(
          skill => skill.category === selectedCategory
        );

  const SkillCard = ({ name, experience, icon, type }) => {
    const iconClass = `${icon} colored`;
    return (
      <div className="glass-skill-wrapper">        
        <div className="glass-card-main">          
          <div className="glass-icon-container">
            <i className={iconClass} />
          </div>
          
          <div className="glass-info">
            <h3 className="glass-skill-name">{name}</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="about-me-section" id="about-me-section">
      <h2 className="section-title">{t("aboutMe")}</h2>
      <p className="resume-text">
        {t("firstLineResumeText")}
        <br/>
        <br/>
        {t("secondLineResumeText")}
      </p>

      <div className="info-block">
        <h2 className="section-title">{t("skills")}</h2>
        <div className="skills-tabs">
          {categories.map(category => (
              <button key={category.id} className={selectedCategory === category.id ? "tab active" : "tab" } onClick={() => setSelectedCategory(category.id)} >
                  {category.label}
              </button>
          ))}
        </div>
        <div className="glass-stack">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div> 
    </section>
  );
}

export default AboutMe;
