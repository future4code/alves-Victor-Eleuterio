/*Exercicios de interpretação de código
1.
a. Matheus Nachtergaele 
Virginia Cavendish 
{canal: Globo, horario: 14h}

2.
a. {nome: Juca, idade: 3 , raca: SRD}
    {nome: Juba, idade: 3 , raca: SRD}
    {nome: Jubo, idade: 3 , raca: SRD}

b. Copia as informações de outro objeto

3.
a. false
 undefined

 b. O return definido na minhaFuncao está com "propriedade" entre[]
 por isso imprimiu "false" em backender e undefined em "altura", pois não foi atribuido nenhum valor.

*/

//Exercicios de escrita de código

//1.
//a.
const pessoa ={
    nome: "Victor",
    apelido: ["Vitinho", "Vih", "Vitu"]
}

function apresentar(objeto){

    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[2]}`)
}
apresentar(pessoa)

//b.
const pessoa2 ={
    ...pessoa,
    apelido: ["Vitão", "Vitin", "Vizin"]
}

apresentar(pessoa2)

//2.
//a.
const people = {
    nome: "Leandro",
    idade: 18,
    profissao: "Dev"
}
const people2 = {
    nome: "Victor",
    idade: 19,
    profissao: "Dev Fullsatck"
}

function infoPeople(objeto){
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]

}
console.log(infoPeople(people))
console.log(infoPeople(people2))

//3.
//a
const carrinho = []

//b.
const fruta1 ={
    nome: "Maçã",
    disponibilidade: true

}
const fruta2 ={
    nome: "Banana",
    disponibilidade: true

}

const fruta3 ={
    nome: "Maçã",
    disponibilidade: true

}


//c.
function porNoCarrinho(produto){
    return carrinho.push(produto)
}
porNoCarrinho(fruta1)
porNoCarrinho(fruta2)
porNoCarrinho(fruta3)

console.log(carrinho)

//Desafios
//1.
function infoUser(){
    const nome = prompt("Qual seu nome?")
    const idade = prompt("Qual sua idade?")
    const profissao = prompt("Qual sua profissão?")
    return `nome: ${nome}, profissão: ${profissao}, idade: ${idade}`
}


const usuario ={
    informacoes: infoUser()

}
console.log(usuario.informacoes)

//2.
function compararFilmes(movie, movie2){
    const lancamentoAntes = movie.anoDeLancamento < movie2.anoDeLancamento
    const lancamentoMesmoAno = movie.anoDeLancamento == movie2.anoDeLancamento
    return `O ${movie.nome} foi lançado antes do ${movie2.nome}? ${lancamentoAntes}
O ${movie.nome} foi lançcado no mesmo ano do ${movie2.nome}? ${lancamentoMesmoAno}`
}

const filme1= {
    nome: "Percy Jackson e o ladrão de raios",
    anoDeLancamento: 2010
}

const filme2 ={
    nome:"Invocação do Mal",
    anoDeLancamento: 2013
}
console.log(compararFilmes(filme1, filme2))

//3. Não consegui fazer.
// function estoqueSacolao(produto){
//     produto ={
//         ...fruta1 ={
//         disponibilidade: !disponibilidade }
//     }
//     return carrinho.push(produto)
// }

// estoqueSacolao(fruta1)
// estoqueSacolao(fruta2)
// estoqueSacolao(fruta3)


// console.log(carrinho)