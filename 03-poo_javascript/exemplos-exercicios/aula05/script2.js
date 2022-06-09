//////////////////////////////////////////////////////////////////////

// ENCAPSULAMENTO

//////////////////////////////////////////////////////////////////////

console.log("////////// ENCAPSULAMENTO //////////");

// Introdução

class Pessoa {
  constructor (nome, idade, endereço) {
    this.nome = nome;
    this.idade = idade;
    this.endereço = endereço;
  }
  cumprimentaPessoa = () => `Olá ${this.nome}`
}

class PessoaFisica extends Pessoa {
  constructor (nome, idade, endereço, rg) {
    super(nome, idade, endereço);
    this.rg = rg;
  }
  cumprimentaPessoa = () => `Olá ${this.nome}, PF portador do RG: ${this.rg}`
}

let pessoa01 = new Pessoa("Altair", 19, "Rua dos bobos, 0");
console.log(pessoa01.cumprimentaPessoa());
 
let pessoa02 = new PessoaFisica("Altair", 19, "Rua dos bobos, 0", "0123456789");
console.log(pessoa02.cumprimentaPessoa());