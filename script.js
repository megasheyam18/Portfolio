// ==========================================
// TYPING ANIMATION FOR HERO SECTION
// ==========================================
const typedTextElement = document.querySelector(".typed-text");
const texts = [
  "Mega Sheyam S",
  "Java Full Stack Developer",
  "Backend Developer | Problem Solver",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  if (!typedTextElement) {
    // If no typed-text element, just return
    return;
  }

  const currentText = texts[textIndex];

  if (isDeleting) {
    typedTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typedTextElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentText.length) {
    // Wait before deleting
    isDeleting = true;
    typingSpeed = 2000;
  } else if (isDeleting && charIndex === 0) {
    // Move to next text
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typingSpeed = 500;
  }

  setTimeout(typeEffect, typingSpeed);
}

// Start typing animation
if (typedTextElement) {
  setTimeout(typeEffect, 1000);
}

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
  // BACK TO PROJECTS SMOOTH SCROLL NAVIGATION
  // ==========================================
  const backToProjectsBtn = document.getElementById("backToProjectsBtn");
  if (backToProjectsBtn) {
    backToProjectsBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("data-scroll-to") || "index.html#work";

      // Navigate to index.html and scroll to projects section smoothly
      window.location.href = target;
    });
  }

  // Handle smooth scroll on page load if URL has hash
  if (window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }

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

// ==========================================
// CERTIFICATE MODAL FUNCTIONALITY
// ==========================================
function openCertificateModal(pdfUrl, title, organization) {
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("modalCertImage");
  const modalTitle = document.getElementById("modalCertTitle");
  const modalOrg = document.getElementById("modalCertOrg");

  if (modal && modalImg && modalTitle && modalOrg) {
    modalImg.src = pdfUrl;
    modalTitle.textContent = title;
    modalOrg.textContent = organization;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCertificateModal() {
  const modal = document.getElementById("certificateModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Close modal on escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeCertificateModal();
  }
});

// ==========================================
// EMAILJS CONTACT FORM INTEGRATION
// ==========================================
// Initialize EmailJS (Replace with your actual public key)
// You need to sign up at https://www.emailjs.com/ and replace these values
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    // Validate inputs
    if (!name || !email || !message) {
      showToast("Please fill in all fields");
      return;
    }

    // Show loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML =
      '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    try {
      // Send email using EmailJS
      // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual values
      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message,
        to_name: "Mega Sheyam S",
      });

      // Show success message
      showToast("Message sent successfully! I will get back to you soon.");
      contactForm.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      showToast(
        "Failed to send message. Please try again or email me directly.",
      );
    } finally {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

// Toast notification function
function showToast(message) {
  // Create toast element
  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>
    <span>${message}</span>
  `;

  // Add styles
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #43a047, #2e7d32);
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 10px;
    animation: slideIn 0.3s ease;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
  `;

  document.body.appendChild(toast);

  // Remove after 4 seconds
  setTimeout(() => {
    toast.style.animation = "slideOut 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
