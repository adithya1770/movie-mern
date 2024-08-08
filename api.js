const express =require('express');
const mongoose = require('mongoose');
const Movies = require('./models/movie.model.js');
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

app.get("/moviesapi/retrive/moviename/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const movieNameId = await Movies.findById(id);
        const movieName = movieNameId['name'];
        res.status(200).send(movieName);
    }
    catch{
        res.send(400).json({"message" : "Movie Not Found"})
    }
})

app.get('/moviesapi/retrive/:genre', async (req, res) => {
    try {
      const { genre } = req.params;
      const movies = await Movies.find({genre});
      res.status(200).send(movies);
    } 
    catch
    {
    res.status(400).json({ "message": "Movie Not Found" });
    }
});

app.post("/moviesapi/add", async (req, res) => {
    try{
        const moviesAdd = await Movies.create(req.body);
        res.status(200).json(moviesAdd)
    }
    catch(err){
        res.status(400).json({"message" : "Couldn't Add"})
    }
})

app.get("/moviesapi/retrive/byid/:id", async (req, res) => {
    try{
        const { id } =req.params;
        const moviesAddId = await Movies.findById(id);
        res.status(200).json(moviesAddId);
    }
    catch(err){
        res.status(400).json({"message" : err})
    }
})

app.get("/moviesapi/retrive/all", async (req, res) =>{
    try{
        const moviesRetriveAll = await Movies.find();
        res.status(200).json(moviesRetriveAll);
    }
    catch(err){
        res.status(400).json({"message" : "Couldn't Retrive Information"})
    }
})

app.delete("/moviesapi/delete/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const moviesDelete = await Movies.findByIdAndDelete(id);
        res.status(200).json({"message" : "Item Successfully Deleted!"});
    }
    catch(err){
        res.status(400).json({"message" : "Couldn't Delete Item"})
    }
})

app.post("/moviesapi/update/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const moviesUpdate = await Movies.findByIdAndUpdate(id, req.body);
        res.status(200).json({"message" : "Item Successfully Updated!"})
    }
    catch(err){
        res.status(400).json({"message" : "Couldn't Update Item"})
    }
})


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