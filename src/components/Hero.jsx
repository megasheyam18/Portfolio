import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [stats, setStats] = useState({ repos: 0, leetcode: 0, techs: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Animate stats counters
    const duration = 2000;
    const targets = { repos: 12, leetcode: 150, techs: 8 };
    const startTime = Date.now();

    const animateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setStats({
        repos: Math.floor(targets.repos * progress),
        leetcode: Math.floor(targets.leetcode * progress),
        techs: Math.floor(targets.techs * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      } else {
        setStats(targets);
      }
    };

    setTimeout(animateCounters, 500);
  }, []);

  const learningTags = [
    "React.js",
    "Node.js",
    "System Design",
    "Backend Development",
  ];

  return (
    <section id="home" className="hero container">
      <div className="hero-center">
        <div className="badge">● AVAILABLE FOR WORK</div>
        <h1>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Mega Sheyam S
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Java Full Stack Developer / Backend Developer
          </motion.span>
        </h1>
        <p className="hero-desc">
          I build fast, responsive, and user-friendly web applications using
          modern technologies. Passionate about clean UI, performance
          optimization, and scalable solutions.
        </p>
      </div>
      <div className="hero-visuals">
        <div className="profile-card">
          <div className="profile-image">
            <div className="avatar-container">
              <div className="avatar-wrapper">
                <div className="avatar-front">
                  <img src="/assets/photo.jpg" alt="Mega Shyam" />
                </div>
                <div className="avatar-back">
                  <span className="back-text">Technology Leads the World</span>
                </div>
              </div>
            </div>
          </div>

          <div className="avatar-stats">
            <div className="stat-mini">
              <span className="stat-number-large">{stats.repos}</span>
              <span className="stat-label-small">Repositories | </span>
            </div>
            <div className="stat-mini">
              <span className="stat-number-large">{stats.leetcode}</span>
              <span className="stat-label-small">LeetCode Problems |</span>
            </div>
            <div className="stat-mini">
              <span className="stat-number-large">{stats.techs}</span>
              <span className="stat-label-small">Technologies |</span>
            </div>
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

        <a
          href="/assets/Final_resume.pdf"
          download="Mega_Shyam_Resume.pdf"
          className="btn-download-resume"
        >
          Download Resume <i className="fa-solid fa-file-arrow-down"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
