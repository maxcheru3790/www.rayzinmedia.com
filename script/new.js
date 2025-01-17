let currentSlide = 0;
const sliderContainer = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.slider-item');
const dots = document.querySelectorAll('.dot');

function moveSlide(slideIndex) {
    // Hide the current slide and remove active dot
    sliderItems[currentSlide].style.display = 'none';
    dots[currentSlide].classList.remove('active');

    // Update to the new slide
    currentSlide = slideIndex;

    // Show the new slide and highlight the active dot
    sliderItems[currentSlide].style.display = 'block';
    dots[currentSlide].classList.add('active');
}

// Initialize slider
function initSlider() {
    sliderItems.forEach((item, index) => {
        item.style.display = index === 0 ? 'block' : 'none';
    });
    dots[0].classList.add('active'); // Set the first dot as active
}

initSlider();
