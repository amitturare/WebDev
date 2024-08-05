// Select all the slides, nextBtn, and prevBtn
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

// Iterate over each slide
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

// Configure nextBtn
nextBtn.addEventListener('click', function () {
    counter++;
    carousel();
});
// Configure prevBtn
prevBtn.addEventListener('click', function () {
    counter--;
    carousel();
});

// Create a function carousel
function carousel() {
    // // Add limits
    // if (counter === slides.length) {
    //     counter = 0;
    // }
    // if (counter < 0) {
    //     counter = slides.length - 1;
    // }

    //  OR

    // Restrict Buttons
    if (counter < slides.length - 1) {
        nextBtn.style.display = 'block'
    } else {
        nextBtn.style.display = 'none';
    }
    if (counter > 0) {
        prevBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}
// Hide prevBtn when site loads
prevBtn.style.display = "none";