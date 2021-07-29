const Movies = require("./movies.model");

exports.createMovie = async (req, res) => {
  try {
    const movie = new Movies(req.body);
    const savedMovie = await movie.save();
    res
      .status(200)
      .send({ title: savedMovie, message: "Movie created in database" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.findMovie = async (req, res) => {
    try {
        const movie = req.params.title;
        const targetMovie = await Movies.findOne({ title: movie});
        res.send(200).send({ user: targetMovie})
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.deleteMovie = async (req, res) => {
    try {
        const movie = req.params.title;
            const deletedMovie = await Movies.findOneAndDelete({title: movie});
            res.status(200).send({ user: deletedMovie, message: "Movie deleted" })
    } catch (error) {
        res.staus(500).send(error);
    }  
};

exports.updateMovie = async (req, res) => {
    try {
        const movie = req.body.title;
        const watched = req.body.watched
        const rating = req.body.rating;
        const movieUpdate = await Movies.updateOne({title: movie, watched: watched, rating: rating});
        res.status(200).send({ movie: movieUpdate, message: "Movie updated"})
    } catch (error) {
        res.status(500).send(error)
    }
};