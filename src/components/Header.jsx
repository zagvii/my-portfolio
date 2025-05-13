import React from 'react';
import '../../css/header.css'; 

function Header () {
    return (
        <header>
            <nav>
                <ul>
                <div class="left-group">
                    <li><a href="#about-me-section">ABOUT ME</a></li>
                    <li><a href="#education-section">EDUCATION</a></li>
                </div>
                <div class="right-group">
                    <li><a href="#experiences-section">JOB EXPERIENCES</a></li>
                    <li><button>Download My CV</button></li>
                </div>
                </ul>
            </nav>
        </header>
      );
}

export default Header;