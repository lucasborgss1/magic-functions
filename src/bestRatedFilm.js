const movies = require("../data/movies");

const bestRatedFilm = (movies) => {
  let melhorAvaliacao = movies[0];

  movies.forEach(movies => {
    if (movies.avaliacao > melhorAvaliacao.avaliacao) {
      melhorAvaliacao = movies;
    }
  });
  return melhorAvaliacao;
}

module.exports = {
  bestRatedFilm
}