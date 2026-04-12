import { useState, useEffect, useRef } from "react";

function Hero() {
  const [typedText, setTypedText] = useState("");
  const [stats, setStats] = useState({ repos: 0, leetcode: 0, techs: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const texts = [
    "Mega Sheyam S",
    "Java Full Stack Developer",
    "Backend Developer | Problem Solver",
  ];

  const textIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const typingSpeedRef = useRef(100);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const typeEffect = () => {
      const currentText = texts[textIndexRef.current];

      if (isDeletingRef.current) {
        setTypedText(currentText.substring(0, charIndexRef.current - 1));
        charIndexRef.current--;
        typingSpeedRef.current = 60;
      } else {
        setTypedText(currentText.substring(0, charIndexRef.current + 1));
        charIndexRef.current++;
        typingSpeedRef.current = 100;
      }

      if (
        !isDeletingRef.current &&
        charIndexRef.current === currentText.length
      ) {
        isDeletingRef.current = true;
        typingSpeedRef.current = 2500;
      } else if (isDeletingRef.current && charIndexRef.current === 0) {
        isDeletingRef.current = false;
        textIndexRef.current = (textIndexRef.current + 1) % texts.length;
        typingSpeedRef.current = 800;
      }

      setTimeout(typeEffect, typingSpeedRef.current);
    };

    const timeout = setTimeout(typeEffect, 1500);
    return () => clearTimeout(timeout);
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
          Hi, I'm <span className="typed-text">{typedText}</span>
          <span className="typed-cursor">|</span>
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
