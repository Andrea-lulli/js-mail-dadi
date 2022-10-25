// Mail
// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per 
//controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


//lista mail
const listaMail = ["andrea@gmail.com", "luca@gmail.com", "simone@gmail.com", "marta@gmail.com", "martina@gmail.com"];
console.log(listaMail);


//inseirie la tua mail
let mail = prompt('inserire la mail:');

//veriabile soldatino
let presenzaEmail = false;

//controllo della mail
let controlloMail = document.getElementById("controllomail");

for (let i = 0; i < listaMail.length; i++) {

  if (listaMail[i] == mail) {
    presenzaEmail = true;
  } 

  if (presenzaEmail == true) {
    controlloMail.innerHTML = `<p class="testo">La tua mail ${mail} è gia presente </p>`;
  } else {
    controlloMail.innerHTML = `<p class="testo">La tua mail ${mail} non è presente </p>`;
    
  } 
}
listaMail.push(mail)





// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia
//per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// scrivere quante partite ha vinto il giocatore
// scrivere quante partite ha vinto il computer

let vittorieG = 0

let vittorieC = 0

let winPlayer = document.getElementById("vittorieg")

let winPc = document.getElementById("vittoriec")


//genera numero random e stabilisci vincitore
function dati() {

  let giocatore = Math.floor(Math.random() * 6) + 1;
  console.log(giocatore);

  let computer = Math.floor(Math.random() * 6) + 1;
  console.log(computer);

  let esito = document.getElementById("esito");

  let esitoComputer = document.getElementById("esito-computer");

  let esitoGiocatore = document.getElementById("esito-giocatore");


  if (giocatore > computer) {

    esito.innerHTML = "Giocatore ha vinto"
    vittorieG = vittorieG + 1


  } else if (giocatore < computer) {
    esito.innerHTML = "Computer ha vinto";
    vittorieC = vittorieC + 1;


  } else {
    esito.innerHTML = "Pareggio"
  }

  esitoComputer.innerHTML = `Il numero computer è: ${computer}`;

  esitoGiocatore.innerHTML = `Il numero giocatore è: ${giocatore}`;




  // qunate partite ha vinto il giocatore

  winPlayer.innerHTML = `Vittorie totali Giocatore ${vittorieG}`;
  winPc.innerHTML = `Vittorie totali Computer ${vittorieC}`;

}










