function Experience() {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Coreverse",
      type: "Internship",
      period: "Nov 2023 – Mar 2024",
      description:
        "Developed DOCORE, a comprehensive school management system using Flutter and Firebase. Contributed to backend logic, robust UI design, and secure authentication workflows.",
      tags: ["Flutter", "Firebase"],
      icon: "fa-laptop-code",
      iconColor: "#ff7a00",
    },
    {
      title: "GUI Developer Intern",
      company: "Domain Hostly",
      type: "Internship",
      period: "June 2023 – July 2023",
      description:
        "Built a billing system using Python Tkinter with SQLite database integration. Utilized NumPy for complex calculation logic and efficient data processing.",
      tags: ["Python", "SQLite"],
      icon: "fa-desktop",
      iconColor: "#1e88e5",
    },
  ];

  return (
    <section className="timeline-section container">
      <div className="section-header-work">
        <h2>Experience</h2>
        <p style={{ marginTop: "10px", color: "#666" }}>
          A summary of my professional experience
        </p>
      </div>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <div className="timeline-icon-box">
                <i
                  className={`fa-solid ${exp.icon}`}
                  style={{ color: exp.iconColor }}
                ></i>
              </div>
              <div className="timeline-line"></div>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-title">
                  <h3>
                    {exp.title}{" "}
                    <span className="timeline-badge">{exp.company}</span>
                  </h3>
                  <div className="timeline-institution">{exp.type}</div>
                </div>
                <div className="timeline-year">{exp.period}</div>
              </div>
              <div className="timeline-body">
                <p>{exp.description}</p>
              </div>
              <div className="timeline-tags">
                {exp.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="timeline-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
