// script.js - small helpers for the site

document.addEventListener('DOMContentLoaded', function() {
  // Add "active" highlight to current nav link based on pathname
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(a => {
    try {
      const href = a.getAttribute('href');
      const current = window.location.pathname.split('/').pop() || 'index.html';
      if (href === current) {
        a.classList.add('active');
      }
    } catch(e) {}
  });

  // Simple small reveal animation for elements with class 'card'
  const cards = document.querySelectorAll('.card');
  cards.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(8px)';
    setTimeout(()=> {
      el.style.transition = 'opacity 420ms ease, transform 420ms ease';
      el.style.opacity = 1;
      el.style.transform = 'none';
    }, 120 + i*80);
  });
});
