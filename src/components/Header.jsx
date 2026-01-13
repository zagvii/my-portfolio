import React, { useState }from 'react';
import '../../css/Header.css';

import { Moon, Sun } from 'lucide-react';
import { useTranslation } from "react-i18next";

function Header () {
    const { t, i18n } = useTranslation();

    const [currentLang, setCurrentLang] = useState(localStorage.getItem("lang") || "en");
    const [theme, setTheme] = useState('dark');

    const handleLanguageChange = (newLang) => {
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);

        localStorage.setItem("lang", newLang);
    };

    const ThemeSwitch = () => {
        const [isDarkMode, setIsDarkMode] = useState(true); 
        const handleToggle = () => {
            setIsDarkMode(!isDarkMode);
        };
    }

    return (
        <header>
            <p>PORTFOLIO</p>
            <label className="switchTheme">
                <input 
                    type="checkbox" 
                />
                <span className="roundSwitch">
                    <Moon className="icon-moon" size={16} />
                    <Sun className="icon-sun" size={16} />
                </span>
            </label>

            <div className="glass-red-container">
                <button className={`glass-lang-item ${currentLang === 'pt' ? 'active' : ''}`} onClick={() => handleLanguageChange('pt')} >
                    <span className="flag-icon">🇧🇷</span>
                    <span className="lang-text">PT</span>
                </button>

                <button className={`glass-lang-item ${currentLang === 'en' ? 'active' : ''}`} onClick={() => handleLanguageChange('en')} >
                    <span className="flag-icon">🇺🇸</span>
                    <span className="lang-text">EN</span>
                </button>
            </div>
        </header>
      );
}

export default Header;