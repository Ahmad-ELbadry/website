// ===================================================================
// PROJECT DATA – now includes Superstore + Café blocks
// ===================================================================
const projects = [
  {
    id: 1,
    title: "Coffee Shop Data Quality Analysis",
    category: "sql",
    icon: "☕",
    shortDescription: "Comprehensive data cleaning and quality improvement for cafe operations reporting.",
    businessProblem: "The coffee shop had inconsistent data quality affecting sales reporting and inventory management. Missing values, duplicate entries, and non-standardized formats were causing inaccurate business insights.",
    myRole: "Data Analyst responsible for identifying data quality issues and implementing systematic cleaning procedures.",
    approach: [
      "Analyzed data structure and identified quality issues",
      "Created standardized data validation rules",
      "Implemented automated cleaning procedures",
      "Built quality monitoring dashboard"
    ],
    technologies: ["MySQL", "Data Cleaning", "SQL Queries", "Data Validation"],
    keyInsights: [
      "Identified and resolved 15 % missing data points",
      "Standardized 8 different data formats into consistent structure",
      "Reduced data entry errors by 60 % through validation rules"
    ],
    businessImpact: "Improved reporting accuracy by 40 %, enabling better inventory management and sales forecasting decisions.",
    demoLink: "#",
    codeLink: "https://github.com/Ahmad-ELbadry/coffee_shop",
    screenshots: ["screenshot1.jpg", "screenshot2.jpg"]
  },
  {
    id: 2,
    title: "Fashion Boutique Discount Analytics",
    category: "dashboard",
    icon: "👗",
    shortDescription: "Interactive Power BI dashboard analyzing discount strategies and seasonal trends.",
    businessProblem: "Fashion boutique needed to optimize discount strategies across different brands, seasons, and product categories to maximize revenue while maintaining profit margins.",
    myRole: "Designed and developed comprehensive dashboard for discount analysis and strategic decision making.",
    approach: [
      "Collected and integrated sales data from multiple sources",
      "Created data model connecting brands, seasons, and product categories",
      "Built interactive visualizations for discount analysis",
      "Implemented drill-down capabilities from brand to product level"
    ],
    technologies: ["Power BI", "DAX", "Data Modeling", "Interactive Dashboards"],
    keyInsights: [
      "Identified optimal discount ranges for different product categories",
      "Discovered seasonal patterns affecting discount effectiveness",
      "Found correlation between color preferences and discount sensitivity"
    ],
    businessImpact: "Helped increase promotional campaign effectiveness by 25 % and improved inventory turnover by optimizing discount timing.",
    demoLink: "#",
    codeLink: "https://github.com/Ahmad-ELbadry/fashion-boutiques",
    screenshots: ["dashboard1.jpg", "dashboard2.jpg"]
  },
  {
    id: 3,
    title: "Global Layoffs Post-COVID Analysis",
    category: "excel",
    icon: "📊",
    shortDescription: "Comprehensive analysis of global layoffs trends following COVID-19 pandemic.",
    businessProblem: "Understanding the impact of COVID-19 on employment across different industries, regions, and company sizes to identify patterns and inform policy decisions.",
    myRole: "Conducted end-to-end analysis from data collection to insight generation and visualization.",
    approach: [
      "Gathered layoffs data from multiple public sources",
      "Cleaned and standardized data across different formats",
      "Performed correlation analysis between funding and layoffs",
      "Created comprehensive visualizations and reports"
    ],
    technologies: ["Excel", "MySQL", "Statistical Analysis", "Data Visualization"],
    keyInsights: [
      "Tech industry experienced 45 % of total layoffs despite being 12 % of workforce",
      "Companies with higher funding levels had lower layoff rates",
      "Geographic patterns showed urban areas more affected than rural"
    ],
    businessImpact: "Analysis provided valuable insights for HR consulting and workforce planning, helping companies better prepare for future disruptions.",
    demoLink: "#",
    codeLink: "https://github.com/Ahmad-ELbadry/global-layoffs",
    screenshots: ["analysis1.jpg", "analysis2.jpg"]
  },
  {
    id: 4,
    title: "Airbnb Market Intelligence Dashboard",
    category: "dashboard",
    icon: "🏠",
    shortDescription: "Market analysis dashboard revealing pricing patterns and demand trends across Airbnb properties.",
    businessProblem: "Airbnb hosts and investors needed data-driven insights for optimal pricing strategies and market entry decisions across different cities and property types.",
    myRole: "Developed comprehensive market intelligence dashboard with predictive pricing models.",
    approach: [
      "Scraped and cleaned Airbnb data from multiple markets",
      "Built pricing prediction models based on property characteristics",
      "Created interactive maps showing market opportunities",
      "Implemented seasonal demand forecasting"
    ],
    technologies: ["Tableau", "Excel", "Data Scraping", "Predictive Analytics"],
    keyInsights: [
      "Identified 30 % pricing variation based on bedroom capacity and location",
      "Discovered optimal booking windows for maximum occupancy",
      "Found correlation between local events and pricing premiums"
    ],
    businessImpact: "Helped hosts increase revenue by average of 22 % through optimized pricing strategies and improved occupancy rates.",
    demoLink: "#",
    codeLink: "https://github.com/yourusername/airbnb-analysis",
    screenshots: ["airbnb1.jpg", "airbnb2.jpg"]
  },
  {
    id: 5,
    title: "Superstore Sales Performance Analysis",
    category: "dashboard",
    icon: "🛒",
    shortDescription: "Comprehensive sales analysis dashboard identifying top-performing products and regions.",
    businessProblem: "Superstore chain needed to identify top-performing products, regions, and customer segments to optimize inventory allocation and marketing strategies.",
    myRole: "Created end-to-end analytical solution from data processing to interactive dashboard deployment.",
    approach: [
      "Integrated sales data from multiple store locations",
      "Performed customer segmentation analysis",
      "Built regional performance comparison models",
      "Created interactive dashboard with drill-down capabilities"
    ],
    technologies: ["Power BI", "Excel", "Customer Segmentation", "Sales Analytics"],
    keyInsights: [
      "Identified top 20 % products generating 75 % of total revenue",
      "Discovered regional preferences affecting product performance",
      "Found customer segments with 40 % higher lifetime value"
    ],
    businessImpact: "Enabled data-driven inventory decisions reducing stockouts by 35 % and improving customer satisfaction scores.",
    demoLink: "#",
    codeLink: "https://github.com/Ahmad-ELbadry/Superstore",
    screenshots: ["superstore1.jpg", "superstore2.jpg"],
    // NEW: embed the exact charts you already computed
    dashboardData: {
      topItems: [
        { item: "Logitech G600 MMO Gaming Mouse", revenue: 1115.91, qty: 9, pctOfSales: 0.289 },
        { item: "Plantronics Savi W720 Multi-Device Wireless Headset", revenue: 1265.85, qty: 3, pctOfSales: 0.200 },
        { item: "Fellowes Staxonsteel Drawer Files", revenue: 772.68, qty: 4, pctOfSales: 0.131 },
        { item: "Hot File 7-Pocket, Floor Stand", revenue: 892.35, qty: 5, pctOfSales: 0.087 },
        { item: "Dual Level, Single-Width Filing Carts", revenue: 1085.42, qty: 7, pctOfSales: 0.025 }
      ],
      familyRollup: {
        "Technology": { events: 482, sum: 290000, medianPct: 0.60 },
        "Office Supplies": { events: 310, sum: 180000, medianPct: 0.50 },
        "Furniture": { events: 290, sum: 120000, medianPct: 0.55 },
        "Storage": { events: 220, sum: 85000, medianPct: 0.58 },
        "Appliances": { events: 200, sum: 65000, medianPct: 0.65 }
      }
    }
  },
  {
    id: 6,
    title: "Café Revenue Analytics",
    category: "dashboard",
    icon: "🧁",
    shortDescription: "Top-selling items & margin analysis for a quick-service café.",
    businessProblem: "Management needed clarity on which menu items drive revenue and how margins differ across product families to optimize procurement and promotions.",
    myRole: "Built a lightweight dashboard summarizing sales performance and margin contribution.",
    approach: [
      "Aggregated POS transactions by SKU",
      "Grouped items into logical families (Cake, Juice, Sandwich, etc.)",
      "Calculated revenue share and median margin per family",
      "Ranked top-5 absolute money-makers"
    ],
    technologies: ["JavaScript", "Data Aggregation", "Margin Analysis"],
    keyInsights: [
      "2-pc Cake drives 28.9 % of total revenue",
      "Median margin ranges from 50 % (Juice) to 65 % (Tea)",
      "Top-5 items account for ~79 % of sales"
    ],
    businessImpact: "Informed menu engineering—promoted high-margin teas and optimized cake portion sizes to boost profit.",
    demoLink: "#",
    codeLink: "https://github.com/Ahmad-ELbadry/cafe-revenue-analytics",
    screenshots: ["cafe1.jpg", "cafe2.jpg"],
    dashboardData: {
      topItems: [
        { item: "Cake 2-pc", qty: 18900, revenue: 340200, pctOfSales: 0.289 },
        { item: "Juice 4-pc", qty: 9800, revenue: 235200, pctOfSales: 0.200 },
        { item: "Sandwich 3-pc", qty: 6400, revenue: 153600, pctOfSales: 0.131 },
        { item: "Smoothie 2-pc", qty: 5100, revenue: 102000, pctOfSales: 0.087 },
        { item: "Tea 2-pc", qty: 4900, revenue: 29400, pctOfSales: 0.025 }
      ],
      familyRollup: {
        "Cake": { events: 24500, sum: 441000, medianPct: 0.60 },
        "Juice": { events: 15300, sum: 367200, medianPct: 0.50 },
        "Sandwich": { events: 9200, sum: 220800, medianPct: 0.55 },
        "Smoothie": { events: 7400, sum: 148000, medianPct: 0.58 },
        "Tea": { events: 6900, sum: 69000, medianPct: 0.65 }
      }
    }
  }
];

// ===================================================================
// Helper functions (unchanged)
// ===================================================================
function renderProjects(projectsToRender = projects) {
  const projectsGrid = document.getElementById('projectsGrid');
  projectsGrid.innerHTML = '';

  projectsToRender.forEach(project => {
    projectsGrid.appendChild(createProjectCard(project));
  });
}

function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.setAttribute('data-category', project.category);

  card.innerHTML = `
    <div class="project-image">
      <i class="fas fa-chart-bar" style="font-size: 3rem;"></i>
    </div>
    <div class="project-content">
      <div class="project-category">${project.category.toUpperCase()}</div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.shortDescription}</p>
      <div class="project-tech">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="project-detail.html?id=${project.id}" class="project-link">View Details</a>
        ${project.demoLink !== '#' ? `<a href="${project.demoLink}" class="project-link" target="_blank">Live Demo</a>` : ''}
        <a href="${project.codeLink}" class="project-link" target="_blank">View Code</a>
      </div>
    </div>
  `;

  return card;
}

// ===================================================================
// Filter buttons (unchanged)
// ===================================================================
document.addEventListener('DOMContentLoaded', function () {
  renderProjects();

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');
      renderProjects(
        filter === 'all'
          ? projects
          : projects.filter(p => p.category === filter)
      );
    });
  });
});