import sublinks from "./data.js";

// Helper function
const getElements = (selection) => {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Check your element ${selection}`);
    }
};

// ======== Selections ========
const toggleBtn = getElements(".toggle-btn");
const closeBtn = getElements(".close-btn");
const sidebarWrapper = getElements(".sidebar-wrapper");
const sidebar = getElements(".sidebar-links");

const linkBtns = [...document.querySelectorAll(".link-btn")]; // Node-list ==> Array

const submenu = getElements(".submenu");
const hero = getElements(".hero");
const nav = getElements(".nav");

// Hide/Show sidebar
toggleBtn.addEventListener("click", () => {
    sidebarWrapper.classList.add("show");
});
closeBtn.addEventListener("click", () => {
    sidebarWrapper.classList.remove("show");
});

// Get the links on the sidebar - SMALL Screen
sidebar.innerHTML = sublinks
    .map((item) => {
        const { links, page } = item;
        return `
        <article>
        <h4>${page}</h4>
        <div class="sidebar-sublinks">
            ${links
                .map((link) => {
                    return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
                })
                .join("")}
        </div>
        </article>`;
    })
    .join("");

// Configure linksBtn
linkBtns.forEach((btn) => {
    btn.addEventListener("mouseover", function (e) {
        const tempBtn = e.currentTarget.getBoundingClientRect(); // gets the coordinates of the btn
        const bottom = tempBtn.bottom - 3;
        const center = (tempBtn.left + tempBtn.right) / 2;

        const text = e.currentTarget.textContent;
        const tempPage = sublinks.find(({ page }) => page === text); // Gets all the sublinks
        if (tempPage) {
            const { page, links } = tempPage;
            submenu.classList.add("show");
            submenu.style.left = `${center}px`;
            submenu.style.top = `${bottom}px`;
            
            submenu.innerHTML = `
            <section>
                <h4>${page}</h4>
                <div class="submenu-center col-${links.length > 4 ? 4 : links.length}">
                    ${links
                        .map((link) => {
                            return `
                        <a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>
                        `;
                        })
                        .join("")}
                </div>
            </section>
            `;
        }
    });
});

// Hide/Show submenu
hero.addEventListener("mouseover", function (e) {
    submenu.classList.remove("show");
});
nav.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("link-btn") === false) {
        submenu.classList.remove("show");
    }
});
