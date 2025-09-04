import '../../css/AboutMe.css'; 

import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

const miroIcon = `${import.meta.env.BASE_URL}assets/miro.png`;
const sheetsIcon = `${import.meta.env.BASE_URL}assets/googlesheets.png`;

function AboutMe() {

  const { t } = useTranslation();

  const technologies = [
    { name: 'HTML', iconClass: 'devicon-html5-plain' },
    { name: 'CSS', iconClass: 'devicon-css3-plain' },
    { name: 'JS', iconClass: 'devicon-javascript-plain' },
    { name: 'PHP', iconClass: 'devicon-php-plain' },
    { name: 'C', iconClass: 'devicon-c-plain' },
    { name: 'React', iconClass: 'devicon-react-original' },
    { name: 'Java', iconClass: 'devicon-java-plain' },
    { name: 'Objective C', iconClass: 'devicon-objectivec-plain' },
    { name: 'MySQL', iconClass: 'devicon-mysql-plain' },
    { name: 'Tailwind Css', iconClass: 'devicon-tailwindcss-plain' },
    { name: 'Git', iconClass: 'devicon-git-plain' },
    { name: 'Postman', iconClass: 'devicon-postman-plain' },
    { name: 'Canva', iconClass: 'devicon-canva-plain' },
    { name: 'Swagger', iconClass: 'devicon-swagger-plain' },
    { name: 'Figma', iconClass: 'devicon-figma-plain' },
    { name: 'Wordpress', iconClass: 'devicon-wordpress-plain' },
  ];

  const scrollContainerRef = useRef(null);
  
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8; 
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScrollability = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); 
    };
    
    checkScrollability();
    container.addEventListener('scroll', checkScrollability);

    return () => container.removeEventListener('scroll', checkScrollability);
  }, []);

  return (
    <section className="about-me-section" id="about-me-section">
      <h2 className="section-title">{t("aboutMe")}</h2>
        <p className="resume-text">
          {t("resumeText")}
        </p>
        <div className="info-block">
          <h3 className="info-title">{t("skills")}</h3>
          
          <div className='info-columns techColumns'>
            <div className="tech-slider-wrapper">
              <button 
                className="slider-arrow arrow-left" 
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                >
                &lt;
              </button>

              <div className="tech-slider-viewport" ref={scrollContainerRef}>
                <ul className="tech-list">
                  {technologies.map((tech) => (
                    <li className="tech-item" key={tech.name}>
                      <div className="tech-icon-circle">
                        <i className={tech.iconClass}></i>
                      </div>
                      <span className="tech-name">{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                className="slider-arrow arrow-right" 
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                >
                &gt;
              </button>
            </div>

            {/* <div className='columnInfo'>
              <b>Languages & Technologies:</b> 
              <ul className="column tech">
                <li><i className="devicon-html5-plain colored"></i></div></li>
                <li><i className="devicon-css3-plain colored"></i></div></li>
                <li><i className="devicon-javascript-plain colored"></i></div></li>
                <li><i className="devicon-php-plain colored"></i></div></li>
                <li><i className="devicon-c-plain colored"></i></div></li>
                <li><i className="devicon-mysql-plain colored"></i></div></li>
                <li><i className="devicon-java-plain colored"></i></div></li>
                <li><i className="devicon-objectivec-plain"></i></li>
                <li><i className="devicon-react-plain colored"></i></div></li>
                <li><i className="devicon-tailwindcss-plain colored"></i></div></li>
                <li><i className="devicon-git-plain colored"/></li>
                <li><i className="devicon-postman-plain colored"/></li>
                <li><i className="devicon-swagger-plain colored"/></li>
                <li><i className="devicon-figma-plain colored"/></li>
                <li><i className="devicon-canva-plain colored"/></li>
                <li><img src={miroIcon} alt="Miro" className="custom-icon"/></li>
                <li><img src={sheetsIcon} alt="Google Sheets" className="custom-icon"/></li>
                <li><i className="devicon-wordpress-plain colored"/></li>
              </ul>
            </div> */}
            {/* <div className='columnInfo'>
              <b>Frameworks (learning in progress):</b> 
              <ul className="column tech">
                <li><i className="devicon-react-plain colored"></i></div></li>
                <li><i className="devicon-tailwindcss-plain colored"></i></div></li>
              </ul>
            </div>
            <div className='columnInfo'>
              <b>Tools:</b> 
              <ul className="column tech">
                <li><i className="devicon-git-plain colored"/></li>
                <li><i className="devicon-postman-plain colored"/></li>
                <li><i className="devicon-swagger-plain colored"/></li>
                <li><i className="devicon-figma-plain colored"/></li>
                <li><i className="devicon-canva-plain colored"/></li>
                <li><img src={miroIcon} alt="Miro" className="custom-icon"/></li>
                <li><img src={sheetsIcon} alt="Google Sheets" className="custom-icon"/></li>
                <li><i className="devicon-wordpress-plain colored"/></li>
              </ul>
            </div> */}
          </div>
          {/* <div className='info-columns'>
            <div className='columnInfo'>
              <b>Concepts:</b> 
              <ul className="column">
                <li>Relational Databases</li>
                <li>Object-Oriented Programming (OOP)</li>
                <li>Programming Logic</li>
                <li>Responsive Design</li>
                <li>REST APIs</li>
                <li>Agile (SCRUM)</li>
              </ul>
            </div>
            <div className='columnInfo'>
              <b>Soft Skills:</b> 
              <ul className="column">
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Adaptability</li>
                <li>Self-management</li>
                <li>Problem-solving</li>
                <li>Decision-Making</li>
                <li>Project Leadership</li>
              </ul>
            </div>
          </div>*/}
        </div> 
    </section>
  );
}

export default AboutMe;
