const express = require('express');
const mongoose = require('mongoose');
const router = require ('./Routes/route')
const cors = require("cors")

const app = express();
app.use(express.urlencoded({extended: true})); // form
app.use(express.json()); 
app.use(cors())
const corsOption = {
    origin:process.env.FRONTED_URL
}

//connect to mongodb
const dbURI = process.env.DB_URL;
mongoose.connect(dbURI)
    .then(() =>{
        app.listen(5173)
        console.log('connected to db');
    })
    .catch((err) => console.log(err));

// routes
app.use('/api/workouts',router);