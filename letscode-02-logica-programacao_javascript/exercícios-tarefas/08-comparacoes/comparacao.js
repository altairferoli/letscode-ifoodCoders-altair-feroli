console.log("=== COMPARAÇÃO ===");

function comparar() {
  const n1 = document.getElementById("num1");
  const n2 = document.getElementById("num2");

  switch (operator.value) {
    case "==":
      console.log("--- IGUAL ---");
      document.getElementById("result").value = n1.value == n2.value;
      break;
    case "!=":
      console.log("--- DIFERENTE ---");
      document.getElementById("result").value = n1.value != n2.value;
      break;
    case "<":
      console.log("--- MENOR QUE ---");
      document.getElementById("result").value = n1.value < n2.value;
      break;
    case "<=":
      console.log("--- IGUAL OU MENOR QUE ---");
      document.getElementById("result").value = n1.value <= n2.value;
      break;
    case ">":
      console.log("--- MAIOR QUE ---");
      document.getElementById("result").value = n1.value > n2.value;
      break;
    case ">=":
      console.log("--- IGUAL OU MAIOR QUE ---");
      document.getElementById("result").value = n1.value >= n2.value;
      break;
  }
}
