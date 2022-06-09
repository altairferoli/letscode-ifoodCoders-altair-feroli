//////////////////////////////////////////////////////////////////////

// TRY CATCH FINALLY

//////////////////////////////////////////////////////////////////////

console.log("////////// TRY CATCH FINALLY //////////");

// Introdução

function QualquerCoisa() {
  let num = 1;
  return num.toUpperCase();
}
function QualquerFuncao() {
  console.log("Essa funciona");
}

try {
  QualquerCoisa();
} catch (error) {
  console.log(error);
  console.log(error.message);
  console.log(error.name);
} finally {
  console.log("Final try-catch 1");
}

try {
  QualquerFuncao();
} catch (err) {
  console.log(err);
  console.log(err.message);
  console.log(err.name);
} finally {
  console.log("Final try-catch 2");
}

//////////////////////////////////////////////////////////////////////

// THROW

//////////////////////////////////////////////////////////////////////

console.log("");
console.log("////////// THROW //////////");

// Introdução

function ValidaString(nome) {
  try {
    if (typeof nome != "string") {
      throw new TypeError("Valor inserido tem que ser uma string");
    } else {
      console.log(`Olá ${nome}`);
    }
  } catch (error) {
    console.log(error);
  }
}

ValidaString(7);