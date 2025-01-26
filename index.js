import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from './routes/user.route.js'
dotenv.config({});
const app = express();


// app.get("/home",(req,res)=>{
//     return res.status(200).json({
//         message:"I am a backend",
//         success: true
//     })
// });



//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption = {
    origin: 'http://localhost:5173', // Correct the URL here
    credentials: true,
};


app.use(cors(corsOption));

// api's
app.use("/api/v1/user", userRoute);


const port = process.env.PORT || 3000;
app.listen(port, (req,res)=>{
    connectDB();
    console.log(`server Ru at port ${port}`);
})