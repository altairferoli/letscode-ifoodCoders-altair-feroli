console.log("////////// QUESTÃO #1 //////////");

//////////////////////////////////////////////////////////////////////

// ENUNCIADO

/*Crie uma classe CNH que tenha como propriedades país e idade que, 
por padrão, deve ser maior ou igual a 18, 16 se for igual a US ou CA 
e 21 se corresponder a CH ou RU. Se o país for BR deve também ser 
informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE). */

//////////////////////////////////////////////////////////////////////

class CNH {
  constructor(pais, idade, categoria) {
    this.pais = pais;
    this.idade = idade;
    this.categoria = categoria;
    console.log(this.validar(pais, idade, categoria));
  }
  validar (pais, idade, categoria) {
    switch (pais) {
      case "BR":
        if (idade >= 18) {
          switch (categoria) {
            case "A": case "B": case "C": case "D": case "E": case "AB": case "AC": case "AD": case "AE":
              return "CNH válida";
              break;
            case undefined:
              return "CNH inválida: informe a categoria";
              break;
            default:
              return "CNH inválida: categoria não existe";
              break;
          }
        } else {
          return "CNH inválida: idade precisa ser igual ou maior que 18 anos";
        }
        break;
      case "US": case "CA":
        if (idade >= 16) {
          return "CNH válida";
        } else {
          return "CNH inválida: idade precisa ser igual ou maior que 16 anos";
        }
        break;
      case "CH": case "RU":
        if (idade >= 21) {
          return "CNH válida";
        } else {
          return "CNH inválida: idade precisa ser igual ou maior que 21 anos";
        }
        break;
      default:
        return "CNH inválida: país não conhecido pela base de dados";
        break;
    }
  };
}

// Testes

let cnh00 = new CNH("BA", 18, "AB");
let cnh01 = new CNH("BR", 18,"AB");
let cnh02 = new CNH("BR", 17,"AB");
let cnh03 = new CNH("BR", 18,"F");
let cnh04 = new CNH("BR", 18);
let cnh05 = new CNH("US", 16);
let cnh06 = new CNH("CA", 16);
let cnh07 = new CNH("CA", 15);
let cnh08 = new CNH("CH", 21);
let cnh09 = new CNH("RU", 21);
let cnh10 = new CNH("RU", 20);

