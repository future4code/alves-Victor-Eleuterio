// Exercícios de interpretação de código

/* 1.

a. false

b. false

c. true

d. boolean

2. Será impresso o primeiroNumero e o segundoNumero juntos. 
Ex:
primeiroNumero = 5
segundoNumero = 5

console.log(soma)
55

3.
    let primeiroNumero = Number (prompt ("Digite um numero!"))
    let segundoNumero = Number (prompt ("Digite outro numero!"))

    const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

// Exercícios de escrita de código

// 1.

    let idade = Number(prompt("Qual sua idade?"))
    let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)"))

    let idadeMaior = idade > idadeAmigo
    let idadeDiferenca = idadeAmigo - idade
console.log("Sua idade é maior do que a do seu melhor amigo(a)?", idadeMaior)
console.log("Diferença entre a sua idade e a idade do seu melhor amigo(a):", idadeDiferenca )

// 2

let numeroPar = Number (prompt("Insira um numero par"))
let resultado = Number (numeroPar % 2)

console.log("Resto da divisão:",resultado)

// c.Todos os resultados são 0 pois não existe resto para divisão de numero par para 2

// d.O resultado sempre da 1

// 3. 

    let idadeAnos = Number(prompt("Qual sua idade?"))
    let idadeMeses = idadeAnos * 12
    let idadeDias = idadeMeses * 365
    let idadeHoras = idadeDias * 24

console.log("Sua idade é:", idadeAnos,"Sua idade em meses é:",
idadeMeses, "Sua idade em dias é:", idadeDias,
 "Sua idade em horas é:", idadeHoras )

 // 4.
    let numero1 = Number(prompt("Escolha um numero"))
    let numero2 = Number(prompt("Agora, escolha outro numero"))

    let resultado2 = numero1 > numero2  
    let resultado3 = numero1 === numero2
    let resultado4 = numero1 % numero2 == 0
    let resultado5 = numero2 % numero1 == 0


console.log("O primeiro numero é maior que segundo?",Boolean (resultado2))
console.log("O primeiro numero é igual ao segundo?", Boolean (resultado3))
console.log("O primeiro numero é divisível pelo segundo?", Boolean (resultado4))
console.log("O segundo numero é divisível pelo primeiro?",Boolean (resultado5))