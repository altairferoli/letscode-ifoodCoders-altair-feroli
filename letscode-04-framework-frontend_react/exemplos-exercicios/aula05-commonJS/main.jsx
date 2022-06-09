const [boneco, foice, ...array_numeros] = require("./modules/boneco.jsx");
const {Jogador, Categorias_Disponiveis: cat_disp} = require("./modules/jogador.jsx")

console.log("////////// MAIN.JS //////////");
console.log("Olá, tudo bem?");

console.log(boneco);
console.log(foice);
console.log(array_numeros);
console.log(...array_numeros);

function somatorio(...array_numeros) {
  let total = 0;
  for (let i = 0; i < array_numeros.length; i++) {
    total += array_numeros[i];
  }
  return total;
}

console.log(somatorio(1,2,3,4,5,6,7,8,9,10));

console.log(new Jogador("Altair Feroli", "emailbacana@gmail.com", "games" ));

console.log(cat_disp());