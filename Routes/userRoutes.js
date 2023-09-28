const express=require("express")
const { UserModel } = require("../Models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt=require("bcrypt")
const { auth } = require("../Middleware/auth")
const userRoute=express.Router()


userRoute.post("/register",async(req,res)=>{
    const {username,avatar,email,password}=req.body
    try {
        const data=await UserModel.find({email})
        if(data.length){
            return res.send({"Msg":"User Already Signup please Login!!"})
        }else{
            bcrypt.hash(password, 2, async(err, hash) =>{
                if(err){
                    res.send({"err":err})
                }else{
                  const userdata=new UserModel({username,avatar,email,password:hash})
                  await userdata.save()
                  res.send({"Msg":"User Registered succussfully.."})
                }
            
            })
        }
    } catch (error) {
        res.send({"error":error})
        
    }

})

userRoute.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password, (err, result)=> {
                if(result){
                    var token = jwt.sign({ userID:user._id,username:user.username }, 'mock6');
                    res.send({"Msg":"User Login succussfully..",token:token})
                    console.log(token)

                }else{
                    res.send({"err":err})
                }
                // result == true
            });

        }else{
            res.send({"error":"Please check email once.."})
        }

        
    } catch (error) {
        res.send({"error":error})
    }

})



module.exports={userRoute}