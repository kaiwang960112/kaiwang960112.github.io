(function () {
  'use strict';
  var D = window.SITE || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var arrow = '<svg class="ico"><use href="#i-arrow"/></svg>';
  var SCHOLAR = 'https://scholar.google.com/citations?user=i2II0XIAAAAJ';

  /* ---------- Publications ---------- */
  var TOPICS = [
    ['selected', 'Selected'],
    ['all', 'All'],
    ['agents', 'Long-Horizon Agent Design'],
    ['paramgen', 'Parameter Generation'],
    ['efficient', 'Efficient Generation & Training'],
    ['data', 'Data-Centric AI'],
    ['vision', 'Vision']
  ];

  // "Kai Wang*+" -> <span class="me">Kai Wang</span><sup>*+</sup>
  function renderAuthors(str) {
    return str.split(/,\s*/).map(function (a) {
      var m = a.match(/^(.*?)([*+]+)?$/);
      var name = esc(m[1]);
      if (/^Kai Wang$/.test(m[1].trim())) name = '<span class="me">' + name + '</span>';
      return name + (m[2] ? '<sup>' + m[2] + '</sup>' : '');
    }).join(', ');
  }

  function pubHTML(p) {
    var links = Object.keys(p.links || {}).map(function (k) {
      var url = p.links[k], extra = '', repo = '';
      var gh = k === 'Code' && /^https:\/\/github\.com\/([^\/]+\/[^\/#?]+)/.exec(url);
      if (gh) {
        repo = gh[1].replace(/\.git$/, '');
        extra = '<span class="stat" data-stars="' + esc(repo) + '" hidden><svg class="ico"><use href="#i-cite"/></svg><span></span></span>';
      } else if (k === 'X' && p.views) {
        extra = '<span class="stat" title="Views on X"><svg class="ico"><use href="#i-eye"/></svg>' + esc(compact(p.views)) + '</span>';
      }
      return '<a href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(k) + extra + arrow + '</a>';
    }).join('');
    return '<article class="pub reveal">' +
      (p.img ? '<button class="pub-thumb" type="button" data-full="' + esc(p.img) + '" aria-label="Enlarge figure for ' + esc(p.title) + '">' +
        '<img src="' + esc(p.img) + '" alt="" loading="lazy" decoding="async"></button>' : '<div></div>') +
      '<div>' +
        '<div class="pub-meta"><span class="badge ' + esc(p.type) + '">' + esc(p.venue) + '</span>' +
          (p.note ? '<span class="badge note">' + esc(p.note) + '</span>' : '') +
          (p.citations ? '<a class="badge cite" href="' + SCHOLAR + '" target="_blank" rel="noopener" title="Google Scholar citations">' +
            '<svg class="ico"><use href="#i-cite"/></svg>' + p.citations.toLocaleString('en-US') + ' citations</a>' : '') + '</div>' +
        '<h3>' + esc(p.title) + '</h3>' +
        '<p class="authors">' + renderAuthors(p.authors) + '</p>' +
        '<div class="pub-links">' + links + '</div>' +
      '</div></article>';
  }

  function matches(p, key) {
    if (key === 'all') return true;
    if (key === 'selected') return !!p.selected;
    return (p.topics || []).indexOf(key) !== -1;
  }

  /* ---------- GitHub stars (live, cached for 12h per browser) ---------- */
  function compact(n) {
    if (typeof n === 'string') return n;
    if (n >= 1e6) return (n / 1e6).toFixed(n >= 1e7 ? 0 : 1).replace(/\.0$/, '') + 'M';
    if (n >= 1e3) return (n / 1e3).toFixed(n >= 1e4 ? 0 : 1).replace(/\.0$/, '') + 'k';
    return String(n);
  }
  var STAR_TTL = 12 * 3600 * 1000, starReqs = {};
  function cachedStars(repo) {
    try {
      var c = JSON.parse(localStorage.getItem('stars:' + repo) || 'null');
      if (c && Date.now() - c.t < STAR_TTL) return c.n;
    } catch (e) {}
    return null;
  }
  function fetchStars(repo) {
    if (starReqs[repo]) return starReqs[repo];
    var cached = cachedStars(repo);
    if (cached !== null) return (starReqs[repo] = Promise.resolve(cached));
    if (!window.fetch) return Promise.resolve(null);
    starReqs[repo] = fetch('https://api.github.com/repos/' + repo)
      .then(function (r) { if (!r.ok) throw r; return r.json(); })
      .then(function (j) { return j.stargazers_count; })
      .catch(function () {
        // Fallback when the GitHub API rate limit (60 requests/hour) is hit.
        return fetch('https://img.shields.io/github/stars/' + repo + '.json')
          .then(function (r) { if (!r.ok) throw r; return r.json(); })
          .then(function (j) { return /^[\d.]+[kM]?$/.test(j.message) ? j.message : null; });
      })
      .then(function (n) {
        if (n !== null && n !== undefined) {
          try { localStorage.setItem('stars:' + repo, JSON.stringify({ n: n, t: Date.now() })); } catch (e) {}
        }
        return n;
      })
      .catch(function () { return null; });
    return starReqs[repo];
  }
  function loadStars(root) {
    root.querySelectorAll('[data-stars]').forEach(function (el) {
      fetchStars(el.dataset.stars).then(function (n) {
        if (n === null || n === undefined || n === 0) return;
        el.lastChild.textContent = compact(n);
        el.title = (typeof n === 'number' ? n.toLocaleString('en-US') : n) + ' GitHub stars';
        el.hidden = false;
      });
    });
  }

  function initPubs() {
    var pubs = D.publications || [];
    var bar = $('#pub-filters'), list = $('#pub-list');
    if (!bar || !list) return;
    var current = 'selected';
    try { current = localStorage.getItem('pubFilter') || current; } catch (e) {}
    if (!TOPICS.some(function (t) { return t[0] === current; })) current = 'selected';

    bar.innerHTML = TOPICS.map(function (t) {
      var n = pubs.filter(function (p) { return matches(p, t[0]); }).length;
      return '<button class="chip" type="button" data-key="' + t[0] + '">' + t[1] + '<span class="n">' + n + '</span></button>';
    }).join('');

    function render() {
      bar.querySelectorAll('.chip').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.key === current));
      });
      var shown = pubs.filter(function (p) { return matches(p, current); });
      list.innerHTML = shown.length ? shown.map(pubHTML).join('') : '<p class="empty">No papers in this category yet.</p>';
      observe(list.querySelectorAll('.reveal'));
      loadStars(list);
    }
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('.chip');
      if (!b) return;
      current = b.dataset.key;
      try { localStorage.setItem('pubFilter', current); } catch (e2) {}
      render();
    });
    render();
  }

  /* ---------- News ---------- */
  function initNews() {
    var news = D.news || [], list = $('#news-list'), btn = $('#news-more');
    if (!list) return;
    var LIMIT = 6, open = false;
    list.innerHTML = news.map(function (n, i) {
      return '<li class="' + (n.hot ? 'hot' : '') + '"' + (i >= LIMIT ? ' hidden' : '') + '>' +
        '<time>' + esc(n.date) + '</time><div class="txt">' +
        (n.logo ? '<img class="news-logo" src="' + esc(n.logo) + '" alt="" width="20" height="20" loading="lazy">' : '') +
        n.text + '</div></li>';
    }).join('');
    if (news.length <= LIMIT) { btn.hidden = true; return; }
    function label() { btn.textContent = open ? 'Show less' : 'Show all ' + news.length + ' updates'; }
    label();
    btn.addEventListener('click', function () {
      open = !open;
      list.querySelectorAll('li').forEach(function (li, i) { if (i >= LIMIT) li.hidden = !open; });
      label();
      if (!open) $('#news').scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ---------- Experience ---------- */
  function initTimeline() {
    var el = $('#timeline');
    if (!el) return;
    el.innerHTML = (D.experience || []).map(function (x) {
      return '<li class="tl reveal' + (x.current ? ' current' : '') + '">' +
        '<div class="tl-logo"><img src="' + esc(x.logo) + '" alt="' + esc(x.org) + ' logo" loading="lazy"></div>' +
        '<div><div class="tl-org">' + (x.url ? '<a href="' + esc(x.url) + '" target="_blank" rel="noopener">' + esc(x.org) + '</a>' : esc(x.org)) + '</div>' +
        '<div class="tl-role">' + esc(x.role) + '</div>' +
        (x.detail ? '<div class="tl-detail">' + x.detail + '</div>' : '') + '</div>' +
        '<div class="tl-date">' + esc(x.date) + '</div></li>';
    }).join('');
  }

  /* ---------- People ---------- */
  var PALETTE = [['#6366f1', '#8b5cf6'], ['#0891b2', '#22d3ee'], ['#db2777', '#f472b6'], ['#059669', '#34d399'], ['#d97706', '#fbbf24'], ['#4f46e5', '#06b6d4']];
  function avatar(name) {
    var h = 0;
    for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    var c = PALETTE[h % PALETTE.length];
    var initials = name.split(/\s+/).map(function (w) { return w[0]; }).join('').slice(0, 2);
    return '<span class="avatar" aria-hidden="true" style="background:linear-gradient(135deg,' + c[0] + ',' + c[1] + ')">' + esc(initials) + '</span>';
  }
  function peopleHTML(arr) {
    return arr.map(function (p) {
      return '<li class="person reveal">' + avatar(p.name) + '<div>' +
        '<div class="person-name">' + (p.url ? '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.name) + '</a>' : esc(p.name)) + '</div>' +
        (p.now ? '<div class="person-now">' + esc(p.now) + '</div>' : '') +
        (p.pubs ? '<div class="person-pubs">' + p.pubs.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div>' : '') +
        '</div></li>';
    }).join('');
  }
  function initPeople() {
    var s = D.students || {};
    if ($('#students-current')) $('#students-current').innerHTML = peopleHTML(s.current || []);
    if ($('#students-alumni')) $('#students-alumni').innerHTML = peopleHTML(s.alumni || []);
  }

  /* ---------- Honors / service / friends ---------- */
  function initMore() {
    if ($('#honors')) $('#honors').innerHTML = (D.honors || []).map(function (h) {
      return '<li><span>' + esc(h.year) + '</span>' + esc(h.text) + '</li>';
    }).join('');
    if ($('#service')) $('#service').innerHTML = (D.service || []).map(function (s) {
      return '<li><b>' + esc(s.role) + '</b><span>' + esc(s.venues) + '</span></li>';
    }).join('');
    if ($('#friends')) $('#friends').innerHTML = (D.friends || []).map(function (f) {
      return '<a href="' + esc(f[2]) + '" target="_blank" rel="noopener">' + esc(f[0]) + '</a> <small>(' + esc(f[1]) + ')</small>';
    }).join(' · ');
  }

  /* ---------- Lightbox ---------- */
  function initLightbox() {
    var box = document.createElement('div');
    box.className = 'lightbox'; box.hidden = true;
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.setAttribute('aria-label', 'Figure preview');
    box.innerHTML = '<img alt="">';
    document.body.appendChild(box);
    var last = null;
    function close() { box.hidden = true; document.body.style.overflow = ''; if (last) last.focus(); }
    document.addEventListener('click', function (e) {
      var t = e.target.closest('.pub-thumb');
      if (t) {
        last = t;
        box.querySelector('img').src = t.dataset.full;
        box.hidden = false; document.body.style.overflow = 'hidden';
        box.tabIndex = -1; box.focus();
      } else if (!box.hidden && e.target.closest('.lightbox')) close();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !box.hidden) close(); });
  }

  /* ---------- Nav: scrolled state, active link, mobile menu ---------- */
  function initNav() {
    var nav = $('#nav'), hero = $('.hero'), links = $('#nav-links'), btn = $('#menu-toggle');
    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > (hero ? hero.offsetHeight - 80 : 10));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    function setMenu(open) {
      links.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('menu-open', open);
    }
    btn.addEventListener('click', function () { setMenu(!links.classList.contains('open')); });
    links.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('click', function (e) { if (!nav.contains(e.target)) setMenu(false); });

    if ('IntersectionObserver' in window) {
      var map = {};
      links.querySelectorAll('a').forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && map[en.target.id]) {
            links.querySelectorAll('a').forEach(function (a) { a.classList.remove('active'); });
            map[en.target.id].classList.add('active');
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
    }
  }

  /* ---------- Theme ---------- */
  function initTheme() {
    var root = document.documentElement;
    $('#theme-toggle').addEventListener('click', function () {
      var dark = root.dataset.theme ? root.dataset.theme === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.dataset.theme = dark ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealer = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); revealer.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -40px 0px' }) : null;
  function observe(nodes) {
    nodes.forEach(function (n) { revealer ? revealer.observe(n) : n.classList.add('in'); });
  }

  initPubs(); initNews(); initTimeline(); initPeople(); initMore();
  initLightbox(); initNav(); initTheme();
  observe(document.querySelectorAll('.reveal:not(.pub)'));
  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
})();
