console.log("===OBJETOS===");

// OS PROBLEMAS

const carro1 = ["Fox", 2015, "vermelho","usado"];
const carro2 = ["Gol", 2019, "branco","seminovo"];
const carro3 = ["Polo", 2022, "azul","novo"];

for (let i = 0; i < carro1.length; i++) {
  document.write("=> ", carro1[i], "<br>");
}
document.write("<hr/>");

for (let i = 0; i < carro2.length; i++) {
  document.write("=> ", carro2[i], "<br>");
}
document.write("<hr/>");

for (let i = 0; i < carro3.length; i++) {
  document.write("=> ", carro3[i], "<br>");
}
document.write("<hr/>");

// MATRIZ

const carros = [carro1, carro2, carro3];
console.table(carros);

for (let i = 0; i < carros.length; i++) {
  document.write("=> ", carros[i], "<br>");
}
document.write("<hr/>");

for (let i = 0; i < carros.length; i++) {
  document.write("=> ", carros[i][0], " - ", carros[i][2], "<br>");
}
document.write("<hr/>");

// OBJETO LITERAL

const carro01 = {
  modelo: "Fox",
  ano: 2015,
  cor: "vermelho",
  condicao: "usado"
};
const carro02 = {
  modelo: "Gol",
  ano: 2019,
  cor: "branco",
  condicao: "seminovo"
};
const carro03 = {
  modelo: "Polo",
  ano: 2022,
  cor: "azul",
  condicao: "novo"
};

document.write("=> ", carro01.modelo, " - ", carro01.condicao, "<br>");
document.write("=> ", carro02.modelo, " - ", carro02.condicao, "<br>");
document.write("=> ", carro03.modelo, " - ", carro03.condicao, "<br>");
document.write("<hr/>");

const listaCarros = [carro01, carro02, carro03];
console.table(listaCarros);

listaCarros.forEach(function (carro) {
  document.write("=> ", carro.modelo, " - ", carro.condicao, "<br>");
});
document.write("<hr/>");

// FILTRANDO OBJETOS

let usados = listaCarros.filter(function (carro) {
  return carro.condicao = "usado";  
});
console.table(usados);

// 

console.log("===FIM===");
