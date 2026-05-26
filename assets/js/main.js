// Sergio Dicandia – main.js

document.addEventListener('DOMContentLoaded', function () {

  // AOS – animazioni scroll
  AOS.init({
    duration: 680,
    easing: 'ease-out',
    once: true,
    offset: 40
  });

  // Mobile nav toggle
  const toggle  = document.querySelector('.nav-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.querySelector('.overlay');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('show');
    toggle.innerHTML = '<i class="bi bi-x"></i>';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    toggle.innerHTML = '<i class="bi bi-list"></i>';
  }

  if (toggle) toggle.addEventListener('click', function () {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });
  if (overlay) overlay.addEventListener('click', closeSidebar);

  // Chiudi sidebar cliccando su un link (mobile)
  document.querySelectorAll('#sidebar nav a').forEach(function (a) {
    a.addEventListener('click', closeSidebar);
  });

  // Back to top
  const btt = document.querySelector('.back-to-top');
  if (btt) {
    window.addEventListener('scroll', function () {
      btt.classList.toggle('show', window.scrollY > 200);
    });
    btt.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Cookie banner
  const banner = document.getElementById('cookie-banner');
  if (banner && !localStorage.getItem('sd-cookie-ok')) {
    banner.classList.add('show');
    document.querySelector('.cookie-accept').addEventListener('click', function () {
      localStorage.setItem('sd-cookie-ok', '1');
      banner.classList.remove('show');
    });
  }

});
