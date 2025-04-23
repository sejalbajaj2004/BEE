const express = require("express");
const router = express.Router();

// Read all blogs
app.get("/", async (req, res) => {
    let allBlogs = await Blog.find();
    res.send(allBlogs);
});

// Read one blog
app.get("/:id", async (req, res) => {
    let { id } = req.params;
    let oneBlog = await Blog.findById(id);
    res.send(oneBlog);
});

// Add Blog
app.post("/", async (req, res) => {
    let { title, content, author } = req.body;
    let newBlog = new Blog({
        title: title,
        content: content,
        author: author
    });
    await newBlog.save();
    res.send("Blog added");
});


// Delete a blog
app.delete("/:id", async (req, res) => {
    let { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.send("Blog deleted");
});

// Update a blog
app.put("/:id", async (req, res) => {
    let { id } = req.params;
    let { title, content, author } = req.body;
    let updateBlog = await Blog.findById(id);

    updateBlog.title = title;
    updateBlog.content = content;
    updateBlog.author = author;
    await updateBlog.save();

    res.send("Blog updated");
});

module.exports=router