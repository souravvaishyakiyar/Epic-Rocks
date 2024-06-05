import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//  mongoose.connect("mongodb+srv://sourav:Sourav@123@mern-estate.ytbicfg.mongodb.net/?retryWrites=true&w=majority&appName=mern-estate")
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to mongodb");
})
.catch((err)=>{
    console.log(err);
})
const app=express();

app.listen(3000,()=>{
    console.log("server is running on port 3000!!!!")
})

