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
//3.2 per fare qst generiamo una funzione che controlla i numeri nel nostro array con i numeri che il computer genera;

while (contenitoreComp.length < 16) {
  var number = generatoreNumeri();

  if (! comparatore(contenitoreComp, number)) {
      contenitoreComp.push(number);
  }
}

//creiamo la funzione per comparare gli elementi nell'array

function comparatore(array, numero) {
  var i = 0;
  while ( i < array.length) {
    if (numero === array[i]) {
        return true;
    }
    i++
  }
}
console.log(contenitoreComp);
