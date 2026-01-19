// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.style.display = 'none';
            hamburger.classList.remove('active');
        });
    });
}

// CTA Button Navigation
const ctaButton = document.querySelector('.cta-button');
if (ctaButton && ctaButton.textContent.includes('Quote')) {
    ctaButton.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
}

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: contactForm.children[0].value,
            email: contactForm.children[1].value,
            phone: contactForm.children[2].value,
            projectType: contactForm.children[3].value,
            message: contactForm.children[4].value
        };

        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Simulate form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Scroll Animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe various elements on the page
document.querySelectorAll('.service-card, .portfolio-item, .about-content, .contact-container, .benefit-card, .team-card, .value-card, .faq-item, .area-item, .stat').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Initialize
console.log('Website loaded successfully!');
