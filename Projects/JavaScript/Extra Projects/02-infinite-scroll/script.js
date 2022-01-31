// Selections
const imgContainer = document.querySelector("#image-container");
const loader = document.querySelector("#loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
let count = 5;
const apiKey = "tc2thCnWxdYnng72LDyo0-UDfIQIP41aVrhCftaZWUE";
let apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if all images are loaded
function imageLoaded() {
    imagesLoaded++;
    console.log(imagesLoaded);
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        console.log('ready', ready);

        // To increase the performance!
        count = 30;
        apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

    }
}

// Helper function
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create element for links & photos, and append to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length; 
    // console.log('total images', totalImages);
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> tag
        const item = document.createElement("a");
        setAttributes(item, {
            href: photo.links.html,
            target: "_blank",
        });

        // Create <img> tag
        const img = document.createElement("img");
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        // Event listener, check when each is finished loading
        img.addEventListener('load', imageLoaded)

        // Put <img> inside the <a> element, then put both inside the image-container
        item.appendChild(img);
        imgContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();

        // To show photos, run displayPhotos() function
        displayPhotos();
    } catch (error) {
        // Error handling
    }
}

// CHeck to see if scrolling near bottom of page, and then load more phots
window.addEventListener('scroll', () => {
    // window.innerHeight = total height of the browser window (px)
    // window.scrollY = how far the user has scrolled down the page (px)
    // document.body.offsetHeight = height of everything in the body including what is not within the view

    // To load more when user is near the bottom of the page, we need to subtract 1000px from the offsetHeight to trigger event before bottom is reached
    
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready === true) {
        ready = false;
        getPhotos();
    }
})

// On load
getPhotos();
