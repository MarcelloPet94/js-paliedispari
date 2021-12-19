/*
Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/







function sumNumb(userN)
{ 

    let compN = Math.floor(Math.random() * 5 + 1);
    console.log("Numero utente: " + userN);
    console.log("Numero computer: " + compN);
    let resultOfN = userN + compN;

    if(resultOfN % 2 == 0)
    {
        let pari = 'pari' 
        return pari;
        
    }
    else
    {
        let dispari = 'dispari' 
        return dispari;
        
    }

}

let userN = parseInt(prompt("inserisci numero"));
let evOd = prompt("Pari o dispari");
console.log('Hai scelto: ' + evOd);


if(sumNumb(userN) == evOd)
{
    document.write("win");
}
else
{
    document.write("lose");
}











