/*
Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let equalOdd = prompt("Pari o dispari?");
let equalOddConverted = equalOdd.toLocaleLowerCase();

let userN = parseInt(prompt("Inserisci un numero"));
console.log("Numero utente: " + userN);


function sumNumb(userN , equalOddConverted)
{ 
    let compN = Math.floor(Math.random() * 5 + 1);
    console.log("Numero random: " + compN);
    let resultOfN = userN + compN;
    document.write(resultOfN);

    if(resultOfN % 2 == 0 && equalOdd === 'pari')
    {
        document.write("<br>" + "Numero pari" + "Hai vinto");
    }
    else
    {
        document.write("<br>" + "Dispari" , "Hai perso");
    }

}




document.write(sumNumb(userN));

/*
function verifyEqualOdd(resultOfN)
{
    if(resultOfN % 2 = 0)
    {
        
    } 
}
*/