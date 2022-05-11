/* Exercicios de interpretação de código
 
1.

a. undefined

b. null

c. 11 

d. 3

e. (11) [3, 19, 5 ,6, 7, 8, 9, 10, 11, 12, 13]

f. 0

2. SUBI NUM ÔNIBUS EM MIRROCOS 27

*/

// Exercicios de escrita de código
// 1.

let nomeDoUsuario = prompt("Qual seu nome?")
let emailDoUsuario = prompt("Qual seu e-mail?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vindo(a), ${nomeDoUsuario}`)

// 2. 

//a.
let comidasArray = ["Pizza", "Strogonoff", "Batata frita", "Hamburguer", "Pastel"]
console.log(comidasArray)

//b.
console.log("Essas são minhas comidas preferidas:")
console.log(comidasArray[0])
console.log(comidasArray[1])
console.log(comidasArray[2])
console.log(comidasArray[3])
console.log(comidasArray[4])

//c.
// let comidaUsuario = prompt("Qual sua comida favorita?")

// console.log(comidasArray.replaceAll("Strogonoff",comidaUsuario))

// Não consegui usar o .replaceAll junto a Array


// 3.
let listaDeTarefasArray = undefined
let tarefa1 = prompt("Digite uma tarefa que você precisa realizar no seu dia")
let tarefa2 = prompt("Digite outra tarefa que você precisa realizar no seu dia")
let tarefa3 = prompt("Digite mais uma tarefa")
listaDeTarefasArray = [tarefa1, tarefa2, tarefa3]
console.log(listaDeTarefasArray)

let escolha = Number(prompt("Escolha entre suas tarefas um número de 0, 1 ou 2 para remove-la"))

Number(listaDeTarefasArray.splice (escolha,escolha))
console.log(listaDeTarefasArray)

