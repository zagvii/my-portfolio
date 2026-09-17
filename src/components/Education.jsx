import "../../css/Education.css";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import * as XLSX from "xlsx";

import usePortfolioData from "../hooks/usePortfolioData";

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
  const fileName = i18n.language === "en" ? "education.en.json" : "education.pt.json";

  const {
    data: educationData,
    loading,
    error
  } = usePortfolioData(fileName);

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
      <div className="education-header">
        <span className="education-eyebrow">
          {t("education")}
        </span>
        <h2 className="section-title">
          {t("education")}
        </h2>
        <p className="education-subtitle">
          {t("educationSubtitle")}
        </p>
      </div>
      <div className="edu-slider-wrapper">
        <Slider {...settings}>
          {educationData.map((item) => (
            <div key={item.id} className="edu-slide-container">
              <div className="edu-card">
                <div className="edu-card-background">
                  <img src={`${import.meta.env.BASE_URL}assets/${item.Image}`} alt={item.School}/>
                </div>
                <div className="edu-card-overlay"></div>
                <div className="edu-card-content">
                  <span className="edu-label">{item.Type}</span>
                  <h3 className="edu-title">{item.Major}</h3>
                  <div className="edu-meta">
                    <span>{item.Time}</span>
                    <span className="edu-meta-dot">•</span>
                    <span>{item.City}</span>
                  </div>
                  <p className="edu-description">{item.Desc}</p>
                  <a href={item.Link} target="_blank" rel="noreferrer" className="edu-school">{item.School}</a>
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