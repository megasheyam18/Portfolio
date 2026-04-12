import { Link } from "react-router-dom";
import certificatesData from "../data/certificates.json";
import {
  FaGithub,
  FaDatabase,
  FaRobot,
  FaLeaf,
  FaCode,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";

function Certificates({ onOpenModal }) {
  const handleCertificateClick = (cert) => {
    if (onOpenModal) {
      onOpenModal(cert.pdf, cert.title, cert.organization);
    } else {
      // Fallback: open PDF in new tab or modal
      window.open(cert.pdf, "_blank");
    }
  };

  // Icon mapping for react-icons
  const getIcon = (iconName) => {
    const iconMap = {
      "fa-github": <FaGithub />,
      "fa-server": <FaDatabase />,
      "fa-robot": <FaRobot />,
      "fa-person-chalkboard": <FaRobot />,
      "fa-leaf": <FaLeaf />,
      "fa-code": <FaCode />,
      "fa-file-lines": <FaRobot />,
      "fa-briefcase": <FaBriefcase />,
      "fa-certificate": <FaCertificate />,
    };
    return iconMap[iconName] || <FaCertificate />;
  };

  // Show only first 4 certificates
  const displayCertificates = certificatesData.certificates.slice(0, 4);

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
        {displayCertificates.map((cert, index) => (
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
                <span style={{ color: cert.iconColor }}>
                  {getIcon(cert.icon)}
                </span>
              </div>
            </div>
            <div className="cert-image-container">
              <img src={cert.image} alt={`${cert.title} Certificate`} />
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {certificatesData.certificates.length > 4 && (
        <div className="see-more-container">
          <Link to="/certificates" className="btn btn-see-more">
            See More <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </Link>
        </div>
      )}
    </section>
  );
}

export default Certificates;
