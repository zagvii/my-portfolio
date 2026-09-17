import '../../css/Experiences.css';

import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import * as XLSX from "xlsx";

function Experiences() {

    const { t, i18n } = useTranslation();

    const [experiencesData, setExperiencesData] = useState([]);

    useEffect(() => {

        const selectedLang = i18n.language;
        const fileName = selectedLang === 'en'
            ? 'experiences'
            : 'experiencia';

        fetch(`${import.meta.env.BASE_URL}assets/${fileName}.xlsx`)
            .then((res) => res.arrayBuffer())
            .then((arrayBuffer) => {

                const workbook = XLSX.read(arrayBuffer, {
                    type: 'array'
                });

                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];

                const jsonData =
                    XLSX.utils.sheet_to_json(worksheet);

                setExperiencesData(jsonData);

            })
            .catch((err) => {
                console.error(
                    'Erro ao carregar planilha:',
                    err
                );
            });

    }, [i18n.language]);


    return (

        <section
            id="experiences-section"
            className="experiences-section"
        >

            {/* HEADER */}
            <div className="experience-header">
                <div className="experience-header-text">
                    <span className="experience-eyebrow">
                        EXPERIENCE
                    </span>
                    <h2 className="section-title">
                        {t("workExperiences")}
                    </h2>
                    <p>
                        A journey of learning, building and creating
                        real solutions. Here are some of the places
                        where I've worked and the impact I've made.
                    </p>
                </div>
            </div>

            {/* TIMELINE */}
            <div className="experience-timeline">
                {experiencesData.map((item, index) => {

                    const descriptions = item.Description
                        ? item.Description
                            .split('.')
                            .filter(desc => desc.trim())
                        : [];

                    const stack = item.Stack
                        ? item.Stack
                            .split(',')
                            .filter(tech => tech.trim())
                        : [];

                    return (

                        <div
                            className="experience-row"
                            key={item.id || index}
                        >
                            {/* DATE / TIMELINE */}
                            <div className="experience-date">
                                <div
                                    className={
                                        index === 0
                                            ? "experience-dot active"
                                            : "experience-dot"
                                    }
                                >
                                    <span></span>
                                </div>

                                <div className="experience-date-text">
                                    {item.StartDate && (
                                        <span>
                                            {item.StartDate}
                                        </span>
                                    )}
                                    {item.EndDate && (
                                        <strong>
                                            {item.EndDate}
                                        </strong>
                                    )}
                                    {!item.StartDate && (
                                        <strong>
                                            {item.Time}
                                        </strong>
                                    )}
                                    {index === 0 && (
                                        <span className="current-badge">
                                            Current
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* EXPERIENCE CARD */}
                            <article className="experience-card">
                                {/* background opcional */}
                                {item.Image && (
                                    <div className="experience-card-image">
                                        <img
                                            src={`${import.meta.env.BASE_URL}assets/${item.Image}`}
                                            alt=""
                                        />
                                    </div>
                                )}


                                {/* INFORMAÇÕES DO CARGO */}
                                <div className="experience-main-info">
                                    <div className="experience-company-icon">
                                        <i className="fa-regular fa-building"></i>
                                    </div>
                                    <div>
                                        <h3>
                                            {item.Position}
                                        </h3>
                                        <p className="experience-company">
                                            {item.Company}
                                        </p>
                                        {item.Location && (
                                            <div className="experience-location">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <span>
                                                    {item.Location}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* DESCRIÇÃO */}

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

                                    {/* STACK */}
                                    <div className="experience-stack">
                                        {stack.map(
                                            (tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="experience-tech"
                                                >
                                                    {tech.trim()}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* LINK */}
                                {item.Link && (
                                    <a
                                        href={item.Link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="experience-link"
                                        aria-label="Open experience"
                                    >
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                )}
                            </article>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Experiences;