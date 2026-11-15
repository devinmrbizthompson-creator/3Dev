(() => {
  'use strict';
  const $ = (selector) => document.querySelector(selector);
  const sourceParam = new URLSearchParams(location.search).get('source') || new URLSearchParams(location.search).get('utm_source') || new URLSearchParams(location.search).get('ref');
  const source = sourceParam ? sourceParam.replace(/[_-]+/g, ' ').slice(0, 80).toUpperCase() : 'Direct / Organic';
  const email = 'DevinMrBizThompson@gmail.com';

  const levels = [
    ['Athletic Foundation & Ball Familiarity','Two-hand stationary control, ball wraps, basic ladder footwork, and balanced set-shot form on adjustable rims.','Foundation Tier'],
    ['Stationary Dribble & Footwork Balance','Pound dribbles with both hands, jump-stop stability, pivoting, and layup footwork.','1-Star Benchmark'],
    ['Moving Ball Control & 12-Spot Form','Moving dribble with eyes up, cone moves, and consistent form shooting across 12 court spots.','1-Star Complete'],
    ['Multi-Height Shooting & Pace Transitions','Take 10 / Take 20 across rim heights, walk-jog-run shooting, and defensive slide fundamentals.','2-Star Competitor'],
    ['Pro Counters & Weak-Hand Finish','Brunson phases, Kobe triple-threat pivots, and Kyrie weak-hand finishes under closeout pressure.','2-Star Complete'],
    ['Live 1v1 Reads & Volume Endurance','Make 50 shooting, 1v1 contests, and deceleration reads in competitive play.','3-Star Contender'],
    ['Learn 6 & Protect — Varsity Mastery','Protect the ball under pressure, execute clutch free throws, and lead vocally on court.','3-Star Gold Champion']
  ];
  const drills = [
    ['Make 50 Volume Challenge','Mental','50 made shots','Builds shooting endurance, repeatable release, and focus under fatigue.'],
    ['Brunson 4-Phase Series','Tactical','4 counter phases','Pace changes, pivot footwork, creating space, and mid-range or floater reads.'],
    ['Kobe Basics & Footwork','Physical','Triple-threat & pivots','Drop-step balance, jab-series discipline, body control, and pivot angles.'],
    ['Kyrie Weak-Hand Finishing','Physical','Off-hand finishing','Develop ambidextrous ball control and weak-hand finishes at the rim.'],
    ['Shai Gil Deceleration','Tactical','Change of pace','Practice braking strides, gather steps, and hesitation angles.'],
    ['12-Spot Shooting Circuit','Physical','12 court spots','Track shooting arc, foot alignment, and consistency from court spots.'],
    ['Super 21 Footwork Breakdown','Mental','Competitive scoring','Combine free throws, footwork reads, and pressure decision-making.'],
    ['1v1 Challenge Shooter','Tactical','Contest & attack','Move from a closeout contest into a live 1v1 offensive attack.']
  ];
  const testimonials = [
    ['Youth Athlete Parent','Verified parent message','“I can see by the relationships you have with the other kids that you guys are more than just coaches to these kids. We appreciate everything and trust you with our daughter.”'],
    ["Anthony’s Parent",'Verified parent message','“Anthony made his school team. I think he’s on varsity this year!”'],
    ["Nolan’s Parent",'Verified parent message','“Nolan shot for ages on this crazy ~7 basket hoop and started passing the ball through his legs.”'],
    ['Youth Athlete Parent','Verified parent message','“She’s gotten so good thanks to you.”'],
    ['Jack Bryant, President/Owner','The Harlem MagicMasters Int’l','Endorsement recognizing Coach Devin Thompson’s basketball skill, showmanship, and youth mentorship.']
  ];

  function setSource() {
    $('#sourceBadge').textContent = source;
    $('#formSource').textContent = source;
  }
  function setupMenu() {
    const toggle = $('#menuToggle');
    const nav = $('#mainNav');
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false');
    }));
  }
  function setupLevels() {
    const container = $('#levelSelector');
    levels.forEach((level, index) => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'level-button'; button.textContent = `Level ${index}`;
      button.setAttribute('aria-pressed', String(index === 0));
      button.addEventListener('click', () => {
        container.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', 'false'));
        button.setAttribute('aria-pressed', 'true');
        $('#levelTitle').textContent = `Level ${index}: ${level[0]}`;
        $('#levelDesc').textContent = level[1]; $('#levelBadge').textContent = level[2];
      });
      container.append(button);
    });
    container.querySelector('button').click();
  }
  function setupDrills() {
    const filters = $('#drillFilters');
    const grid = $('#drillGrid');
    const categories = ['All','Physical','Mental','Tactical'];
    const render = (filter) => {
      grid.replaceChildren();
      drills.filter(item => filter === 'All' || item[1] === filter).forEach(item => {
        const card = document.createElement('article'); card.className = 'drill-card';
        const tag = document.createElement('p'); tag.className = 'eyebrow'; tag.textContent = `${item[1]} · ${item[2]}`;
        const title = document.createElement('h3'); title.textContent = item[0];
        const desc = document.createElement('p'); desc.textContent = item[3];
        card.append(tag, title, desc); grid.append(card);
      });
      filters.querySelectorAll('button').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.filter === filter)));
    };
    categories.forEach(category => {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'filter-button'; button.textContent = category; button.dataset.filter = category;
      button.setAttribute('aria-pressed', String(category === 'All'));
      button.addEventListener('click', () => render(category)); filters.append(button);
    });
    render('All');
  }
  function setupTestimonials() {
    let offset = 0;
    const container = $('#testimonialCards');
    const render = () => {
      container.replaceChildren();
      for (let i = 0; i < 3; i++) {
        const item = testimonials[(offset + i) % testimonials.length];
        const card = document.createElement('article'); card.className = 'quote-card';
        const stars = document.createElement('p'); stars.className = 'mb-3 text-gold-400'; stars.textContent = '★★★';
        const quote = document.createElement('blockquote'); quote.textContent = item[2];
        const footer = document.createElement('footer'); footer.textContent = `${item[0]} · ${item[1]}`;
        card.append(stars, quote, footer); container.append(card);
      }
    };
    $('#nextTestimonial').addEventListener('click', () => { offset = (offset + 1) % testimonials.length; render(); });
    $('#prevTestimonial').addEventListener('click', () => { offset = (offset - 1 + testimonials.length) % testimonials.length; render(); });
    render();
  }
  function trackedUrl() {
    const base = location.href.split('?')[0].split('#')[0];
    return `${base}?source=${encodeURIComponent($('#campaignSource').value)}`;
  }
  function setupQr() {
    const select = $('#campaignSource');
    if (sourceParam && [...select.options].some(option => option.value === sourceParam.toLowerCase())) select.value = sourceParam.toLowerCase();
    const render = () => {
      const url = trackedUrl(); $('#qrUrlLabel').textContent = url; $('#qrcode').replaceChildren();
      if (window.QRCode) new QRCode($('#qrcode'), { text: url, width: 180, height: 180, colorDark: '#06070A', colorLight: '#FFFFFF', correctLevel: QRCode.CorrectLevel.H });
      else $('#qrcode').textContent = 'QR library unavailable. Use the tracked link below.';
    };
    render(); select.addEventListener('change', render);
    $('#downloadQr').addEventListener('click', () => {
      const canvas = $('#qrcode canvas'); const image = $('#qrcode img'); const href = canvas ? canvas.toDataURL('image/png') : image?.src;
      if (!href) return notify('QR image is not available.');
      const link = document.createElement('a'); link.href = href; link.download = `3DEV-QR-${select.value}.png`; link.click();
    });
    $('#copyLink').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(trackedUrl()); notify('Tracked campaign link copied.'); }
      catch { notify(`Copy this tracked link: ${trackedUrl()}`); }
    });
  }
  function buildMessage() {
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    const name = $('#parentName').value.trim();
    return `Coach Devin “Mr. Biz” Thompson — 3DEV 3Fold Practice System Inquiry\n\nFrom: ${name}\nAthlete age/grade: ${$('#athleteGrade').value.trim() || 'Not specified'}\nTopic: ${$('#topic').value}\nRating: ${$('#stars').value}\nVisitor source: ${source}\nDate: ${date}\n\nMessage:\n${$('#message').value.trim()}\n\nSpreadsheet log row (copy-ready):\n${date} | ${source} | ${name} | ${$('#athleteGrade').value.trim() || 'Not specified'} | ${$('#topic').value} | ${$('#stars').value}`;
  }
  function notify(message) {
    const notice = $('#notice'); notice.textContent = message; notice.classList.remove('hidden');
    window.clearTimeout(notify.timer); notify.timer = window.setTimeout(() => notice.classList.add('hidden'), 5000);
  }
  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    const field = document.createElement('textarea'); field.value = text; field.setAttribute('readonly', ''); field.style.position = 'fixed'; field.style.opacity = '0'; document.body.append(field); field.select();
    const copied = document.execCommand('copy'); field.remove(); if (!copied) throw new Error('Clipboard unavailable');
  }
  function setupForm() {
    $('#inquiryForm').addEventListener('submit', event => {
      event.preventDefault();
      if (!event.currentTarget.reportValidity()) return;
      const subject = encodeURIComponent(`[3DEV ${$('#topic').value}] From ${$('#parentName').value.trim()} (${source})`);
      location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(buildMessage())}`;
      notify('Opening your email app. If it does not open, use Copy inquiry text or email Coach Dev directly.');
    });
    $('#copyMessage').addEventListener('click', async () => {
      if (!$('#inquiryForm').reportValidity()) return;
      try { await copyText(`To: ${email}\n\n${buildMessage()}`); notify('Inquiry copied. Paste it into an email or message to Coach Dev.'); }
      catch { notify(`Clipboard not available. Email Coach Dev at ${email}.`); }
    });
  }
  document.addEventListener('DOMContentLoaded', () => { setSource(); setupMenu(); setupLevels(); setupDrills(); setupTestimonials(); setupQr(); setupForm(); });
})();
