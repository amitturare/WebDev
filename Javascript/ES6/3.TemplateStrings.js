// Template Strings/Literals
// `` back-ticks

const name = 'Peter';
const lastName = 'sanders';
const age = 25;

// Old Style
// const sentence = "My full name is " + name + " " + lastName + " and I'm " + age + " years old."
// Using Template Literals
const sentence = `My full name is ${name} ${lastName.toUpperCase()} and I'm ${Math.floor(
    age / 2 + 6
)} years old.`;

console.log(sentence);
