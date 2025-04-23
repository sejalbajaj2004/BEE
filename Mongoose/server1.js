const express = require("express");
const mongoose = require('mongoose');
const app = express();

const Blog = require("./model/blogs");


// Read all blogs
app.get("/blogs", async (req, res) => {
    let allBlogs = await Blog.find();
    res.send(allBlogs);
});

// Read one blog
app.get("/blogs/:id", async (req, res) => {
    let { id } = req.params;
    let oneBlog = await Blog.findById(id);
    res.send(oneBlog);
});

// Add Blog
app.post("/blogs", async (req, res) => {
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
app.delete("/blogs/:id", async (req, res) => {
    let { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.send("Blog deleted");
});

// Update a blog
app.put("/blogs/:id", async (req, res) => {
    let { id } = req.params;
    let { title, content, author } = req.body;
    let updateBlog = await Blog.findById(id);

    updateBlog.title = title;
    updateBlog.content = content;
    updateBlog.author = author;
    await updateBlog.save();

    res.send("Blog updated");
});


mongoose.connect('mongodb://127.0.0.1:27017/g14mdb').then(() => console.log('Connected to MongoDB!'));

app.listen(4225, () => {
    console.log("Server started");
});
