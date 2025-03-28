import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN ,
    credentials : true,
}));

app.use(express.json({limit:"16kd"})) ;// don`t over-incress limit unless you have a spacific reson 
app.use(express.urlencoded({extended : true , limit : "16kd"})) ; // urlencoded use for url limiting 
app.use(express.static("public"));
app.use(cookieParser())

export { app }