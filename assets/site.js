/* Shared behaviour for the three JayaKrishna Arts homepage variants. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var doc = document.documentElement;
  doc.classList.add('js');

  // Header: solid background once the page scrolls past the hero edge.
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 24); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile menu.
  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-menu]');
  if (toggle && menu) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
    };
    toggle.addEventListener('click', function () { setOpen(toggle.getAttribute('aria-expanded') !== 'true'); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  // Scroll reveal. Content is visible by default; only hidden once JS confirms it can reveal.
  var items = document.querySelectorAll('[data-reveal]');
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { el.classList.add('will-reveal'); io.observe(el); });
  }

  // Crossfade slideshow with pause control (variant C hero).
  document.querySelectorAll('[data-slideshow]').forEach(function (root) {
    var slides = root.querySelectorAll('[data-slide]');
    var dots = root.querySelectorAll('[data-dot]');
    var pause = root.querySelector('[data-pause]');
    var i = 0, timer = null, playing = !reduce;
    var show = function (n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('is-active', k === i); s.setAttribute('aria-hidden', String(k !== i)); });
      dots.forEach(function (d, k) { d.setAttribute('aria-current', String(k === i)); });
      root.style.setProperty('--slide', i);
      root.dispatchEvent(new CustomEvent('slidechange', { detail: i }));
    };
    var start = function () { stop(); if (playing) timer = setInterval(function () { show(i + 1); }, 6500); };
    var stop = function () { clearInterval(timer); };
    dots.forEach(function (d, k) { d.addEventListener('click', function () { show(k); start(); }); });
    if (pause) {
      var sync = function () {
        pause.setAttribute('aria-pressed', String(!playing));
        pause.setAttribute('aria-label', playing ? 'Pause slideshow' : 'Play slideshow');
        root.classList.toggle('is-paused', !playing);
      };
      pause.addEventListener('click', function () { playing = !playing; sync(); playing ? start() : stop(); });
      sync();
    }
    // Stop while keyboard focus is inside so content never moves under the user.
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);
    show(0); start();
  });

  // Tabs (collection switcher).
  document.querySelectorAll('[data-tabs]').forEach(function (root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
    var select = function (t, focus) {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute('aria-selected', String(on));
        x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) t.focus();
    };
    tabs.forEach(function (t, k) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (d) { e.preventDefault(); select(tabs[(k + d + tabs.length) % tabs.length], true); }
      });
    });
  });

  // Horizontal rail with previous/next buttons (scroll-snap does the settling).
  document.querySelectorAll('[data-rail]').forEach(function (root) {
    var track = root.querySelector('[data-rail-track]');
    var prev = root.querySelector('[data-rail-prev]');
    var next = root.querySelector('[data-rail-next]');
    var step = function (dir) {
      var item = track.firstElementChild;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      track.scrollBy({ left: dir * (item.getBoundingClientRect().width + gap), behavior: reduce ? 'auto' : 'smooth' });
    };
    var sync = function () {
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    };
    prev.addEventListener('click', function () { step(-1); });
    next.addEventListener('click', function () { step(1); });
    track.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    sync();
  });

  // Shell anchors (#collections…) live in the shared header; off the homepage, point them home.
  if (document.body.getAttribute('data-page') !== 'home') {
    document.querySelectorAll('.hdr a[href^="#"], .ftr a[href^="#"]').forEach(function (a) {
      a.setAttribute('href', '/' + a.getAttribute('href'));
    });
  }

  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
