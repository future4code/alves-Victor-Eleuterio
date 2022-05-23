// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const ordenar = (a,b)=>{
        return a - b
    }
  return array.sort(ordenar)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = []
    for(valor of array){
        if(valor % 2 === 0 ){
        arrayPares.push(valor)
         }
    }
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayParesElevados = []
    for(valor of array){
        if(valor % 2 === 0 ){
        arrayParesElevados.push(valor**2)
         }
    }
    return arrayParesElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
 return array.reduce(function(a,b){
     return Math.max(a,b)
 })
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const numeros = {
        maiorNumero: undefined,
        maiorDivisivelPorMenor: undefined ,
        diferenca: undefined,
    }
    let menorNumero = undefined

    numeros.maiorNumero = Math.max(num1,num2)
    menorNumero = Math.min(num1, num2)

    if(numeros.maiorNumero % menorNumero == 0 ){
        numeros.maiorDivisivelPorMenor = true
    }else{
        numeros.maiorDivisivelPorMenor = false
    }

    numeros.diferenca = numeros.maiorNumero - menorNumero 

 return numeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let pares = []
   for(let i =  0; pares.length < n; i++){
       if (i % 2 == 0){
           pares.push(i)
       }
   }
   return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA == ladoB && ladoA == ladoC){
        return "Equilátero"
    }else if(ladoA == ladoB ||ladoA == ladoC || ladoB == ladoC){
        return "Isósceles"
    }else{
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    return array.reduce(function(a,b){
        return Math.max(a,b)
    })

    //array ordenado
    //segundo maior valor = arrayordenado
    //segundomenorvalor = array[arrayordenado]
    //arrayResultado 
}  

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoa2 ={
       ...pessoa,
       nome: "ANÔNIMO"
    }
   return pessoa2
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas){
    let autorizadas = pessoas.filter((item)=>{
        if(item.idade > 14 ){
            if(item.altura >= 1.5){
                if(item.idade <= 60){
            return item}}
        }
    })
    return autorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
 
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (i=0 ; i<contas.length ; i++) {
        let somaContas = 0;
        for (a = 0 ; a < contas[i].compras.length ; a++) {
            somaContas += contas[i].compras[a];
        }
        contas[i].saldoTotal = contas[i].saldoTotal - somaContas;
        contas[i].compras = [];
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}