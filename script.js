document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handler (visual only)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Sent!';
            btn.style.backgroundColor = '#4caf50';
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
                form.reset();
            }, 3000);
        });
    }

    // Clipboard Copy Functionality
    const copyContactBtn = document.getElementById('copyContactBtn');
    const toast = document.getElementById('toast');

    if (copyContactBtn && toast) {
        copyContactBtn.addEventListener('click', () => {
            const phoneNumber = '+91 8248627519';
            navigator.clipboard.writeText(phoneNumber).then(() => {
                // Show toast
                toast.classList.add('show');
                
                // Hide toast after 3 seconds
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }

    // Floating Socials Visibility on Scroll
    const socials = document.querySelector('.floating-socials');
    const homeSection = document.getElementById('home');

    if (socials && homeSection) {
        window.addEventListener('scroll', () => {
            const homeHeight = homeSection.offsetHeight;
            if (window.scrollY > homeHeight - 100) {
                socials.classList.add('visible');
            } else {
                socials.classList.remove('visible');
            }
        });
    }

    // Scroll animation observer (existing code below)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
});
