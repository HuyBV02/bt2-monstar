// range filter price

const rangeMin = document.getElementById("rangeMin");
const rangeMax = document.getElementById("rangeMax");
const minValue = document.getElementById("minValue");
const maxValue = document.getElementById("maxValue");
const sliderTrack = document.querySelector(".slider-track");

function updateSlider() {
    const minVal = parseInt(rangeMin.value);
    const maxVal = parseInt(rangeMax.value);

    if (minVal > maxVal - 5) {
        rangeMin.value = maxVal - 5;
    }

    if (maxVal < minVal + 5) {
        rangeMax.value = minVal + 5;
    }

    minValue.textContent = rangeMin.value;
    maxValue.textContent = rangeMax.value;
    fillSlider();
}

function fillSlider() {
    const percent1 = (rangeMin.value / rangeMin.max) * 100;
    const percent2 = (rangeMax.value / rangeMax.max) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #f0f3f2 ${percent1}%,  ${percent1}%, #b6c6c9 ${percent2}%, #f0f3f2 ${percent2}%)`;
    // sliderTrack.style.background = `#b6c6c9`;
}

rangeMin.addEventListener("input", updateSlider);
rangeMax.addEventListener("input", updateSlider);

window.onload = updateSlider;

// slideshow function
function makeSlideshow(selector) {
    const slideshow = document.querySelector(selector);
    const slides = slideshow.querySelector('.slides');
    const slideCount = slides.children.length;
    const prevButton = slideshow.querySelector('.prev');
    const nextButton = slideshow.querySelector('.next');
    const dotsContainer = slideshow.querySelector('.dots');
    let currentIndex = 0;
    let autoSlideInterval;

    // Create dots
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.dot');

    function goToSlide(index) {
        currentIndex = index;
        slides.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        resetAutoSlide();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        goToSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        goToSlide(currentIndex);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    resetAutoSlide();
}


document.addEventListener('DOMContentLoaded', () => {
    makeSlideshow('.slider1');
    makeSlideshow('.project-slide');
});

// accordion

document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", function () {
        const item = this.parentElement;
        item.classList.toggle("active");
    });
});

document.querySelectorAll(".sub-list").forEach((subList) => {
    subList.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});
