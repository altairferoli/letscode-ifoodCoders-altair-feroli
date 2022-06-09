console.log("=== CALCULADORA ===");

function somar() {
  console.log("CLICK");

  const n1 = document.getElementById("num1").value;
  const n2 = document.getElementById("num2").value;

  let soma = parseFloat(n1) + parseFloat(n2);

  if (soma >= 0 || soma <= 0){
    document.getElementById("result").value = soma;
  } else {
    soma = 0;
    document.getElementById("result").value = soma;
  }  
}
