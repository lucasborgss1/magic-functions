const movies = require("../data/movies");

const nolanFilms = (movies) => {
 return movies.filter(({diretor}) => diretor == 'Christopher Nolan' ).sort((a, b) => b.avaliacao - a.avaliacao)
}

module.exports = {
  nolanFilms
}