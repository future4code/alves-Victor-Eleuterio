/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const carta = comprarCarta()
let usuario = [] 
let computador = [] 
if(confirm(`Bem vindo(a) ao jogo de Blackjack!
Quer iniciar uma nova rodada?`)){
   usuario.push(comprarCarta())
   usuario.push(comprarCarta())
   
   computador.push(comprarCarta())
   computador.push(comprarCarta())

   let pontuacaoUsuario = usuario[0].valor + usuario[1].valor
   let pontuacaoComputador = computador[0].valor + computador[1].valor
   
   if(usuario[0].valor, usuario[1].valor === 11 ){
      usuario[1].valor--
   }
   if(confirm(`Suas cartas são ${usuario[0].valor, usuario[0].texto} ${usuario[1].valor,  usuario[1].texto}. A carta revelada do computador é ${computador[0].valor, computador[0].texto}
Deseja comprar outra?`)){
   usuario.push(comprarCarta())
   computador.push(comprarCarta())
   pontuacaoComputador += computador[2].valor
   pontuacaoUsuario += usuario[2].valor
   
   if(pontuacaoComputador > pontuacaoUsuario && pontuacaoComputador <= 21){
   alert(`Usuário - cartas: ${usuario[0].valor, usuario[0].texto} ${usuario[1].valor, usuario[1].texto} ${usuario[2].valor, usuario[2].texto} - pontuação ${pontuacaoUsuario}
Computador - cartas: ${computador[0].valor, computador[0].texto} ${computador[1].valor, computador[1].texto} ${computador[2].valor, computador[2].texto}- pontuação ${pontuacaoComputador}
O Computador Ganhou!`)
   }else if(pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario  <= 21){
   alert(`Usuário - cartas: ${usuario[0].valor, usuario[0].texto} ${usuario[1].valor, usuario[1].texto} ${usuario[2].valor, usuario[2].texto} - pontuação ${pontuacaoUsuario}
   Computador - cartas: ${computador[0].valor, computador[0].texto} ${computador[1].valor, computador[1].texto} ${computador[2].valor, computador[2].texto}- pontuação ${pontuacaoComputador}
   O Usuário Ganhou!`)
      }else if (pontuacaoComputador > 21 && pontuacaoUsuario <= 21){
         alert(`Usuário - cartas: ${usuario[0].valor, usuario[0].texto} ${usuario[1].valor, usuario[1].texto} ${usuario[2].valor, usuario[2].texto} - pontuação ${pontuacaoUsuario}
Computador - cartas: ${computador[0].valor, computador[0].texto} ${computador[1].valor, computador[1].texto} ${computador[2].valor, computador[2].texto}- pontuação ${pontuacaoComputador}
O Usuário Ganhou!`)
   }else if(pontuacaoUsuario > 21 && pontuacaoComputador <= 21){
      alert(`Usuário - cartas: ${usuario[0].valor, usuario[0].texto} ${usuario[1].valor, usuario[1].texto} ${usuario[2].valor, usuario[2].texto} - pontuação ${pontuacaoUsuario}
Computador - cartas: ${computador[0].valor, computador[0].texto} ${computador[1].valor, computador[1].texto} ${computador[2].valor, computador[2].texto}- pontuação ${pontuacaoComputador}
O Computador Ganhou!`)
   }else{
      alert(`Usuário - cartas: ${usuario[0].valor, usuario[0].texto} ${usuario[1].valor, usuario[1].texto} ${usuario[2].valor, usuario[2].texto} - pontuação ${pontuacaoUsuario}
Computador - cartas: ${computador[0].valor, computador[0].texto} ${computador[1].valor, computador[1].texto} ${computador[2].valor, computador[2].texto}- pontuação ${pontuacaoComputador}
Empatou!`)
   }

   }else{
      if(pontuacaoComputador > pontuacaoUsuario){
         alert(`Usuário - cartas: ${usuario[0].valor, usuario[0].texto} ${usuario[1].valor, usuario[1].texto} - pontuação ${pontuacaoUsuario}
Computador - cartas: ${computador[0].valor, computador[0].texto} ${computador[1].valor, computador[1].texto} - pontuação ${pontuacaoComputador}
O Computador ganhou!`)
      }else if(pontuacaoUsuario > pontuacaoComputador){
         alert(`Usuário - cartas: ${usuario[0].valor, usuario[0].texto} ${usuario[1].valor, usuario[1].texto} - pontuação ${pontuacaoUsuario}
Computador - cartas: ${computador[0].valor, computador[0].texto} ${computador[1].valor, computador[1].texto} - pontuação ${pontuacaoComputador}
O Usuário ganhou!`)
      }else{
         alert(`Usuário - cartas: ${usuario[0].valor, usuario[0].texto} ${usuario[1].valor, usuario[1].texto} - pontuação ${pontuacaoUsuario}
Computador - cartas: ${computador[0].valor, computador[0].texto} ${computador[1].valor, computador[1].texto} - pontuação ${pontuacaoComputador}
Empatou!`)
      }
   
   }

}else{
   console.log("O jogo acabou")
}

    