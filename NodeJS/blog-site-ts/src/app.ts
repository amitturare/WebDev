import "reflect-metadata";
import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

import { blogRouter } from "./routes/blogRoutes";

// Express APP
const app: Application = express();
app.use(express.json());

// Connect to MongoDB
const dbURI =
    "mongodb+srv://blog-admin:admin@nodeblogsite.cz27bev.mongodb.net/blog-site?retryWrites=true&w=majority";
mongoose
    .connect(dbURI)
    .then(() =>
        app.listen(3000, () => console.log("Listening requests at port 3000."))
    )
    .catch((err) => console.log(err));

// Basic Routes
app.get("/", (req: Request, res: Response) => {
    res.redirect("/blogs");
});

app.use("/blogs", blogRouter);

app.use((req: Request, res: Response) => {
    res.status(404).json({ message: "Page not found!" });
});
