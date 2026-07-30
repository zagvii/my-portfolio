import "../../css/Education.css";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import * as XLSX from "xlsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button className="edu-ctrl next" onClick={onClick} aria-label="Next">
    <i className="fa-solid fa-chevron-right"></i>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="edu-ctrl prev" onClick={onClick} aria-label="Previous">
    <i className="fa-solid fa-chevron-left"></i>
  </button>
);

function Education() {
  const { t, i18n } = useTranslation();
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const selectedLang = i18n.language;
    const fileName = selectedLang === 'en' ? 'education' : 'educacao';
    
    fetch(`${import.meta.env.BASE_URL}assets/${fileName}.xlsx`)
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => {
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        setEducationData(jsonData);
      })
      .catch((err) => console.error('Erro:', err));
  }, [i18n.language]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "edu-dots",
    customPaging: () => <div className="dot-line"></div>,
  };

  return (
    <section id="education-section" className="education-section">
      <h2 className="section-title">{t("education")}</h2>
      <div className="education-container">

        <div className="education-left">
          <div className="edu-slider-wrapper">
            <Slider {...settings}>
              {educationData.map((item) => (
                <div key={item.id} className="edu-slide-container">
                  <div className="edu-card">

                    {/* Imagem */}
                    <div className="edu-card-background">
                      <img
                        src={`${import.meta.env.BASE_URL}assets/${item.Image}`}
                        alt={item.School}
                      />
                    </div>

                    {/* Overlay */}
                    <div className="edu-card-overlay"></div>

                    {/* Conteúdo */}
                    <div className="edu-card-content">

                      <span className="edu-label">
                        {item.Type}
                      </span>

                      <h3 className="edu-title">
                        {item.Major}
                      </h3>

                      <div className="edu-meta">

                        <span>
                          <i className="fa-regular fa-calendar"></i>
                          {item.Time}
                        </span>

                        <span>
                          <i className="fa-solid fa-location-dot"></i>
                          {item.City}
                        </span>

                      </div>

                      <p className="edu-description">
                        {item.Desc}
                      </p>

                      <a
                        href={item.Link}
                        target="_blank"
                        rel="noreferrer"
                        className="edu-school"
                      >
                        {item.School}
                      </a>

                    </div>

                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="education-right">
          <div className="education-side-card">

            <div className="side-icon">
                <i className="fa-brands fa-github"></i>
            </div>

            <span className="side-label">
                OPEN SOURCE
            </span>

            <h3>Projects Repository</h3>

            <p>
                Explore my personal projects, source code and experiments.
                Discover how I build solutions using modern web technologies.
            </p>

            <a
                href="https://github.com/zagvii"
                target="_blank"
                rel="noopener noreferrer"
                className="side-button"
            >
                <span>Browse GitHub</span>

                <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;