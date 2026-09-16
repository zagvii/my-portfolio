import "../../../css/ContactModal.css";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function ContactModal({ isOpen, onClose }) {

  const { t } = useTranslation();

  useEffect(() => {

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };

  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="contact-modal-overlay"
      onMouseDown={onClose}
    >
      <div
        className="contact-modal"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="contact-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="contact-modal-header">
          <div className="contact-modal-icon">
            <i className="fa-regular fa-paper-plane"></i>
          </div>
          <span className="contact-modal-label">
            GET IN TOUCH
          </span>
          <h2>
            Let's create something together.
          </h2>
          <p>
            Have a project, opportunity or just want to say hello?
            Choose the best way to reach me.
          </p>
        </div>

        <div className="contact-options">
          <a href="mailto:mirian.vieira.moreira@gmail.com" className="contact-option">
            <div className="contact-option-icon">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="contact-option-info">
              <span>Email</span>
              <strong>mirian.vieira.moreira@gmail.com</strong>
            </div>
            <i className="fa-solid fa-arrow-right contact-arrow"></i>
          </a>

          <a href="https://www.linkedin.com/in/zagvii/" target="_blank" rel="noopener noreferrer" className="contact-option">
            <div className="contact-option-icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="contact-option-info">
              <span>LinkedIn</span>
              <strong>Let's connect</strong>
            </div>
            <i className="fa-solid fa-arrow-up-right-from-square contact-arrow"></i>
          </a>

          <a href="https://github.com/zagvii" target="_blank" rel="noopener noreferrer" className="contact-option">
            <div className="contact-option-icon">
              <i className="fa-brands fa-github"></i>
            </div>
            <div className="contact-option-info">
              <span>GitHub</span>
              <strong>@zagvii</strong>
            </div>
            <i className="fa-solid fa-arrow-up-right-from-square contact-arrow"></i>
          </a>
        </div>

        <div className="contact-modal-footer">
          <span className="availability-dot"></span>
          <span>
            Open to new opportunities
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;