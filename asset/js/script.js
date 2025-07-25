// Les conditions

// exo 1

// si exo1 est egale a 33 alors vous me faites un log qui affiche bordeaux, sinon vous affichez Paris

// === est egalité stricte (typevalue)
// == est égalité plus faible/souple (value)

let exo1 = "33";
// if = si
if(exo1 == 33) {
    console.log("bordeaux");
// else = sinon
}else{
    console.log("paris");
    
}

// exo 2

// vous allez me comparer 2 variables (a et b), qui contiennent des integers,
//  si a > b afficher a est plus que b, faites pareil pour a < b et pour a = b

const a = 20;
const b = 20;

if (a > b) {
    console.log("a > b");

} else if ("a < b") {
    console.log("a < b");

} else {
    console.log("a = b");

}


// exo 3

// Vous allez vérifier le contenue d'une variable que l'ont va appeler pair, 
// si le nombre est pair vous afficherez dans un log "true", sinon vous afficherez "false".

const pair = 10;
// le % c'est modulo c'est le reste de la division
if (pair % 2 === 0) {
    console.log(true);
}else {
    console.log(false);
}

// exo 4

// vous allez verifier si le contenue d'une variable username contient la string olivier.
// si elle ne contient pas olivier alors on renvois "welcome"
// exo a tester
// let username = "olivier";

// if (username != olivier) {
//     console.log("welcom"); 
// }

// exo pokemon
// on refuse les username olivier
// on refuse les types pokemon
// on accepte les olivier de lvl pokemon
const username = "olivier";
const level = "pokemon"
// premiere version
if (username == "olivier" && level === "pokemon") {
    console.log("accepted");
}else if (username == "olivier" || level == "pokemon") {
    console.log("notaccepted");
}else {
    console.log("accepted");
}
// deuxieme version
if (username !== "olivier" && level !== "pokemon" || username == "olivier" && level === "pokemon"){
    console.log("accepted");
}else{
    console.log("notaccepted");
    
}

// bonus 
// 1 Afficher "tarif reduit" si user = student ou que l'heure est entre 22h et 05h sinon afficher "tarif plein"
// 2 Un client peut avoir 20% de reduction sur ses achats si c'est son anniversaire ou qu'il a un solde (ses depense)de plus de 1000e
// 3 Affiche "ok" si "x" est positive et "y" est pair ou "x" est positif et "z" est entre 5 et 10



// exo 1

// variable avec l'etudiant ou pas et les horaires qui definissent les tarif plein ou reduit
const user = "student";
const time22 = 22;
const time5 = 5;
let hour = 4;
// si l'utilisateur est etudiant ou que le tarif soit superieur egale a 22h ou inferieur a 5h le tarif sera reduit ou plein
if(user === "student" || hour >= 22 || hour < 5){ 
    console.log("tarif reduit");
} else {
    console.log("tarif plein");
}
    
// exo 2







