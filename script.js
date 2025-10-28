/* =====  smooth scroll  ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({behavior:'smooth',block:'start'});
    });
});

/* =====  navbar scroll effect  ===== */
window.addEventListener('scroll',()=>{
    const nav = document.querySelector('.navbar');
    nav.style.background = window.scrollY > 100 ? 'rgba(44, 62, 80,0.95)' : '#2c3e50';
});

/* =====  footer year  ===== */
document.getElementById('year').textContent = new Date().getFullYear();