/* MOBILE MENU */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* COUNTER ANIMATION */
function animateCounter(el) {
  if (el.dataset.text) return;
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();
  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(eased * target);
    el.textContent = (target >= 1000 ? (value >= 1000 ? Math.round(value / 1000) + ',000' : value) : value) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* SCROLL REVEAL + COUNTER TRIGGER */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
document.querySelectorAll('.hero-stat-num[data-count]').forEach(el => counterObserver.observe(el));

/* COURSE TABS */
let activeTab = 'ai';
function showTab(id, btn, colorClass) {
  document.querySelectorAll('.cat-panel').forEach(p => p.classList.remove('visible'));
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active','ai','cyber','dig'));
  document.getElementById('panel-' + id).classList.add('visible');
  btn.classList.add('active', colorClass);
  activeTab = id;
  filterCourses(document.getElementById('courseSearch').value);
}

/* COURSE SEARCH */
function filterCourses(query) {
  const q = query.toLowerCase().trim();
  const panel = document.getElementById('panel-' + activeTab);
  const cards = panel.querySelectorAll('.course-card');
  let visible = 0;
  cards.forEach(card => {
    const text = (card.dataset.text || '') + ' ' + card.textContent;
    const match = !q || text.toLowerCase().includes(q);
    card.classList.toggle('hidden', !match);
    if (match) visible++;
  });
  const noRes = document.getElementById('no-results');
  noRes.classList.toggle('visible', visible === 0 && q.length > 0);
}

/* FIND YOUR PATH */
function showPath(id, btn) {
  document.querySelectorAll('.path-result').forEach(r => r.classList.remove('visible'));
  document.querySelectorAll('.path-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('path-' + id).classList.add('visible');
  btn.classList.add('active');
}

/* JOURNEY MAP TABS */
function showJTab(id, btn, colorClass) {
  document.querySelectorAll('.jpanel').forEach(p => p.classList.remove('visible'));
  document.querySelectorAll('.jtab').forEach(t => t.classList.remove('active','ai','cyber','dig'));
  document.getElementById('jpanel-' + id).classList.add('visible');
  btn.classList.add('active', colorClass);
}
