console.log("===CARROS===");

let nome = null;
let index = 0;
const lista = [];

let veiculos = document.getElementById("listaVeiculos");

function carros() {
  //PROCESSAMENTO
  nome = document.getElementById("nomeVeiculo");
  lista.push(nome.value);
  index++;

  //SAÍDA
  nome.focus();
  console.log(lista);
  document.getElementById("qtdVeiculos").textContent = index;
  if (lista.length >= 10) {
    lista.forEach(function() {
      veiculos.innerHTML = lista.join("<br>");      
    });
  }
}
