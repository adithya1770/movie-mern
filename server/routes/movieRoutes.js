const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const cors = require('cors');

router.use(cors());

// get or retrive routes

router.get('/retrive/:genre', movieController.getMovieByGenre);
router.get('/retrive/moviename/:id', movieController.getMovieNameById);
router.get('/retrive/byid/:id', movieController.getMovieById);
router.get('/retriveall', movieController.getAllMovies);

// other routes 

router.delete('/delete/:id', movieController.deleteMovie);
router.post('/add', movieController.addMovie);
router.post('/update/:id', movieController.updateMovie);

module.exports = router;