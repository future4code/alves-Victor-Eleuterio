/*Exercícios de interpretação de código

1. {O código determinou a variavel "Valor" como 0 e ira aumentar uma vez
a cada loop a variável determinada como "i".
será impresso no console:
10
}

2.{
  a.
    19
    21
    23
    25
    27
    30
  
  b.



}
3. Será impresso:
    *
    **
    ***
    ****
*/

// Exercicios de escrita de código
//1.


// const bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
// let cont = 0

//  if(bichinhos <= 0 ){
//      console.log("Que pena! Você pode adotar um pet!")
//  }else if (bichinhos > 0){
//      let arrayDosBichinhos=[]
//     while (cont !== bichinhos){
//         cont++
//         let nomes = prompt("Qual o nome do seu pet?")
//         arrayDosBichinhos.push(nomes)
//     }
//      console.log(arrayDosBichinhos)
// }

//2.
console.log("a)") //identificação de questão
const arrayOriginal = [100, 200]

function imprimirValoresIndv(){
    for (let valor of arrayOriginal){ 
    console.log(valor)
    }
}
imprimirValoresIndv()

console.log("b)") //identificação de questão

function imprimirEDividir(){
    for(let valor of arrayOriginal){
    console.log(valor / 10)
    }
}
imprimirEDividir()

console.log("c)") //identificação de questão

function criarNovoArray(){
    for(let valor of arrayOriginal){
        if(valor % 2 ===0){
            console.log(valor)
        }
    }
}
criarNovoArray()

console.log("d)") //identificação de questão

function criarArrayString(){
    for(let valor of arrayOriginal){
        console.log(`O elemento do Índex ${arrayOriginal.indexOf(valor)} é ${valor} `)
    }

}
criarArrayString()

console.log("e) Não realizada") 

// Não realizada 

// function imprimirMaiorEMenor(){

// for(let valor of arrayOriginal){
//         let valorMaximo = 1
//         let valorMinimo = 300
//         while(valorMaximo !== arrayOriginal[0] ){
//             valorMaximo++ 
//         }
//         while(valorMinimo > arrayOriginal[1]){
//             valorMinimo--

//             return (`O maior número é o ${valorMinimo} e o menor é ${valorMaximo}`)
//         }
        
//     } 
// }
// console.log(imprimirMaiorEMenor())