// Async And Await part of ES8, built on top of Promises
// Async function is a function that returns a promise - its code is better and cleaner than promises

// // Normal promise
// movePlayer(100, "Left")
//     .then(() => movePlayer(400, "Left"))
//     .then(() => movePlayer(10, "Right"))
//     .then(() => movePlayer(330, "Left"));

// // Async-Await
// async function playerStart() {
//     const first = await movePlayer(100, "Left"); // you are waiting for this to happen
//     const second = await movePlayer(400, "Left"); // then this
//     movePlayer(10, "Right"); // then this
//     movePlayer(330, "Left"); // then this
// }

// Another EXAMPLE
// console.log(fetch("https://jsonplaceholder.typicode.com/users")); // a pending promise

// USING NORMAL FETCH SYNTAX
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((resp) => resp.json())
//     .then(console.log);

// USING ASYNC AND AWAIT
// async function fetchUsers() {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await resp.json();
//     console.log(data);
// }
// fetchUsers();

// Another EXAMPLE
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceh older.typicode.com/albums",
];

// USING NORMAL SYNTAX
// Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())))
//     .then((arr) => {
//         console.log("users", arr[0]);
//         console.log("users", arr[1]);
//         console.log("users", arr[2]);
//     })
//     .catch("Error!");

// USING ASYNC AND AWAIT
async function getData() {
    try {
        const [users, posts, albums] = await Promise.all(
            urls.map((url) => fetch(url).then((resp) => resp.json()))
        );
        console.log("users", users);
        console.log("posts", posts);
        console.log("albums", albums);
    }
    catch (err) {
        console.log('ERROR', err);
    }
}
getData();
