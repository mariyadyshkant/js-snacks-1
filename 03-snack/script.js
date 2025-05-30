// Il soft deve chiedere per 10 volte all'utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

const nOne = Number(prompt("Scrivi un numero"));
const nTwo = Number(prompt("Scrivi un numero"));
const nThree = Number(prompt("Scrivi un numero"));
const nFour = Number(prompt("Scrivi un numero"));
const nFive = Number(prompt("Scrivi un numero"));
const nSix = Number(prompt("Scrivi un numero"));
const nSeven = Number(prompt("Scrivi un numero"));
const nEight = Number(prompt("Scrivi un numero"));
const numberNine = Number(prompt("Scrivi un numero"));
const nTen = Number(prompt("Scrivi un numero"));

const numbers = [nOne, nTwo, nThree, nFour, nFive, nSix, nSeven, nEight, numberNine, nTen];
console.log(numbers);
let somma = 0;

for (let i = 0; i < numbers.length; i++) {
    somma += numbers[i];
}
console.log(somma);

