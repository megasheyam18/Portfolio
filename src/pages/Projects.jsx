import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import projectsData from "../data/projects.json";
import CustomCursor from "../components/CustomCursor";

function Projects() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = projectsData.projects;

  useEffect(() => {
    // Check if there's a hash for a specific project
    const hash = window.location.hash;
    if (hash && hash.startsWith("#work-")) {
      const id = hash.replace("#work-", "");
      const project = projects.find((p) => p.id === id);
      if (project) {
        setSelectedProject(project);
        setShowDetail(true);
      }
    } else {
      setShowDetail(false);
      setSelectedProject(null);
    }
  }, [location, projects]);

  const handleProjectClick = (project) => {
    if (!project.isComingSoon) {
      setSelectedProject(project);
      setShowDetail(true);
      navigate(`/projects#work-${project.id}`, { replace: false });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBackToProjects = (e) => {
    e.preventDefault();
    setShowDetail(false);
    setSelectedProject(null);
    navigate("/projects", { replace: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (showDetail && selectedProject) {
    return (
      <>
        <CustomCursor />
        <div
          className="projects-page"
          style={{
            paddingTop: "100px",
            background: "#f7f7f7",
            color: "#1a1a1a",
            minHeight: "100vh",
          }}
        >
          <nav
            className="back-nav"
            style={{
              position: "fixed",
              top: "30px",
              left: "30px",
              zIndex: 1100,
            }}
          >
            <a
              href="/projects"
              onClick={handleBackToProjects}
              className="btn-back"
              style={{
                background: "#111",
                color: "#fff",
                padding: "10px 25px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: 500,
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
            >
              <i className="fa-solid fa-arrow-left"></i> Back to Projects
            </a>
          </nav>

          <div
            className="container"
            style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
          >
            <div
              className="project-hero"
              style={{
                position: "relative",
                height: "60vh",
                borderRadius: "40px",
                overflow: "hidden",
                marginBottom: "50px",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={selectedProject.heroImage}
                alt={selectedProject.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                className="project-hero-overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "60px",
                  color: "#fff",
                }}
              >
                <h1 style={{ fontSize: "4rem", marginBottom: "10px" }}>
                  {selectedProject.title}
                </h1>
              </div>
            </div>

            <div
              className="project-info-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gap: "60px",
                marginBottom: "60px",
              }}
            >
              <div className="project-description">
                <h2
                  style={{
                    fontSize: "2rem",
                    marginBottom: "20px",
                    color: "#111",
                  }}
                >
                  Project Overview
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "#555",
                    marginBottom: "20px",
                  }}
                >
                  {selectedProject.description}
                </p>

                {selectedProject.features &&
                  selectedProject.features.length > 0 && (
                    <>
                      <h3
                        style={{
                          fontSize: "1.5rem",
                          marginBottom: "15px",
                          color: "#111",
                        }}
                      >
                        Key Features
                      </h3>
                      <ul
                        style={{
                          marginLeft: "20px",
                          marginBottom: "20px",
                          color: "#555",
                        }}
                      >
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} style={{ marginBottom: "10px" }}>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
              </div>

              <div
                className="tech-stack-box"
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "30px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                  height: "fit-content",
                }}
              >
                <h3 style={{ marginBottom: "20px", fontSize: "1.4rem" }}>
                  Technologies Used
                </h3>
                <div
                  className="tech-pills"
                  style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                >
                  {selectedProject.techStack
                    ? selectedProject.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="tech-pill"
                          style={{
                            background: "#f0f0f0",
                            padding: "8px 16px",
                            borderRadius: "50px",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                          }}
                        >
                          {tech}
                        </span>
                      ))
                    : selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="tech-pill"
                          style={{
                            background: "#f0f0f0",
                            padding: "8px 16px",
                            borderRadius: "50px",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                </div>
              </div>
            </div>

            {selectedProject.gallery && selectedProject.gallery.length > 0 && (
              <div
                className="project-gallery"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "30px",
                  marginBottom: "60px",
                }}
              >
                {selectedProject.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="gallery-item"
                    style={{
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                      height: "250px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Screenshot ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <div
        className="projects-page"
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
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div className="section-header" style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "4rem" }}>Explore All Projects</h1>
            <p style={{ color: "#666", fontSize: "1.2rem" }}>
              A deep dive into my creative and technical journey.
            </p>
          </div>

          <div
            className="projects-grid-modern"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: "30px",
              marginTop: "40px",
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className={`project-card-modern ${project.isComingSoon ? "coming-soon" : ""}`}
                style={{
                  backgroundImage: `url('${project.heroImage}')`,
                  filter: project.isComingSoon ? "grayscale(0.8)" : "none",
                  opacity: project.isComingSoon ? 0.8 : 1,
                  cursor: project.isComingSoon ? "default" : "pointer",
                }}
                onClick={() => handleProjectClick(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleProjectClick(project)
                }
              >
                <div className="card-overlay"></div>
                {project.isComingSoon && (
                  <div
                    className="coming-soon-badge"
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      background: "rgba(0, 0, 0, 0.6)",
                      color: "#fff",
                      padding: "5px 15px",
                      borderRadius: "50px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      zIndex: 2,
                    }}
                  >
                    Coming Soon
                  </div>
                )}
                <div className="card-content">
                  <div className="project-tags-modern">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag-modern">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="project-title-modern">{project.title}</h3>
                </div>
                {!project.isComingSoon && (
                  <div className="card-arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
