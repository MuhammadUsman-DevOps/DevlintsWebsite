document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const slider = document.querySelector('.my-services');
  const totalBlogs = 6; // Number of unique services
  let autoSlideInterval;

  // Function to get the number of visible services based on screen size
  function getVisibleBlogs() {
      if (window.matchMedia('(max-width: 400px)').matches) {
          return 1; // 1 service per row
      } else if (window.matchMedia('(max-width: 600px)').matches) {
          return 2; // 2 services per row
      } else if (window.matchMedia('(max-width: 900px)').matches) {
          return 3; // 3 services per row
      } else {
          return 4; // 4 services per row
      }
  }

  function updateSlider() {
      const visibleBlogs = getVisibleBlogs();
      const blogWidth = 100 / visibleBlogs; // Percentage width per service
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(-${currentIndex * blogWidth}%)`;

      // Reset to start for seamless looping
      if (currentIndex >= totalBlogs) {
          setTimeout(() => {
              slider.style.transition = 'none';
              currentIndex = 0;
              slider.style.transform = `translateX(0%)`;
          }, 500); // Match transition duration
      }
      // Handle backward seamless looping
      if (currentIndex < 0) {
          setTimeout(() => {
              slider.style.transition = 'none';
              currentIndex = totalBlogs - visibleBlogs;
              slider.style.transform = `translateX(-${(totalBlogs - visibleBlogs) * blogWidth}%)`;
          }, 500); // Match transition duration
      }
  }

  window.nextSlide = function() {
      currentIndex++;
      updateSlider();
      resetAutoSlide();
  };

  window.prevSlide = function() {
      currentIndex--;
      updateSlider();
      resetAutoSlide();
  };

  function startAutoSlide() {
      autoSlideInterval = setInterval(window.nextSlide, 2000);
  }

  function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
  }

  // Update slider on window resize
  window.addEventListener('resize', updateSlider);

  startAutoSlide();
  updateSlider(); // Initial call to set correct position
});