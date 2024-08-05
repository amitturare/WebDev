"use strict";
/* ================================ */
/* ======== T1 ======== Compiling using tsc */
// const character = "mario";
// console.log(character);
// const inputs = document.querySelectorAll("input");
// // console.log(inputs);
// inputs.forEach((input) => {
//     console.log(input);
// });
/* ================================ */
/* ======== T2 ======== Variables are strict */
// let character = "mario";
// let age = 18;
// let isBlackBelt = false;
// // character = 20; // Gives error, it needs to be string only. It cannot be changed to number
// character = "random";
// // age = "Amit"; // Gives error
// age = 20;
// const circumference = (diameter: number) => {
//     // type of argument can be specified is TS
//     return diameter * Math.PI;
// };
// console.log(circumference(18));
/* ================================ */
/* ======== T3 ======== Arrays & Objects */
// Arrays
// const names = ["Mario", "John", "Josh"];
// names.push("Toad");
// // names.push(18); // Gives error, allows to add elements of same data type only
// // To have an array of different types, just declare it in first place with different data types.
// const mixed = ["Kken", "True", true, 1018];
// mixed.push("John"); // This doesn't give a error now
// mixed.push(false); // No error
// mixed[0] = 20; // No error
// // Objects - behaves same like variables, they can't be changed to any different data type
// let person = {
//     name: "mario",
//     belt: "black",
//     age: 30,
// };
// // person.age = 'john'; // Gives error
// person.age = 20;
// // person.skills = ["coding", "designing"]; // Gives error, can't add new properties
// person = {
//     name: "John",
//     belt: "yellow",
//     age: 18,
//     // Removing or adding any property to this gives error,
//     // Structure of this should be similar to the initial declaration done
// };
/* ================================ */
/* ======== T4 ======== Explicit Types */
// let character: string; // Initializes the variable with a fixed data type.
// let age: number;
// let isLoggedIn: boolean;
// let mixedVariable: string | number | boolean;
// mixedVariable = "Amit";
// mixedVariable = 18;
// // age = "John"; // Gives an error
// age = 20;
// // array
// let names: string[]; // This makes it a array of only strings.
// // names = [10, 23]; // Gives an error
// // Union types - to make mixed array
// let mixed: (string | number | boolean)[] = []; // strings and numbers will be saved in it
// mixed.push("Amit");
// mixed.push(18);
// mixed.push(true);
// console.log(mixed); // WORKS
// // objects
// let person: object;
// person = { name: "Amit", age: 20 };
// // To go more specific with the attributes of the objects
// let person2: {
//     name: string;
//     age: number;
//     skills: [];
// };
/* ================================ */
/* ======== T5 ======== Dynamic (any) Types */
// let age: any = 25; // This can accept any type of data type
// age = "Amit";
// age = true;
// age = { name: "John" };
// let mixed: any[] = ["Amit", 10, 18, true]; // A mixed array made using any
/* ================================ */
/* ======== T6 ======== Better Workflow & tsconfig */
// Create a tsconfig.json using tsc --init and then set the outDir and rootDir to make ts work with public and src folder properly. Now with tsc -w it will automatically watch the files and compile it.
/* ================================ */
/* ======== T7 ======== Function Basics */
// let greet: Function;
// greet = "any name"; // Gives error
// greet = () => {
//     console.log("Hello All");
// };
// const add = (
//     a: number,
//     b: number,
//     c: string | number = 10,
//     d?: string | number
// ) => {
//     // c is a default parameter
//     // d is a optional argument because of '?', if not used it returns undefined
//     console.log(a + b); // adds two numbers passed
//     console.log(c); // 10
//     console.log(d); // Undefined
// };
// add(10, 8);
// const subtract = (a: number, b: number): number => {
//     // doing this specifies the data type of the return, default is void
//     return a - b;
// };
/* ================================ */
/* ======== T8 ======== Type Aliases */
// type StringOrNum = string | number;
// // This alias can be used to repeating of code like
// let a: StringOrNum; // this is going to be string | number
/* ================================ */
/* ======== T9 ======== Function Signatures */
// // let greet: Function;
// // Example 1:
// let greet: (a: string, b: string) => void;
// greet = (name1: string, name2: string) => {
//     console.log(name1, name2);
// }; // This follows the above signature, thus DOES NOT GIVE ANY ERROR.
// // Example 2:
// let calc: (a: number, b: number, c: string) => number;
// calc = (num1: number, num2: number, action: string) => {
//     if (action === "add") {
//         return num1 + num2;
//     } else {
//         return num1 - num2;
//     }
// }; // This follows of signature of arguments and returning a number, this DOES NOT GIVE ANY ERROR
