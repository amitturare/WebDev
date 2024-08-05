// Helper Function
const getElements = (selection) => {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check the selected element ${selection}`);
    }
};

// Selections
const quoteContainer = getElements(".quote-container");
const quoteText = getElements(".quote");
const authorText = getElements(".author");
const newQuoteBtn = getElements(".new-quote");
const twitterBtn = getElements("#twitter");
const loader = getElements(".loader");

// Loader
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//  Fetch the quotes
async function getQuote() {
    loading();
    try {
        const response = await fetch("https://type.fit/api/quotes");
        const quotesArr = await response.json();
        const randomQuote =
            quotesArr[Math.floor(Math.random() * quotesArr.length)]; // Object containing the quote and author

        // Edit the HTML
        // Check if the author field is null or not
        if (!randomQuote.author) {
            authorText.textContent = "Unknown";
        } else {
            authorText.textContent = randomQuote.author;
        }
        // Check the quote length
        if (randomQuote.text.length > 120) {
            quoteText.classList.add("long-quote");
        } else {
            quoteText.classList.remove("long-quote");
        }
        // Set quote, hide loader
        quoteText.textContent = randomQuote.text;
        complete();
    } catch (err) {
        console.log(`Fix it, ${err}`);
    }
}

// To tweet the quote
function tweetQuote() {
    let twitterURL;
    if (authorText.textContent !== "Unknown") {
        twitterURL = `https://twitter.com/intent/tweet?text="${quoteText.textContent}" - ${authorText.textContent}`;
    } else {
        twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    }
    window.open(twitterURL, "_blank");
}

// Configure the buttons
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);
