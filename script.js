document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // CUSTOM CURSOR FUNCTIONALITY
  // ==========================================
  const customCursor = document.getElementById("customCursor");
  const cursorDot = document.getElementById("cursorDot");

  // Only run cursor code on desktop
  if (window.innerWidth >= 1024 && customCursor && cursorDot) {
    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;
    let dotX = 0,
      dotY = 0;

    // Smooth cursor follow
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Animate cursor
    function animateCursor() {
      // Smooth delay for outer cursor
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      // Immediate follow for dot
      dotX = mouseX;
      dotY = mouseY;

      customCursor.style.left = cursorX + "px";
      customCursor.style.top = cursorY + "px";

      cursorDot.style.left = dotX + "px";
      cursorDot.style.top = dotY + "px";

      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Cursor hover effects
    const hoverElements = document.querySelectorAll(
      "a, button, .navlist li, .project-card-modern, .certificate-card-modern, .tool-card, .service-card, .stat-item, .btn-download-resume, .nav-link, .nav-item, .hamburger",
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        customCursor.classList.add("hovering");
      });
      el.addEventListener("mouseleave", () => {
        customCursor.classList.remove("hovering");
      });
    });
  }

  // ==========================================
  // AVATAR STATS COUNTER ANIMATION
  // ==========================================
  const statNumbers = document.querySelectorAll(".stat-number-large");

  function animateAvatarCounters() {
    statNumbers.forEach((stat) => {
      const target = parseInt(stat.getAttribute("data-target"));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          stat.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target;
        }
      };

      updateCounter();
    });
  }

  // Start avatar counter animation on page load
  if (statNumbers.length > 0) {
    setTimeout(animateAvatarCounters, 500);
  }

  // ==========================================
  // MODERN NAVBAR FUNCTIONALITY
  // ==========================================
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Hamburger menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking a link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Active section highlighting
  const sections = document.querySelectorAll("section[id]");

  function highlightNavLink() {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("data-section") === sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNavLink);

  // ==========================================
  // SMOOTH SCROLLING FOR ANCHOR LINKS
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // ==========================================
  // FLOATING SOCIALS VISIBILITY ON SCROLL
  // ==========================================
  const socials = document.querySelector(".floating-socials");
  const homeSection = document.getElementById("home");

  if (socials && homeSection) {
    window.addEventListener("scroll", () => {
      const homeHeight = homeSection.offsetHeight;
      if (window.scrollY > homeHeight - 100) {
        socials.classList.add("visible");
      } else {
        socials.classList.remove("visible");
      }
    });
  }

  // ==========================================
  // SCROLL ANIMATION OBSERVER
  // ==========================================
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("fade-in-section");
    observer.observe(section);
  });
});
