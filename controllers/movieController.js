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

module.exports = { getMovieNameById };