import toolsData from "../data/tools.json";

function Tools() {
  const getIconClass = (tool) => {
    if (tool.iconType === "brand") return `fa-brands fa-${tool.icon}`;
    if (tool.iconType === "solid") return `fa-solid fa-${tool.icon}`;
    return `fa-regular fa-${tool.icon}`;
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
              <div className="tool-icon">
                <i className={getIconClass(tool)}></i>
              </div>
              <span className="tool-label">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
