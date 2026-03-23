import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";

function Projects() {
  const featuredProjects = projectsData.projects.slice(0, 3);

  return (
    <section id="work" className="projects-section container">
      <div className="section-header" style={{ marginBottom: "40px" }}>
        <h2>My Projects</h2>
      </div>
      <div className="projects-grid-modern">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card-modern ${project.isComingSoon ? "coming-soon" : ""}`}
            style={{ backgroundImage: `url('${project.heroImage}')` }}
            onClick={() =>
              !project.isComingSoon &&
              window.history.pushState(null, "", `/projects#work-${project.id}`)
            }
          >
            <div className="card-overlay"></div>
            {project.isComingSoon && (
              <div className="coming-soon-badge">Coming Soon</div>
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

      <div className="see-more-container">
        <Link to="/projects" className="btn btn-see-more">
          See More <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
