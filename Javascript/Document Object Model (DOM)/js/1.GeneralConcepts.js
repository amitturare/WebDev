// Kinda similar to CSS

// Always remember below 2 steps
// Step 1: Select the element or group of elements you want to affect
// Step 2: Decide the effect we want to apply to the selection

// There are many different ways to complete Step 1 & 2

// 1st Way: You can directly change the styles
document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow'
document.getElementById('btn').style.background = 'red'

// 2nd Way: Assign to a variable and then apply styls
const element = document.getElementById('element')
element.style.color = 'lightblue'

// After accessing elements or tags specifically, we get outputed a node object or a node list which is an arraylike object]
const btn = document.getElementById('btn') // stores the btn element to a varaible
const name = btn.nodeName // accessing the name of the of btn 
const css = btn.style
console.log(btn);
console.log(name);
console.log(css); // this shows the styles applied or we can apply to the button


// Also there is global window object, under which document exists and under which all the element tags exists
console.log(window);