const express=require("express")
const { BlogModel } = require("../Models/blogModel")
const { auth } = require("../Middleware/auth")

const blogRoutes=express.Router()
blogRoutes.use(auth)
blogRoutes.get("/blogs",async(req,res)=>{
    try {
        const blogdata=await BlogModel.find(req.body)
        res.send({"data":blogdata})
        console.log(blogdata)
    } catch (error) {
        res.send({"error":error})
        
    }
})

blogRoutes.post("/blogs",async(req,res)=>{
    try {
        const blogdata=new BlogModel(req.body)
        await blogdata.save()
        
        res.send({"msg":"blog posted successfully"})
        console.log(blogdata)
    } catch (error) {
        res.send({"error":error})
        
    }
})

blogRoutes.delete("/blogs/:id",async(req,res)=>{
    const {id}=req.params
    try {
        let data=await BlogModel.findOne({_id:id})
        if(data.userID===req.body.userID){
            const blogdata=await BlogModel.findByIdAndDelete({_id:id})
            res.send({"msg":"blog deleted successfully"})
            console.log(blogdata)

        }
     
    } catch (error) {
        res.send({"error":error})
        
    }
})
blogRoutes.patch("/blogs/:id",async(req,res)=>{
    const {id}=req.params
    try {
        let data=await BlogModel.findOne({_id:id})
        if(data.userID===req.body.userID){
            const blogdata=await BlogModel.findByIdAndUpdate({_id:id},req.body)
         
  
            res.send({"msg":"blog edited successfully"})
            console.log(blogdata)
        }
      
    } catch (error) {
        res.send({"error":error})
        
    }
})
blogRoutes.patch("/blogs/:id/like",async(req,res)=>{
    const {id}=req.params
    const {like}=req.params
    try {
        let data=await BlogModel.findOne({_id:id})
        if(data.userID===req.body.userID){
            
            const blogdata=await BlogModel.findByIdAndUpdate({_id:id},req.body)
         
  
            res.send({"msg":"blog edited successfully"})
            console.log(blogdata)
        }
      
    } catch (error) {
        res.send({"error":error})
        
    }
})

module.exports={blogRoutes}