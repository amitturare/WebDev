const fs = require("fs");

// Streams are used for large files as it can take a lot of time to load

const readStream = fs.createReadStream("./docs/blog3.txt", {
    encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//     // console.log("---- NEW CHUNK ----");
//     // console.log(chunk);

//     writeStream.write("\nNEW CHUNKN");
//     writeStream.write(chunk);
// }); // data is the event and we receive chunk at a time to use it rather than waiting for the whole file.

// Piping takes the readStream and pipes it to the writeStream
readStream.pipe(writeStream);
