// fs module
const fs = require("fs");
// console.log(fs);

// reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//     if (err) {
//         err;
//     } else {
//         console.log("Text inside file: ", data.toString());
//     }
// });
// console.log("last line");

// writing files and creates it if one doesn't exist
// fs.writeFile("./docs/blog1.txt", "Hello All", () => {
//     console.log("file has been updated");
// });

// fs.writeFile("./docs/blog2.txt", "Hello World", () => {
//     console.log("file has been updated");
// });

// directories
// fs.existsSync() can be used to check if something exists
// if (!fs.existsSync("./assets")) {
//     fs.mkdir("./assets", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Folder created!");
//     });
// } else {
//     fs.rmdir("./assets", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("folder deleted");
//     });
// }

// delete files
if (fs.existsSync("./docs/deleteMe.txt")) {
    fs.unlink("./docs/deleteMe.txt", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File deleted!");
    });
} else {
    fs.writeFile("./docs/deleteMe.txt", "", () => {
        console.log("deleteMe file created!");
    });
}
