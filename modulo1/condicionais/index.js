/*Exercicios de interpretação de código
1.
  a. O código pede um número para o usuário,
  que é testado se esse valor tem como resto = 0,
  com esse resultado ele imprime se o valor inserido 
  "Passou no teste" ou "Não passou no teste" com o if e else.
 
  b. Imprime "Passou no teste" para números que tem
  como resto o valor 0.

  c."Não passou no teste" vai para números que não tem como 
  resultado o valor de resto 0.
2.
  a. O código busca uma fruta que o usuário escolher 
    e volta para o usuário o valor da fruta.

  b. Será impresso "O preço da fruta Maçã é R$ 2.25"

  c. Será impresso "O preço da fruta Pêra é R$ 5" pois é necessário o 
  break para informar que o resultado está entre ele e a case.

3.
  a. A primeira linha está pedindo um valor Number para o usuário e
    guardando em uma variável const.

  b. A mensagem impressa para o número 10 será "Esse número passou no teste"
  caso o número for -10 não iria imprimir nada.

  c. Sim, a variável "mensagem" está dentro das chaves do if
  if(exemplo){
    let mensagem 
    }
    privando o acesso dos comandos externos
    (comandos que estão fora das chaves{})
*/

// Exercicos de escrita de código

//1.
const idade = Number(prompt("Qual sua idade?"))

if(idade >= 18){
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir")
}

//2.
const periodo = prompt(`Em qual periodo você estuda?
Responda apenas com 'M' para manhã, 'V' para vespertino
 ou 'N' para noturno`).toUpperCase()

if(periodo == 'M'){
    console.log("Bom Dia!")
}else if(periodo == 'V'){
    console.log("Boa Tarde!")
}else if(periodo == 'N'){
    console.log("Boa Noite!")
}else {
    console.log("Houve um erro de digitação, tente novamente usando apenas 'M', 'V' ou 'N'.")
}

//3.
switch(periodo){
    case 'M': 
        console.log("Bom Dia!")
        break
    case 'V':
        console.log("Boa Tarde!")
        break
    case 'N':
        console.log("Boa Noite!")
        break
    default:
        console.log("Houve um erro de digitação, tente novamente usando apenas 'M', 'V' ou 'N'.")
        break
}

//4. 
const qualFilme = prompt(`Qual gênero de filme vamos assistir?
fantasia, terror, comedia ou ação?`).toLowerCase()
const qualValor = Number(prompt("Qual a faixa de valor você quer pagar no ingresso?"))

if(qualValor <= 15){
    if(qualFilme === 'fantasia'){
        console.log("Bom filme!")
    }
}else {
    console.log("Escolha outro filme :( ")
}

//Desafios
//1. 
const qualLanchinho = prompt(`Qual lancnhinho você vai comprar? 
pipoca, chocolate, doces, etc`).toUpperCase()

if(qualValor <= 15){
    if(qualFilme === 'fantasia'){
        console.log("Bom filme!")
        console.log(`Aproveite o seu/sua ${qualLanchinho}`)
    }
}else {
    console.log("Escolha outro filme :( ")
}
