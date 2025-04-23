const mongoose = require("mongoose");
let userSchema  = new mongoose.Schema({
    title : String,
    content : {
        type:String
    } ,
    author :{
        type:String,
        require:true
    },
    date :{
        type : Date,
        default : Date.now()
    }
})

mongoose.model("Blogs",userSchema)

module.exports=mongoose.model("Blogs",userSchema);