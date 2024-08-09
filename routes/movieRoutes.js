const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/retrive/moviename/:id', movieController.getMovieNameById);

module.exports = router;