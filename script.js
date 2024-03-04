
// Chiediamo all'utente il suo nome
const userName = prompt('Ciao dimmi il tuo nome');

// Chiediamo all'utente il suo cognome 
const userSurname = prompt('Ciao dimmi il tuo cognome');

// Chiediamo all'utente il suo colore preferito 

const userColor = prompt('Ciao dimmi il colore preferito');

// BONUS

// Chiediamo all'utente un numero

const userNumber = prompt('Dimmi il tuo numero');
console.log(userNumber);

// Converto la stringa in un numero

let userNumberAsNumeric = parseInt(userNumber);
// Somma
let sum = userNumberAsNumeric + 23;
console.log(sum)

// Scritta che esce dopo i prompt 

let userCharacter = ` ${userName} ${userSurname} ${userColor} ${sum}   `

document.getElementById('message').innerHTML = userCharacter