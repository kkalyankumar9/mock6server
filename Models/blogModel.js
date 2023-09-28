const mongoose=require("mongoose")

const blogSchema=new mongoose.Schema(
    {
        username:String,
        title:String,
        content:String,
        category:String,
        date:String,
        likes:Number,
        comments:[],
        userID:String

  

},{versionKey:false})

const BlogModel=new mongoose.model("Blog",blogSchema)

module.exports={BlogModel}