import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import * as XLSX from "xlsx";
import "../../css/Education.css";

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
      <h2 className="section-title">
        {t("education")}<span>.</span>
      </h2>

      <div className="edu-slider-wrapper">
        <Slider {...settings}>
          {educationData.map((item) => (
            <div key={item.id} className="edu-slide-container">
              <div className="edu-card-compact">
                
                <div 
                  className="edu-card-img" 
                  style={{ backgroundImage: `url('${import.meta.env.BASE_URL}assets/${item.Image}')` }}
                >
                  <div className="edu-tag-container">
                    <i className="fa-solid fa-graduation-cap edu-tag-icon"></i>
                    <a href={item.Link} className="edu-tag-text">{item.School}</a>
                  </div>
                </div>

                <div className="edu-card-info">
                  <span className="edu-label">{item.Type}</span>
                  <h3 className="edu-title">{item.Major}</h3>
                  <span className="bottom-subtitle">
                    <span className="education-card-info">
                      <i className="fa-regular fa-calendar"/>{item.Time}
                    </span>

                    <span className="education-card-info">
                      <i className="fa-solid fa-location-dot"></i>{item.City}
                    </span>
                  </span>

                  <div className="edu-text">
                    <p>{item.Desc}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Education;