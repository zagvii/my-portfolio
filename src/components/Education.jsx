import React, {useState, useEffect} from 'react';
import '../../css/Education.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTranslation } from "react-i18next";

function Education() {

    const { t, i18n } = useTranslation();

    const [educationData, setEducationData] = useState([]);

    const selectedLang = localStorage.getItem("lang");
    const fileName = selectedLang == 'en' ? 'education' : 'educacao';

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}assets/${fileName}.xlsx`)
        .then((res) => res.arrayBuffer())
        .then((arrayBuffer) => {
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            setEducationData(jsonData);
        })
        .catch((err) => {
            console.error('Erro ao carregar planilha:', err);
        });
    }, [i18n.language]);

    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    return (
        <section id="education-section" className="education-section">
            <h2 className="section-title">{t("education")}</h2>
            <div className="education-columns-container">
                <ul className="education-list">
                    {educationData.map((educationItem) => (
                        <li className='education-item' key={educationItem.id}>
                            <img src="" alt="" />
                            <a 
                                href={educationItem.Link} 
                                target="_blank" 
                                className="education-card" >
                                    <img src={`${import.meta.env.BASE_URL}assets/${educationItem.Image}`} alt="" />
                                    <div className="edu-content">
                                        <div className="edu-title-div">
                                            <h3 className="edu-title">{educationItem.Major}</h3>
                                        </div>
                                        <span className="edu-time"><i className="fa-regular fa-clock"/>{educationItem.Time}</span>
                                        <p className="edu-school"><i className="fa-solid fa-school"/>{educationItem.School}</p>
                                    </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Education;
