// finally - works when the promise (fulfilled or rejected) is finished, is added at the end of the promise

// const urls = [
//     "https://jsonplaceholder.typicode.com/users/1",
//     "https://jsonplaceholder.typicode.com/users/2",
//     "https://jsonplaceholder.typicode.com/users/3",
//     "https://jsonplaceholder.typicode.co0m/users/4",
// ];

// Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())))
//     .then((arr) => {
//         console.log("1", arr[0]);
//         console.log("2", arr[1]);
//         console.log("3", arr[2]);
//         console.log("4", arr[3]);
//     })
//     .catch((err) => console.log("fix it!", err))
//     .finally((data) => console.log(`'finally' used: ${data}`)); // finally doesn't receive anything, thats why data is undefined

// ANOTHER FEATURE
const urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2",
    "https://jsonplaceholder.typicode.com/users/3",
    "https://jsonplaceholder.typicode.com/users/4",
];
const getData = async function () {
    try {
        const [user1, user2, user3, user4] = await Promise.all(
            urls.map(async function (url) {
                const resp = await fetch(url);
                return resp.json();
            })
        );
        console.log("1", user1);
        console.log("2", user2);
        console.log("3", user3);
        console.log("4", user4);
    } catch (err) {
        console.log("fix it!", err);
    }
};
// getData();

// Another alternative
async function getData1() {
    try {
        const [user1, user2, user3, user4] = await Promise.all(
            urls.map((url) => fetch(url).then((resp) => resp.json()))
        );

        console.log("1", user1);
        console.log("2", user2);
        console.log("3", user3);
        console.log("4", user4);
    } catch (err) {
        console.log("fix it!", err);
    }
}
// getData1();

// for of EXAMPLE
// const loopTroughURLS = (url) => {
//     for (url of urls) {
//         console.log(url);
//     }
// };
// loopTroughURLS();

// Another alternative = USING for await of
const getData2 = async function () {
    const arrayOfPromises = urls.map((url) => fetch(url));
    console.log(arrayOfPromises);
    for await (const request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
};
getData2();
