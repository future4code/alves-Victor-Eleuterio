function soma(num1, num2) {
  return num1 + num2
}

function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')
  console.log(mensagem)
}

function calculaAreaRetangulo() {
  let altura = Number(prompt("Digite a altura do retângulo"))
  let largura = Number(prompt("Digite a largura do retângulo"))
  let area = altura * largura
  console.log(area)
}
calculaAreaRetangulo()

function imprimeIdade() {
  let anoAtual = Number(prompt("Qual o ano atual?"))
  let anoDeNasc = Number(prompt("Qual seu ano de nascimento?"))
  console.log(anoAtual - anoDeNasc)
}
imprimeIdade()

function calculaIMC(peso, altura) {
  let imc = peso / (altura * altura)
  return imc
}
calculaIMC(Number(prompt("Qual seu peso?")), Number(prompt("Qual sua altura?")))

function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual seu e-mail?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
imprimeInformacoesUsuario()

function imprimeTresCoresFavoritas() {
  const corarray = [prompt("Escolha uma cor"), prompt("Escolha outra cor"), prompt("Escolha mais uma cor")]
  console.log(corarray)
}
imprimeTresCoresFavoritas()

function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}
retornaStringEmMaiuscula(prompt("Escreva uma frase"))

function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}
calculaIngressosEspetaculo(3000, 100)

function checaStringsMesmoTamanho(string1, string2) {
  return Boolean(string1.length === string2.length)
}
checaStringsMesmoTamanho("ola", "pao")

function retornaPrimeiroElemento(array) {
  return array[0]
}
retornaPrimeiroElemento([1, 2, 3])

function retornaUltimoElemento(array) {
  return array[array.length - 1]
}
retornaUltimoElemento([1, 2, 3])

function trocaPrimeiroEUltimo(array) {
  const array2 = array.shift()
  const array3 = array.pop()
  array.push(array2)
  array.unshift(array3)
  return array
}
trocaPrimeiroEUltimo([1, 2, 3, 4])

function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()
}
checaIgualdadeDesconsiderandoCase("Ola", "olA")


// EXERCÍCIO 13
// function checaRenovacaoRG() {
//   let anoAtual = prompt("Em que ano estamos?")
//   let anoDeNasc = prompt("Qual ano de nascimento?")
//   let anoIdent = prompt("Em que ano sua carteira de identidade foi emitida?")

//   let idade = anoAtual - anoDeNasc
//   let validade = anoAtual - anoIdent

//   const ...


// }

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}