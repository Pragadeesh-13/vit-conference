// Hamburger menu toggle
const hamburgerHeader = document.getElementById('hamburgerHeader');
const navBar = document.getElementById('navBar');

if (hamburgerHeader) {
    hamburgerHeader.addEventListener('click', function(e) {
        e.stopPropagation();
        hamburgerHeader.classList.toggle('active');
        navBar.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 710 && navBar.classList.contains('active')) {
        if (!navBar.contains(e.target) && !hamburgerHeader.contains(e.target)) {
            hamburgerHeader.classList.remove('active');
            navBar.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }
});

// Close menu when clicking on a nav link (mobile)
document.querySelectorAll('.nav-bar a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 710) {
            hamburgerHeader.classList.remove('active');
            navBar.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});

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
    
    // Auto scroll to top on mobile view
    if (window.innerWidth <= 768) {
        // Scroll to the main content area
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.scrollTop = 0;
        }
        // Also scroll the window to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
    showSection('about-us');
    // Set home link as active (only in nav-bar, not sidebar)
    const homeLink = document.querySelector('.nav-bar a[href="#about"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
    
    // VIT logo click handler - redirect to About Us section
    const vitLogo = document.querySelector('.header-logo');
    if (vitLogo) {
        vitLogo.style.cursor = 'pointer';
        vitLogo.addEventListener('click', function() {
            showSection('about-us');
            
            // Update active state
            document.querySelectorAll('.nav-bar a, .sidebar a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Set "About Us" links as active
            document.querySelectorAll('a[href="#about-us"]').forEach(link => {
                link.classList.add('active');
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 768 && navBar.classList.contains('active')) {
                hamburgerHeader.classList.remove('active');
                navBar.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
});
