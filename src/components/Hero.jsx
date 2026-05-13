import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [stats, setStats] = useState({ repos: 0, leetcode: 0, techs: 0 });

  useEffect(() => {
    setStats({ repos: 12, leetcode: 150, techs: 8 });
  }, []);

  const learningTags = [
    "React.js",
    "Node.js",
    "System Design",
    "Backend Development",
  ];

  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <div className="hero-text">
          <div className="badge">● AVAILABLE FOR WORK</div>
          <h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm Mega Sheyam S
            </motion.span>
          </h1>
          <h2 className="hero-role">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Java Full Stack Developer / Backend Developer
            </motion.span>
          </h2>
          <p className="hero-desc">
            I build fast, responsive, and user-friendly web applications using
            modern technologies. Passionate about clean UI, performance
            optimization, and scalable solutions.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">Hire Me</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{stats.repos}</span>
              <span className="stat-label">Repositories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.leetcode}</span>
              <span className="stat-label">Problems Solved</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.techs}</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
          <div className="learning-section">
            <h3 className="learning-title">Currently Learning</h3>
            <div className="learning-tags">
              {learningTags.map((tag, index) => (
                <span key={index} className="learning-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-illustration">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            className="developer-illustration"
          >
            {/* Developer Illustration SVG */}
            <defs>
              <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect width="500" height="500" fill="url(#bg)" rx="20" />
            {/* Simple developer icon */}
            <circle cx="250" cy="180" r="60" fill="#fff" />
            <rect x="220" y="240" width="60" height="80" fill="#fff" rx="10" />
            <rect x="200" y="280" width="20" height="40" fill="#fff" rx="5" />
            <rect x="280" y="280" width="20" height="40" fill="#fff" rx="5" />
            <rect x="240" y="320" width="20" height="40" fill="#fff" rx="5" />
            {/* Laptop */}
            <rect x="150" y="350" width="200" height="120" fill="#fff" rx="10" />
            <rect x="160" y="360" width="180" height="80" fill="#333" rx="5" />
            <circle cx="250" cy="450" r="15" fill="#fff" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
