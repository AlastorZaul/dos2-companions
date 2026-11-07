// Bouton de thème clair / sombre, ajouté à la navigation de chaque page.
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  const nav = document.querySelector('nav.site-nav');
  if (!nav) return;

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'tool-icon theme-toggle';
  btn.title = 'Changer de thème';
  btn.setAttribute('aria-label', 'Changer de thème');
  btn.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const isDark = current === 'dark' || (!current && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
  (nav.querySelector('.tool-icons') || nav).appendChild(btn);
})();

document.addEventListener('DOMContentLoaded', function () {
  // Sur grand écran, on replie les sections qui ne contiennent pas la page courante.
  if (!window.matchMedia || !window.matchMedia('(min-width: 1000px)').matches) return;
  document.querySelectorAll('nav.site-nav details.nav-group').forEach(function (d) {
    if (!d.querySelector('a[aria-current="page"]')) d.removeAttribute('open');
  });
});
