import express, { Request, Response } from "express";
import { Container } from "typedi";
import BlogService from "../services/blog";

export const blogRouter = express.Router();

blogRouter.get("/", async (req: Request, res: Response) => {
    const search: any = req.query.search;
    const page: any = req.query.p;
    const blogsPerPage = 2;

    const blogServiceInstance = Container.get(BlogService);
    if (search) {
        const data = await blogServiceInstance.searchBlog(search);
        res.status(200).json(data);
    } else if (page) {
        const data = await blogServiceInstance.paginateResults(
            page,
            blogsPerPage
        );
        res.status(200).json(data);
    } else {
        const data = await blogServiceInstance.getAllBlogs();
        res.status(200).json(data);
    }
});

blogRouter.get("/:id", async (req: Request, res: Response) => {
    const blogServiceInstance = Container.get(BlogService);
    const data = await blogServiceInstance.getBlog(req.params.id);
    res.status(200).json(data);
});

blogRouter.post("/", async (req: Request, res: Response) => {
    const blogContent = req.body;

    const blogServiceInstance = Container.get(BlogService);
    const data = await blogServiceInstance.createBlog(blogContent);
    if (data) {
        res.status(201).json({ success: "Blog created!" });
    } else {
        res.status(500).json({ error: "Not a valid ID" });
    }
});

blogRouter.delete("/:id", async (req: Request, res: Response) => {
    const blogServiceInstance = Container.get(BlogService);
    const data = await blogServiceInstance.deleteBlog(req.params.id);
    res.status(200).json(data);
});

blogRouter.patch("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const updates = req.body;

    const blogServiceInstance = Container.get(BlogService);
    const data = await blogServiceInstance.updateBlog(updates, id);
    res.status(200).json(data);
});
