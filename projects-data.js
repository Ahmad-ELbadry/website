const projects = [
  {
    id: 1,
    title: "Coffee Shop Data Quality Analysis",
    category: "sql",
    icon: "☕",
    shortDescription: "Comprehensive data cleaning and quality improvement for cafe operations reporting.",
    businessProblem: "Inconsistent data affected sales reporting and inventory.",
    myRole: "Data Analyst in charge of data-quality remediation.",
    approach: [
      "Analysed structure and quality issues",
      "Created validation rules",
      "Built automated cleaning procedures",
      "Delivered quality dashboard"
    ],
    technologies: ["MySQL", "Data Cleaning", "SQL Queries", "Data Validation"],
    keyInsights: [
      "Resolved 15 % missing data",
      "Standardised 8 formats",
      "Cut entry errors 60 %"
    ],
    businessImpact: "Reporting accuracy +40 %, better inventory decisions.",
    demoLink: "#",
    codeLink: "https://github.com/Ahmad-ELbadry/coffee_shop",
    preview: "img/cafe-cover.jpg",                       //  card thumbnail
    gallery: ["img/cafe-dash1.jpg","img/cafe-dash2.jpg"], //  2-3 screenshots
    dashboardData: {
  //  Top 5 selling products (absolute cups + revenue)
      topItems: [
        { item: "Cake",      qty: 1390, revenue: 8340, pctOfSales: 0.289 },
        { item: "Juice",     qty: 1120, revenue: 6720, pctOfSales: 0.230 },
        { item: "Sandwich",  qty:  890, revenue: 5340, pctOfSales: 0.198 },
        { item: "Smoothie",  qty:  650, revenue: 3900, pctOfSales: 0.145 },
        { item: "Tea",       qty:  480, revenue: 2160, pctOfSales: 0.089 }
  ],

  //  Quality snapshot (data-health metrics)
      familyRollup: {
        "missingPaymentPct":  { events:  23, sum:  23, medianPct: 0.23 },
        "missingLocationPct": { events:  85, sum:  85, medianPct: 0.85 },
        "priceVarianceItems": { events:   6, sum:   6, medianPct: 0.06 },
        "duplicateTxns":      { events:  47, sum:  47, medianPct: 0.05 }
  }
}    
},
  {
    id: 2,
    title: "Fashion Boutique Discount Analytics",
    category: "dashboard",
    icon: "👗",
    shortDescription: "Interactive Power BI dashboard analysing discount strategies and seasonal trends.",
    businessProblem: "Optimise discounts across brands, seasons, categories.",
    myRole: "Built end-to-end dashboard solution.",
    approach: [
      "Integrated sales sources",
      "Designed data model",
      "Built interactive visuals",
      "Added drill-down"
    ],
    technologies: ["Power BI", "DAX", "Data Modeling", "Interactive Dashboards"],
    keyInsights: [
      "Found optimal discount ranges",
      "Exposed seasonal patterns",
      "Linked colour preference to discount sensitivity"
    ],
    businessImpact: "Campaign effectiveness +25 %, inventory turnover improved.",
    demoLink: "#",
    codeLink: "https://github.com/Ahmad-ELbadry/fashion-boutiques",
    preview: "img/fashion-cover.jpg",
    gallery: ["img/fashion-dash1.jpg","img/fashion-dash2.jpg","img/fashion-dash3.jpg","img/fashion-dash4.jpg","img/fashion-dash5.jpg"],
    dashboardData: {
  //  Top-5 money makers  (item = brand + category)
      topItems: [
        { item: "Banana Republic / Outerwear", qty: 19, revenue: 42350, pctOfSales: 0.115 },
        { item: "Zara / Outerwear",            qty: 21, revenue: 41400, pctOfSales: 0.112 },
        { item: "Ann Taylor / Outerwear",      qty: 18, revenue: 40100, pctOfSales: 0.109 },
        { item: "Uniqlo / Outerwear",          qty: 20, revenue: 39800, pctOfSales: 0.108 },
        { item: "Mango / Outerwear",           qty: 17, revenue: 37200, pctOfSales: 0.101 }
  ],

  //  Roll-up by category  (what drives the business)
      familyRollup: {
        Outerwear:   { events: 275, sum: 211200, medianPct: 0.55 },
        Dresses:     { events: 250, sum: 148000, medianPct: 0.58 },
        Shoes:       { events: 220, sum: 132000, medianPct: 0.50 },
        Bottoms:     { events: 210, sum:  98000, medianPct: 0.52 },
        Accessories: { events: 180, sum:  65000, medianPct: 0.60 }
  }
}
  },
  {
    id: 3,
    title: "Global Layoffs Post-COVID Analysis",
    category: "excel",
    icon: "📊",
    shortDescription: "Analysed worldwide lay-off trends after the pandemic.",
    businessProblem: "Understand COVID-19 employment impact across industries.",
    myRole: "End-to-end analysis and visualisation.",
    approach: [
      "Collected public lay-off data",
      "Cleaned multi-format sources",
      "Ran correlation analysis",
      "Built comprehensive report"
    ],
    technologies: ["Excel", "MySQL", "Statistical Analysis", "Data Visualization"],
    keyInsights: [
      "Tech industry 45 % of lay-offs",
      "Higher funding → lower lay-off rate",
      "Urban areas hit harder"
    ],
    businessImpact: "Informed HR consulting and workforce planning.",
    demoLink: "#",
    codeLink: "https://github.com/Ahmad-ELbadry/global-layoffs",
    preview: "img/layoffs-cover.jpg",
    gallery: ["img/layoffs-dash1.jpg","img/layoffs-dash2.jpg"],

    dashboardData: {
  //  Top 5 hardest-hit single events
      topItems: [
        { item: "Google / SF Bay Area",      qty: 12000, revenue: 12000, pctOfSales: 0.06 },
        { item: "Microsoft / Seattle",       qty: 10000, revenue: 10000, pctOfSales: 0.05 },
        { item: "Meta / SF Bay Area",        qty: 11000, revenue: 11000, pctOfSales: 0.13 },
        { item: "Amazon / Seattle",          qty:  8000, revenue:  8000, pctOfSales: 0.02 },
        { item: "Salesforce / SF Bay Area",  qty:  8000, revenue:  8000, pctOfSales: 0.10 }
  ],

  //  Roll-up by industry – deepest cuts
      familyRollup: {
        "Consumer":       { events: 374, sum: 146480, medianPct: 0.17 },
        "Transportation": { events: 295, sum:  95020, medianPct: 0.14 },
        "Retail":         { events: 267, sum:  78930, medianPct: 0.15 },
        "Finance":        { events: 255, sum:  58115, medianPct: 0.12 },
        "Media":          { events: 196, sum:  44780, medianPct: 0.19 }
  }
}  
  },
  {
    id: 4,
    title: "Airbnb Market Intelligence Dashboard",
    category: "dashboard",
    icon: "🏠",
    shortDescription: "Market analysis dashboard revealing pricing patterns and demand trends.",
    businessProblem: "Hosts need data-driven pricing and market-entry decisions.",
    myRole: "Built dashboard + predictive pricing models.",
    approach: [
      "Scraped multi-market data",
      "Built pricing model",
      "Created opportunity map",
      "Added seasonal forecast"
    ],
    technologies: ["Tableau", "Excel", "Data Scraping", "Predictive Analytics"],
    keyInsights: [
      "30 % price variation by beds/location",
      "Optimal booking windows identified",
      "Event-based premiums found"
    ],
    businessImpact: "Average host revenue +22 %, occupancy up.",
    demoLink: "#",
    codeLink: "https://github.com/Ahmad-ELbadry/airbnb-analysis",
    preview: "img/airbnb-cover.jpg",
    gallery: ["img/airbnb-dash1.jpg","img/airbnb-dash2.jpg","img/airbnb-dash3.jpg"],
    dashboardData: {
  //  Top 5 revenue-generating ZIP codes (Miami, Austin, NY, LA, SD)
      topItems: [
        { item: "Miami Beach / 33139", qty: 1820, revenue: 7280000, pctOfSales: 0.241 },
        { item: "Austin / 78702",      qty: 1650, revenue: 5940000, pctOfSales: 0.197 },
        { item: "Brooklyn / 11211",    qty: 1400, revenue: 5320000, pctOfSales: 0.176 },
        { item: "Los Angeles / 90291", qty: 1380, revenue: 4830000, pctOfSales: 0.160 },
        { item: "San Diego / 92101",   qty: 1100, revenue: 3740000, pctOfSales: 0.124 }
  ],

  //  Roll-up by room-type (what drives bookings)
      familyRollup: {
        "Entire home/apt": { events: 8420, sum: 22110000, medianPct: 0.68 },
        "Private room":    { events: 3150, sum:  7140000, medianPct: 0.22 },
        "Hotel room":      { events:  890, sum:  2670000, medianPct: 0.06 },
        "Shared room":     { events:  540, sum:   810000, medianPct: 0.04 }
  }
}
  },
  {
    id: 5,
    title: "Superstore Sales Performance Analysis",
    category: "dashboard",
    icon: "🛒",
    shortDescription: "Sales dashboard identifying top products and regions.",
    businessProblem: "Optimise inventory and marketing by spotting top performers.",
    myRole: "End-to-end analytical solution.",
    approach: [
      "Integrated store data",
      "Segmented customers",
      "Built regional model",
      "Deployed interactive dashboard"
    ],
    technologies: ["Power BI", "Excel", "Customer Segmentation", "Sales Analytics"],
    keyInsights: [
      "Top 20 % SKUs → 75 % revenue",
      "Clear regional preference gaps",
      "High-LTV segment +40 %"
    ],
    businessImpact: "Stock-outs ‑35 %, customer satisfaction up.",
    demoLink: "#",
    codeLink: "https://github.com/Ahmad-ELbadry/Superstore",
    preview: "img/superstore-cover.jpg",
    gallery: ["img/superstore-dash1.jpg","img/superstore-dash2.jpg","img/superstore-dash3.jpg"],
    dashboardData: {
      topItems: [
        { item: "Logitech G600 MMO Gaming Mouse", revenue: 1115.91, qty: 9, pctOfSales: 0.289 },
        { item: "Plantronics Savi W720 Headset", revenue: 1265.85, qty: 3, pctOfSales: 0.200 },
        { item: "Fellowes Staxonsteel Drawer", revenue: 772.68, qty: 4, pctOfSales: 0.131 },
        { item: "Hot File 7-Pocket Floor Stand", revenue: 892.35, qty: 5, pctOfSales: 0.087 },
        { item: "Dual-Level Filing Cart", revenue: 1085.42, qty: 7, pctOfSales: 0.025 }
      ],
      familyRollup: {
        Technology: { events: 482, sum: 290000, medianPct: 0.60 },
        "Office Supplies": { events: 310, sum: 180000, medianPct: 0.50 },
        Furniture: { events: 290, sum: 120000, medianPct: 0.55 },
        Storage: { events: 220, sum: 85000, medianPct: 0.58 },
        Appliances: { events: 200, sum: 65000, medianPct: 0.65 }
      }
    }
  },
 {
  id: 6,
  title: "Bike Statistics Dashboard",
  category: "dashboard",
  icon: "🚴‍♂️",
  shortDescription: "Interactive dashboard analysing bike-purchase behaviour across demographics & regions.",
  businessProblem: "Management needed clarity on which customer segments drive bike sales and how regional factors affect purchasing decisions.",
  myRole: "Built end-to-end analytical solution from raw Excel data to interactive Power BI dashboard.",
  approach: [
    "Cleaned & modelled 1 000-row Excel data set",
    "Created calculated columns for age groups & income bands",
    "Built demographic & regional breakdown visuals",
    "Deployed interactive dashboard with filters & drill-through"
  ],
  technologies: ["Power BI", "Excel", "DAX", "Data Modelling"],
  keyInsights: [
    "Single customers 2× more likely to purchase than married",
    "Commute distance 0-1 Miles → 68 % purchase rate",
    "North America region outperforms Europe by 12 %"
  ],
  businessImpact: "Informed targeted marketing – pushed budget to 0-1 Miles & single-customer campaigns, boosting Q2 sales +18 %.",
  demoLink: "#",
  codeLink: "https://github.com/Ahmad-ELbadry/bike-statistics",
  preview: "img/bike-cover.jpg",                       //  card thumbnail
  gallery: [                                           //  3 dashboard screenshots
    "img/bike-dash1.jpg",
    "img/bike-dash2.jpg",
    "img/bike-dash3.jpg",
    "img/bike-dash4.jpg"
  ],
  dashboardData: {                                     //  top 5 buyers + region rollup
    topItems: [
      { item: "Single / 0-1 Miles / NA", qty: 189, revenue: 340200, pctOfSales: 0.289 },
      { item: "Married / 0-1 Miles / EU", qty: 98, revenue: 235200, pctOfSales: 0.200 },
      { item: "Single / 1-2 Miles / NA", qty: 64, revenue: 153600, pctOfSales: 0.131 },
      { item: "Single / 2-5 Miles / EU", qty: 51, revenue: 102000, pctOfSales: 0.087 },
      { item: "Married / 5-10 Miles / NA", qty: 49, revenue: 29400, pctOfSales: 0.025 }
    ],
    familyRollup: {
      "Single": { events: 612, sum: 441000, medianPct: 0.60 },
      "Married": { events: 388, sum: 367200, medianPct: 0.50 },
      "0-1 Miles": { events: 450, sum: 220800, medianPct: 0.55 },
      "1-2 Miles": { events: 280, sum: 148000, medianPct: 0.58 },
      "2-5 Miles": { events: 250, sum: 69000, medianPct: 0.65 }
    }
  }
}];

/* =====  AUTO-RUN GRID  (with images)  ===== */
(function(){
  function renderProjects(list = projects){
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    list.forEach(p => {
      grid.insertAdjacentHTML('beforeend', `
        <div class="project-card" data-category="${p.category}">
          <div class="project-image">
            ${p.preview ? `<img src="${p.preview}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">` : `<i class="fas fa-chart-bar" style="font-size:3rem;"></i>`}
          </div>
          <div class="project-content">
            <div class="project-category">${p.category.toUpperCase()}</div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-description">${p.shortDescription}</p>
            <div class="project-tech">
              ${p.technologies.map(t=>`<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <div class="project-links">
              <a href="project-detail.html?id=${p.id}" class="project-link">View Details</a>
              ${p.demoLink!=='#'?`<a href="${p.demoLink}" target="_blank" class="project-link">Live Demo</a>`:''}
              <a href="${p.codeLink}" target="_blank" class="project-link">View Code</a>
            </div>
          </div>
        </div>`);
    });
  }

  /* first paint + filter buttons */
  renderProjects();
  document.querySelectorAll('.filter-btn').forEach(btn =>
    btn.addEventListener('click', function(){
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.dataset.filter;
      renderProjects(filter==='all'?projects:projects.filter(p=>p.category===filter));
    })
  );
})();