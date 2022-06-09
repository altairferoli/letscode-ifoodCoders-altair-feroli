console.log("===CARROS===");

const carros = [];
const precos = [];
let index = 0;
let total = 0;

let carro = {
  modelo: null,
  ano: null,
  cor: null,
  condicao: null,
  preco: null,
};

let lista = document.getElementById("lista");

function listaCarros() {
  //ENTRADAS
  carro = {
    modelo: document.getElementById("modelo").value,
    ano: document.getElementById("ano").value,
    cor: document.getElementById("cor").value,
    condicao: document.getElementById("condicao").value,
    preco: document.getElementById("preco").value,
  };
  carros.push(carro);
  precos.push(Number(carro.preco));
  index++;

  //SAÍDA
  console.table(carros);

  document.getElementById("qtdVeiculos").textContent = index;
  
  lista.innerHTML = carros.map(function (carro, index) {
    return `<tr>
    <td>${index}</td>
    <td>${carro.modelo}</td>
    <td>${carro.ano}</td>
    <td>${carro.cor}</td>
    <td>${carro.condicao}</td>
    <td>R$ ${carro.preco}</td>
    </tr>`;    
  }).join("");
  

  total = precos.reduce(function (previous, current) {
    return previous + current;    
  });
  document.getElementById("totalVeiculos").textContent = `R$ ${total}`;
  
  modelo.value =  "";
  ano.value =  "";
  condicao.value =  "Novo";
  preco.value =  "";
  
  modelo.focus();
}
