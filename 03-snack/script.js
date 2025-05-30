// Il soft deve chiedere per 10 volte all'utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
const numbers = [];
for (let i = 0; i <= 10; i++) {
    const prompts = Number(prompt("Scrivi un numero"));
    numbers.push(prompts);
}
console.log(numbers);


for (let i = 0; i < numbers.length; i++) {
    somma += numbers[i];
}
console.log(somma);

