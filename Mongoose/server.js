const express = require("express");
const mongoose = require('mongoose');
const app = express();
const User = require("./model/user");
const Blog = require("./model/blogs");

//basepath->server file  nextpath->user.js
const userRoutes = require("./Routes/userRoutes")
app.use("/users",userRoutes);

const blogRoutes = require("./Routes/blogRoutes")
app.use("/blogs",blogRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/g14mdb').then(() => console.log('Connected!')); //return promise

app.listen(3222,()=>{
    console.log("server started");
})