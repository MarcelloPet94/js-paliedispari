/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


// qualcosa che riceva una parola
// qualcosa che legga la sua lunghezza
// leggere la parola dall'ultima lettera fino alla prima
// se il valore uscito dal capovolgimento corrisponde al valore iniziale
// la parola è palidroma


let palistring = prompt("Inserisci una parola per capire se è palidroma");

function verifyString(paliString)
{
    let noPali = [];
    let paliArr = [];
    let stringLength = paliString.length - 1;
    let nodefString;
    let defString;

    for(let count = 0; count <= stringLength; count++) {
        
        let saveNoPali = paliString[count];
        noPali.push(saveNoPali);
        nodefString = noPali.toString();

    }
    console.log(noPali);

    for(let count = stringLength; count >= 0; count--) {
        let savePali = paliString[count];
        paliArr.push(savePali);
        defString = paliArr.toString();

    }
    console.log(paliArr);

    if(nodefString === defString) 
    {
        document.write('Questa parola è palidroma');
    }
    else
    {
        document.write('Non è palidroma');
    }

}

verifyString(palistring);

