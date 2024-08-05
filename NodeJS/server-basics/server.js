const http = require("http");
const fs = require("fs");
const _ = require("lodash");

// console.log(http); // http module is used to create a server

const server = http.createServer((req, res) => {
    // req - contains information about the request
    // res - to send the response to the user on the browser

    // console.log(req.url, req.method);

    // LODASH
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log("Hello");
    });

    greet();
    greet();

    // Set header Content-Type
    res.setHeader("Content-Type", "text/html"); // the type can be set to plain text, html or anything else

    // Simple Routing
    let path = "./views/";
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/about-us":
            res.statusCode = 301;
            res.setHeader("Location", "/about");
            res.end();
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    // Send an HTML file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data); // ends the response
        }
    });
}); // takes a callback function which runs every time a request is sent

server.listen(3000, "localhost", () => {
    console.log("Listening for requests on port 3000");
}); // Port number, host name, function fires when listening
