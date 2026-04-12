import { useState } from "react";
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
import CustomCursor from "../components/CustomCursor";

function CertificatesPage() {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertificateClick = (cert) => {
    setModalData(cert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
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

  return (
    <>
      <CustomCursor />
      <div
        className="certificates-page"
        style={{
          paddingTop: "100px",
          background: "#f7f7f7",
          color: "#1a1a1a",
          minHeight: "100vh",
        }}
      >
        <nav
          className="back-nav"
          style={{ position: "fixed", top: "30px", left: "30px", zIndex: 1100 }}
        >
          <Link
            to="/"
            className="btn-back"
            style={{
              background: "#111",
              color: "#fff",
              padding: "10px 25px",
              borderRadius: "50px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: 500,
              transition: "all 0.3s ease",
            }}
          >
            <i className="fa-solid fa-arrow-left"></i> Back to Portfolio
          </Link>
        </nav>

        <div
          className="container"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px 60px",
          }}
        >
          <div className="section-header" style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "4rem" }}>All Certifications</h1>
            <p style={{ color: "#666", fontSize: "1.2rem" }}>
              Professional certifications that showcase my skills and learning
              journey.
            </p>
          </div>

          <div
            className="certificates-grid-modern"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "30px",
              marginTop: "40px",
            }}
          >
            {certificatesData.certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="certificate-card-modern"
                onClick={() => handleCertificateClick(cert)}
                style={{
                  cursor: "pointer",
                  background: "#fff",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleCertificateClick(cert)
                }
              >
                <div
                  className="card-top-bar-new"
                  style={{ padding: "20px 20px 0" }}
                >
                  <div className="cert-header-left">
                    <h3
                      className="cert-title-new"
                      style={{ fontSize: "1.1rem", marginBottom: "5px" }}
                    >
                      {cert.title}
                      <span
                        className="cert-hashtag"
                        style={{ color: "#888", fontSize: "0.8rem" }}
                      >
                        #{index + 1}
                      </span>
                    </h3>
                    <p
                      className="cert-platform-new"
                      style={{ color: "#666", fontSize: "0.9rem" }}
                    >
                      {cert.organization}
                    </p>
                  </div>
                  <div
                    className="cert-icon-container"
                    style={{ fontSize: "1.5rem" }}
                  >
                    <span style={{ color: cert.iconColor }}>
                      {getIcon(cert.icon)}
                    </span>
                  </div>
                </div>
                <div
                  className="cert-image-container"
                  style={{ height: "180px", marginTop: "15px" }}
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {isModalOpen && modalData && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.8)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              maxWidth: "900px",
              width: "100%",
              maxHeight: "90vh",
              overflow: "auto",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              ✕
            </button>
            <div style={{ padding: "30px" }}>
              <div style={{ marginBottom: "20px" }}>
                <span style={{ color: modalData.iconColor, fontSize: "2rem" }}>
                  {getIcon(modalData.icon)}
                </span>
                <h2 style={{ marginTop: "15px", fontSize: "2rem" }}>
                  {modalData.title}
                </h2>
                <p style={{ color: "#666", fontSize: "1.1rem" }}>
                  {modalData.organization}
                </p>
              </div>
              <img
                src={modalData.image}
                alt={`${modalData.title} Certificate`}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <a
                href={modalData.pdf}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  background: "#111",
                  color: "#fff",
                  padding: "12px 30px",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                View Full Certificate
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CertificatesPage;
