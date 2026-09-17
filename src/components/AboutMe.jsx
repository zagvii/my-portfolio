import '../../css/AboutMe.css'; 

import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import ContactModal from "./ContactModal/ContactModal";

function AboutMe() {

  const { t } = useTranslation();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const categories = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Front-end" },
    { id: "backend", label: "Back-end" },
    { id: "mobile", label: "Mobile" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Tools" },
    { id: "design", label: "Design" },
  ];

  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/skills.json`)
      .then(response => response.json())
      .then(data => setTechnologies(data))
      .catch(error => {
        console.error("Erro ao carregar skills:", error);
      });
  }, []);

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
      <div className="about-top">
        <div className="about-content">
          <h2 className="section-title">{t("aboutMe")}</h2>
          <p className="resume-text">
            {t("firstLineResumeText")}
            <br />
            <br />
            {t("secondLineResumeText")}
          </p>
        </div>
        <div className="about-contact-card">
          <div className="about-contact-content">
            <div>
              <h3>{t("contactCardTitle")}</h3>
              <p> {t("contactCardText")} </p>
            </div>
            <div className="about-contact-icon">
              <i className="fa-regular fa-paper-plane"></i>
            </div>
          </div>
          <button className="about-contact-button" onClick={() => setIsContactOpen(true)}>
            <span>{t("letsTalk")}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="info-block">
        <div className="skills-header">
          <span className="skills-eyebrow">
            {t("skills")}
          </span>
          <h2 className="section-title">
            {t("skills")}
          </h2>
          <p className="skills-subtitle">
            {t("skillsJourney")}
          </p>
        </div>
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

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </section>
  );
}

export default AboutMe;
