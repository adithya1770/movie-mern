const express =require('express');
const mongoose = require('mongoose');
const Movies = require('./models/movie.model.js');
const movieRoutes = require("./routes/movieRoutes.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    try{
        res.send({"message" : "Welcome to Movies API"});
    }
    catch(err){
        res.json({"message" : err});
    }
})

app.use('/moviesapi', movieRoutes);

mongoose.connect("mongodb+srv://adithyaps929:adi123@apidb.axg7o.mongodb.net/?retryWrites=true&w=majority&appName=ApiDB")
.then(() => {
    console.log("Connected to the Database");
    app.listen(5000, () => {
        console.log("Connected to the Server")
    })
    
})
.catch(() => {
    console.log("Server Crashed...")
})