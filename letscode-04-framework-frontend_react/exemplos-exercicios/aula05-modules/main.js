import ArrayBoneco, { boneco, foice} from "./modules/boneco.js";
import ObjJogador, { Jogador, Categorias_Disponiveis as cat_disp} from "./modules/jogador.js";

console.log("////////// MAIN.JS //////////");


console.log(boneco);
console.log(foice);
console.log(ArrayBoneco);

console.log(new Jogador("Altair Feroli", "emailbacana@gmail.com", "games" ));
console.log(cat_disp());
console.log(ObjJogador.Categorias_Disponiveis());