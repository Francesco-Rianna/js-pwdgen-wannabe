
// Chiediamo all'utente il suo nome
const userName = prompt('Ciao dimmi il tuo nome');

// Chiediamo all'utente il suo cognome 
const userSurname = prompt('Ciao dimmi il tuo cognome');

// Chiediamo all'utente il suo colore preferito 

const userColor = prompt('Ciao dimmi il colore preferito');

// Scritta che esce dopo i prompt 

let userCharacter = ` ${userName} ${userSurname} ${userColor} 23  `

document.getElementById('message').innerHTML = userCharacter