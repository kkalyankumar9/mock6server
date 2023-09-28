const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://kkalyan:kalyan@cluster0.iisergf.mongodb.net/mock6?retryWrites=true&w=majority")
module.exports={connection}