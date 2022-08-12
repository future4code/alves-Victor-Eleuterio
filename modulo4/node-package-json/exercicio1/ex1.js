// Exercício 1 

// a. 

// b.

const yourName = process.argv[2]
const age = process.argv[3]

// console.log(`Exercício 1.b) Olá, ${yourName}! Você tem ${age} anos`)

// c. 

const newAge = Number(age) + 7

// console.log(`Exercício 1.c) Olá, ${yourName}! Você tem ${age} anos. Em sete anos você terá ${newAge}`)

// Desafio

if (yourName && age) {
    console.log(`\u001b[36mOlá, ${yourName}! Você tem ${age} anos. Em sete anos você terá ${newAge}`)
} else {
    console.log("\u001b[31mEsperava 2 parâmetros só recebi um.")
}