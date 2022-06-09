console.log("////////// QUESTÃO #2 //////////");

//////////////////////////////////////////////////////////////////////

// ENUNCIADO

/* Faça um objeto TV com as propriedades canal, volume e ligada e 
métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.*/

//////////////////////////////////////////////////////////////////////

const tv = {
    canal: 0,
    volume: 0,
    ligada: false,    
    liga: function () {
        return this.ligada = true;
    },
    desliga: function () {
        return this.ligada = false;
    },
    mudaDeCanal: function (i) {
        return this.canal = i;
    },
    aumentaVolume: function () {
        return this.volume += 1;
    },
    diminuiVolume: function () {
        return this.volume -= 1;
    },
  };

  // Testes
  
  console.log(tv.liga());
  console.log(tv.desliga());
  console.log(tv.mudaDeCanal(5));
  console.log(tv.aumentaVolume());
  console.log(tv.diminuiVolume());