//a
const minhaString: string = "String"
// const minhaString: string = 10 

// Res: retorna um erro "O tipo 'number' não pode ser atribuído ao tipo 'string'."
console.log("a)retorna um erro 'O tipo 'number' não pode ser atribuído ao tipo 'string'.'")

//b 

// const meuNumero: number = 50
const meuNumero: number | string = 5

console.log("b) Utilizamos o | (OU) para difinir mais de um valor a uma variável")

//c & d

enum cores {
    vermelha = "vermelha",
    laranja = "laranja",
    amarela = "amarela",
    verde = "verde",
    azul = "azul",
    azulescuro = "azul escuro",
    violeta = "violeta"
}
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: cores
}

const pessoa1: Pessoa = {
    nome: "João",
    idade: 25,
    corFavorita: cores.azul
}
const pessoa2: Pessoa = {
    nome: "Maria",
    idade: 20,
    corFavorita: cores.laranja
}
const pessoa3: Pessoa = {
    nome: "Pedro",
    idade: 36,
    corFavorita: cores.violeta
}
