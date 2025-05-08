document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('.tech-category');
  const techGrid = document.querySelector('.tech-grid');

  const techData = {
    WebServices: [
      { name: 'Web APIs', logo: '/images/about-img/web-api.png' },
      { name: 'SOP Services', logo: '/images/about-img/soap.png' },
      { name: 'RESTful Services', logo: '/images/about-img/restful.png' },
      { name: 'WCF Services.Net', logo: '/images/about-img/wcf.png' }
    ],
    WebApplications: [
      { name: 'Asp.Net', logo: '/images/about-img/asp.png' },
      { name: 'Angular', logo: '/images/about-img/angular-logo.svg' },
      { name: 'Asp.Net Webapp', logo: '/images/about-img/asp.png' }
    ],
    UserInterfaces: [
      { name: 'Telerik', logo: '/images/about-img/telerik.png' },
      { name: 'Material Design', logo: '/images/about-img/material.png' },
      { name: 'Bootstrap', logo: '/images/about-img/bootstrap.png' }
    ]
  };

  categories.forEach(category => {
    category.addEventListener('click', () => {
      categories.forEach(c => c.classList.remove('active'));
      category.classList.add('active');

      const categoryType = category.dataset.type;
      techGrid.innerHTML = '';

      techData[categoryType]?.forEach(tech => {
        const techItem = document.createElement('div');
        techItem.className = 'tech-item';
        techItem.innerHTML = `
          <img src="${tech.logo}" alt="${tech.name} Logo" class="tech-logo" />
          <span>${tech.name}</span>
        `;
        techGrid.appendChild(techItem);
      });
    });
  });

  // Initialize with the first category
  categories[0]?.click();
});
