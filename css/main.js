// Set the footer year automatically
document.querySelectorAll('#yr').forEach(el => el.textContent = new Date().getFullYear());

// Reveal sections as they scroll into view
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
