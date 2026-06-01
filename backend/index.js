require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

const app = express();

app.listen(3000, ()=>{
    console.log("app started");
    mongoose.connect(uri);
    console.log("DB connected");
});