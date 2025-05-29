// Navbar scroll behavior
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.backgroundColor = 'rgba(2, 19, 115, 0.95)'; // dark-imperial-blue with opacity
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.backgroundColor = '#021373'; // dark-imperial-blue
    }
});

// Testimonials data
const testimonials = [
    {
        name: "Sarah Johnson",
        program: "Software Development",
        text: "Tech2Craft changed my life. I went from knowing nothing about coding to landing a job as a junior developer in just 6 months!",
        image: "images/testimonials/sarah.jpg"
    },
    {
        name: "Michael Chen",
        program: "Phone Repair",
        text: "The hands-on experience I gained here was invaluable. Now I run my own successful phone repair business.",
        image: "images/testimonials/michael.jpg"
    },
    {
        name: "Emily Rodriguez",
        program: "Fashion Design",
        text: "The mentorship and creative freedom at Tech2Craft helped me launch my own sustainable fashion line.",
        image: "images/testimonials/emily.jpg"
    }
];

// Initialize testimonial slider
let currentTestimonial = 0;
const testimonialSlider = document.querySelector('.testimonial-slider');

function updateTestimonial() {
    if (testimonialSlider) {
        const testimonial = testimonials[currentTestimonial];
        testimonialSlider.innerHTML = `
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <div class="testimonial-author">
                        <strong>${testimonial.name}</strong>
                        <span>${testimonial.program} Graduate</span>
                    </div>
                </div>
            </div>
        `;
        
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }
}

// Update testimonial every 5 seconds
setInterval(updateTestimonial, 5000);
updateTestimonial(); // Initial update

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to your backend
        console.log('Form submitted:', data);
        
        // Show success message
        const modalBody = contactForm.closest('.modal-body');
        modalBody.innerHTML = `
            <div class="text-center">
                <i class="fas fa-check-circle text-success" style="font-size: 3rem;"></i>
                <h4 class="mt-3">Thank you for your message!</h4>
                <p>We'll get back to you as soon as possible.</p>
            </div>
        `;
        
        // Reset and close modal after 3 seconds
        setTimeout(() => {
            const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
            modal.hide();
            contactForm.reset();
            modalBody.innerHTML = contactForm.outerHTML;
        }, 3000);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Program cards hover effect
document.querySelectorAll('.program-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Initialize all tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
}); 