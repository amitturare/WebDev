// Require Express and other dependencies
const express = require("express");
const morgan = require("morgan"); // logger middleware for NodeJS
const mongoose = require("mongoose");

const { result } = require("lodash");
const blogRoutes = require("./routes/blogRoutes");

// Express App
const app = express();

// Connect to MongoDB
const dbURI =
    "mongodb+srv://blog-admin:admin@nodeblogsite.cz27bev.mongodb.net/blog-site?retryWrites=true&w=majority";
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) =>
        app.listen(3000, () => {
            console.log("Listening to requests at port 3000");
        })
    ) // Listen to requests after connecting to DB
    .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// // Listen for requests
// app.listen(3000, () => {
//     console.log("Listening for request on port 3000.");
// });

// With 3rd-party middleware Morgan
// app.use(morgan("tiny")); // 'dev' is an option which gives information like path, statuscode, time taken.
// Many other options can be passed to it like 'tiny', 'combined', etc.

// Middleware & static files
app.use(express.static("public")); // Any static file added into the public folder will be considered and used

app.use(express.urlencoded({ extended: true })); // takes all the URL encoded data and passes that into an object to use

// WITHOUT 3rd-party middleware Morgan
// // middleware to log the req details
// app.use((req, res, next) => {
//     console.log("---- NEW REQUEST RECEIVED ----");
//     console.log("Host: ", req.hostname);
//     console.log("Path: ", req.path);
//     console.log("Method: ", req.method);

//     next(); // Used to continue to run the program after the middleware
// });
// app.use((req, res, next) => {
//     console.log("In the next middleware");

//     next(); // Used to continue to run the program after the middleware
// });

// BASICS of MONGOOSE & MONGO SANDBOX ROUTES
// app.get("/add-blog", (req, res) => {
//     const blog = new Blog({
//         title: "new blog 2",
//         snippet: "about my new blog",
//         body: "more about my new blog",
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => console.log(err));
// });
// app.get("/all-blogs", (req, res) => {
//     Blog.find()
//         .then((result) => res.send(result))
//         .catch((err) => console.log(err));
// });
// app.get("/single-blog", (req, res) => {
//     Blog.findById("63326238156330d0c03e92fd")
//         .then((result) => res.send(result))
//         .catch((err) => console.log(err));
// });

app.get("/", (req, res) => {
    // BEFORE
    // const blogs = [
    //     {
    //         title: "He finds eggs",
    //         snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //         title: "Mario finds stars",
    //         snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //         title: "How to defeat browser",
    //         snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    // ];
    // res.render("index", { title: "Home", blogs });

    // AFTER
    res.redirect("/blogs");
});
app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

// Create blog
app.get("/create-blog", (req, res) => {
    res.render("create", { title: "Write Blog" });
});

// blog routes
app.use("/blogs", blogRoutes); // Using this we can keep routes differently and scope them

// 404 - a use case of middleware
app.use((req, res) => {
    res.status(404).render("404", { title: "Page not found!" });
});

// WITHOUT EJS
// // Listen to get request
// app.get("/", (req, res) => {
//     // res.send("<p>Home Page</p>"); // better than .write and .end. It sets setHeader and statusCode automatically
//     res.sendFile("./views/index.html", { root: __dirname });
// });

// app.get("/about", (req, res) => {
//     // res.send("<p>About page</p>");
//     res.sendFile("./views/about.html", { root: __dirname });
// });

// // Redirect
// app.get("/about-us", (req, res) => {
//     res.redirect("/about");
// });

// // 404 Page
// app.use((req, res) => {
//     // Should be placed at the bottom only
//     res.status(404).sendFile("./views/404.html", { root: __dirname });
// });
