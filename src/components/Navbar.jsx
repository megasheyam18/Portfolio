import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section based on scroll position
      const sections = [
        "home",
        "about",
        "projects",
        "certifications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      // Navigate to home page with hash
      navigate(`/#${sectionId}`);
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { section: "home", label: "Home" },
    { section: "about", label: "About" },
    { section: "projects", label: "Projects" },
    { section: "certifications", label: "Certifications" },
    { section: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`navbar-modern ${isScrolled ? "scrolled" : ""}`}
      id="navbar"
    >
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">Mega Shyam S</span>
        </Link>

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`} id="navMenu">
          {navLinks.map((link) => (
            <li className="nav-item" key={link.section}>
              <a
                href={`#${link.section}`}
                className={`nav-link ${activeSection === link.section ? "active" : ""}`}
                data-section={link.section}
                onClick={(e) => handleNavClick(e, link.section)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
