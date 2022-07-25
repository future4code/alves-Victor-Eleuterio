import React from 'react'
import logo from '../../assets/logoName.png'
import { MainDiv, InfoDiv, FormStyled, ButtonsDiv, ButtonContinue, ButtonCreate } from './Styled'
import { goToRegistration, goToFeed } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  return (
    <MainDiv>
      <InfoDiv>
        <img
          src={logo}
          alt='logo'
        />
        <p>O projeto de rede social da Labenu</p>
      </InfoDiv>
      <FormStyled>
        <input
          placeholder='Nome'
        />
        <input
          placeholder='Senha'
          type='password'
        />
        <ButtonsDiv>
          <ButtonContinue
            onClick={() => goToFeed(navigate)}
          >Continuar</ButtonContinue>
          <hr />
          <ButtonCreate
            onClick={() => goToRegistration(navigate)}
          ><b>Crie uma conta!</b></ButtonCreate>
        </ButtonsDiv>
      </FormStyled>
    </MainDiv>
  )
}
