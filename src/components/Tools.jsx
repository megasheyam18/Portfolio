import toolsData from "../data/tools.json";
import {
  FaGithub,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaBootstrap,
  FaCloud,
  FaPalette,
  FaCode,
  FaWordpress,
} from "react-icons/fa";

function Tools() {
  const getIcon = (tool) => {
    const iconMap = {
      "fa-github": <FaGithub />,
      "fa-code": <FaCode />,
      "fa-html5": <FaHtml5 />,
      "fa-css3-alt": <FaCss3 />,
      "fa-js": <FaJs />,
      "fa-java": <FaJava />,
      "fa-bootstrap": <FaBootstrap />,
      "fa-database": <FaDatabase />,
      "fa-cloud-arrow-up": <FaCloud />,
      "fa-palette": <FaPalette />,
      "fa-file-word": <FaWordpress />,
    };
    return iconMap[`fa-${tool.icon}`] || <FaCode />;
  };

  return (
    <section id="tools" className="tools-section">
      <div className="container">
        <div className="section-header-tools">
          <h2>Essential Tools I use</h2>
          <p>Explore the tools and technologies I work with</p>
        </div>
        <div className="tools-grid">
          {toolsData.tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-icon">{getIcon(tool)}</div>
              <span className="tool-label">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
