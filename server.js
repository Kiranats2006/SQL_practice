const express=require('express');
const mysql=require('mysql2');
require('dotenv').config();
const app=express();
const PORT = 3000;
const db=mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT 
})
db.connect(err=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("Connected to mySQL database!")
})
app.get("/", (req,res)=>{
    res.send("MySQL-Express connection successfull");
})
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})