const express=require("express")
const { connection } = require("./db")
const { userRoute } = require("./Routes/userRoutes")
const { blogRoutes } = require("./Routes/blogRoutes")
const cors =require("cors")
const app=express()
app.use(express.json())
app.use(cors())
app.use("/api",userRoute)
app.use("/api",blogRoutes)
app.listen(8080,async()=>{
    try {
        await connection
        console.log("DB connected")
        console.log("Server Running Port at 8080")
        
    } catch (error) {
        console.log(error)
        
    }
})