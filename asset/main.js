



const nomeUtente = prompt("Inserisci il tuo nome");
console.log("nomeUtente");
// document.getElementById("contenitore_target").innerHTML = nomeUtente;




const cognomeUtente = prompt("Inserisci il tuo cognome");
console.log("cognomeUtente");
// document.getElementById("contenitore_target2").innerHTML = cognomeUtente;





const coloreUtente = prompt("Inserisci il tuo colore preferito");
console.log("coloreUtente");
// document.getElementById("contenitore_target3").innerHTML = coloreUtente;



// document.getElementById("contenitore_target4").innerHTML = `${nomeUtente}${cognomeUtente}${coloreUtente}21`;
// console.log(`${nomeUtente}${cognomeUtente}${coloreUtente}`);











// METODO SENZA DUPLICAZIONE DI CODICE


let passwordUtente = `${nomeUtente}${cognomeUtente}${coloreUtente}21`;
console.log(passwordUtente);
document.getElementById("contenitore_target4").innerHTML = `${passwordUtente}`;















