```function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
    let quantidadeDeNumeros = []
    for(numero of arrayDeNumeros){
      if(numero == numeroEscolhido){
        quantidadeDeNumeros.push(numero)
      }
    }if(quantidadeDeNumeros == 0){
      return `Número não encontrado`
      
    }else{
    return `O número ${numeroEscolhido} aparece ${quantidadeDeNumeros.length}x`
    }
  }```