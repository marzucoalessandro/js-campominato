// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


//1 creiamo una funzione che generi numeri casuali;
 function generatoreNumeri() {
   return Math.floor(Math.random() * 100) + 1;
 };




 //2 creaimo un array vuoto per contenere i numeri che genera il computer;
  var contenitoreComp = [];

//3 creiamo un ciclo while per generare 16 numeri con delle condizioni:
//3.1 se il numero generato è già presente nel ns array lo scartiamo.

while (contenitoreComp.length < 16) {
  var number = generatoreNumeri();

  if (contenitoreComp.indexOf(number) == -1) {
    contenitoreComp.push(number);
  }
}
console.log(contenitoreComp);

//adesso dobbiamo creare un nuovo array che sia il contenitore dei ns numeri.

var numeriUtente = [];

//creiamo un ciclo per chiedere al giocatore di inserire 100-16 numeri:
//all'interno creiamo un if con le varie condizioni del gioco;
for (var i = 0; i < 84; i++) {

    var domanda = Number(prompt("inserisci un numero da 0 a 100 senza ripeterlo mai altrimenti perdi"));


    if (compare(contenitoreComp, domanda) == true) {
      console.log(domanda + " hai preso una mina quindi hai perso");
      break;
    } else if (compare(numeriUtente, domanda) == true) {
      console.log("hai ripetuto il numero " + domanda);
      i--;
    } else if (domanda < 1 || domanda > 100){
      console.log("hai inserito un numero sbagliato");
      i--;
    } else {
      numeriUtente.push(domanda);
    }
  }
  console.log(numeriUtente);

//adesso dobbiamo tirare i risultati della ns partita;
console.log( "hai tirato " + i + " volte");






//creiamo una funzione per scorrere gli elementi degli array;
function compare(array, numero) {
  for (var i = 0; i <= array.length; i++) {
    if (array[i] == numero) {
      return true;
    }
  }
  return false;
}































//   if (! comparatore(contenitoreComp, number)) {
//       contenitoreComp.push(number);
//   }
// }

//creiamo la funzione per comparare gli elementi nell'array

// function comparatore(array, numero) {
//   var i = 0;
//   while ( i < array.length) {
//     if (numero === array[i]) {
//         return true;
//     }
//     i++
//   }
// }
// console.log(contenitoreComp);

//abbiamo adesso i 16 numeri del nostro array;

//adesso ne creeremo uno per contenere i nostri numeri;
