import React, { Component } from 'react'
import { DivCard } from './Styled'
import MusicIcon from "../../assets/MusicIcon.png"
import {ImgStyled} from './Styled'


export class Card extends Component {
  render() {
    return (
      <DivCard>
        <ImgStyled 
        src={MusicIcon}
        alt='Imagem da musica/artista'
        />
        <h3></h3>
        <h4>Artistas</h4>
        <button>Tocar</button>
      </DivCard>
    )
  }
}
