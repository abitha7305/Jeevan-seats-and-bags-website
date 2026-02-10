// Smooth Scroll for Nav Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const section = document.querySelector(this.hash);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Active Nav Link on Scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  let current = '';

  sections.forEach(sec => {
    const sectionTop = sec.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Scroll Reveal Animation
window.addEventListener("scroll", reveal);

function reveal() {
  let elements = document.querySelectorAll(".reveal");

  elements.forEach((el) => {
    let windowHeight = window.innerHeight;
    let revealTop = el.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

// Run reveal() on page load
reveal();
