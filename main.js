// Mail
// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per 
//controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia 
//per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// scrivere quante partite ha vinto il giocatore
// scrivere quante partite ha vinto il computer
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


const listaMail = ["andrea@gmail.com", "luca@gmail.com", "simone@gmail.com", "marta@gmail.com", "martina@gmail.com"];


let mail = prompt('inserire la mail:');

let controlloMail = document.getElementById("controllomail");

for (let i = 0; i < listaMail.length; i++) {


  if (listaMail[0] == mail) {
    console.log("presente");
    controlloMail.innerHTML = `<p class="testo">La tua mail ${mail} è gia presente </p>`;
  } else {
    console.log(" non presente");
    controlloMail.innerHTML = `<p class="testo">La tua mail ${mail} non è presente </p>`;
  }

}



