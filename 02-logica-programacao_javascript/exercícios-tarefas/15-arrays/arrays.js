console.log("===ARRAYS===");

// ANTI-PADRÃO

const carro1 = "Fox";
const carro2 = "Gol";
const carro3 = "Polo";

// ARRAY LITERAL

const carros = ["Fox", "Gol", "Polo"];

// contexto.comando();

carros.push("Virtus", "Jetta"); //adiciona ao final do array
carros.unshift("Up"); //adiciona no início do array e move os demais para posições posteriores
carros.splice(3, 1); //remove a quantidade determinada de items a partir da posição determinada
carros.splice(3, 1, "Polo"); //substitui o item na posição determinada pelo valor especificado
carros.splice(4, 0, "Virtus", "Saveiro"); //adiciona na posição determinada e move os seguintes para posições posterior
carros.pop(); //remove item do final
carros.shift(); //remove item do início
carros.sort(); //ordena items
carros.reverse(); //inverte items

// ESCREVENDO O ARRAY

// Implementação anti-padrão

document.write("- ", carros[0], "<br>");
document.write("- ", carros[1], "<br>");
document.write("- ", carros[2], "<br>");
document.write("- ", carros[3], "<br>");
document.write("<hr>");

// Implementação com base em repetição

for (let i = 0; i < carros.length; i++) {
  document.write("- ", carros[i], "<br>");
}
document.write("<hr>");

// FOR EACH

// Implementação 1 - Função nomeada

function pegaCarro(modelo, pos) {
  document.write(pos, "=> ", modelo, "<br>");
}

carros.forEach(pegaCarro);
document.write("<hr>");

// Implementação 2 - Função anônima

carros.forEach(function (value, index) {
  document.write(index, "=> ", value, "<br>");
});
document.write("<hr>");

console.log(carros);
console.log(carros.length);

//////////////////////////////////////////////////////////////////////

let numeros = [3, 7, 13, 17, 31, 37, 73];

numeros.forEach(function (value, index) {
  document.write(index, " - ", value, "<br>");
});

document.write("<hr>");

// FILTER

numeros = numeros.filter(function (value, index) {
  return value > 20;
});

numeros.forEach(function (value, index) {
  document.write(index, " - ", value, "<br>");
});

document.write("<hr>");

// MAP

numeros = [3, 7, 13, 17, 31, 37, 73];

numeros = numeros.map(function (value, index) {
  return value * 10;
});

numeros.forEach(function (value, index) {
  document.write(index, " - ", value, "<br>");
});

document.write("<hr>");

// REDUCE

numeros = [3, 7, 13, 17, 31, 37, 73];

document.write(
  numeros.reduce(function(previous, current, index, array) {
    document.write("prev: ", previous, "  Cur: ", current, "<br>");
    return previous + current;
  }, 0)
  ); 
  
document.write("<hr>");

// FIM

console.log("===FIM===");
