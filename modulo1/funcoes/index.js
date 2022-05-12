// Exercicios de interpretação de códigos

/* 1.

a.
10
50

b.
10
50

2.

a. A função retorna falso ou verdadeiro para "cenoura" e deixa todos os caracteres em caixa baixa.

b. i.true
    ii. true
    iii. true
*/ 

// Exercicios de escrita de código

//1.

//a.
const infoArray =["Victor", Number(18), "São Paulo", "sou estudante"]

function imprimirInfo (){
    console.log(`Eu sou ${infoArray[0]}, tenho ${infoArray[1]} anos, moro em ${infoArray[2]} e ${infoArray[3]}`)
}

imprimirInfo()

// //b.


function imprimirInfoUser(NOME, IDADE, ENDERECO, PROFISSAO){
    info1 = `Eu sou ${NOME},`
    info2 = `tenho ${IDADE} anos,`
    info3 = `moro em ${ENDERECO}`
    info4 = `e sou ${PROFISSAO}`
    
    return console.log(info1, info2, info3, info4)
}

const nomeUser = prompt("Qual seu nome?")
const idadeUser = Number(prompt("Qual sua idade?"))
const cidadeUser = prompt("Em qual cidade você mora?")
const profissaoUser = prompt("Qual sua profissão?")

imprimirInfoUser(nomeUser, idadeUser, cidadeUser, profissaoUser)

// 2.
//a.
function soma(num1, num2){
    const somar = num1 + num2
    return somar
}

console.log(soma(50, 50))

// //b.
function maior(numero1, numero2){
    const maiorOuIgual = numero1 >= numero2
    return console.log(Boolean(maiorOuIgual))
}
maior(100, 90)

// //c.
function par (numero){
    return Boolean(numero % 2 === 0 )
}
console.log(par(11))

// //d. 
function tamanho(mensagem){
    let msg = prompt("Escreva uma mensagem")
    return `Sua mensagem se tornou: ${msg.toUpperCase()} e tem ${msg.length} letras. `
    
}
console.log(tamanho())

//3.
function somar(num1, num2){
    const soma = num1 + num2
    return `Soma: ${soma}`
}
function subtrair(num1, num2){
    const sub = num1 - num2
    return `Diferença: ${sub}`
}
function multiplicar(num1, num2){
    const mult = num1 * num2
    return `Multiplicação: ${mult}`
}
function dividir(num1, num2){
    const div = num1 / num2
    return `Divisão: ${div}`
}

let numUser = Number(prompt("Escolha um número!"))
let numUser2 = Number(prompt("Agora escolha outro número"))
let numInser = `Números inseridos: ${numUser} e ${numUser2}`

console.log(`${numInser}
${somar(numUser, numUser2)}
${subtrair(numUser, numUser2)}
${multiplicar(numUser, numUser2)}
${dividir(numUser, numUser2)}`)