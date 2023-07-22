let slidePosition = 0;
const slides = document.getElementsByClassName('review__card');
const totalSlides = slides.length;
const container = document.querySelector('.review__container');

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 500) { /* Adjust this value as needed */
        navbar.classList.add('navbar-dark');
    } else {
        navbar.classList.remove('navbar-dark');
    }
});



document.getElementById('next').addEventListener("click", function() {
    moveToNextSlide();
});
document.getElementById('prev').addEventListener("click", function() {
    moveToPrevSlide();
});

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    const slideWidth = slides[slidePosition].offsetWidth;
    container.scrollTo({
        left: slideWidth * slidePosition,
        behavior: 'smooth'
    });
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    const slideWidth = slides[slidePosition].offsetWidth;
    container.scrollTo({
        left: slideWidth * slidePosition,
        behavior: 'smooth'
    });
}
