export function processData(results) {
    const resultArr = [];
    Object.keys(results).forEach((key) => {
        const id = key;
        const title = results[key].title;
        const text = results[key].extract;
        const img = results[key].hasOwnProperty("thumbnail")
            ? results[key].thumbnail.source
            : null;

        const item = {
            id: id,
            title: title,
            text: text,
            img: img,
        };
        resultArr.push(item);
    });
    return resultArr;
}

export function updateDOM(arr, parent) {
    const HTMLString = arr
        .map((item) => {
            return `<article class="result-item">
                    <div class="result-title">
                        <a href="https://en.wikipedia.org/?curid=${
                            item.id
                        }" target="_blank">${item.title}</a>
                    </div>
                    <div class="result-content">
                        ${
                            item.img
                                ? `<div class="result-image">
                                        <img src="${item.img}" alt="${item.title}">
                                    </div>`
                                : ``
                        }
                        <div class="result-text">
                            <p class="result-description">${item.text}</p>
                        </div>
                    </div>
            </article>`;
        })
        .join("");

    parent.innerHTML = HTMLString;
}

export function updateStats(number, stats) {
    if (number) {
        stats.textContent = `Displaying ${number} results.`;
    } else {
        stats.textContent = `Sorry, no results found.`;
    }
}
