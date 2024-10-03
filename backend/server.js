import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

dotenv.config()

const app = express();

app.post("/products",(req,res)=>{});



app.listen(5000, () => {
  connectDB();
  console.log("server started at http://localhost:5000");
});
