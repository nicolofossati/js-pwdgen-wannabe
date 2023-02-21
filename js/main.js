/* CONSEGNA
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

const input_name = prompt("Insert your name.");

const input_surname = prompt("Insert your surname.");

const input_color = prompt("What's your favourite color?");

const custom_password = `${input_name}${input_surname}${input_color}23`;

document.getElementById('password').innerHTML = `Your custom password is: ${custom_password}`;