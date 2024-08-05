import { Service } from "typedi";
import { isValidObjectId } from "mongoose";
import { Blog } from "../models/blog";
import { IBlog } from "../interfaces/blog";

@Service()
export default class BlogService {
    async searchBlog(searchKey: string) {
        try {
            return await Blog.find({ title: searchKey });
        } catch (err) {
            console.log(err);
        }
    }

    async paginateResults(page: number, blogsPerPage: number) {
        try {
            return await Blog.find()
                .skip(page * blogsPerPage)
                .limit(blogsPerPage);
        } catch (err) {
            console.log(err);
        }
    }

    async getAllBlogs() {
        return await Blog.find().sort({ createdAt: -1 });
    }

    async getBlog(id: string) {
        if (isValidObjectId(id)) {
            const data = await Blog.findById(id);
            if (data) {
                return data;
            } else {
                return { error: "Couldn't fetch the document" };
            }
        } else {
            return { error: "Not a valid ID" };
        }
    }

    async createBlog(blogContent: object) {
        const blog = new Blog(blogContent);
        return await blog.save();
    }

    async deleteBlog(id: string) {
        if (isValidObjectId(id)) {
            const data = await Blog.findByIdAndDelete(id);
            if (data) {
                return { success: "Blog deleted!" };
            } else {
                return { error: "Couldn't delete the document" };
            }
        } else {
            return { error: "Not a valid ID" };
        }
    }

    async updateBlog(updates: object, id: string) {
        if (isValidObjectId(id)) {
            const data = await Blog.findByIdAndUpdate(id, { $set: updates });
            if (data) {
                return { success: "Blog updated!" };
            } else {
                return { error: "Couldn't update the document" };
            }
        } else {
            return { error: "Not a valid ID" };
        }
    }
}
