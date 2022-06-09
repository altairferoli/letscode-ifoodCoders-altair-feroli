console.log("=== VARIAVEIS ===")

// Javascript - Especificação -> EcmaScript
// Jun/2015 - ES5 -> var
// Jul/2015 - ES6 -> let / const

// Javascipt -> Padrão ASI = Automatic Semicolon Insert

// Tipos de Dados / Tipos de variáveis
// Javascript -> Tipagem Dinâmica
var nome = "Altair"; // string
console.log("nome:", nome, typeof nome);

let idade = 19; // number
console.log("idade:", idade, typeof idade);

let altura = 1.75;
console.log("altura:", altura, typeof altura);

const magro = true; // boolean
console.log("magro:", magro, typeof magro);

var nula = null; // null
console.log("nula:", nula, typeof nula);

var indefinida; // indefinida
console.log("indefinida:", indefinida, typeof indefinida);

// Diferenças entre var / let / const

// var -> permite redeclarar da variável
var nome = 1;
console.log("nome", nome, typeof nome);

// var -> permite reatribuir valor
nome = false;
console.log("nome", nome, typeof nome);

// let -> não permite redeclarar variável
/* let idade = 25; */ // linha inválida = SyntaxError

// let -> permite reatribuir valor
idade = 25;
console.log("idade", idade, typeof idade);

// const -> não permite redeclarar variável
/* const magro = true; */ // linha inválida = SyntaxError

// const -> não permite reatribuir valor
/* magro = true; */ // linha inválida = TypeError

