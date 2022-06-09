console.log("===RECEBENDO NÚMEROS===");

let num = 1;

while (num != 0) {
  num = prompt("Digite um número para mostrar, ou 0 para encerrar o programa:");
  if (num != 0) {
    document.write(num, " ");
  }
}

console.log("===FIM===");
