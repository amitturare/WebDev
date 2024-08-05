const { result } = require("lodash");
const Blog = require("../models/blog");

// const queryBlogs = async () => {
//     const data = await Blog.find();
//     return data;
// };
// const renderResults = () => {
//     res.render("index", { title: "All Blogs", blogs: result, key: "" });
// };

const getAllBlogs = (req, res) => {
    // const blogResults = queryBlogs();
    // renderResults(blogResults);

    const key = req.query.key;
    const page = req.query.p;
    const blogsPerPage = 2;

    if (key) {
        searchBlogs(req, res, key);
    } else if (page) {
        paginateBlogResults(req, res, page, blogsPerPage);
    } else {
        Blog.find()
            .sort({ createdAt: -1 }) // sorts the blogs in descending order by createdAt
            .then((result) =>
                res.render("index", {
                    title: "All Blogs",
                    blogs: result,
                    key: "",
                })
            )
            .catch((err) => console.log(err));
    }
};

const createBlog = (req, res) => {
    const bodyContent = req.body;

    const blog = new Blog({
        title: bodyContent.title,
        snippet: bodyContent.snippet,
        body: bodyContent.body,
    });

    blog.save()
        .then(() => res.redirect("/blogs"))
        .catch((err) => console.log(err));
};

const getBlogDetails = (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
        .then((result) =>
            res.render("details", { title: "Blog Details", blog: result })
        )
        .catch((err) => {
            // console.log(err);
            res.status(404).render("404", { title: "Page not found!" });
        });
};

const deleteBlog = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: "/blogs" });
        })
        .catch((err) => console.log(err));
};

const searchBlogs = (req, res, key) => {
    Blog.find()
        .then((result) => {
            const filteredArr = result.filter((blog) => {
                const title = blog.title.toLowerCase();
                return title.includes(key.toLowerCase());
            });

            res.render("index", {
                title: "Search Results",
                key,
                blogs: filteredArr,
            });
        })
        .catch((err) => console.log(err));
};

const paginateBlogResults = (req, res, page, blogsPerPage) => {

    Blog.find()
        .skip(page * blogsPerPage)
        .limit(blogsPerPage)
        .then((result) =>
            res.render("index", {
                title: `Page ${page}`,
                blogs: result,
                key: "",
            })
        )
        .catch((err) => console.log(err));
};

module.exports = {
    getAllBlogs,
    getBlogDetails,
    createBlog,
    deleteBlog,
};
