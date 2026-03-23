function Education() {
  const education = [
    {
      title: "B.Tech Information Technology",
      institution: "K.S. Rangasamy College of Technology",
      period: "2021 - 2025",
      percentage: "80%",
      description:
        "Built a strong foundation in programming, data structures, and software development concepts. Gained practical exposure through projects and hands-on labs that strengthened problem-solving and logical thinking.",
      tags: ["Programming", "Data Structures", "Software Dev"],
      icon: "fa-laptop-code",
      iconColor: "#43a047",
    },
    {
      title: "HSC (12th Grade)",
      institution: "Bharani Vidhyalaya Senior Secondary School (CBSE)",
      period: "2020 - 2021",
      percentage: "71.8%",
      description:
        "Learned core concepts in Information Technology along with Physics, Chemistry, and Mathematics. Developed analytical thinking and technical interest through structured academic learning.",
      tags: [
        "Information Technology",
        "Physics",
        "Chemistry",
        "Mathematics",
        "English",
      ],
      icon: "fa-atom",
      iconColor: "#fb8c00",
    },
    {
      title: "SSLC (10th Grade)",
      institution: "Bharani Vidhyalaya Senior Secondary School (CBSE)",
      period: "2019",
      percentage: "62.2%",
      description:
        "Built a strong academic foundation in Science, Mathematics, Social Science, and English. Developed discipline, logical thinking, and effective communication skills.",
      tags: ["Science", "Social Science", "Mathematics", "English"],
      icon: "fa-book-open",
      iconColor: "#8e24aa",
    },
  ];

  return (
    <section className="timeline-section container">
      <div className="section-header-work">
        <h2>Education</h2>
        <p style={{ marginTop: "10px", color: "#666" }}>
          A summary of my academic qualifications
        </p>
      </div>

      <div className="timeline-container">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <div className="timeline-icon-box">
                <i
                  className={`fa-solid ${edu.icon}`}
                  style={{ color: edu.iconColor }}
                ></i>
              </div>
              <div className="timeline-line"></div>
            </div>
            <div className="timeline-content">
              <div className="card-illustration">
                <i className={`fa-solid ${edu.icon}`}></i>
              </div>
              <div className="timeline-header">
                <div className="timeline-title">
                  <h3>
                    {edu.title}{" "}
                    <span className="timeline-badge">{edu.percentage}</span>
                  </h3>
                  <div className="timeline-institution">{edu.institution}</div>
                </div>
                <div className="timeline-year">{edu.period}</div>
              </div>
              <div className="timeline-body">
                <p>{edu.description}</p>
              </div>
              <div className="timeline-tags">
                {edu.tags.map((tag, tagIndex) => (
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

export default Education;
