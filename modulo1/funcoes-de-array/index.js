/* Exercícios de interpretação de código 
 
1. 
a)
array
array
array

2.
a)
[Amanda Rangel, Laís Petra, Letícia Chijo]

3.
a)
{nome: Amanda Rangel, apelido: Mandi}
{nom: Laís Petra, apelido: Laura}

*/

// Exercícios de escrita de código

//1. 
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//a.
//  const nomePets = pets.map((nomePet)=>{
//     return nomePet.nome
//  })
//  console.log("a)",nomePets)

//b.
//  const cachorrosSalsicha = pets.filter((nomePet)=>{
//     return nomePet.raca == 'Salsicha'
//  })
//  console.log("b)",cachorrosSalsicha)

//c.
// const mensagemPoodle = pets.filter((nomePet)=>{
//         return nomePet.raca == 'Poodle'
// }).map((nomePet)=>{
//  return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePet.nome}!`)
// })
// console.log("c)",mensagemPoodle)

//2.

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//a.
//  const nomeItens = produtos.map((itens)=>{
//     return itens.nome
//  })
//  console.log("a)",nomeItens)

 //b.
//  const listaComDesconto = produtos.filter((item)=>{
//      let valorDesconto = item.preco
//      valorDesconto = valorDesconto * 0.05
//      const valorFinal = item.preco - valorDesconto
//     delete item.categoria
//     return item.preco = valorFinal

//  })
//  console.log("b)", listaComDesconto)

////////////////////////////////////////////
//  Exercicio b e c estão dando conflito, //
//   estão funcionando... um comentado    //
// e o outro não, mas estão funcionando:D //
////////////////////////////////////////////


//c.
// const bebidas = produtos.filter((itens)=>{
//     return itens.categoria == "Bebidas"
// })
// console.log("c)", bebidas)

//d.
// const produtosYpe = produtos.filter((item)=>{
//     return item.nome.includes("Ypê")
// })
// console.log("d)", produtosYpe)

//e.

// const anuncio = produtos.filter((item)=>{
//     return item.nome.includes("Ypê")
// }).map((item)=>{

//     return(`Compre ${item.nome} por ${item.preco}`)
// })
// console.log("e)",anuncio)

//Desafios

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]
// //1.
// //a.
// const ordemAlfPokemons = pokemons.map((item)=>{
//     pokemons.sort()
//     return item.nome
// })
// console.log(ordemAlfPokemons)