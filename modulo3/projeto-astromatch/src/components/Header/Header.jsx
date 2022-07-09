import React from 'react'
import Name from '../../assets/nome.png'
import { DivPrincipal, ButtonStyled } from './styled'

export default function Header(props) {
  return (
    <DivPrincipal>
      <div>
        <img 
        src={Name}
        />
      </div>
      <div>
        <ButtonStyled
          onClick={props.mudarTela}
        >💕</ButtonStyled>
      </div>
    </DivPrincipal>
  )
}
