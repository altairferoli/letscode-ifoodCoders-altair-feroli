/* 
Não consegui descobrir o motivo, mas se eu importo readline no escopo global, 
ele não funciona ali dentro, não importa o que eu faça, então tive que importar 
usando CommonJS
*/

const createPrompt = (readline) => (replies) => (key, question) => {
  return new Promise((resolve) => {
    const terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    terminal.question(question, (reply) => {
      terminal.close();
      resolve({ ...replies, [key]: reply });
    });
  });
};

const prompt = createPrompt(require("readline"));

module.exports = prompt;
