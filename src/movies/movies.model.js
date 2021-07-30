const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    actor: {
        type: String,
    },
    genre: {
        type: String,
        required: true,
    },
    watched: {
        type: Boolean,
        required: true,
        defaul: false,
    },
    rating: {
        type: Number,
    },
});

const Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;