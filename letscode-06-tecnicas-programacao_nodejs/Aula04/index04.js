import { once } from "events";
import fs from "fs";
import Path from "path";
import readline from "readline";

////////////////////////////// LEITURA DE PASTA //////////////////////////////

const dirPath = "A:\\Let's Code\\letscode-nodejs\\arquivos";
const filesToRead = [];

// Promise

/* 
fs.promises.readdir(dirPath).then((files) => {
  console.log(files);
}); 
*/

// Async e Await

/* 
async function readDirAsync() {
  const files = await fs.promises.readdir(dirPath);
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = Path.join(dirPath, file);
    filesToRead.push(filePath);
  }
  console.log(filesToRead);
}

readDirAsync(); 
*/

////////////////////////////// LEITURA DE ARQUIVOS //////////////////////////////

// Promise

/* 
fs.promises
  .readFile("A:\\Let's Code\\letscode-nodejs\\arquivos\\Plataformas de Cursos Gratuitos.txt", "utf8")
  .then(console.log); 
  */

// Async e Await

/* 
async function readFileAsync() {
  const content = await fs.promises.readFile(
    "A:\\Let's Code\\letscode-nodejs\\arquivos\\Plataformas de Cursos Gratuitos.txt",
    "utf8"
  );
  console.log(content);
}
readFileAsync(); 
*/

////////////////////////////// LEITURA EM SREAM //////////////////////////////

/*
const readStream = fs.createReadStream(
  "A:\\Let's Code\\letscode-nodejs\\arquivos\\Plataformas de Cursos Gratuitos.txt",
  "utf8"
);
const reader = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity,
});


reader.on("line", (line) => {
  console.log(line);
});

once(reader, "close");
*/

////////////////////////////// ESCRITA DE ARQUIVOS //////////////////////////////

/* 
const fileContent = "Eae meu brother, mande a boa\n";

fs.promises
  .writeFile("A:\\Let's Code\\letscode-nodejs\\arquivos\\Testes.txt", fileContent, "utf8")
  .then(() => console.log("Arquivo criado com sucesso"))
  .catch(console.err);

fs.promises
  .appendFile("A:\\Let's Code\\letscode-nodejs\\arquivos\\Testes.txt", fileContent, "utf8")
  .then(() => console.log("Adicionado ao arquivo com sucesso"))
  .catch(console.err);
*/

////////////////////////////// ELIMINAÇÃO DE ARQUIVOS //////////////////////////////

/* 
fs.promises.rm("A:\\Let's Code\\letscode-nodejs");
*/