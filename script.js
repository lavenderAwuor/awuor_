// Function to animate counting
function animateCount(element, target, duration) {
  let start = 0;
  const increment = target / duration;

  const updateCount = () => {
      start += increment;
      element.innerText = Math.floor(start);

      if (start < target) {
          requestAnimationFrame(updateCount);
      }
  };

  updateCount();
}

// Usage example
document.addEventListener('DOMContentLoaded', function () {
  const targetElement = document.querySelector('.timer');
  const targetValue = 80;  
  const animationDuration = 1000;  

  animateCount(targetElement, targetValue, animationDuration);
});
document.addEventListener('DOMContentLoaded', function () {
  const targetElement = document.querySelector('.timers');
  const targetValue = 100;  // Your target number
  const animationDuration = 1000;  // Animation duration in milliseconds

  animateCount(targetElement, targetValue, animationDuration);
});


document.addEventListener('DOMContentLoaded', function () {
  const targetElement = document.querySelector('.timerer');
  const targetValue = 25;  // Your target number
  const animationDuration = 1000;  // Animation duration in milliseconds

  animateCount(targetElement, targetValue, animationDuration);
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.slider-image');
  let currentIndex = 0;

  function showImage(index) {
      images.forEach((image, i) => {
          if (i === index) {
              image.style.display = 'block';
          } else {
              image.style.display = 'none';
          }
      });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
  }

  const interval = 3000;
  setInterval(nextSlide, interval);

  // Initially show the first image
  showImage(currentIndex);
});

