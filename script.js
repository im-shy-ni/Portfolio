
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.navbar-nav a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));

  // Fade-up on scroll
  const fadeEls = document.querySelectorAll('.fade-up');
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  fadeEls.forEach(el => fadeObserver.observe(el));

  // Contact form validation
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    ['nameInput','emailInput','msgInput'].forEach(id => {
      const el = document.getElementById(id);
      if (!el.value.trim() || (id === 'emailInput' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value))) {
        el.classList.add('is-invalid'); valid = false;
      } else {
        el.classList.remove('is-invalid');
      }
    });
    if (valid) {
      const btn = document.getElementById('submitBtn');
      btn.textContent = 'Sending...';
      btn.style.opacity = '0.7';
      setTimeout(() => {
        form.reset();
        btn.textContent = 'Send Message';
        btn.style.opacity = '1';
        document.getElementById('formSuccess').style.display = 'block';
        setTimeout(() => document.getElementById('formSuccess').style.display = 'none', 4000);
      }, 1200);
    }
  });

 // Clear invalid on input


