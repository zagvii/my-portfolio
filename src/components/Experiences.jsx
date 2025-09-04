import React, {useState, useEffect} from 'react';
import '../../css/Experiences.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

function Home() {

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

    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);
    

    return (
        <section id="experiences-section" className="experiences-section">
            <h2 className="section-title">{t("workExperiences")}</h2>
            <div className="timeline">
                <ul>
                    {experiencesData.map((experiencesItem) => (
                        <li key={experiencesItem.id} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h6>{experiencesItem.Time}</h6>
                                <h3 className="timeline-title">{experiencesItem.Title}</h3>
                                <p className="timeline-description">{experiencesItem.Description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    );
}

export default Home;
