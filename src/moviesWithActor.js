const movies = require("../data/movies");

function moviesWithActor(ator) {
  return movies.filter(movies => (movies.elenco.includes(ator)) )
}

module.exports = {
  moviesWithActor
}