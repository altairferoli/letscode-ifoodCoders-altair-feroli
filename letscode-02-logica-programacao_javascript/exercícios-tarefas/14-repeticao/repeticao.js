console.log("===ASTERISCOS===");

// ASTERISCOS EM LINHA

for (let i = 0; i < 10; i++) {
  document.write("* ");
}

document.write("<hr/>");

// ASTERISCOS EM LINHAS E COLUNAS

for (let i = 0; i < 5; i++) {
  for (let n = 0; n < 10; n++) {
    document.write("*");
  }
  document.write("<br>");
}

document.write("<hr/>");

// ASTERICOS QUE AUMENTAM A CADA LINHA

for (let i = 1; i <= 10; i++) {
  for (let n = 0; n < i; n++) {
    document.write("*");
  }
  document.write("<br>");
}

document.write("<hr/>");

// V DE ASTERISCOS

let extern = 0;
let intern = 0;
let space = "&nbsp";

for (let i = 19; i >= 0; i -= 2) {
  intern = i;
  extern = (19 - i) / 2;

  document.write(space.repeat(extern), "*", space.repeat(intern), "*", "<br>");
}
document.write(space.repeat(extern + 1), "*");

document.write("<hr/>");

console.log("===FIM===");
