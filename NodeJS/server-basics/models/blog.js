const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema defines the structure
const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        snippet: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // Options, this will automatically generate time stamps for each blog created
);

// Model surrounds the schema and provides a interface to communicate with the document
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
