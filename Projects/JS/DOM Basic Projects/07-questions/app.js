// OPTION 1: using selectors inside the element
// Select all the articles
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", function () {
        // Code to open only 1 question at one time
        questions.forEach(function (item) {
            if (item != question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});

// OPTION 2: traversing
// Select all the btns
// const btns = document.querySelectorAll('.question-btn')
// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         // console.log(e.currentTarget.parentElement.parentElement); // 2 parent element because we need to access the article which is having the class question
//         const questionDiv = e.currentTarget.parentElement.parentElement;

//         questionDiv.classList.toggle('show-text')
//     })
// })
