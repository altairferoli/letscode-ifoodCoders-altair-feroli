console.log("////////// QUESTÃO #3 //////////");

//////////////////////////////////////////////////////////////////////

// ENUNCIADO

/* Crie uma função construtora, para criar um "Aluno".

Deverá conter as seguintes propriedades: nome, idade, email, matricula, 
curso.

Instancie o Aluno e printe o resultado.

Utilizando a estrutura de aluno, adicione uma função que retorne o curso 
do aluno através do prototype da função.

Invoque a função e printe o resultado */

//////////////////////////////////////////////////////////////////////

function Aluno(Nome, Idade, Email, Matricula, Curso) {
  this.Nome = Nome,
  this.Idade = Idade,
  this.Email = Email,
  this.Matricula = Matricula,
  this.Curso = Curso;
}

let aluno01 = new Aluno("Altair", 19, "emailbacana@gmail.com", 20173101001, "Eletrônica");
console.table(aluno01);
Aluno.prototype.getCurso = function () {
  return this.Curso;
};
console.log(aluno01.getCurso());
