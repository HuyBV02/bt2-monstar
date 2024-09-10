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

// slide show
let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    showSlides((slideIndex += 1));
}

function prevSlide() {
    showSlides((slideIndex -= 1));
}

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
