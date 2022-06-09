console.log("////////// QUESTÃO #3 //////////");

//////////////////////////////////////////////////////////////////////

// ENUNCIADO

/* Refaça o exercício da TV utilizando uma função construtora

Refaça o exercício da TV utilizando a sintaxe de classe (class).*/

//////////////////////////////////////////////////////////////////////

// Função construtora

function ConstruirTV(canal, volume, ligada) {
  this.canal = canal;
  this.volume = volume;
  this.ligada = ligada;
  this.liga = () => {
    return (this.ligada = true);
  };
  this.desliga = () => {
    return (this.ligada = false);
  };
  this.mudaDeCanal = function (i) {
    return (this.canal = i);
  };
  this.aumentaVolume = () => {
    return this.volume += 1;
  };
  this.diminuiVolume = () => {
    return this.volume -= 1;
  };
}

let tv1 = new ConstruirTV(5, 15, true);

// Classe

class TV {
  constructor(canal, volume, ligada) {
    this.canal = canal;
    this.volume = volume;
    this.ligada = ligada;
  }
  liga = function () {
    return (this.ligada = true);
  };
  desliga = function () {
    return (this.ligada = false);
  };
  mudaDeCanal = function (i) {
    return (this.canal = i);
  };
  aumentaVolume = function () {
    return this.volume += 1;
  };
  diminuiVolume = function () {
    return this.volume -+ 1;
  };
}

let tv2 = new TV(0, 0, false);

// Testes

console.log(tv1.liga());
console.log(tv1.desliga());
console.log(tv1.mudaDeCanal(13));
console.log(tv1.aumentaVolume());
console.log(tv1.diminuiVolume());

console.log("");

console.log(tv2.liga());
console.log(tv2.desliga());
console.log(tv2.mudaDeCanal(5));
console.log(tv2.aumentaVolume());
console.log(tv2.diminuiVolume());
