// 4. Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.
console.log("ciao");

const numbersUneven = [];
for (let i = 0; i < 6; i++) {
    const prompts = Number(prompt("Scrivi un numero"));
    console.log(prompts);
    if (prompts % 2 != 0) {
        numbersUneven.push(prompts);
    }
}
console.log(numbersUneven);