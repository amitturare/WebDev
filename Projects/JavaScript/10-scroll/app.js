// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

// ********** close links ************
// // Select nav-toggle, links-container and links
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links')

// Configure the navToggle
navToggle.addEventListener('click', function () {
    // linksContainer.classList.toggle("show-links"); // This doesn't work when we add or remove the links as the height needs to adjust itself dynamically
    const linksHeight = links.getBoundingClientRect().height; // this value will change dynamically when we add or remove links to the list
    const containerHeight = linksContainer.getBoundingClientRect().height; // this gonna be 0 as in css default height is set to 0
    // console.log(linksHeight);

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

// ********** fixed navbar ************
// Select the navbar and topLink
const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        // prevent default
        e.preventDefault();
        // navigate to specific spots
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)

        // Calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const isFixedNav = navbar.classList.contains('fixed-nav')

        // To get the actual position of the element
        let position = element.offsetTop - navHeight; // this works when navbar is fixed 

        if (!isFixedNav) { // this will help for when navbar ain't fixed
            position = position - navHeight
        }
        if (navHeight > 82) { // this will work for small sizes
            position = position + containerHeight
        } 

        window.scrollTo({
            left: 0, top:position
        })
        // Whenever we click on the link it should scroll there and close the nav container on the small screen:
        linksContainer.style.height = 0;
    })
})
