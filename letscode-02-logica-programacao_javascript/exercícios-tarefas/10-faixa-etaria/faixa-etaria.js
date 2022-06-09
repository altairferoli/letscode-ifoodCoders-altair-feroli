console.log("=== FAIXA ETÁRIA ===");

function analise() {
  // ENTRADAS
  const num1 = parseInt(document.getElementById("num").value);
  console.log("num1", num1, typeof num1);

  // PROCESSAMENTO
  let faixa = null;

  if (num1 >= 60) {
    faixa = "idoso(a)";
  } else if (num1 >= 18) {
    faixa = "adulto(a)";
  } else if (num1 >= 13) {
    faixa = "adolescente";
  } else if (num1 >= 0) {
    faixa = "criança";
  } else {
    faixa = "Idade inválida!";
  }

  // SAÍDA
  switch (faixa) {
    case "Idade inválida!":
      document.getElementById("result").value = faixa;
      break;
    default:
      document.getElementById("result").value = `Você é ${faixa}!`;
      break;
  }
}
