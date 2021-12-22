// Date Object
// Like Math Object even this is built-in one

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const date = new Date()
console.log(date);
console.log(date.getDate()); // You can also use getMonth, getyear, getTime, getHours, getSeconds

const month = date.getMonth();
console.log(month); // in JS months and days are indexed based, thats why even if it is DECEMBER it will give number 11
console.log(months[month]);

const day = date.getDay();
console.log(day);
console.log(days[day]);

console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`
console.log(sentence);

document.body.innerHTML = sentence;

// You can also set different dates
const randomDate = new Date('9/18/2002') // Month/Date/Year
const sentence2 = `${days[randomDate.getDay()]}, ${randomDate.getDate()} ${months[randomDate.getMonth()]} ${randomDate.getFullYear()}`
console.log(sentence2);