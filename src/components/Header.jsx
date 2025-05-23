import React from 'react';
import '../../css/Header.css'; 

function Header () {
    return (
        <header>
            <nav>
                <ul>
                <div className="left-group">
                    <li><a href="#about-me-section">ABOUT ME</a></li>
                    <li><a href="#education-section">EDUCATION</a></li>
                </div>
                <div className="right-group">
                    <li><a href="#experiences-section">WORK EXPERIENCES</a></li>
                    <a className="resume-button-header" href={`${import.meta.env.BASE_URL}assets/resume-EN.pdf`} download>Download my CV</a>
                </div>
                </ul>
            </nav>
        </header>
      );
}

export default Header;