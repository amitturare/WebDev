export const setSearchFocus = () => {
    document.getElementById("search").focus();
};

export function getMaxChars() {
    const width = window.innerWidth || document.body.clientWidth;
    let maxChars;
    if (width < 414) maxChars = 65;
    if (width >= 414 && width < 1400) maxChars = 100;
    if (width >= 1400) maxChars = 130;

    return maxChars;
}

export function showClearTextButton() {
    const search = document.getElementById("search");
    const clear = document.getElementById("clear");

    if (search.value.length) {
        clear.style.display = "flex";
    } else {
        clear.style.display = "none";
    }
}

export function clearText(e) {
    e.preventDefault();

    const search = document.getElementById("search");
    const clear = document.getElementById("clear");

    search.value = "";
    clear.style.display = "none";

    // Set Search Focus
    setSearchFocus();
}

