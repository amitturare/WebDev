// innerHTML - helps to check what HTML tags and its content is written or else change the HTML
// textContent - helps to check what text is written or else change the text

// Access the elements
const list = document.getElementById('first')
const div = document.getElementById('second')
const item = document.querySelector('.item')

console.log(div.textContent); // Shows the text written in the element

console.log(list.innerHTML); // Shows whole HTML which is written inside the element
console.log(list.textContent);

// Create a unordered list and add items in it using innerHTML
const ul = document.createElement('ul')
ul.innerHTML = `<li class="item">appended list item</li>
                <li>appended list item</li>
                <li>appended list item</li>`;
document.body.appendChild(ul)

