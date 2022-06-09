console.log("=== CONDICIONAIS ===");

// ENTRADA
const aluno = prompt("Digite o nome do aluno:");
const nota = prompt("Digite a nota do aluno (0.0 ~ 10.0):");

// PROCESSAMENTO

let situacao = null;

// Apenas IF
/* if (nota >= 6) {
  situacao = 'Aprovado';
} 
if (nota >=4 && nota < 6) {
  situacao = 'Recuperação'; 
} 
if (nota < 4) {
  situacao = 'Reprovado';  
}  */

// Com IF e ELSE
/* if (nota >= 6) {
  situacao = "Aprovado";
} 
else if (nota >= 4) {
  situacao = "Recuperação";
} 
else {
  situacao = "Reprovado";
} */

// Com SWITCH / CASE
switch (true) {
  case parseFloat(nota) >= 6:
    situacao = "Aprovado";
    break;
  case parseFloat(nota) < 6 && parseFloat(nota) >= 4:
    situacao = "Recuperação";
    break;
  default:
    situacao = "Reprovado";
    break;  
}

//Com SWITCH / CASE (um bom exemplo de uso)
const numMes = prompt('Digite o mês do ano(1 ~ 12):');
let nomeMes = null;
switch (numMes) {
  case '1':
    nomeMes = 'Janeiro';    
    break;
  case '2':
    nomeMes = 'Fevereiro';    
    break;
  case '3':
    nomeMes = 'Março';    
    break;
  case '4':
    nomeMes = 'Abril';    
    break;
  case '5':
    nomeMes = 'Maio';    
    break;
  case '6':
    nomeMes = 'Junho';    
    break;
  case '7':
    nomeMes = 'Julho';    
    break;
  case '8':
    nomeMes = 'Agosto';    
    break;
  case '9':
    nomeMes = 'Setembro';    
    break;
  case '10':
    nomeMes = 'Outubro';    
    break;
  case '11':
    nomeMes = 'Novembro';    
    break;
  case '12':
    nomeMes = 'Dezembro';    
    break;
  default:
    nomeMes = 'Número inválido'
    break;
}


// SAÍDA
document.write(`
  <p>Aluno: ${aluno}</p>
  <p>Nota: ${nota}</p>
  <p>Situação: ${situacao}</p>
`);
document.write(`<hr/><p>Mês: ${nomeMes}</p>`);
