// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


// Select the button
const btn = document.querySelector('.switch-btn')

// Select the video container
const video = document.querySelector('.video-container')

// Configure btn
btn.addEventListener('click', function() {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide')
        video.pause()
    } else {
        btn.classList.remove('slide')
        video.play( )
    }
})

// Select the preloader
const preloader = document.querySelector('.preloader')

// Add load event to the window
window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader')
}) 