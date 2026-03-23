import { useState } from "react";
import certificatesData from "../data/certificates.json";

function Certificates({ onOpenModal }) {
  const handleCertificateClick = (cert) => {
    if (onOpenModal) {
      onOpenModal(cert.pdf, cert.title, cert.organization);
    } else {
      // Fallback: open PDF in new tab or modal
      window.open(cert.pdf, "_blank");
    }
  };

  const getIconClass = (icon) => {
    if (icon.startsWith("fa-brands")) return icon;
    if (icon.startsWith("fa-solid")) return icon;
    return `fa-regular ${icon}`;
  };

  return (
    <section
      id="certifications"
      className="certificate-section-modern container"
    >
      <div className="section-header-modern">
        <h2 className="section-title-modern">My Certification Journey</h2>
        <p className="section-subtitle-modern">
          Certifications that showcase my skills, learning, and professional
          growth
        </p>
      </div>

      <div className="certificate-grid-modern">
        {certificatesData.certificates.map((cert, index) => (
          <div
            key={cert.id}
            className="certificate-card-modern"
            onClick={() => handleCertificateClick(cert)}
          >
            <div className="card-top-bar-new">
              <div className="cert-header-left">
                <h3 className="cert-title-new">
                  {cert.title}{" "}
                  <span className="cert-hashtag">#{index + 1}</span>
                </h3>
                <p className="cert-platform-new">{cert.organization}</p>
              </div>
              <div className="cert-icon-container">
                <i
                  className={`fa-solid ${cert.icon}`}
                  style={{ color: cert.iconColor }}
                ></i>
              </div>
            </div>
            <div className="cert-image-container">
              <img src={cert.image} alt={`${cert.title} Certificate`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
