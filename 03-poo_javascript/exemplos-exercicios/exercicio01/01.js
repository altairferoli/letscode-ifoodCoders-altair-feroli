console.log("////////// QUESTÃO #1 //////////");

//////////////////////////////////////////////////////////////////////

// ENUNCIADO

/* Crie um objeto de nome aluno e adicione as seguintes propriedades:

nome, matricula e idade.

Crie neste mesmo objeto aluno, uma função que receba como parâmetro 
o curso do aluno,

o parâmetro deverá ter um default, adicione esse parâmetro recebido 
em uma propriedade do objeto aluno.

Retorne o objeto aluno ANTES da chamada da função.

Retorne o objeto aluno APÓS a chamada da função */

//////////////////////////////////////////////////////////////////////

const aluno = {
    Nome: "Altair Feroli",
    Matricula: 20173101001,
    Idade: 19,
    addCurso(curso = "Indefinido") {
        aluno.Curso = curso;
    }
};

console.table(aluno);

aluno.addCurso("Eletrônica");

console.table(aluno);

