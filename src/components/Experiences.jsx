import '../../css/Experiences.css';

import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import * as XLSX from "xlsx";

import usePortfolioData from '../hooks/usePortfolioData';

function Experiences() {
    const { t, i18n } = useTranslation();
    const fileName = i18n.language === "en" ? "experiences.en.json" : "experiences.pt.json";

    const {
        data: experiencesData
    } = usePortfolioData(fileName);

    return (
        <section id="experiences-section" className="experiences-section">
            <div className="experience-header">
                <div className="experience-header-text">
                    <span className="experience-eyebrow">{t("experience")}</span>
                    <h2 className="section-title">{t("workExperiences")}</h2>
                    <p>{t("experienceSubtitle")}</p>
                </div>
            </div>

            <div className="experience-timeline">
                {experiencesData.map((item, index) => {

                    const descriptions = item.Description ? item.Description.split('.').filter(desc => desc.trim()) : [];
                    const stack = item.Stack ? item.Stack.split(',').filter(tech => tech.trim()) : [];

                    return (
                        <div className="experience-row" key={item.id || index}>
                            <div className="experience-date">
                                <div className={ index === 0 ? "experience-dot active" : "experience-dot"} >
                                    <span></span>
                                </div>
                                <div className="experience-date-text">
                                    {item.StartDate && ( <span> {item.StartDate} </span> )}
                                    {item.EndDate && ( <strong> {item.EndDate} </strong> )}
                                    {!item.StartDate && ( <strong> {item.Time} </strong> )}
                                    {index === 0 && ( <span className="current-badge"> Current </span> )}
                                </div>
                            </div>
                            <article className="experience-card">
                                {item.Image && (
                                    <div className="experience-card-image">
                                        <img src={`${import.meta.env.BASE_URL}assets/${item.Image}`} alt="" />
                                    </div>
                                )}
                                <div className="experience-main-info">
                                    <div className="experience-company-icon">
                                        <i className="fa-regular fa-building"></i>
                                    </div>
                                    <div>
                                        <h3>{item.Position}</h3>
                                        <p className="experience-company">{item.Company}</p>
                                        {item.Location && (
                                            <div className="experience-location">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <span>{item.Location}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="experience-details">
                                    <ul className="experience-description">
                                        {descriptions.map(
                                            (description, descIndex) => (
                                                <li key={descIndex}>
                                                    {description.trim()}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <div className="experience-stack">
                                        {stack.map(
                                            (tech, techIndex) => (
                                                <span key={techIndex} className="experience-tech">{tech.trim()}</span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </article>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Experiences;