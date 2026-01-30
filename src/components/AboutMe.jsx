import '../../css/AboutMe.css'; 

import { useTranslation } from "react-i18next";

function AboutMe() {

  const { t } = useTranslation();

  const year = t("year");
  const years = t("years");

  const technologies = [
      // FRONT-END
      { name: 'HTML', experience: '4 ' + years, icon: 'devicon-html5-plain', type: 'FRONT-END'},
      { name: 'CSS', experience: '4 ' + years, icon: 'devicon-css3-plain', type: 'FRONT-END'},
      { name: 'JS', experience: '3 ' + years, icon: 'devicon-javascript-plain', type: 'FRONT-END'},
      { name: 'React', experience: '> 1 ' + year, icon: 'devicon-react-original', type: 'FRONT-END'},
      { name: 'Wordpress', experience: '> 1 ' + year, icon: 'devicon-wordpress-plain', type: 'FRONT-END'},

      // BACK-END
      { name: 'PHP', experience: '4 ' + years, icon: 'devicon-php-plain', type: 'BACK-END'},
      { name: 'Java', experience: '2 ' + years, icon: 'devicon-java-plain', type: 'BACK-END/MOBILE'},
      { name: 'C', experience: '1 ' + year, icon: 'devicon-c-plain', type: 'BACK-END'}, 
      { name: 'Objective C', experience: '1 ' + year, icon: 'devicon-objectivec-plain', type: 'IOS'},

      // DATABASE
      { name: 'MySQL', experience: '4 ' + years, icon: 'devicon-mysql-plain', type: 'DATABASE'},

      // TOOLS & DESIGN
      { name: 'Git', experience: '3 ' + years, icon: 'devicon-git-plain', type: 'TOOLS'},
      { name: 'Postman', experience: '2 ' + years, icon: 'devicon-postman-plain', type: 'TOOLS'},
      { name: 'Swagger', experience: '1 ' + year, icon: 'devicon-swagger-plain', type: 'TOOLS'},
      { name: 'Figma', experience: '1 ' + year, icon: 'devicon-figma-plain', type: 'DESIGN'},
      { name: 'Canva', experience: '4 ' + years, icon: 'devicon-canva-plain', type: 'DESIGN'},
  ];

  const SkillCard = ({ name, experience, icon, type }) => {
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
              color: 'var(--fontColor)', 
              fontWeight: '700',
              marginTop: '-5px',
              textAlign: 'left'
            }}>
              {type}
            </p>
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
