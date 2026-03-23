import { useState, useEffect } from "react";

function CertificateModal({ isOpen, onClose, certData }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
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

  if (!isOpen || !certData) return null;

  return (
    <div className={`certificate-modal ${isOpen ? "active" : ""}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-certificate">
          <img src={certData.image} alt={certData.title} />
          <div className="modal-cert-info">
            <h3>{certData.title}</h3>
            <p>{certData.organization}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificateModal;
