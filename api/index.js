import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json())

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true
}
app.use(cors(corsOptions));

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("Connection to Database Successfull");
}).catch((e)=>{
  console.error("An error occured: -->", e);
});

app.use("/api/auth", authRouter)

app.listen(5000, ()=>{
  console.log("Server is running on port 5000");
});

app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode, 
    message
  });
 });

 app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode, 
    message
  });
 });
