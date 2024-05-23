const movies = require("../data/movies");

function countGenres(movies) {

  if (movies.length === 0) {
    return {};
  }

  return movies.reduce((accumulator, movies)=>{
if (movies.genero && movies.genero.length > 0) {
  movies.genero.forEach(genero => {
    accumulator[genero] = (accumulator[genero] || 0) +1
  });
}
return accumulator;
}, {});

}

module.exports = {
  countGenres
}
