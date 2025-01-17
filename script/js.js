// Page Load Progress Bar (Shows when page is loading)
window.addEventListener('load', function () {
    document.getElementById('progress-bar').style.display = 'none';
});

window.addEventListener('beforeunload', function () {
    document.getElementById('progress-bar').style.display = 'block';
});

// Loading Bar Functionality (Show progress bar on page load)
window.onload = function () {
    const progressBar = document.getElementById('loading-bar');
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loading-bar-container').style.display = 'none';
            }, 500);
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 20);
};

// Slider Functionality (Main Image Slider)
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;

// Function to move slides manually or automatically
function moveSlide(step) {
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    const offset = -currentSlide * 100; // Move the slider container to show the next slide
    document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}

// Auto Slide every 3 seconds for the main slider
setInterval(() => {
    moveSlide(1);
}, 3000);

// Manual Slide Controls for Main Slider
document.querySelector('.slider-nav .prev').addEventListener('click', () => {
    moveSlide(-1);
});

document.querySelector('.slider-nav .next').addEventListener('click', () => {
    moveSlide(1);
});

// Carousel Functionality for Testimonials
let currentTestimonial = 0;

function showTestimonialSlide(index) {
    const testimonialSlides = document.querySelectorAll('#testimonials .testimonial');
    const totalTestimonialSlides = testimonialSlides.length;
    if (index >= totalTestimonialSlides) {
        currentTestimonial = 0;
    } else if (index < 0) {
        currentTestimonial = totalTestimonialSlides - 1;
    } else {
        currentTestimonial = index;
    }

    const carousel = document.querySelector('#testimonials .carousel');
    const offset = -currentTestimonial * 340; // Width of each testimonial + margin
    carousel.style.transform = `translateX(${offset}px)`;
}

// Auto Slide every 5 seconds for the testimonials carousel
setInterval(() => {
    showTestimonialSlide(currentTestimonial + 1);
}, 5000);

// Manual Slide Controls for Testimonials
document.getElementById('next-btn').addEventListener('click', () => {
    showTestimonialSlide(currentTestimonial + 1);
});

document.getElementById('prev-btn').addEventListener('click', () => {
    showTestimonialSlide(currentTestimonial - 1);
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = e.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Offset to account for fixed navbar height
            behavior: 'smooth'
        });
    });
});

// Handle form submission (optional: show loading bar)
document.querySelector('form').addEventListener('submit', function (e) {
    // Optionally show loading indicator before form submission
    document.getElementById('loading-bar-container').style.display = 'block';
    setTimeout(function () {
        document.getElementById('loading-bar-container').style.display = 'none';
    }, 2000);  // Hide after 2 seconds (adjust as needed)
});

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider-item');
    const totalSlides = slides.length;

    function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= totalSlides) {
    currentSlide = 0; // Loop to the first slide
} else if (currentSlide < 0) {
    currentSlide = totalSlides - 1; // Loop to the last slide
}

    // Adjust the transform of the slider-container to show the correct slide
    document.querySelector('.slider-container').style.transform = `translateX(-${currentSlide * 100}%)`;
}

    // Auto slide every 2 seconds
    setInterval(() => {
    moveSlide(1); // Move to the next slide every 2 seconds
}, 2000);

    // Ensure your JavaScript is loading correctly
document.addEventListener("DOMContentLoaded", function() {
    // Initialize the slider
    console.log('Slider JavaScript is loaded and working!');
});
