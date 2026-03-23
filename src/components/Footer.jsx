import { useMemo } from "react";

function Footer() {
  // Generate dot grid positions once
  const dots = useMemo(() => {
    const dotPositions = [];
    const cols = 20;
    const rows = 8;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dotPositions.push({
          left: `${(col / (cols - 1)) * 100}%`,
          top: `${(row / (rows - 1)) * 100}%`,
          delay: `${Math.random() * 3}s`,
          duration: `${2 + Math.random() * 2}s`,
        });
      }
    }
    return dotPositions;
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-dot-grid">
        {dots.map((dot, index) => (
          <div
            key={index}
            className="footer-dot"
            style={{
              left: dot.left,
              top: dot.top,
              animationDelay: dot.delay,
              animationDuration: dot.duration,
            }}
          />
        ))}
      </div>

      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="logo-text">Mega Shyam S</span>
            <p className="footer-tagline">Java Full Stack Developer</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#work">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <a
                href="https://www.linkedin.com/in/megashyam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://wa.me/918248627519"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a href="mailto:megashyam@example.com">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Mega Shyam S. All rights reserved.</p>
          <p>Built with passion and code</p>
        </div>
      </div>

      <style>{`
        .footer-section {
          position: relative;
          background: #111;
          padding: 60px 0 30px;
          overflow: hidden;
        }

        .footer-dot-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .footer-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 122, 0, 0.3);
          border-radius: 50%;
          animation: dotPulse 3s ease-in-out infinite;
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        .footer-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-brand .logo-text {
          font-family: 'Allura', cursive;
          font-size: 28px;
          color: #fff;
          background: linear-gradient(90deg, #1e88e5, #8e24aa);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-tagline {
          color: #888;
          margin-top: 8px;
          font-size: 0.9rem;
        }

        .footer-links {
          display: flex;
          gap: 60px;
        }

        .footer-column h4 {
          color: #fff;
          font-size: 1rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .footer-column a {
          display: block;
          color: #888;
          text-decoration: none;
          margin-bottom: 10px;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-column a:hover {
          color: #ff7a00;
        }

        .footer-bottom {
          border-top: 1px solid #333;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }

        .footer-bottom p {
          color: #666;
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .footer-main {
            flex-direction: column;
          }
          
          .footer-links {
            gap: 40px;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
