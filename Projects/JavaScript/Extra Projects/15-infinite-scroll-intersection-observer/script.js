// ==== Helper Functions ==== //
// Get Elements
function getElements(selection, all = false) {
    let element = document.querySelector(selection);
    if (all === true) {
        element = document.querySelectorAll(selection);
    }

    return element;
}
// Set Attribute
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Unsplash API
let count = 5;
const apiKey = "og8ld14ekYT50AzPtVAlZ-2VRnPWfvvf_RtGyScOERo";
let apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// ==== Selections ==== //
const container = getElements(".container");
const loader = document.querySelector("#loader");
let lastElement;

// ==== Global Variables ==== //
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// ==== Fetch Data ==== //
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();

        // console.log(photosArray);

        // Update DOM
        displayPhotos();
    } catch (err) {
        console.log(err);
    }
}
getPhotos();

// Check if all the images are loaded
function imgLoaded() {
    imagesLoaded++;
    console.log(imagesLoaded);

    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        console.log("ready", ready);

        count = 10;
        apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
    }
}

// ==== Update DOM ==== //
function displayPhotos() {
    /* 
    For reference 👇
    <div class="img-container">
        <img src="https://source.unsplash.com/random/1" class="img" alt="photo1">
    </div>
    */

    imagesLoaded = 0;
    totalImages = photosArray.length;

    // Create element for all the elements of the photoArray
    photosArray.forEach((photo) => {
        // Create container
        const item = document.createElement("div");
        item.classList.add("img-container");

        // Create a link element
        const link = document.createElement("a");
        setAttributes(link, {
            href: photo.links.html,
            target: "_blank",
        });

        const img = document.createElement("img");
        img.classList.add("img");
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
        });

        // Check if img is loaded
        img.addEventListener("load", imgLoaded);

        // Append img into link, link into the img-container and img-container into main container
        link.appendChild(img);
        item.appendChild(link);
        container.appendChild(item);
    });

    // Get the lastElement
    lastElement = getElements(".img-container:last-child");

    // Fetch more Images when going to the bottom
    const lastImgObserver = new IntersectionObserver(
        (entries) => {
            const lastImg = entries[0];
            if (lastImg.isIntersecting && ready === true) {
                ready = false;
                getPhotos();

                lastImgObserver.unobserve(lastImg.target);
                lastImgObserver.observe(lastElement);
            }
        },
        {
            rootMargin: "100px",
        }
    );

    lastImgObserver.observe(lastElement);

    // Observe every img-container to add active class
    // Get the node-list of the containers
    imgContainers = getElements(".img-container", true);

    imgContainers.forEach((container) => {
        observer.observe(container);
    });
}

// Intersection Observer to add class active
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("active", entry.isIntersecting);
        });
    },
    {
        threshold: 0.75,
    }
);
