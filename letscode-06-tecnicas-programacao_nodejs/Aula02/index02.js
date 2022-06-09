const prompt = require("./promptTool");

Promise.resolve({})
    .then((replies) => prompt(replies)("Nome", "Digite o seu nome: "))
    .then((replies) => prompt(replies)("Sobrenome", "Digite o seu sobrenome: "))
    .then((replies) => prompt(replies)("Idade", "Digite a sua idade: "))
    .then((replies) => prompt(replies)("Email", "Digite o seu email: "))
    .then(console.log);

