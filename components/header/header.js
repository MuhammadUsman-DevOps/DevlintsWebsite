document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const serviceMenu = document.querySelector('#service-menu');
    const serviceDropdown = document.querySelector('.service-dropdown-menu');
    const hireTalentMenu = document.querySelector('#hire-talent-menu');
    const hiringDropdown = document.querySelector('.hiring-dropdown-menu');

    // Toggle hamburger menu and nav links
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('show');
        document.querySelector('.header').classList.toggle('increase-height');
    });

    // Toggle service dropdown on click (mobile only)
    serviceMenu.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
            e.preventDefault();
            serviceDropdown.classList.toggle('show');
        }
    });

    // Toggle hiring dropdown on click (mobile only)
    hireTalentMenu.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
            e.preventDefault();
            hiringDropdown.classList.toggle('show');
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
            if (!serviceMenu.contains(e.target) && !serviceDropdown.contains(e.target)) {
                serviceDropdown.classList.remove('show');
            }
            if (!hireTalentMenu.contains(e.target) && !hiringDropdown.contains(e.target)) {
                hiringDropdown.classList.remove('show');
            }
        }
    });
});