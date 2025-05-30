//2. L'utente inserisce due parole in successione, con due prompt. Il soft stampa prima la parola più cort, poi la parola più lunga.

const wordOne = prompt("Scrivi una parola");
const wordTwo = prompt("Scrivi un'altra parola");
if (wordOne.length > wordTwo.length) {
    console.log(wordTwo, wordOne);

}
else if (wordOne.length == wordTwo.length) {
    console.log("Le due parole hanno la stessa lunghezza:", wordOne, wordTwo);

}
else {
    console.log(wordOne, wordTwo);
}
