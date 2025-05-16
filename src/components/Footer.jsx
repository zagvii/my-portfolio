import React from 'react';
import '../../css/Footer.css'; 

function Footer() {
    return (
      <footer className="footer">
        <p className="footer-text">© {new Date().getFullYear()} Mirian Vieira Moreira. All rights reserved.</p>
        <div className="socials">
          <a href="https://www.linkedin.com/in/zagvii" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/zagvii" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </footer>
    );
}  

export default Footer;