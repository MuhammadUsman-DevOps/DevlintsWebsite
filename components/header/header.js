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
            const isLink = e.target.closest('a');
            if (!isLink) {
                e.preventDefault(); // Only prevent if not clicking a link
                serviceDropdown.classList.toggle('show');
            }
        }
    });

    // Toggle hiring dropdown on click (mobile only)
    hireTalentMenu.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
            const isLink = e.target.closest('a');
            if (!isLink) {
                e.preventDefault(); // Only prevent if not clicking a link
                hiringDropdown.classList.toggle('show');
            }
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
            const clickedLink = e.target.closest('a');

            // Don't close dropdowns if a link inside the dropdown was clicked
            if (clickedLink && (serviceDropdown.contains(clickedLink) || hiringDropdown.contains(clickedLink))) {
                return;
            }

            if (!serviceMenu.contains(e.target) && !serviceDropdown.contains(e.target)) {
                serviceDropdown.classList.remove('show');
            }
            if (!hireTalentMenu.contains(e.target) && !hiringDropdown.contains(e.target)) {
                hiringDropdown.classList.remove('show');
            }
        }
    });
});
