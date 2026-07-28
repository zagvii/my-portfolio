import '../../css/Home.css'; 

import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  const useTypingEffect = (text, speed = 100) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
      let i = 0;
      setDisplayedText(""); 
      
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prev) => text.slice(0, prev.length + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed);

      return () => clearInterval(timer);
    }, [text, speed]);

    return displayedText;
  };

  const displayText = useTypingEffect(t("introduction") + "Mirian");

  const getRenderedText = () => {
    if (displayText.length <= t("introduction").length) {
      return <span>{displayText}</span>;
    } else {
      const introPart = t("introduction");
      const namePart = displayText.slice(t("introduction").length);
      return (
        <>
          <span>{introPart}</span>
          <span className="text-highlight">{namePart}</span>
        </>
      );
    }
  };
  
  return (
    <section className="home-page" id="home-page">
      <div className="text-block">
          <p class="welcome-text">{t("welcome")}</p>
          <h1 className="typing-header">
            {getRenderedText()}
            <span className="blinking-cursor">|</span>
          </h1>
          <p>{t("oneLineResume")}</p>
          <p className="resume-text">{t("resume")}</p>

          {/* <div className="socials">
            <a href="https://www.linkedin.com/in/zagvii" target="_blank" className="social-link">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/zagvii" target="_blank" className="social-link">
              <i className="fa-brands fa-github"></i>
            </a>
          </div> */}

          <div className="buttons">
            <button className="btn btn-primary">{t("contactMe")}</button>
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
