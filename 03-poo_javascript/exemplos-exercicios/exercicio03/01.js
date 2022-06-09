console.log("////////// QUESTÃO 1 //////////");

//////////////////////////////////////////////////////////////////////

// ENUNCIADO

/*Faça uma classe Perfil que tem as seguintes informações: nome, avatar 
(foto de perfil) e tema. Utilize acessors (get/set) para garantir que o 
tema só pode ser "light" ou "dark" e que a foto de perfil deve ser uma 
url (iniciada com http ou https). */

//////////////////////////////////////////////////////////////////////

class Perfil {
  #avatar
  #tema
  #temasValidos = ["dark", "light"];
  constructor(nome, avatar = "", tema = "") {
    this.nome = nome;
    this.tema = tema;
    this.avatar = avatar;
  }
  get tema() {
    return this.#tema;
  }
  set tema(temaEscolhido) {
    if (this.#temasValidos.includes(temaEscolhido)) {
      this.#tema = temaEscolhido;
    } else {
      console.error("Erro: Tema escolhido inválido");
    }
  }
  get avatar() {
    return this.#avatar;
  }
  set avatar(avatarEscolhido) {
    if (avatarEscolhido.startsWith("http")) {
      this.#avatar = avatarEscolhido;
    } else {
      console.error("Erro: Link inválido");
    }
  }
}

// Testes

let altair = new Perfil("Altair", "https://criticalhits.com.br/wp-content/uploads/2021/03/assassins-creed-valhalla-altair-roupa.jpg", "dark");
console.log(altair);

altair.Tema = "light";
console.log(altair);