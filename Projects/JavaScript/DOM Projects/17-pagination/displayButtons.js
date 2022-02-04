const displayButtons = (container, pages, activeIndex) => {
    let buttons = pages.map((_, pageIndex) => {
        return `
            <button class="page-btn ${
                activeIndex === pageIndex ? "active-btn" : "null"
            }" data-index="${pageIndex}">${pageIndex + 1}</button>
            `;
    });
    buttons.push('<button class="next-btn">next</button>')
    buttons.unshift('<button class="prev-btn">prev</button>')
    container.innerHTML = buttons.join("");
};

export default displayButtons;
