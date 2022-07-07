import React from 'react'
import Name from '../../assets/nome.png'
import { DivPrincipal } from './styled'

export default function Header(props) {
  return (
    <DivPrincipal>
      <div>
        <img 
        src={Name}
        />
      </div>
      <div>
        <button
          onClick={props.mudarTela}
        >Ir para Matches</button>
      </div>
    </DivPrincipal>
  )
}
