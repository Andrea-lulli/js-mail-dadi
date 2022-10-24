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

listaMail.push(mail)

//controllo della mail
let controlloMail = document.getElementById("controllomail");

for (let i = 0; i < listaMail.length; i++) {

  if (listaMail[0] == mail) {
    controlloMail.innerHTML = `<p class="testo">La tua mail ${mail} è gia presente </p>`;
  } else {
    controlloMail.innerHTML = `<p class="testo">La tua mail ${mail} non è presente </p>`;

  }

}



// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia
//per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// scrivere quante partite ha vinto il giocatore
// scrivere quante partite ha vinto il computer


//genera numero random e stabilisci vincitore
let giocatore = Math.floor(Math.random() * 6) + 1;
console.log(giocatore);

let computer = Math.floor(Math.random() * 6) + 1;
console.log(computer);

let esito = document.getElementById("esito");

if (giocatore > computer) {

  esito.innerHTML = "Giocatore ha vinto"

} else if (giocatore < computer) {
  esito.innerHTML = "Computer ha vinto"
} else {
  esito.innerHTML = "Pareggio"
}


// qunate partite ha vinto il giocatore







