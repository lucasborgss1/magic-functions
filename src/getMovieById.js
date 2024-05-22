const movies = require("../data/movies");

function getMovieById(id) {
  return movies.find((movies) => (movies.id) === id)
}

module.exports = {
  getMovieById
}