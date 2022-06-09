console.log("===CARROS===");

let modelo = null;
let ano = null;
let cor = null;
let condicao = null;

const carros = [];
let index = 0;

let carro = {
  modelo: null,
  ano: null,
  cor: null,
  condicao: null,
};

let lista = document.getElementById("lista");

function listaCarros() {
  //ENTRADAS
  modelo = document.getElementById("modelo");
  ano = document.getElementById("ano");
  cor = document.getElementById("cor");
  condicao = document.getElementById("condicao");
  
  //PROCESSAMENTO
  carro = {
    modelo: modelo.value,
    ano: ano.value,
    cor: cor.value,
    condicao: condicao.value,
  };
  carros.push(carro);
  index++;

  //SAÍDA
  console.table(carros);
  document.getElementById("qtdVeiculos").textContent = index;
  lista.innerHTML = carros.map(function (carro) {
    return `<tr>
    <td>${carro.modelo}</td>
    <td>${carro.ano}</td>
    <td>${carro.cor}</td>
    <td>${carro.condicao}</td>
    </tr>`;    
  }).join("");

  modelo.value =  "";
  ano.value =  "";
  cor.value =  "";
  condicao.value =  "novo";
  
  modelo.focus();
}
