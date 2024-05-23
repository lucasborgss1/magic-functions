const movies = require("../data/movies");

const filmsAvailable = (movies) => {
return movies.filter(({disponivel})=> disponivel == true).map(({titulo})=> titulo)
}

module.exports = {
  filmsAvailable
}