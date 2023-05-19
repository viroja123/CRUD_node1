const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app= express();
const PORT = 5000;
const morgan = require('morgan');
const URL = "mongodb://0.0.0.0:27017";

app.get('/', function(req, res){
    res.send("routes");
})

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));


mongoose.connect(URL,{ dbName:"CRUD_node",useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
        console.log("connected to database");
    })



app.listen(PORT,()=>{
    console.log("server are listen");
})

