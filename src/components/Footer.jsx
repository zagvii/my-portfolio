import '../../css/Footer.css';

import { useState } from 'react';
import DogModal from './DogModal/DogModal';

function Footer() {

  const [isDogModalOpen, setIsDogModalOpen] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-secret">
          <button className="footer-paw" onClick={() => setIsDogModalOpen(true)} aria-label="Secret">
            <i className="fa-solid fa-paw"></i>
          </button>
          <p> 
            Some things you'll only find,
            <br />
            if you look closer...
          </p>
        </div>

        <div className="socials">
          <a href="https://github.com/zagvii" target="_blank" className="social-link" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/zagvii" target="_blank" className="social-link" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="mailto:mirian.vieira.moreira@gmail.com" className="social-link" aria-label="Email">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} Mirian Moreira. All rights reserved.
        </p>
      </footer>

      <DogModal
        isOpen={isDogModalOpen}
        onClose={() => setIsDogModalOpen(false)}
      />
    </>
  );
}

export default Footer;