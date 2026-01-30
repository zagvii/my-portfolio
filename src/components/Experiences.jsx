import '../../css/Experiences.css'; 

import React, {useState, useEffect} from 'react';
import { useTranslation } from "react-i18next";

function Experiences() {

    const { t, i18n } = useTranslation();

    const [experiencesData, setExperiencesData] = useState([]);

    const selectedLang = localStorage.getItem("lang");
    const fileName = selectedLang == 'en' ? 'experiences' : 'experiencia';

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}assets/${fileName}.xlsx`)
        .then((res) => res.arrayBuffer())
        .then((arrayBuffer) => {
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            setExperiencesData(jsonData);
        })
        .catch((err) => {
            console.error('Erro ao carregar planilha:', err);
        });
    }, [i18n.language]);


    return (
        <section id="experiences-section" className="experiences-section">
            <h2 className="section-title">{t("workExperiences")}</h2>
            <div className="timeline">
                <ul>
                    {experiencesData.map((experiencesItem, i) => (
                        <li key={i} className="timeline-item">
                            <div className="timeline-item-dot"></div>
                            <div className="timeline-item-content">
                                <h3 className="timeline-item-title">{experiencesItem.Position}</h3>
                                <div className="timeline-item-subtititle">
                                    <p className="timeline-item-company"><i className="fa-regular fa-building"/>{experiencesItem.Company}</p>
                                    <p className="timeline-item-time">
                                        <span>•</span>
                                        {experiencesItem.Time}
                                    </p>
                                </div>
                                <div className="timeline-item-description">
                                    <ol>
                                        {experiencesItem.Description.split('.').map((descriptionItem, ii) => (
                                            descriptionItem.trim() && <li key={ii}>{descriptionItem.trim()}</li>
                                        ))}
                                    </ol>
                                </div>
                                <div className="timeline-item-stack">
                                    {experiencesItem.Stack.split(',').map((tech, ii) => (
                                    <span key={ii} className="timeline-item-stack-item" >
                                        {tech.trim()}
                                    </span>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    );
}

export default Experiences;
