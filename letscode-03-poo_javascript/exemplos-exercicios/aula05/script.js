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
  #pais
  constructor (nome, idade, pais, especie = "Homo Sapiens Sapiens") {
    super(especie);
    this.nome = nome;
    this.idade = idade;
    this.pais = pais;
  }
  get pais() {
    return this.pais;
  }
  set pais(pais) {
    this.#pais = pais;
  }
  imprimeDados (saudacao) {
    return `${saudacao}, ${this.nome} tem ${this.idade} anos.`;
  }
}

class Cidadao extends Pessoa {
  constructor (nome, idade, pais, cpf, rg) {
    super(nome, idade, pais);
    this.cpf = cpf;
    this.rg = rg;
  }
}
const altair = new Pessoa("Altair", 19);
console.log(altair);
console.log(altair.imprimeDados("Bom dia"));

const feroli = new Cidadao("Feroli", 19, "Brasil", "12345678910","0123456789");
console.log(feroli);
console.log(feroli.imprimeDados("Boa tarde"));

