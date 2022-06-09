//////////////////////////////////////////////////////////////////////

// MÉTODOS

//////////////////////////////////////////////////////////////////////

console.log("////////// MÉTODOS //////////");

// Chamada de método

const pessoa = {
  nome: "Altair",
  idade: 19,
  cumprimentaPessoa(nome = "Usuário") {
    return console.log("Seja bem vindo " + nome);
  },
};

const mensagem = pessoa.cumprimentaPessoa("Feroli");

// Next e this

const counter = {
  count: 0,
  next: function () {
    this.count++;
  },
};

console.log(counter.count);
console.log(counter.next());
console.log(counter.next());

// Contexto global

console.log(this.window);

this.color = "purple";

console.log(window.color);

//////////////////////////////////////////////////////////////////////

//CHAMADAS EM JS

//////////////////////////////////////////////////////////////////////

console.log("");
console.log("////////// CHAMADAS EM JS //////////");

//Function invocation

function show() {
    console.log(this == window);  
};

show();
window.show();

console.log(window);

// Method invocation

let carro = {
    marca: "Mitsubishi",
    getMarca: function () {
        return this.marca;        
    }
};
let moto = {
    marca: "Kawasaki"
}
console.log(carro.getMarca());

let marcaCarro = carro.getMarca;
console.log(marcaCarro());

let marcaMoto = carro.getMarca.bind(moto);
console.log(marcaMoto());

// Constructor invocation

function Veiculo(placa, marca) {
  this.placa = placa;
  this.marca = marca;
};

Veiculo.prototype.getPlaca = function () {
  return this.placa;
};

let veiculo01 = new Veiculo("MMM-3333", "BMW");
let veiculo02 = new Veiculo("BEE-0001", "Chevrolet");

console.log(veiculo01);
console.log(veiculo02);
console.log(veiculo01.getPlaca());
console.log(veiculo02.getPlaca());

function Veiculo2(marca) {
  if (!(this instanceof Veiculo2)) {
    throw Error("Use o operador new para instanciar o objeto");
  };
  this.marca = marca;
};

let bmw = new Veiculo2("Dodge");
console.log(bmw);