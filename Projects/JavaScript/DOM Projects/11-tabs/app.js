// Select all the btns, about article and content article
const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

// Configure about
about.addEventListener('click', function(e) {
    // console.log(e.target.dataset.id); // This will give output only when we click on the btns
    const id = e.target.dataset.id

    if (id) {
        // First we need to remove all the active classes from the articles and btns then we will add to specific ones
        btns.forEach(function(btn) {
            btn.classList.remove('active')
        });
        // Add active to the btn which is being clicked on
        e.target.classList.add('active')
        
        // Do same with the articles
        articles.forEach(function(article) {
            article.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active')
    }
});
