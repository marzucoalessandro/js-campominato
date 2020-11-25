// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

//aggiunta per provare il bonus//
//proviamo a costruire uno switch per le tre differenti situazioni di gioco.
//chiediamo un numero tra uno e tre per settare il livello di difficoltà;
//un alert indicherà il livello scelto;

var condizione = Number(prompt("inserisci un numero tra 1 e 3 per selezionare il livello di gioco ...."));

if (condizione == 1) {
  alert("hai deciso di giocare al livello facile");
} else if (condizione == 2) {
  alert("hai deciso di giocare al livello medio");
} else {
  alert("hai deciso di giocare al livello difficile");
};

//determiniamo quali sono le variabili in gioco che dovremo cambiare a seconda del livello.
//per prima cosa nella ns funzione generatrice di numeri il 100 non è più un valore fisso ma diventa una variabile numerica.
var counter;




//a questo punto il nostro switch prenderà il numero scelto e setterà le condizioni nel gioco;
switch (condizione) {
  case 1:
  counter = 50;

  break;
  case 2:
  counter = 80;

  break;
  case 3:
  counter = 100;

  break;
  default: 3
}

//dobbiamo anche cambiare il numero di iterazioni che farà il nostro ciclo:
var iter = counter - 16;




//1 creiamo una funzione che generi numeri casuali;
 function generatoreNumeri() {
   return Math.floor(Math.random() * counter) + 1;
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
for (var i = 0; i < iter; i++) {

    var domanda = Number(prompt("inserisci un numero da 0 a " + counter + " senza ripeterlo...."));


    if (compare(contenitoreComp, domanda) == true) {
      console.log(domanda + " hai preso una mina quindi hai perso");
      break;
    } else if (compare(numeriUtente, domanda) == true) {
      console.log("hai ripetuto il numero " + domanda);
      i--;
    } else if (domanda < 1 || domanda > counter){
      console.log("hai inserito un numero sbagliato");
      i--;
    } else {
      numeriUtente.push(domanda);
    }
  }
  console.log(numeriUtente);

//adesso dobbiamo tirare i risultati della ns partita;

//creiamo una nuova condizione:
  if (i > iter) {
    console.log("hai vinto!");
  } else if (i >= 0 || i <= iter) {
    console.log( "hai tirato " + i + " volte");
  }

  //creiamo una funzione per scorrere gli elementi degli array;
  function compare(array, numero) {
    for (var i = 0; i <= array.length; i++) {
      if (array[i] == numero) {
        return true;
      }
    }
    return false;
  }
