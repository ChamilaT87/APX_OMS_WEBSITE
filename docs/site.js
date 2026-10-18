'use strict';
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');
  if (!toggle || !nav) return;
  function setOpen(value) {
    nav.classList.toggle('open', value);
    toggle.setAttribute('aria-expanded', String(value));
    toggle.setAttribute('aria-label', value ? 'Close navigation' : 'Open navigation');
  }
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false); toggle.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800 && toggle.getAttribute('aria-expanded') === 'true') setOpen(false);
  });
})();
