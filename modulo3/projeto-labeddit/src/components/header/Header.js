import React from 'react'
import { LogoImg, MainDiv } from './Styled'
import logo from '../../assets/logo.png'


export default function Header(props) {
  return (
    <MainDiv>
      <div>
        {props.buttonClose}
      </div>
      <div>
        <LogoImg src={logo} alt='logo' />
      </div>
      <div>
        {props.buttonAuthentication}
      </div>
    </MainDiv>
  )
}
