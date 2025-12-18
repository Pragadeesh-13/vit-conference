// Show/hide sections on navigation
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.main-content section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

// Handle navigation clicks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        showSection(sectionId);
        
        // Update active state on navigation
        document.querySelectorAll('.nav-bar a, .sidebar a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Show home section by default on page load
window.addEventListener('DOMContentLoaded', function() {
    showSection('about');
    // Set home link as active
    const homeLink = document.querySelector('a[href="#about"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});
