console.log("////////// QUESTÃO #2 //////////");

//////////////////////////////////////////////////////////////////////

// ENUNCIADO

/* Faça uma classe SmartWatch com a contagem dos passos diários de uma 
pessoa (pedômetro). Garanta utilizando acessors (get/set) que os passos 
apenas podem ser incrementados e um método resetOnMidnight() que reseta 
os passos para 0.*/

//////////////////////////////////////////////////////////////////////

class SmartWatch {
  #pedometro
  constructor(passos = 0) {
    this.#pedometro = passos;
  }
  get pedometro() {
    return this.#pedometro;
  }
  set pedometro(novo) {
    if (this.#pedometro > novo) {
        console.error("Erro: a contagem do pedômetro pode ser apenas incrementada");
    } else {
        this.#pedometro = novo;
    }
  }
  resetOnMidnight() {
    this.#pedometro = 0;
  }
}

// Testes

let altair = new SmartWatch(5);

altair.Pedometro = 5;
console.log(altair);

altair.resetOnMidnight();
console.log(altair);