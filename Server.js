const express=require('express');
const app=express();
const Router=require('./Router/Route');
const connectDB=require('./Database/dbconnect');
const dotenv=require('dotenv');
const cors=require('cors')

connectDB()
dotenv.config()

app.use(express.json());
app.use(cors())
app.use("/",Router,(req,res)=>{
    res.json("hello success")
})


const port=process.env.port || 9001
app.listen(port,()=>console.log(`server is running ${port}`));
