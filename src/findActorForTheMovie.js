const movies = require("../data/movies");

const findActorForTheMovie = (titulo) => {
  
  if(!titulo){
    return "Filme não encontrado.";
  }

const titulos = movies.find(item=> item.titulo.toUpperCase() === titulo.toUpperCase());

if (!titulos) {
  return "Filme não encontrado.";
}

return titulos.elenco.slice(0,2)
}

module.exports = {
  findActorForTheMovie
}