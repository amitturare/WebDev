// Web Storage API - provided by browser
// session storage - stores the data while the tab is open
// local storage - stores the data while the browser is open
// setItem
// getItem
// removeItem
// clear

// Check the outputs in the local storage > applications tab > inspect
// sessionStorage.setItem('name', 'amit')
localStorage.setItem('Name', 'Anna'); // key, value
localStorage.setItem('Name', 'Amit'); // if u retype the code with replacing the value with something else, it will get replaced in the localStorage too
localStorage.setItem('Friend', 'Peter');
localStorage.setItem('Job', 'Developer');
localStorage.setItem('Address', 'Street 12');

// Use getItem to get the values
const name = localStorage.getItem('Name');
console.log(name);

// Use removeItem to remove the keys
localStorage.removeItem('Address');

// Use clear to remove all the keys
// localStorage.clear();

// LOCAL Storage with Multiple values (arrays)
// You can't directly store an array using setItem
// Use JSON.stringify(), JSON.parse() to store and get the array

const friends = ['peter', 'anna', 'bob'];
localStorage.setItem('Friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('Friends'))
console.log(values[0]);





