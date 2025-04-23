const express = require("express");
const router = express.Router();
//router is small application like app
//all functions can be used except listen

//adduser
router.post("/",async(req,res)=>{
    let (name , email , password) = req.body;
    let newUser = new user({
        name :name,
        email:email,
        password:password
    })
    await newUser.save(); //it is asyn so make it syn
    res.send("user added")
    
})

//read all users
router.get("/",async(req,res)=>{
    let alluser = await User.find();
    res.send(alluser);
})

//read one user
router.get("/:id",async(req,res)=>{
    let id = req.params;
    let oneUser = await User.findById(id);
    res.send(oneUser);
})

//delete one user
router.delete("/:id",async(req,res)=>{
    let id = req.params;
    await User.findByIdAndDelete(id);
    res.send("user deleted");
})

//route to update a user
router.put("/:id",async(req,res)=>{
   let {id} = req.params;
   let{name,email,passowrd} = req.body;
   let update = await User.findById(id);
   //    {
   //     name : "asdf"
   //    }
   updateUser.name = name;
   updateUser.email = email;
   updateUser.password = password;
   await updateUser.save();
   res.send("user update");
})

module.exports=router


