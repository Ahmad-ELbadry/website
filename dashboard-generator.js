// Dashboard Generator for Projects
function initializeProjectDashboard(project) {
    if (!project.dashboardData) return;

    const chartsGrid = document.getElementById('chartsGrid');
    const summaryCards = document.getElementById('summaryCards');
    
    // Clear existing content
    chartsGrid.innerHTML = '';
    summaryCards.innerHTML = '';

    // Generate different dashboard layouts based on project type
    switch(project.id) {
        case 1: // Coffee Shop
            createCoffeeShopDashboard(project.dashboardData);
            break;
        case 2: // Fashion Boutique
            createFashionDashboard(project.dashboardData);
            break;
        case 3: // Global Layoffs
            createLayoffsDashboard(project.dashboardData);
            break;
        case 4: // Airbnb
            createAirbnbDashboard(project.dashboardData);
            break;
        case 5: // Superstore
            createSuperstoreDashboard(project.dashboardData);
            break;
    }

    // Setup dashboard filter
    setupDashboardFilter(project);
}

// Coffee Shop Dashboard (Project 1)
function createCoffeeShopDashboard(data) {
    // Create chart containers
    const chartsGrid = document.getElementById('chartsGrid');
    chartsGrid.innerHTML = `
        <div class="chart-container">
            <canvas id="qualityChart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="cleaningChart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="trendsChart"></canvas>
        </div>
    `;

    // Data Quality Chart
    const qualityCtx = document.getElementById('qualityChart').getContext('2d');
    new Chart(qualityCtx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Data Quality Score (%)',
                data: [65, 78, 85, 92],
                borderColor: '#27ae60',
                backgroundColor: 'rgba(39, 174, 96, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Data Quality Improvement Over Time'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });

    // Cleaning Progress Chart
    const cleaningCtx = document.getElementById('cleaningChart').getContext('2d');
    new Chart(cleaningCtx, {
        type: 'bar',
        data: {
            labels: ['Missing Data', 'Duplicates', 'Format Errors', 'Invalid Entries'],
            datasets: [{
                label: 'Issues Found',
                data: [1200, 450, 890, 320],
                backgroundColor: '#e74c3c'
            }, {
                label: 'Issues Resolved',
                data: [1200, 450, 890, 320],
                backgroundColor: '#27ae60'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Data Cleaning Progress'
                }
            }
        }
    });

    // Trends Chart
    const trendsCtx = document.getElementById('trendsChart').getContext('2d');
    new Chart(trendsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Clean Data', 'Missing Values', 'Duplicates', 'Format Issues'],
            datasets: [{
                data: [85, 8, 4, 3],
                backgroundColor: ['#27ae60', '#f39c12', '#e74c3c', '#9b59b6']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Final Data Quality Distribution'
                }
            }
        }
    });

    // Summary Cards
    createSummaryCards([
        { title: 'Data Quality Score', value: '92%', color: '#27ae60' },
        { title: 'Records Cleaned', value: '15,240', color: '#3498db' },
        { title: 'Error Reduction', value: '85%', color: '#e74c3c' }
    ]);
}

// Fashion Boutique Dashboard (Project 2)
function createFashionDashboard(data) {
    const chartsGrid = document.getElementById('chartsGrid');
    chartsGrid.innerHTML = `
        <div class="chart-container">
            <canvas id="discountChart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="seasonalChart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="brandChart"></canvas>
        </div>
    `;

    // Discount Effectiveness Chart
    const discountCtx = document.getElementById('discountChart').getContext('2d');
    new Chart(discountCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Product Categories',
                data: [
                    {x: 25, y: 125000}, // Dresses
                    {x: 20, y: 98000},  // Pants
                    {x: 15, y: 87000},  // Shirts
                    {x: 30, y: 65000},  // Accessories
                    {x: 18, y: 110000}  // Shoes
                ],
                backgroundColor: ['#e74c3c', '#3498db', '#f39c12', '#9b59b6', '#27ae60']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Discount Rate vs Revenue Impact'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Average Discount (%)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Revenue ($)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + (value/1000) + 'K';
                        }
                    }
                }
            }
        }
    });

    // Seasonal Performance Chart
    const seasonalCtx = document.getElementById('seasonalChart').getContext('2d');
    new Chart(seasonalCtx, {
        type: 'radar',
        data: {
            labels: ['Spring', 'Summer', 'Fall', 'Winter'],
            datasets: [{
                label: 'Sales Performance',
                data: [75, 92, 68, 85],
                borderColor: '#9b59b6',
                backgroundColor: 'rgba(155, 89, 182, 0.2)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Seasonal Performance Analysis'
                }
            }
        }
    });

    // Brand Performance Chart
    const brandCtx = document.getElementById('brandChart').getContext('2d');
    new Chart(brandCtx, {
        type: 'horizontalBar',
        data: {
            labels: ['Zara', 'H&M', 'Nike', 'Adidas', 'Uniqlo'],
            datasets: [{
                label: 'Total Sales ($)',
                data: [145000, 132000, 128000, 115000, 98000],
                backgroundColor: '#e74c3c'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Top Performing Brands'
                }
            },
            scales: {
                x: {
                    ticks: {
                        callback: function(value) {
                            return '$' + (value/1000) + 'K';
                        }
                    }
                }
            }
        }
    });

    createSummaryCards([
        { title: 'Avg Discount Rate', value: '21.6%', trend: 'down' },
        { title: 'Top Season', value: 'Summer', trend: 'up' },
        { title: 'Revenue Growth', value: '+25%', trend: 'up' }
    ]);
}

// Global Layoffs Dashboard (Project 3)
function createLayoffsDashboard(data) {
    const chartsGrid = document.getElementById('chartsGrid');
    chartsGrid.innerHTML = `
        <div class="chart-container">
            <canvas id="industryChart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="timelineChart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="fundingChart"></canvas>
        </div>
    `;

    // Industry Impact Chart
    const industryCtx = document.getElementById('industryChart').getContext('2d');
    new Chart(industryCtx, {
        type: 'doughnut',
        data: {
            labels: ['Technology', 'Retail', 'Healthcare', 'Finance', 'Manufacturing'],
            datasets: [{
                data: [45, 24, 13, 10, 8],
                backgroundColor: ['#e74c3c', '#3498db', '#f39c12', '#27ae60', '#9b59b6']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Industry Distribution of Layoffs (%)'
                },
                legend: {
                    position: 'right'
                }
            }
        }
    });

    // Timeline Chart
    const timelineCtx = document.getElementById('timelineChart').getContext('2d');
    new Chart(timelineCtx, {
        type: 'line',
        data: {
            labels: ['Jan 2020', 'Apr 2020', 'Jul 2020', 'Oct 2020', 'Jan 2021', 'Apr 2021', 'Jul 2021', 'Oct 2021'],
            datasets: [{
                label: 'Total Layoffs',
                data: [15000, 85000, 65000, 45000, 35000, 25000, 18000, 12000],
                borderColor: '#e74c3c',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Layoffs Timeline (2020-2021)'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return (value/1000) + 'K';
                        }
                    }
                }
            }
        }
    });

    // Funding vs Layoffs Chart
    const fundingCtx = document.getElementById('fundingChart').getContext('2d');
    new Chart(fundingCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Companies',
                data: [
                    {x: 50, y: 5000},
                    {x: 120, y: 3500},
                    {x: 200, y: 2000},
                    {x: 300, y: 1500},
                    {x: 450, y: 800},
                    {x: 600, y: 400}
                ],
                backgroundColor: '#9b59b6'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Funding Level vs Layoff Correlation'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Funding (Millions $)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Layoffs Count'
                    },
                    ticks: {
                        callback: function(value) {
                            return (value/1000) + 'K';
                        }
                    }
                }
            }
        }
    });

    createSummaryCards([
        { title: 'Total Layoffs Analyzed', value: '125K+', trend: 'neutral' },
        { title: 'Most Affected Industry', value: 'Tech', trend: 'neutral' },
        { title: 'Peak Period', value: 'Q2 2020', trend: 'neutral' }
    ]);
}

// Airbnb Dashboard (Project 4)
function createAirbnbDashboard(data) {
    const chartsGrid = document.getElementById('chartsGrid');
    chartsGrid.innerHTML = `
        <div class="chart-container">
            <canvas id="priceChart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="occupancyChart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="bookingChart"></canvas>
        </div>
    `;

    // Price by Property Type
    const priceCtx = document.getElementById('priceChart').getContext('2d');
    new Chart(priceCtx, {
        type: 'bar',
        data: {
            labels: ['Studio', '1 Bedroom', '2 Bedroom', '3 Bedroom', '4+ Bedroom'],
            datasets: [{
                label: 'Average Price ($)',
                data: [85, 125, 185, 245, 320],
                backgroundColor: ['#3498db', '#e74c3c', '#f39c12', '#27ae60', '#9b59b6']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Average Price by Property Type'
                }
            }
        }
    });

    // Occupancy Rate Chart
    const occupancyCtx = document.getElementById('occupancyChart').getContext('2d');
    new Chart(occupancyCtx, {
        type: 'doughnut',
        data: {
            labels: ['Studio', '1 Bedroom', '2 Bedroom', '3 Bedroom', '4+ Bedroom'],
            datasets: [{
                data: [78, 82, 75, 68, 62],
                backgroundColor: ['#3498db', '#e74c3c', '#f39c12', '#27ae60', '#9b59b6']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Occupancy Rates by Property Type'
                }
            }
        }
    });

    // Monthly Booking Trends
    const bookingCtx = document.getElementById('bookingChart').getContext('2d');
    new Chart(bookingCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Number of Bookings',
                data: [450, 520, 680, 750, 820, 890],
                borderColor: '#3498db',
                yAxisID: 'y'
            }, {
                label: 'Revenue ($)',
                data: [56000, 65000, 85000, 94000, 103000, 112000],
                borderColor: '#27ae60',
                yAxisID: 'y1'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Booking Trends'
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Number of Bookings'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Revenue ($)'
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });

    createSummaryCards([
        { title: 'Average Price', value: '$245', trend: 'up' },
        { title: 'Occupancy Rate', value: '68%', trend: 'up' },
        { title: 'Revenue Growth', value: '+22%', trend: 'up' }
    ]);
}

// Superstore Dashboard (Project 5)
function createSuperstoreDashboard(data) {
    const chartsGrid = document.getElementById('chartsGrid');
    chartsGrid.innerHTML = `
        <div class="chart-container">
            <canvas id="regionalChart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="categoryChart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="performanceChart"></canvas>
        </div>
    `;

    // Regional Performance Chart
    const regionalCtx = document.getElementById('regionalChart').getContext('2d');
    new Chart(regionalCtx, {
        type: 'bar',
        data: {
            labels: ['North', 'South', 'East', 'West'],
            datasets: [{
                label: 'Sales ($)',
                data: [450000, 380000, 420000, 520000],
                backgroundColor: '#3498db'
            }, {
                label: 'Profit ($)',
                data: [67500, 53200, 63000, 78000],
                backgroundColor: '#27ae60'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Regional Sales vs Profit Performance'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + (value/1000) + 'K';
                        }
                    }
                }
            }
        }
    });

    // Category Performance Chart
    const categoryCtx = document.getElementById('categoryChart').getContext('2d');
    new Chart(categoryCtx, {
        type: 'radar',
        data: {
            labels: ['Electronics', 'Clothing', 'Furniture', 'Food'],
            datasets: [{
                label: 'Sales Performance',
                data: [320000, 280000, 420000, 250000],
                backgroundColor: 'rgba(231, 76, 60, 0.2)',
                borderColor: '#e74c3c'
            }, {
                label: 'Profit Margin (%)',
                data: [15, 15, 20, 15],
                backgroundColor: 'rgba(39, 174, 96, 0.2)',
                borderColor: '#27ae60'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Category Performance Analysis'
                }
            }
        }
    });

    // Profit Margin by Category
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    new Chart(performanceCtx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Categories',
                data: [
                    {x: 320000, y: 48000, r: 15}, // Electronics
                    {x: 280000, y: 42000, r: 15}, // Clothing
                    {x: 420000, y: 84000, r: 20}, // Furniture
                    {x: 250000, y: 37500, r: 15}  // Food
                ],
                backgroundColor: ['#3498db', '#e74c3c', '#f39c12', '#27ae60']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Sales Volume vs Profit Margin Correlation'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Sales ($)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + (value/1000) + 'K';
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Profit ($)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + (value/1000) + 'K';
                        }
                    }
                }
            }
        }
    });

    createSummaryCards([
        { title: 'Total Sales', value: '$1.77M', trend: 'up' },
        { title: 'Total Profit', value: '$265K', trend: 'up' },
        { title: 'Best Region', value: 'West', trend: 'up' }
    ]);
}

// Helper Functions
function createSummaryCards(cards) {
    const summaryCards = document.getElementById('summaryCards');
    
    summaryCards.innerHTML = cards.map(card => `
        <div class="summary-card">
            <h4>${card.title}</h4>
            <p class="value">${card.value}</p>
            <small class="trend-${card.trend}">
                <i class="fas fa-arrow-${card.trend === 'up' ? 'up' : card.trend === 'down' ? 'down' : 'right'}"></i>
                ${card.trend === 'up' ? 'Increased' : card.trend === 'down' ? 'Decreased' : 'Stable'}
            </small>
        </div>
    `).join('');
}

function setupDashboardFilter(project) {
    const filter = document.getElementById('dashboardFilter');
    if (filter) {
        filter.addEventListener('change', function() {
            // Re-initialize dashboard with selected filter
            initializeProjectDashboard(project);
        });
    }
}