import React from 'react';
import {DivButton, Imagens} from './imagemButton-styled'

function ImagemButton(props) {
    return (
        <DivButton>
            <Imagens src={ props.imagem }/>
            <p>{ props.texto }</p>
        </DivButton>

    )
}

export default ImagemButton;