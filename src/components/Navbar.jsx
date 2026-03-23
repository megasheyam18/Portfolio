import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
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
              {location.pathname === "/" ? (
                <a
                  href={`#${link.section}`}
                  className="nav-link"
                  data-section={link.section}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={`/#${link.section}`}
                  className="nav-link"
                  data-section={link.section}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
