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
    const targetValue = 80;  // Your target number
    const animationDuration = 1000;  // Animation duration in milliseconds

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


$(document).ready(function () {
	$('.testimonials').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		responsive: [{
		breakpoint: 850,
		settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		}
		}]
	});
});



document.getElementById("chatbot_toggle").onclick = function () {
    if (document.getElementById("chatbot").classList.contains("collapsed")) {
        document.getElementById("chatbot").classList.remove("collapsed")
        document.getElementById("chatbot_toggle").children[0].style.display = "none"
        document.getElementById("chatbot_toggle").children[1].style.display = ""
        //setTimeout(addResponseMsg,1000,"Hi")
    }
    else {
        document.getElementById("chatbot").classList.add("collapsed")
        document.getElementById("chatbot_toggle").children[0].style.display = ""
        document.getElementById("chatbot_toggle").children[1].style.display = "none"
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.slider-image');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            image.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Adjust the interval (in milliseconds) for the slideshow speed
    const interval = 3000;
    setInterval(nextSlide, interval);
});
