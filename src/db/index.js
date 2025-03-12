import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async () => {
    try {
      const connectionIntanse =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

      console.log(`\n Mongodb database Connnected ..DB Host : ${connectionIntanse.connection.host}`)
      console.log(`\n DB name : ${connectionIntanse.connection.name}`);
      console.log(`\n DB port: ${connectionIntanse.connection.port }`);
    }
    catch (error){
        console.log("Database connection failed", error);
        process.exit(1)
        
    }
}

export default connectDB