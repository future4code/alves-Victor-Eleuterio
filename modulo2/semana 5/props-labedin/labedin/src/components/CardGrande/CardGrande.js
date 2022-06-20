import React from 'react';
import {DivPrimaria, Imagens, Titulo, DivSecundaria} from './CardGrande-styled'

function CardGrande(props) {
    return (
        <DivPrimaria>
            <Imagens src={ props.imagem }>
            </Imagens>
            <DivSecundaria>
                <Titulo>{ props.nome }</Titulo>
                <p>{ props.descricao }</p>
            </DivSecundaria>
        </DivPrimaria>
    )
}

export default CardGrande;