const movies = require("../data/movies");
function averageRatingByGenre(genero) {
if(!genero){
  return "O parâmetro é obrigatório.";
}
if(typeof genero !== 'string'){
return "O parâmetro tem que ser uma string.";
}
if (genero.trim() === '') {
  return "O parâmetro é obrigatório.";
}

const generos = movies.filter(movies => movies.genero.includes(genero));

if (generos.length === 0) {
  return `Não há filmes do gênero ${genero}.`
}

const totalAvaliacao = generos.reduce((accumulator, filme) => accumulator + filme.avaliacao, 0)
mediaAvaliacao = totalAvaliacao / generos.length;
numeroFormatado = mediaAvaliacao.toFixed(2);

return `A média de avaliação dos filmes do gênero ${genero} é ${numeroFormatado}.`
}

module.exports = { 
  averageRatingByGenre
}