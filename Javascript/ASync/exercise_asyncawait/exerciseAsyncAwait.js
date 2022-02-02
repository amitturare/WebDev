// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then(console.log);

async function fetchData() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await resp.json();
    console.log(data);
}
fetchData();

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
    const [users, posts, albums] = await Promise.all(
        urls.map(async function (url) {
            const resp = await fetch(url);
            return resp.json();
        })
    );

    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
};
// getData();

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const links = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholderTYPO.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
];

const getData2 = async function () {
    try {
        const [users, posts, albums] = await Promise.all(
            links.map(async function (link) {
                const response = await fetch(link);
                return response.json();
            })
        );

        console.log("users", users);
        console.log("posts", posts);
        console.log("albums", albums);
    } catch (err) {
        console.log("ooops", err);
    }
};

getData2();
