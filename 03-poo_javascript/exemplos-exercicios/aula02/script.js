//////////////////////////////////////////////////////////////////////

// GET E SET

//////////////////////////////////////////////////////////////////////

console.log("////////// GET E SET //////////");

// Introdução

var variavel = {
  valor: 0,
  conversor: "",
  get moeda() {
    return "O valor é de R$" + this.valor.toFixed(2).replace(".", ",");
  },
  get num() {
    return this.valor;
  },
  set num(i) {
    this.valor = i;
  },
  get conversao() {
    if (this.conversor == "peso") {
      return 0.046 * this.valor;
    }
  },
};

variavel.num = 150;
variavel.conversor = "peso";

console.log(variavel.moeda);
console.log(variavel.conversao);

// Exercício Get e Set

const carro = {
  cor: "",
  marca: "",
  get mensagem() {
    return "O carro é da marca " + this.marca + " e da cor " + this.cor;
  },
  get Cor() {
    return this.cor;
  },
  set Cor(i) {
    this.cor = i;
  },
  get Marca() {
    return this.marca;
  },
  set Marca(i) {
    this.marca = i;
  },
};

carro.cor = "Branco";
carro.marca = "Mitsubishi";

console.log(carro.mensagem);

//////////////////////////////////////////////////////////////////////

// INTRODUÇÃO ÀS CLASSES

//////////////////////////////////////////////////////////////////////

console.log("");
console.log("////////// INTRODUÇÃO ÀS CLASSES //////////");

// Function Expression

function fex01() {}

// Function Declaration

var fex02 = function () {};

// Exemplo

function ContruirPessoa(nome, idade, email) {
  this.nome = nome;
  this.idade = idade;
  this.email = email;
  this.toString = () => {
    return (
      "Meu nome é " + this.nome + ", tenho " + this.idade + " anos e meu email é " + this.email
    );
  };
}

let altair = new ContruirPessoa("Altair", 19, "emailbacana@gmail.com");
console.log(altair);
console.log(altair.toString());
console.log(altair.idade.toString());

// Função construtora => Classe

class Pessoa {
  constructor(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }
  get dobraIdade() {
    return this.idade * 2;
  }
  calculaIdade = function (atual, nasc) {
    return atual - nasc + " anos";
  };
}

let alessandra = new Pessoa("Alessandra", 44, "emailbacana@hotmail.com");
console.log(alessandra);
console.log(alessandra.dobraIdade);
console.log(alessandra.calculaIdade(2022, 1977));

//////////////////////////////////////////////////////////////////////

// EXTENDS E SUPER

//////////////////////////////////////////////////////////////////////

console.log("");
console.log("////////// EXTENDS E SUPER //////////");

// Classe pai

class ave {
  constructor(especie, cor) {
    (this.especie = especie), (this.cor = cor);
  }
}

let galinha = new ave("galinha", "branca");
console.log(galinha);

// Classe filho

class passaro extends ave {
  constructor(especie, cor, voa) {
    super(especie, cor);
    this.voa = voa;
  }
}

let pombo = new passaro("pombo", "cinza", true);
console.log(pombo);

// Extends para objeto pré-contruído

class dataModificada extends Date {
  constructor() {
    super();
  }
  getFormatteDate() {
    let meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return this.getDate() + "-" + meses[this.getMonth()] + "-" + this.getFullYear();
  }
}

let d = new dataModificada();
let f = new Date();
console.log(f.getDate());
console.log(d.getFormatteDate());
