
// import part

import express from "express"
import mongoose from "mongoose"

// server create and running
const app=new express();
const PORT=3030;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT} 🚀 `)
})

mongoose.connect("mongodb://localhost:27017");

const db=mongoose.connection;
db.on("open",()=>{
    console.log("Database connection is successfull ✅");
});
db.on("error",()=>{
    console.log("Failed connection ❌");
});

// create a new book

app.post("/book",(req,res)=>{
    const{title,author,price,rating}=req.body;

    const newBook= {
        id:Math.random()*10,
        title:title,
        author:author,
        price:price,
    };
    books.push(newBook);
    res.send(books);
});
