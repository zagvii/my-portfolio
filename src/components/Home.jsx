import React from 'react';
import '../../css/Home.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  
  return (
    <section className="home-page" id="home-page">
      <div className="text-block">
          <h1>{t("introduction")}<span className="name">Mirian_</span></h1>
          <p>{t("resume")}</p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/zagvii" target="_blank" className="social-link">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/zagvii" target="_blank" className="social-link">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="picture-block">
          <div className="picture-frame">
            <img src={`${import.meta.env.BASE_URL}assets/profile-picture-mini.jpeg`} alt="profile-picture" />
          </div>
        </div>
    </section>
  );
}

export default Home;
