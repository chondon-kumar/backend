// require ('dotenv').config({path: './env'});
import connectDB from "./db/index.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config()


connectDB()
.then(() => {
    const port = process.env.PORT || 8000 ;
    app.on("error",() => {
        console.log(`database to express connection error `, error)
    })
    app.listen(port,() => {
        console.log(`this server is running on Port ${port}`);
    })
})
.catch((error) => {
    console.log("database connection errror to express",error);
    
})






















// This code is bacis database connection setting
/*

import { DB_NAME } from "./constant.js";
import express from "express";
const app = express();

;(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

       app.on("error", (error) => {
            console.log("Express can not to Database ", error);
            throw error;        
       })
       app.listen(process.env.PORT,() => {
        console.log(`this server is running port ${process.env.PORT}`);
        
       })
    } catch(error){
        console.log(error);
        throw (error)
        
    }
}) ()
*/
