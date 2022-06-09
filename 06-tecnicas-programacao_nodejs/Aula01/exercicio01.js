import fetch from "node-fetch";

// Promise

/* 
Essa parte eu não soube bem o que fazer pra ser honesto, pois o próprio fetch 
retorna uma Promise, então atribuir o fetch à variável traria
o mesmo resultado, sem a necessidade do new Promise.
*/

const pokemonPromise = new Promise((resolve) => {
  const pokemons = fetch("https://ghibliapi.herokuapp.com/people");
  resolve(pokemons);
});

pokemonPromise
  .then((response) => {
    return response.json();
  })
  .then((people) => {
    console.log("\nUsando Promise \n");
    const names1 = people.map((person) => person.name).join("\n");
    console.log(names1);
  });

// Async e Await

async function GetPokemonsAsync() {
  const pokemonList = fetch("https://ghibliapi.herokuapp.com/people");
  await pokemonList
    .then((response) => {
      return response.json();
    })
    .then((people) => {
      console.log("\nUsando Async e Await\n");
      const names2 = people.map((person) => person.name).join("\n");
      console.log(names2);
    });
}

GetPokemonsAsync();
