
document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('.tech-category');
  const servicesGrid = document.querySelector('.services-grid');

  const techData = {
    frontend: [
      { name: 'React', logo: '/images/about-img/react-js-logo.svg' },
      { name: 'Vue.js', logo: '/images/about-img/vuejs-logo.svg' },
      { name: 'Angular', logo: '/images/about-img/angular-logo.svg' }
    ],
    backend: [
      { name: 'Php', logo: '/images/about-img/php-logo.svg' },
      { name: 'Phython', logo: '/images/about-img/python-logo.svg' },
      { name: 'Node Js', logo: '/images/about-img/node-js-logo.svg' }
      
    ],
    databases: [
      { name: 'MySQL', logo: '/images/about-img/mysql.png' },
      { name: 'MongoDB', logo: '/images/about-img/mongodb.png' },
      { name: 'PostgreSQL', logo: '/images/about-img/postgre-sql.png' }
    ],
    cloud: [
      { name: 'AWS', logo: '/images/about-img/aws-elasticache.svg' },
      { name: 'Azure', logo: '/images/about-img/azure-logo.svg' },
      { name: 'Google Cloud', logo: '/images/about-img/google-cloud.svg' }
    ]
  };

  categories.forEach(category => {
    category.addEventListener('click', () => {
      categories.forEach(c => c.classList.remove('active'));
      category.classList.add('active');

      const categoryType = category.textContent.toLowerCase();
      servicesGrid.innerHTML = '';
      techData[categoryType].forEach(tech => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        serviceItem.innerHTML = `
          <img src="${tech.logo}" alt="${tech.name} Logo" class="technology-logo">
          ${tech.name}
        `;
        servicesGrid.appendChild(serviceItem);
      });
    });
  });

  // Initialize with frontend
  categories[0].click();
});
