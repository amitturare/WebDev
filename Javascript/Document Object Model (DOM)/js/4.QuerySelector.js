// querySelector('any css') - selects single (node item) // always outs the first element
// querySelectorAll('any css') - selects all (node list)

// Here you can also use arrayiterators

// Here you have specify if u adding class or id
const result = document.querySelector('#result');
result.style.backgroundColor = 'blue'

const item = document.querySelector('.special')
// console.log(item); // outputs the first element having class special

const lastItem = document.querySelector('li:last-child') // accesses the last element of the list
// console.log(lastItem);

const items = document.querySelectorAll('.special') // accesses all the elements having class special
items.forEach(function(item){
    console.log(item);
    item.style.color = 'yellow';
})