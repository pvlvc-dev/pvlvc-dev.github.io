(function() {
const nav = document.getElementById('site-nav');
const btn = document.getElementById('nav-toggle');
if (btn && nav) {
btn.addEventListener('click', () => nav.classList.toggle('open'));
}
// Active link highlighter
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav]').forEach(a => {
const key = a.getAttribute('data-nav');
if ((key === 'home' && path === 'index.html') || (key === 'projects' && path.includes('projects'))) {
a.classList.add('active');
}
});
// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
})();