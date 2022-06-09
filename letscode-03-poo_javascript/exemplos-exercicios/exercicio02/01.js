console.log("////////// QUESTÃO #1 //////////");

//////////////////////////////////////////////////////////////////////

// ENUNCIADO

/* Crie um objeto do tipo curso que tenha os seguintes atributos:

nome
p1
p2
media
Usando o setter insira o nome do curso, p1 e p2. Para a média considere 
a seguinte condição: Se, nota da p1 for 0, retorne a mensagem: "A nota 
da p1 foi 0, não vai ser possível fazer uma média" Se, nota da p1 maior 
que 0, faça o seguinte calculo: p1 + p2 / 2

Crie um get que retorne uma mensagem informando o nome do curso e sua 
média. */

//////////////////////////////////////////////////////////////////////

const curso = {
  nome: "",
  p1: 0,
  p2: 0,
  media: 0,
  get mensagem() {
    if (this.p1 == 0) {
      return "A nota da p1 foi 0, não vai ser possível fazer uma média ";
    } else {
      this.media = (this.p1 + this.p2) / 2;
      return "A média foi " + this.media + " no curso de " + this.nome;
    }
  },
  get notaP1() {
    return this.p1;
  },
  set notaP1(i) {
    this.p1 = i;
  },
  get notaP2() {
    return this.p2;
  },
  set notaP2(i) {
    this.p2 = i;
  },
  get Media() {
    return this.media;
  },
  set Media(i) {
    this.media = i;
  },
};

// Testes

curso.nome = "Eletrõnica";
curso.p1 = 0;
curso.p2 = 5;

console.log(curso.mensagem);

curso.p1 = 10;

console.log(curso.mensagem);
