// Bouton de thème clair / sombre, ajouté à la navigation de chaque page.
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  const nav = document.querySelector('nav.site-nav');
  if (!nav) return;

  const btn = document.createElement('button');
  btn.textContent = 'Thème';
  btn.style.cssText = 'font:inherit;padding:6px 12px;border:1px solid var(--border);border-radius:6px;background:var(--card);color:var(--fg);cursor:pointer;';
  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const isDark = current === 'dark' || (!current && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
  nav.appendChild(btn);
})();
