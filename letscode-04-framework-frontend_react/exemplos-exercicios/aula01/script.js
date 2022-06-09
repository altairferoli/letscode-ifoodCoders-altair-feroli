//////////////////////////////////////////////////////////////////////

// INTRODUÇÃO AO REACT

//////////////////////////////////////////////////////////////////////

console.log("////////// INTRODUÇÃO AO REACT //////////");

// Classe e Objeto

class carroClasse {
  constructor() {}
}

new carroClasse();

// Orientado a objetos

const carro1 = {
  cilindros: 4,
  ligar: (ligado = false) => {
    carro1.ligado = ligado;
  },
};

carro1.ligar(true);
console.log(carro1.ligado);

//////////////////////////////////////////////////////////////////////

// PARADIGMA FUNCIONAL

//////////////////////////////////////////////////////////////////////

console.log("");
console.log("////////// PARADIGMA FUNCIONAL //////////");

// Não fazer

let num1 = 0;

const Soma1 = (soma) => (num1 += soma);

console.log(Soma1(10));

// Fazer

const num2 = 0;

const Soma2 = (soma) => num2 + soma;

console.log(Soma2(10));

//////////////////////////////////////////////////////////////////////

// STATELESS E RECURSIVIDADE

//////////////////////////////////////////////////////////////////////

console.log("");
console.log("////////// STATELESS //////////");

// Fibonacci

const Somar = (x, y) => x + y;

const CalcularFibonacci = (contador) => {
  let resultado = [0, 1];
  for (let i = 2; i < contador; i++) {
    const valorSomado = Somar(resultado[i - 2], resultado[i - 1]);
    resultado.push(valorSomado);
  }
  return resultado;
};

console.log(CalcularFibonacci(10));

// Refatorando com recursão

const CalcularValorFibonacci = (pos) =>
  pos < 1 ? 0 : pos <= 2 ? 1 : CalcularValorFibonacci(pos - 2) + CalcularValorFibonacci(pos - 1);

console.log(CalcularValorFibonacci(10));

const ObterSeqFibonacci = (contador) => {
  return [...Array(contador)].map((valor, index) => CalcularValorFibonacci(index));
};

console.log(ObterSeqFibonacci(10));

// Fatorial

const fatorial = (num) =>
  num < 0 ? "Não existe fatorial de número negativo" : num < 2 ? 1 : num * fatorial(num - 1);

console.log(fatorial(7));

//////////////////////////////////////////////////////////////////////

// PUREZA

//////////////////////////////////////////////////////////////////////

console.log("");
console.log("////////// PUREZA //////////");

// Impura

const UsandoPI1 = (lado) => Math.PI * lado * lado;
console.log(UsandoPI1(2));

// Pura

const UsandoPI2 = (pi, lado) => pi * lado * lado;
console.log(UsandoPI2(3.14, 2));

//////////////////////////////////////////////////////////////////////

// SHARED STATE

//////////////////////////////////////////////////////////////////////

console.log("");
console.log("////////// SHARED STATE //////////");

// Introdução

const PI = 3.14;

const CalcularCircunferencia = (raio) => PI * raio ** 2;

console.log(CalcularCircunferencia(10));

//////////////////////////////////////////////////////////////////////

// PRIMEIRA CLASSE

//////////////////////////////////////////////////////////////////////

console.log("");
console.log("////////// PRIMEIRA CLASSE //////////");

// Atribuível à variáveis

const Saudacao1 = () => "Tenha um bom dia";
console.log(Saudacao1());

const Saudacao2 = function () {
  return Saudacao1();
};
console.log(Saudacao2());

// Passável como parâmetro

function Nome1() {
  return "Altair";
}
console.log(Nome1("Altair"));

function Saudacao4(func) {
  return `Tenha um bom dia ${func()}`;
}
console.log(Saudacao4(Nome1));

// Retornável como resultado

function Saudacao4Code() {
  return Saudacao4;
}
console.log(Saudacao4Code());

//////////////////////////////////////////////////////////////////////

// ALTA ORDEM

//////////////////////////////////////////////////////////////////////

console.log("");
console.log("////////// ALTA ORDEM //////////");

// Recebe outras funções como argumentos
 
function Saudacao5(Func) {
  return Func();
}
console.log(Saudacao5(Saudacao4Code));

// Retorna funções

function Saudacao6(nome) {
  return () => `Tenha um bom dia, ${nome}`;
}
console.log(Saudacao6("Altair"));
