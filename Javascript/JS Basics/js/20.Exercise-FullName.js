// Arrays and For loop
const names = ['anna', 'susy', 'bob']
const lastName = ['shakeandbake']
let newArray = [];

// Use for loop to iterate over the array names and then add lastName to every element, lastly add the obtained results to the newArray

for (let i = 0; i < names.length; i++) {
    newArray.push(`${names[i]} ${lastName[0]}`)
}
console.log(names);
console.log(newArray);