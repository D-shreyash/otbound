const express = require("express");
const dbconnection = require("./config/database");
const cors = require("cors");


const app = express();

app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello");
})

const userRoute = require("./routes/route");

app.use("",userRoute);

app.listen(3000,()=>{
    console.log("server started");
})

dbconnection();