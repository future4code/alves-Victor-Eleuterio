import React from 'react'
import { MainDiv } from './Styled'

export default function Post(props) {
  return (
    <MainDiv>
        <div>
            <p>Enviado por: {props.user}</p>
        </div>
        <div>
            <h4>
                {props.textPost}
                ado ado ado
            </h4>
        </div>
        <div>
            <button>Seta pra cima e pra baixo</button>
            <button>Comentarios</button>
        </div>
    </MainDiv>
  )
}
