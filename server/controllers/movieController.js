const Movies = require('../models/movie.model');

getMovieNameById = async (req, res) => {
    try {
        const { id } = req.params;
        const movieNameId = await Movies.findById(id);
        const movieName = movieNameId['name'];
        res.status(200).send(movieName);
    } catch (error) {
        res.status(400).json({"message": "Movie Not Found"});
    }
};

getMovieByGenre = async (req, res) => {
    try {
        const { genre } = req.params;
        const movies = await Movies.find({genre});
        res.status(200).send(movies);
      } 
      catch
      {
      res.status(400).json({ "message": "Movie Not Found" });
      }
}

addMovies = async ( req, res) => { 
    try{
        const moviesAdd = await Movies.create(req.body);
        res.status(200).json(moviesAdd)
    }
    catch(err){
        res.status(400).json({"message" : "Couldn't Add"})
    }
}

getMovieById = async (req, res) => {
    try{
        const { id } =req.params;
        const moviesAddId = await Movies.findById(id);
        res.status(200).json(moviesAddId);
    }
    catch(err){
        res.status(400).json({"message" : err})
    }
}

getAllMovies = async (req, res) => {
    try{
        const moviesRetriveAll = await Movies.find();
        res.status(200).json(moviesRetriveAll);
    }
    catch(err){
        res.status(400).json({"message" : "Couldn't Retrive Information"})
    }
}

deleteMovie = async (req, res) => {
    try{
        const { id } = req.params;
        const moviesDelete = await Movies.findByIdAndDelete(id);
        res.status(200).json({"message" : "Item Successfully Deleted!"});
    }
    catch(err){
        res.status(400).json({"message" : "Couldn't Delete Item"})
    }
}

updateMovie = async (req, res) => {
    try{
        const { id } = req.params;
        const moviesUpdate = await Movies.findByIdAndUpdate(id, req.body);
        res.status(200).json({"message" : "Item Successfully Updated!"})
    }
    catch(err){
        res.status(400).json({"message" : "Couldn't Update Item"})
    }
}

module.exports = { getMovieNameById, getMovieByGenre, addMovies, getMovieById, getAllMovies, deleteMovie, updateMovie };