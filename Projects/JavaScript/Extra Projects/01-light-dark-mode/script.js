// getElement()
const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(
            `Please check "$${selection}" selector, no such selector exists`
        );
    }
};

// Constants
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// ======== SELECTIONS ========
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = getElement('#nav');
const toggleIcon = getElement('#toggle-icon');
const image1 = getElement('#image1');
const image2 = getElement('#image2');
const image3 = getElement('#image3');
const textBox = getElement('#text-box');

// ======== FUNCTIONS ========

// switchTheme callback function
const switchTheme = (event) => {
    const bool = event.target.checked;

    if (bool) {
        document.documentElement.setAttribute('data-theme', DARK_THEME);

        // Changing the selections to dark mode
        mode(DARK_THEME);

        // Local Storage
        localStorage.setItem('theme', DARK_THEME);
    } else {
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);

        // Changing the selections to dark mode
        mode(LIGHT_THEME);

        // Local Storage
        localStorage.setItem('theme', LIGHT_THEME);
    }
};

// Mode
const mode = (color) => {
    // Illustrations
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;

    // Other Selections
    if (color === DARK_THEME) {
        nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
        textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
        toggleIcon.children[0].textContent = 'Dark Mode';
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    } else {
        nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
        textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
        toggleIcon.children[0].textContent = 'Light Mode';
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    }
};

// ======== EVENT LISTENERS ========
toggleSwitch.addEventListener('click', switchTheme);

// Check localStorage for theme
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        mode(currentTheme);
    } else {
        toggleSwitch.checked = false;
        mode(currentTheme);
    }
}
