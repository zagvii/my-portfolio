import '../../css/AboutMe.css'; 

import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

const miroIcon = `${import.meta.env.BASE_URL}assets/miro.png`;
const sheetsIcon = `${import.meta.env.BASE_URL}assets/googlesheets.png`;

function AboutMe() {

  const { t } = useTranslation();

  const technologies = [
    { name: 'HTML', experience: '4 years', icon: 'devicon-html5-plain' },
    { name: 'CSS', experience: '4 years', icon: 'devicon-css3-plain' },
    { name: 'JS', experience: '3 years', icon: 'devicon-javascript-plain' },
    { name: 'PHP', experience: '4 years', icon: 'devicon-php-plain' },
    { name: 'C', experience: '1 years', icon: 'devicon-c-plain' },
    { name: 'React', experience: '> 1 year', icon: 'devicon-react-original' },
    { name: 'Java', experience: '2 years', icon: 'devicon-java-plain' },
    { name: 'Objective C', experience: '1 years', icon: 'devicon-objectivec-plain' },
    { name: 'MySQL', experience: '4 years', icon: 'devicon-mysql-plain' },
    // { name: 'Tailwind css', experience: '2 years', icon: 'devicon-tailwindcss-plain' },
    { name: 'Git', experience: '3 years', icon: 'devicon-git-plain' },
    { name: 'Postman', experience: '2 years', icon: 'devicon-postman-plain' },
    { name: 'Canva', experience: '4 years', icon: 'devicon-canva-plain' },
    { name: 'Swagger', experience: '1 year', icon: 'devicon-swagger-plain' },
    { name: 'Figma', experience: '1 year', icon: 'devicon-figma-plain' },
    { name: 'Wordpress', experience: '> 1 year', icon: 'devicon-wordpress-plain' },
  ];

  const SkillCard = ({ name, experience, icon }) => {
    return (
      <div className="glass-skill-wrapper">
        <div className="glass-experience-tag">
          <span className="pulse-dot"></span>
          {experience}
        </div>
        
        <div className="glass-card-main">          
          <div className="glass-icon-container">
            <i className={icon} />
          </div>
          
          <div className="glass-info">
            <h3 className="glass-skill-name">{name}</h3>
            <p style={{ 
              fontSize: '9px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em', 
              color: '#d2c5c5ff', 
              fontWeight: '700',
              marginTop: '-5px'
            }}>
              Technology
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="about-me-section" id="about-me-section">
      <h2 className="section-title">{t("aboutMe")}<span>.</span></h2>
      <p className="resume-text">
        {t("firstLineResumeText")}
        <br/>
        <br/>
        {t("secondLineResumeText")}
      </p>

      <div className="info-block">
        <h2 className="section-title">{t("skills")}<span>.</span></h2>
          <div className="glass-stack">
            {technologies.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
      </div> 
    </section>
  );
}

export default AboutMe;
