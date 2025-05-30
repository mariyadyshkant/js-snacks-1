// 5. Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

const N = Number(prompt("Scrivi un numero"));
const cuboN = []
for (let i = 1; i <= N; i++) {
    const prompts = i ** 3;
    cuboN.push(prompts);
}
console.log(cuboN);
