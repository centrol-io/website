/* Open and close mobile menu */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', function() {
  mobileMenu.classList.toggle('open');
});

/* Smooth scroll to anchor links */
const links = document.querySelectorAll('nav a');

for (const link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const id = link.getAttribute('href');
    const target = document.querySelector(id);

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
