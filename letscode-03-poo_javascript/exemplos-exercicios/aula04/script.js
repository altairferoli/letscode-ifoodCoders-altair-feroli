//////////////////////////////////////////////////////////////////////

// HERANÇAS

//////////////////////////////////////////////////////////////////////

console.log("////////// HERANÇAS //////////");

// Introdução

class Animal {
  constructor (especie) {
    this.especie = especie;
  }
}

class Pessoa extends Animal {
  constructor (nome, idade, especie = "Homo Sapiens Sapiens") {
    super(especie);
    this.nome = nome;
    this.idade = idade;
  }
  imprimeDados (saudacao) {
    return `${saudacao}, ${this.nome} tem ${this.idade} anos.`;
  }
}

class Cidadao extends Pessoa {
  constructor (nome, idade, cpf, rg) {
    super(nome, idade);
    this.cpf = cpf;
    this.rg = rg;
  }
}
const altair = new Pessoa("Altair", 19);
console.log(altair);

const feroli = new Cidadao("Feroli", 19, "12345678910","0123456789");
console.log(feroli);
