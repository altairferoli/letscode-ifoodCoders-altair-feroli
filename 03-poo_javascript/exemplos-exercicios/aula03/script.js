//////////////////////////////////////////////////////////////////////

// ARROW FUNCTIONS

//////////////////////////////////////////////////////////////////////

console.log("////////// ARROW FUNCTIONS //////////");

// Introdução

const Media01 = (n1, n2) => {
  var media = (n1 + n2) / 2;
  return media;
};

console.log(Media01(5, 9));

// Linha única

var media = 0;

const Media02 = (n1, n2) => (media = (n1 + n2) / 2);

Media02(5, 9);

console.log(media);

// Retorno implícito

const Media03 = (n1, n2) => (n1 + n2) / 2;

console.log(Media03(5, 9));

//////////////////////////////////////////////////////////////////////

// FUNCIONAMENTO DO THIS

//////////////////////////////////////////////////////////////////////

console.log("");
console.log("////////// FUNCTIONAMENTO DO THIS //////////");

// Função tradicional

const carro01 = {
  marca: "Mitsubishi",
  modelo: "Pajero TR4",
  nomeCompleto: function () {
    return `${this.marca} ${this.modelo}`;
  },
};
console.log(carro01.nomeCompleto());

// Arrow Function [Não funciona]

const carro02 = {
  marca: "Mitsubishi",
  modelo: "Pajero TR4",
  nomeCompleto: () => {
    return `${this.marca} ${this.modelo}`;
  },
};
console.log(carro02.nomeCompleto());

//////////////////////////////////////////////////////////////////////

// STRICT MODE

//////////////////////////////////////////////////////////////////////

console.log("");
console.log("////////// STRICT MODE //////////");

("use strict");

/* Ao ser adicionado no início do código, o compilador limitará algumas
 * ações que normalmente deixaria passar, facilitando o debug e
 * melhorando a performance em geral do código.
 */

//////////////////////////////////////////////////////////////////////

// ENCAPSULAMENTO

//////////////////////////////////////////////////////////////////////

console.log("");
console.log("////////// ENCAPSULAMENTO //////////");

//Atributos públicos

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    console.log(this.apresentar());
  }
  apresentar() {
    return `Meu nome é ${this.nome} e tenho ${this.idade} anos`;
  }
}

const p1 = new Pessoa("Altair", 19);

console.log(JSON.stringify(p1));
console.log(Object.keys(p1));
console.log(Object.values(p1));

console.log("");

// Atributos privados

class PessoaPrivado {
  #nome;
  #idade;
  constructor(nome, idade, email) {
    this.#nome = nome;
    this.#idade = idade;
    this.email = email;
    console.log(this.apresentar());
  }
  get nome() {
    return this.#nome;
  }
  set nome(n) {
    this.#nome = n;
  }
  apresentar() {
    return `Meu nome é ${this.#nome}, tenho ${this.#idade} anos e meu email é ${this.email}`;
  }
  toJSON() {
    return {
      nome: this.nome,
      idade: this.#idade,
      email: this.email,
    };
  }
}

const p2 = new PessoaPrivado("Altair", 19, "emailbacana@gmail.com");

console.log(JSON.stringify(p2));
console.log(Object.keys(p2));
console.log(Object.values(p2));

p2.nome = "Feroli";
console.log(p2.apresentar());

//////////////////////////////////////////////////////////////////////

// EXERCÍCIO 01

//////////////////////////////////////////////////////////////////////

console.log("");
console.log("////////// EXERCÍCIO 01 //////////");

class Sorteio {
  constructor(participantes) {
    this.participantes = participantes;
    console.log(this.sorteiaPremio());
  }
  sorteiaPremio() {
    return `O número sorteado do participante vencedor é ${
      Math.floor(Math.random() * this.participantes) + 1
    }, parabéns!`;
  }
}

// Testes

let s01 = new Sorteio(1000);
let s02 = new Sorteio(1000);
let s03 = new Sorteio(1000);
let s04 = new Sorteio(1000);
let s05 = new Sorteio(1000);

//////////////////////////////////////////////////////////////////////

// EXERCÍCIO 02

//////////////////////////////////////////////////////////////////////

console.log("");
console.log("////////// EXERCÍCIO 02 //////////");

class Restaurante {
  constructor(cidade, delivery = false, pedidosPendentes = 0) {
    this.cidade = cidade;
    this.delivery = delivery;
    this.pedidosPendentes = pedidosPendentes;
  }
  entregaPedido(cidadeCliente) {
    if (this.delivery) {
      if (this.cidade == cidadeCliente) {
        this.pedidosPendentes++;
        return `Este restaurante oferece delivery para o seu endereço. O tempo de entrega estimado é de ${this.pedidosPendentes * 2 + 10} minutos.`;
      } else {
        return `Este restaurante não oferece delivery para o seu endereço.`;
      }
    } else {
      return `Este restaurante não oferece delivery.`;
    }
  }
}

// Testes

let churrascaria = new Restaurante("Vca", true, 13);

console.log(churrascaria.entregaPedido("Vca"));
console.log(churrascaria.entregaPedido("Ssa"));

let pizzaria = new Restaurante("Vca", false, 13);

console.log(pizzaria.entregaPedido("Vca"));
console.log(pizzaria.entregaPedido("Ssa"));