const { Router } = require('express');
const movieRouter = Router();
const { createMovie, findMovie, deleteMovie, updateMovie } = require('./movies.controllers');

movieRouter.post('/movies', createMovie);
movieRouter.get('/movies/:title', findMovie);
movieRouter.delete('/movies:title', deleteMovie);
movieRouter.put('/movies', updateMovie);

module.exports = movieRouter;