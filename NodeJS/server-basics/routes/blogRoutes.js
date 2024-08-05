const express = require("express");
const {
    getAllBlogs,
    getBlogDetails,
    createBlog,
    deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlogDetails);
router.post("/", createBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
