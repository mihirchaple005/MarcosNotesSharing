import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
//import cors from 'cors';
import connectDB from "./db/db";

dotenv.config(); // env configuration
const app=express(); // app initialisation

connectDB();     // establishing connection with compass 
app.use(express.json())
app.use(morgan('dev'))

// for initialising the port 
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log("Server starts operation");
});

// for getting the request from the port 
app.get("/",(req,res)=>{
    res.status(200).send("Server-Backend is listening the port");
});
//app.use(cors()); // app using core 

