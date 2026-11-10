// Bouton de thème clair / sombre, ajouté à la navigation de chaque page.
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  // Spoilers masqués par défaut ; activés par l'interrupteur « J'ai fini le jeu ».
  let spoilersOn = false;
  try { spoilersOn = localStorage.getItem('spoilers') === 'on'; } catch (e) {}
  if (!spoilersOn) root.classList.add('hide-spoilers');

  const nav = document.querySelector('nav.site-nav');
  if (!nav) return;

  // Menu burger pour téléphone : la barre de navigation devient un panneau qui s'ouvre.
  nav.id = nav.id || 'site-nav';
  const bar = document.createElement('div');
  bar.className = 'mobile-bar';
  bar.innerHTML = '<a class="mobile-title" href="index.html">DOS2 Companions</a>';
  const burger = document.createElement('button');
  burger.type = 'button';
  burger.className = 'menu-toggle';
  burger.setAttribute('aria-controls', nav.id);
  burger.setAttribute('aria-expanded', 'false');
  burger.textContent = '☰ Menu';
  bar.appendChild(burger);
  nav.before(bar);
  const backdrop = document.createElement('button');
  backdrop.type = 'button';
  backdrop.className = 'nav-backdrop';
  backdrop.setAttribute('aria-label', 'Fermer le menu');
  document.body.appendChild(backdrop);
  const setNav = (open) => {
    root.classList.toggle('nav-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.textContent = open ? '✕ Fermer' : '☰ Menu';
  };
  burger.addEventListener('click', () => setNav(!root.classList.contains('nav-open')));
  backdrop.addEventListener('click', () => setNav(false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setNav(false)));

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

  const eye = (on) => on
    ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>'
    : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 19c-7 0-11-7-11-7a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.1 9.1 0 0 1 12 4c7 0 11 7 11 7a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22"/></svg>';
  const sp = document.createElement('button');
  sp.type = 'button';
  sp.className = 'tool-icon spoiler-toggle';
  const paint = (on) => {
    sp.innerHTML = eye(on);
    sp.title = on ? 'Spoilers affichés : cliquer pour les masquer' : 'Spoilers masqués : cliquer pour les afficher';
    sp.setAttribute('aria-label', sp.title);
    sp.setAttribute('aria-pressed', String(on));
  };
  paint(spoilersOn);
  sp.addEventListener('click', () => {
    spoilersOn = !spoilersOn;
    root.classList.toggle('hide-spoilers', !spoilersOn);
    try { localStorage.setItem('spoilers', spoilersOn ? 'on' : 'off'); } catch (e) {}
    paint(spoilersOn);
  });
  (nav.querySelector('.tool-icons') || nav).appendChild(sp);

  // Pages à spoilers : une carte claire avec un bouton, à la place du texte gris.
  if (document.body.hasAttribute('data-spoiler')) {
    const main = document.querySelector('main');
    const anchor = main && (main.querySelector('.subtitle') || main.querySelector('h1'));
    if (anchor) {
      const gate = document.createElement('div');
      gate.className = 'spoiler-gate';
      gate.innerHTML = '<p><strong>Contenu masqué.</strong> Cette page contient des spoilers.</p>';
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'btn';
      b.textContent = 'Afficher les spoilers';
      b.addEventListener('click', () => sp.click());
      gate.appendChild(b);
      anchor.after(gate);
    }
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  // Sur grand écran, on replie les sections qui ne contiennent pas la page courante.
  if (!window.matchMedia || !window.matchMedia('(min-width: 1000px)').matches) return;
  document.querySelectorAll('nav.site-nav details.nav-group').forEach(function (d) {
    // Le groupe Outils reste ouvert : il contient le générateur et les suggestions, à garder visibles.
    if (d.querySelector('.tool-icons')) return;
    if (!d.querySelector('a[aria-current="page"]')) d.removeAttribute('open');
  });
});
