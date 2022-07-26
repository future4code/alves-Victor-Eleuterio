import React from 'react'
import { ButtonDiv, ButtonsDiv, MainDiv } from './Styled'

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
            <ButtonsDiv>
                <ButtonDiv>
                    <button>⬆</button>
                    {props.votes}
                    <button>⬇</button>
                </ButtonDiv>
                <ButtonDiv>
                    <button
                    onClick={props.getComments}
                    >💬</button>
                    {props.comments}
                </ButtonDiv>
            </ButtonsDiv>
        </MainDiv>
    )
}
