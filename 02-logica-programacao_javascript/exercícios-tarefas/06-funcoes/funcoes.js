console.log("=== FUNCOES ===");

document.write("<hr>");

// Declaração de Função Nomeada

function soma(n1=0, n2=0) {
  return n1 + n2;  
}

document.write(soma, "<br>");
document.write(soma(), "<br>");
document.write(soma(5), "<br>");
document.write(soma(5,10), "<br>");

document.write("<hr>");

// Declaração de Função Anõnima

const sum = function (n1=0, n2=0) {
  return n1 + n2;  
}

document.write(sum, "<br>");
document.write(sum(), "<br>");
document.write(sum(5), "<br>");
document.write(sum(5,10), "<br>");

document.write("<hr>");

// Arrow Function

let numbers = [0,1,2,3,4,5,6,7,8,9];

numbers = numbers.filter(value => value > 3);

document.write(numbers);

document.write("<hr>");