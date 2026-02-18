// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission (Mockup)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for reaching out, Bharath! Since this is a static site, check out Formspree or EmailJS to make this form functional.');
});
