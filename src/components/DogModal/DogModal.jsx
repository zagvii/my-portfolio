import "../../../css/DogModal.css";

import { useEffect } from "react";

function DogModal({ isOpen, onClose }) {

  useEffect(() => {

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };

  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="dog-modal-overlay" onMouseDown={onClose}>
      <div className="dog-modal" onMouseDown={(event) => event.stopPropagation()}>
        <button className="dog-modal-close" onClick={onClose} aria-label="Close">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="dog-photo-wrapper">
          <img src={`${import.meta.env.BASE_URL}assets/sunhee.jpeg`} alt="My dog"/>
          <span className="dog-secret-badge">
            <i className="fa-solid fa-paw"></i>
            SECRET FOUND
          </span>
        </div>

        <div className="dog-modal-content">
          <span className="dog-eyebrow">
            WELL, WELL...
          </span>
          <h2>
            Hey, you're curious!
          </h2>
          <p>
            You found the most important member of this
            portfolio — my little son. 🐶
          </p>
        </div>
      </div>
    </div>
  );
}

export default DogModal;