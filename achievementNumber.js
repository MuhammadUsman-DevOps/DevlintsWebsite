document.addEventListener('DOMContentLoaded', () => {
    const achievementSection = document.querySelector('.achievement-section');
    const boxes = document.querySelectorAll('.achievement-boxes .box h1');
    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                boxes.forEach(box => {
                    const targetText = box.textContent.replace('+', ''); // Remove '+' for parsing
                    const target = parseInt(targetText, 10);
                    animateCounter(box, 0, target, 1000); // Animate over 1 second
                });
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });

    observer.observe(achievementSection);

    function animateCounter(element, start, end, duration) {
        let startTime = null;
        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + (element.textContent.includes('+') ? '+' : '');
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }
        requestAnimationFrame(animation);
    }
});