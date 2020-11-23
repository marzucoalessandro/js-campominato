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

//3 adesso creiamo un ciclo che esegua la nostra funzione 16 volte e la testiamo sulla console;
for (i = 0; i < 16; i++) {
  console.log(generatoreNumeri(i));
  
}
