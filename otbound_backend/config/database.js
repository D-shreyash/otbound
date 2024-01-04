const mongoose = require("mongoose");
require("dotenv").config();

const dbconnection = ()=>{
    return(
        mongoose.connect(process.env.DB_LOCATION)
        .then(()=>{
            console.log("database connected")
        })
        .catch((err)=>{
            console.log("issue in connetion wiht DB");
            console.log(err);
        })
    )
}

module.exports = dbconnection;