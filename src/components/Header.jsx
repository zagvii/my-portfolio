import React from 'react';
import '../../css/Header.css'; 

import { useTranslation } from "react-i18next";

function Header () {
    const { t, i18n } = useTranslation();

    const changeLanguage = (event) => {
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang);
        localStorage.setItem("lang", selectedLang);
    };

    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#about-me-section">{t("aboutMe")}</a></li>
                    <li><a href="#education-section">{t("education")}</a></li>
                    <li><a href="#experiences-section">{t("workExperiences")}</a></li>
                </ul>
                <div className='rightAlign'>
                    <a className="resume-button-header" href={`${import.meta.env.BASE_URL}assets/resume-EN.pdf`} download>{t("downloadMyCV")}</a>
                    <select
                        className='selectLanguage'
                        onChange={changeLanguage}
                        defaultValue={localStorage.getItem("lang") || "pt"} >
                        <option value="pt">🇧🇷 PT</option>
                        <option value="en">🇺🇸 EN</option>
                    </select>
                </div>
            </nav>
        </header>
      );
}

export default Header;