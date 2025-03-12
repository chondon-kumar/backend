import exopress from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
const app = exopress()

app.use(cors({
    origin : process.env.CORS_ORIGIN ,
    credentials : true,
}));

app.use(express.json({limit:"16kd"})) ;// don`t over-incress limit unless you have a spacific reson 
app.use(express.urlencoded({extended : true , limit : "16kd"})) ; // urlencoded use for url limiting 
app.use(exopress.static("public"));
app.use(cookieParser())

export { app }