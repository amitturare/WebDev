// nodeValue

const heading = document.querySelector('#special')
// console.log(heading.nodeValue); // Ouputs null
console.log(heading.childNodes);

console.log(heading.childNodes[0].nodeValue); 
// OR
console.log(heading.firstChild.nodeValue);
// OR
console.log(heading.textContent);    