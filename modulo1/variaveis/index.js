/* 
Exercícios de interpretação de código

1. Será impresso:
10
10 5
*/

/* 
2. Será impresso:
10
10
10
*/

/* 
3. O programa pede duas informações (Horas trabalhadas por dia e valor recebido por dia) ao usuário, pelo prompt e volta um alerta informando a divisão dessas duas informações (Valor por hora)
p = horasPorDia
t = recebePorDia
*/

// Exercícios de escrita de código

// 1.

let nome = undefined
let idade = undefined

console.log (typeof nome,idade)

// Foi impresso esse tipo, pois não foi atruibido nenhum valor.

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

console.log(nome,idade)

// Após ter um valor/informação dado(a) pelo usuário, as varáveis receberam novas atribuições.

console.log("Olá", nome,",você tem", idade, "anos")

// 2.

let estudando = undefined
let trabalhando = undefined
let descansando = undefined

estudando = prompt ("Você está estudando?")
trabalhando = prompt ("Você está trabalhando?")
descansando = prompt ("Você está descansando?")

console.log("Você está estudando? -", estudando)
console.log("Você está trabalhando? -", trabalhando)
console.log("Você está descansando? -", descansando)

// 3.

let a = 10
let b = 25
let c = undefined
c = a
a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// Desafio

let primeiroNumero = 5
let segundoNumero = 10
let soma = primeiroNumero + segundoNumero
let multiplicado = primeiroNumero * segundoNumero

console.log("O primeiro número somado ao segundo número resulta em:", soma)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplicado)