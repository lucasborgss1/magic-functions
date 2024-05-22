const movies = require("../data/movies");


const getAllTitles = (movies) => {
 if (!movies || movies.lenght === 0) {
  return [];
 }

 return movies
 .map(({titulo})=> titulo)
}


module.exports = {
  getAllTitles
}