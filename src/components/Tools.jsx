import toolsData from "../data/tools.json";
import {
  FaGithub,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaBootstrap,
  FaCloudUploadAlt,
  FaPalette,
  FaCode,
  FaFileWord,
} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { SiVercel, SiCanva } from "react-icons/si";

function Tools() {
  const getIcon = (tool) => {
    const iconMap = {
      "fa-github": <FaGithub />,
      "fa-code": <VscCode />, // VS Code
      "fa-html5": <FaHtml5 />,
      "fa-css3-alt": <FaCss3Alt />,
      "fa-js": <FaJs />,
      "fa-java": <FaJava />,
      "fa-bootstrap": <FaBootstrap />,
      "fa-database": <FaDatabase />,
      "fa-cloud-arrow-up": <SiVercel />, // Vercel
      "fa-palette": <SiCanva />, // Canva
      "fa-file-word": <FaFileWord />, // MS Office
    };
    return iconMap[tool.icon] || <FaCode />;
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
