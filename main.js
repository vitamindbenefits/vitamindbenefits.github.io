// main.js

// Smooth scroll for all anchor links
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple form validation feedback (email capture)
const emailForm = document.querySelector('.email-capture form');
if (emailForm) {
  emailForm.addEventListener('submit', e => {
    const emailInput = emailForm.querySelector('input[type="email"]');
    if (!emailInput.value || !emailInput.value.includes('@')) {
      e.preventDefault();
      alert('Please enter a valid email address.');
    }
  });
}

// Fade in hero content on page load
window.addEventListener('load', () => {
  document.querySelector('.hero-content').classList.add('fade-in');
});
