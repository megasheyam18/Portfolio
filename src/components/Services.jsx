function Services() {
  const services = [
    {
      icon: "👾",
      desc: "I design clean, modern, and user-friendly interfaces focused on usability, clarity, and responsiveness across all screen sizes.",
      title: "UI Design",
      number: "01",
    },
    {
      icon: "⚡",
      desc: "I build fast, responsive, and scalable websites using HTML, CSS, and JavaScript with clean structure and performance-focused code.",
      title: "Web Development",
      number: "02",
    },
    {
      icon: "📱",
      desc: "I develop simple and efficient applications with structured logic, smooth UI, and reliable data handling for real-world use.",
      title: "App Development",
      number: "03",
    },
    {
      icon: "🗄️",
      desc: "I work with Java, SQL, and MySQL to build secure backends, manage data, and connect frontend systems with reliable logic.",
      title: "Backend & Database",
      number: "04",
    },
  ];

  const getIconClass = (icon) => {
    const iconMap = {
      "👾": "pixel-icon",
      "⚡": "code-icon",
      "📱": "design-icon",
      "🗄️": "brand-icon",
    };
    return iconMap[icon] || "";
  };

  return (
    <section className="services container">
      <div className="section-header">
        <h2>
          How Can I<br />
          Assist You?
        </h2>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className={`icon-circle ${getIconClass(service.icon)}`}>
              {service.icon}
            </div>
            <p>{service.desc}</p>
            <div className="card-footer">
              <h3>{service.title}</h3>
              <span className="number">{service.number}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
