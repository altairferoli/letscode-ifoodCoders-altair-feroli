console.log("////////// QUESTÃO #3 //////////");

//////////////////////////////////////////////////////////////////////

// ENUNCIADO

/* Construa uma classe Veiculo que tem como propriedades rodas (1 a n), 
usaCombustivel (true/false), uma classe Carro (tipoDecombustivel: 
'gasolina', 'álcool', 'flex') que herda de Veiculo e Bicicleta (infantil: 
true/false - tem que ter mais que 2 rodas) que também herda as 
características de Veiculo. */

//////////////////////////////////////////////////////////////////////

class Veiculo {
  #rodas
  constructor (rodas = 1, usaCombustivel = false) {
    this.Rodas = rodas;
    this.usaCombustivel = usaCombustivel;
  }
  get Rodas() {
    return this.#rodas;
  }
  set Rodas(num) {
    if (this.hasOwnProperty("infantil") && num < 2) {
      console.error("Erro: uma bicicleta precisa ter ao menos duas rodas");
      this.#rodas = undefined;
    } else if (num < 1) {
        console.error("Erro: o veículo precisa ter ao menos uma roda");
    } else {
        this.#rodas = num;
    }
  }
}

class Carro extends Veiculo {
  #tipoDecombustivel
  #combustiveis = ["gasolina", "álcool", "flex"]
  constructor (tipoDecombustivel, rodas, usaCombustivel) {
    super(rodas, usaCombustivel);
    this.tipoDecombustivel = tipoDecombustivel;
  }
  get tipoDecombustivel() {
    return this.#tipoDecombustivel;
  }
  set tipoDecombustivel(combustivelEscolhido) {
    if (this.#combustiveis.includes(combustivelEscolhido)) {
      this.#tipoDecombustivel = combustivelEscolhido;
    } else {
      console.error("Erro: Tipo de Combustivel escolhido inválido");
    }
  }
}

class Bicicleta extends Veiculo {
  constructor (infantil = false, rodas, usaCombustivel) {
    super(rodas, usaCombustivel);
    this.infantil = infantil;
    this.Rodas = rodas;
  }
}

// Testes

let moto = new Veiculo(2, true);
console.log(moto);

let prancha = new Veiculo(0, false);
console.log(prancha);

let sedan = new Carro("flex", 4, true);
console.log(sedan);

let bicicleta = new Bicicleta(false, 1, false);
console.log(bicicleta); 