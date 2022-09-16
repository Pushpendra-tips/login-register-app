import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/myLoginRegisterDB',{
},()=>{console.log('DB connected')});

//Routes
app.post("/login",(req,res)=>{
  res.send("My API Login")  
})
app.post("/register",(req,res)=>{
const {name,email,password} = req.body
User.findOne({email:email}, (err,user)=>{
    if(user){
        res.send({message:"User already registered"})
    }else{
        const user = new User({
            name,
            email,
            password
            })
            user.save((err)=>{
                if(err){
                res.send(err)
                }else{
                    res.send({message:"SuccesFully Registered"})
                }
            })
    }
})
})
app.listen(5000,()=>{
    console.log("Server is listening on port 5000")   
})
const useschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})
const User = new mongoose.model("User", useschema)