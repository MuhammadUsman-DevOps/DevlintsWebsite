const slider = document.getElementById('logoSlider');
const scrollAmount = 200;

setInterval(() => {
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    slider.scrollTo({ left: 0, behavior: 'smooth' }); // Reset to start
  } else {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' }); // Scroll forward
  }
}, 2000);
