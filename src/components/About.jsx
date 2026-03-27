import { FaCode, FaDatabase, FaLightbulb } from "react-icons/fa";

function About() {
  const highlights = [
    { icon: <FaCode />, text: "Full Stack Development" },
    { icon: <FaDatabase />, text: "Backend & Database" },
    { icon: <FaLightbulb />, text: "Problem Solving" },
  ];

  return (
    <section id="about" className="about-section container">
      <div className="section-header-work">
        <h2>About Me</h2>
        <p style={{ marginTop: "10px", color: "#666" }}>
          Get to know me better
        </p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate <strong>Java Full Stack Developer</strong> with
            expertise in building end-to-end web applications. I specialize in
            creating efficient, scalable, and user-friendly solutions.
          </p>
          <p>
            With a strong foundation in both frontend and backend technologies,
            I enjoy solving complex problems and turning ideas into reality
            through code.
          </p>
          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <span className="highlight-icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
