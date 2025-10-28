/* =====  Chart.js loader  ===== */
if (!window.Chart) {
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/chart.js';
  document.head.appendChild(s);
}

/* =====  detail page builder  ===== */
document.addEventListener('DOMContentLoaded', () => {
  const id  = Number(new URLSearchParams(location.search).get('id'));
  const proj= projects.find(p => p.id === id);
  if (!proj) return document.body.innerHTML = '<p>Project not found.</p>';

  renderProjectDetail(proj);
  if (proj.dashboardData) injectCharts(proj);
  injectSideSlider(proj);                             //  ←  new side slider
});

function renderProjectDetail(p){
  const box = document.getElementById('projectDetail');
  box.innerHTML = `
    <div class="project-hero">
      <div class="container"><div class="project-icon">${p.icon}</div>
        <h1>${p.title}</h1>
        <p class="project-subtitle">${p.shortDescription}</p>
        <div class="project-tags">${p.technologies.map(t=>`<span class="tech-tag">${t}</span>`).join('')}</div>
      </div>
    </div>

    <div class="project-content"><div class="container">
      <div class="project-section"><h2><i class="fas fa-bullseye"></i> Business Problem</h2><p>${p.businessProblem}</p></div>
      <div class="project-section"><h2><i class="fas fa-user-tie"></i> My Role</h2><p>${p.myRole}</p></div>
      <div class="project-section"><h2><i class="fas fa-cogs"></i> Technical Approach</h2><div class="approach-steps">${p.approach.map(s=>`<div class="step">${s}</div>`).join('')}</div></div>
      <div class="project-section"><h2><i class="fas fa-lightbulb"></i> Key Insights</h2><ul class="insights-list">${p.keyInsights.map(i=>`<li>${i}</li>`).join('')}</ul><div id="chartArea" style="margin-top:2rem"></div></div>
      <div id="sideSliderArea"></div>               <!--  slider injected here  -->
      <div class="project-section"><h2><i class="fas fa-chart-line"></i> Business Impact</h2><p>${p.businessImpact}</p></div>
      <div class="project-section"><h2><i class="fas fa-tools"></i> Technologies Used</h2><div class="tech-showcase">${p.technologies.map(t=>`<div class="tech-item">${t}</div>`).join('')}</div></div>
      <div class="project-links-section">
        <a href="${p.demoLink}"  class="btn btn-primary" target="_blank"><i class="fas fa-external-link-alt"></i> View Live Demo</a>
        <a href="${p.codeLink}" class="btn btn-secondary" target="_blank"><i class="fas fa-code"></i> View Code</a>
        <a href="${p.codeLink}" class="btn btn-outline" target="_blank"><i class="fab fa-github"></i> View Code on GitHub</a>
      </div>
    </div></div>`;
}

/* =====  CHARTS  ===== */
function injectCharts(p){
  const area = document.getElementById('chartArea');
  if (!area) return;
  area.innerHTML = `
    <div class="charts-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;">
      <div class="chart-box"><canvas id="topItemsChart"></canvas></div>
      <div class="chart-box"><canvas id="familyChart"></canvas></div>
    </div>`;

  new Chart(document.getElementById('topItemsChart'), {
    type: 'bar',
    data: {
      labels: p.dashboardData.topItems.map(i => i.item.length>25?i.item.substr(0,22)+'…':i.item),
      datasets: [{ label: 'Revenue ($)', data: p.dashboardData.topItems.map(i=>i.revenue), backgroundColor:'#0077b6' }]
    },
    options: { responsive:true, plugins:{title:{display:true,text:'Top 5 Revenue Generators'}} }
  });

  new Chart(document.getElementById('familyChart'), {
    type: 'doughnut',
    data: {
      labels: Object.keys(p.dashboardData.familyRollup),
      datasets: [{ data: Object.values(p.dashboardData.familyRollup).map(f=>f.sum), backgroundColor:['#0077b6','#00b4d8','#90e0ef','#caf0f8','#ade8f4'] }]
    },
    options: { responsive:true, plugins:{title:{display:true,text:'Revenue by Category'}} }
  });
}

/* =====  SIDE-SLIDER  (arrows left/right + mini previews)  ===== */
function injectSideSlider(proj){
  if (!proj.gallery || !proj.gallery.length) return;

  const area = document.getElementById('sideSliderArea');
  area.innerHTML = `
    <div class="project-section slider-section">
      <h2><i class="fas fa-images"></i> Dashboard Screenshots</h2>
      <div class="side-slider-wrapper">
        <button class="arrow left"  aria-label="Previous">◀</button>
        <div class="slider-main" id="sliderMain">
          <img src="${proj.gallery[0]}" alt="Screenshot 1" loading="lazy">
        </div>
        <button class="arrow right" aria-label="Next">▶</button>
      </div>
      <div class="slider-preview" id="sliderPreview"></div>
    </div>`;

  /*  inject CSS once  */
  if (!document.querySelector('#side-slider-css')) {
    const css = document.createElement('style');
    css.id = 'side-slider-css';
    css.textContent = `
      .slider-section{text-align:center;margin:2rem 0}
      .side-slider-wrapper{display:flex;align-items:center;justify-content:center;gap:1rem}
      .slider-main{display:inline-block;max-width:80%;border-radius:12px;overflow:hidden;box-shadow:0 8px 25px rgba(0,0,0,.15)}
      .slider-main img{max-width:100%;max-height:70vh;object-fit:contain;background:#fff;cursor:pointer}
      .arrow{width:44px;height:44px;border-radius:50%;border:2px solid #3498db;background:#fff;color:#3498db;font-size:1.4rem;cursor:pointer;transition:background .3s, color .3s}
      .arrow:hover{background:#3498db;color:#fff}
      .slider-preview{margin-top:1rem;display:flex;justify-content:center;gap:.5rem;flex-wrap:wrap}
      .preview-thumb{width:100px;height:60px;object-fit:cover;border-radius:6px;cursor:pointer;opacity:.6;transition:opacity .3s, box-shadow .3s}
      .preview-thumb.active{opacity:1;box-shadow:0 0 0 3px #3498db}
      /*  full-screen overlay (no dots)  */
      .slider-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;z-index:9999;cursor:pointer}
      .slider-overlay img{max-width:95%;max-height:95%;object-fit:contain;border-radius:8px}
      .slider-overlay .close{position:absolute;top:20px;right:30px;color:#fff;font-size:2.5rem;font-weight:bold;line-height:1}
      .slider-overlay .arrow{position:absolute;top:50%;transform:translateY(-50%);color:#fff;font-size:3rem;cursor:pointer;user-select:none;padding:0 .5rem}
      .slider-overlay .arrow.left{left:20px}
      .slider-overlay .arrow.right{right:20px}
      @media(max-width:768px){.slider-main img{max-height:50vh}}`;
    document.head.appendChild(css);
  }

  /*  state  */
  let current = 0;
  const images  = proj.gallery;

  /*  DOM refs  */
  const mainImg   = document.getElementById('sliderMain').querySelector('img');
  const preview   = document.getElementById('sliderPreview');

  /*  build mini previews  */
  preview.innerHTML = images.map((src,i)=>`<img src="${src}" class="preview-thumb ${i===0?'active':''}" data-index="${i}" loading="lazy" alt="thumb ${i+1}">`).join('');

  /*  thumb clicks  */
  preview.addEventListener('click', e => {
    if (e.target.matches('.preview-thumb')) {
      current = Number(e.target.dataset.index);
      showSlide(current);
    }
  });

  /*  arrow clicks  */
  document.querySelector('.arrow.left').addEventListener('click',  () => { current = (current - 1 + images.length) % images.length; showSlide(current); });
  document.querySelector('.arrow.right').addEventListener('click', () => { current = (current + 1) % images.length; showSlide(current); });

  /*  main image click → full screen  */
  document.getElementById('sliderMain').addEventListener('click', () => openOverlay());

  /*  keyboard arrows  */
  document.addEventListener('keydown', e => {
    if (!document.querySelector('.slider-overlay')) return;
    if (e.key === 'ArrowLeft')  { current = (current - 1 + images.length) % images.length; showSlide(current); document.querySelector('.slider-overlay img').src = images[current]; }
    if (e.key === 'ArrowRight') { current = (current + 1) % images.length; showSlide(current); document.querySelector('.slider-overlay img').src = images[current]; }
  });

  /*  auto-slide every 5 s  (pause on hover)  */
  let timer = setInterval(nextSlide, 5000);
  const wrapper = area.querySelector('.side-slider-wrapper');
  wrapper.addEventListener('mouseenter', () => clearInterval(timer));
  wrapper.addEventListener('mouseleave', () => timer = setInterval(nextSlide, 5000));

  function showSlide(idx) {
    current = idx;
    mainImg.src = images[current];
    preview.querySelectorAll('.preview-thumb').forEach((t,i)=>t.classList.toggle('active', i===current));
  }
  function nextSlide() { showSlide((current + 1) % images.length); }

  /*  full-screen overlay (clean – no dots)  */
  function openOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'slider-overlay';
    overlay.innerHTML = `
      <span class="close">&times;</span>
      <div class="arrow left">◀</div>
      <div class="arrow right">▶</div>
      <img src="${images[current]}" alt="Screenshot ${current+1}">`;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', e => {
      if (e.target.matches('.close')) return overlay.remove();
      if (e.target.matches('.arrow.left'))  { current = (current - 1 + images.length) % images.length; overlay.querySelector('img').src = images[current]; }
      if (e.target.matches('.arrow.right')) { current = (current + 1) % images.length; overlay.querySelector('img').src = images[current]; }
    });
  }
}