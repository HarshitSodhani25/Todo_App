const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()
const mongodbURL = process.env.MONGODB_URL;
const port = process.env.PORT;
const {taskRouter} = require("./routes/taskRoute.js");

const server = express();

//Middlewares
server.use(express.json());
server.use(cors());
server.use("/task", taskRouter);

const main = async ()=>{
    await mongoose.connect(mongodbURL);
    console.log("mongoose connected successfully");
}
main().catch(err=> console.log(err));

server.listen(port, ()=>{
    console.log(`Server started successfully`);
})