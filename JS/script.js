// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simple Shopping Cart Functionality
let cartCount = 0;
const cartCountSpan = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.getAttribute('data-name');
        cartCount++;
        cartCountSpan.textContent = cartCount;
        
        // Simple elegant alert/feedback
        alert(`✨ Success!\n"${productName}" has been added to your shopping bag.`);
    });
});

// Contact Form Submission Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('🌸 Thank you for reaching out! We have received your message and will get back to you shortly.');
        contactForm.reset();
    });
}