// Load project details based on URL parameter
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));
    
    const project = projects.find(p => p.id === projectId);
    
    if (project) {
        renderProjectDetail(project);
        
        // Initialize dashboard if project has one
        if (project.hasDashboard) {
            setTimeout(() => {
                initializeProjectDashboard(project);
            }, 100);
        }
    } else {
        document.getElementById('projectDetail').innerHTML = '<p>Project not found.</p>';
    }
});

function renderProjectDetail(project) {
    const detailContainer = document.getElementById('projectDetail');
    
    let dashboardHTML = '';
    
    if (project.hasDashboard) {
        dashboardHTML = `
            <div class="project-section dashboard-section">
                <h2><i class="fas fa-chart-line"></i> Interactive Dashboard</h2>
                <p>${project.dashboardDescription}</p>
                <div class="custom-dashboard" id="projectDashboard">
                    <div class="dashboard-filters">
                        <select id="dashboardFilter" class="filter-select">
                            <option value="all">Show All Data</option>
                            <option value="summary">Summary View</option>
                            <option value="detailed">Detailed View</option>
                        </select>
                    </div>
                    <div class="charts-grid" id="chartsGrid">
                        <!-- Charts will be generated here -->
                    </div>
                    <div class="summary-cards" id="summaryCards">
                        <!-- Summary cards will be generated here -->
                    </div>
                </div>
            </div>
        `;
    }
    
    detailContainer.innerHTML = `
        <div class="project-hero">
            <div class="container">
                <div class="project-icon">${project.icon}</div>
                <h1>${project.title}</h1>
                <p class="project-subtitle">${project.shortDescription}</p>
                <div class="project-tags">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>

        <div class="project-content">
            <div class="container">
                <div class="project-section">
                    <h2><i class="fas fa-bullseye"></i> Business Problem</h2>
                    <p>${project.businessProblem}</p>
                </div>

                <div class="project-section">
                    <h2><i class="fas fa-user-tie"></i> My Role</h2>
                    <p>${project.myRole}</p>
                </div>

                <div class="project-section">
                    <h2><i class="fas fa-cogs"></i> Technical Approach</h2>
                    <div class="approach-steps">
                        ${project.approach.map(step => `<div class="step">${step}</div>`).join('')}
                    </div>
                </div>

                <div class="project-section">
                    <h2><i class="fas fa-lightbulb"></i> Key Insights</h2>
                    <ul class="insights-list">
                        ${project.keyInsights.map(insight => `<li>${insight}</li>`).join('')}
                    </ul>
                </div>

                ${dashboardHTML}

                <div class="project-section">
                    <h2><i class="fas fa-chart-line"></i> Business Impact</h2>
                    <p>${project.businessImpact}</p>
                </div>

                <div class="project-section">
                    <h2><i class="fas fa-tools"></i> Technologies Used</h2>
                    <div class="tech-showcase">
                        ${project.technologies.map(tech => `<div class="tech-item">${tech}</div>`).join('')}
                    </div>
                </div>

                <div class="project-links-section">
                    <a href="${project.demoLink}" class="btn btn-primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i> View Live Demo
                    </a>
                    <a href="${project.codeLink}" class="btn btn-secondary" target="_blank">
                        <i class="fas fa-code"></i> View Code
                    </a>
                    <a href="index.html" class="btn btn-outline">
                        <i class="fas fa-arrow-left"></i> Back to Projects
                    </a>
                </div>
            </div>
        </div>
    `;
}