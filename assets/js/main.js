(function () {
  'use strict';

  /* Mobile nav toggle */
  const nav = document.getElementById('site-nav');
  const btn = document.getElementById('nav-toggle');
  if (btn && nav) {
    btn.addEventListener('click', () => nav.classList.toggle('open'));
    // Close on outside click
    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && !btn.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
  }

  /* Active nav link */
  const path = window.location.pathname;
  document.querySelectorAll('[data-nav]').forEach(a => {
    const key = a.getAttribute('data-nav');
    const isProjects = path.includes('projects');
    if (key === 'projects' && isProjects) a.classList.add('active');
    if (key === 'home' && !isProjects) a.classList.add('active');
  });

  /* Footer year */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Scroll progress bar */
  const bar = document.getElementById('scroll-progress');
  if (bar) {
    const updateBar = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
    };
    window.addEventListener('scroll', updateBar, { passive: true });
    updateBar();
  }

  /* Scroll reveal (IntersectionObserver) */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(el => observer.observe(el));
  }

  /* Card mouse glow (tracks cursor position per card) */
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });

})();
