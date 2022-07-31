import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/logoName.png'
import { MainDiv, InfoDiv, FormStyled, ButtonsDiv, ButtonContinue, BackgroundImg, ButtonCreate } from './Styled'
import { goToRegistration, goToFeed } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BaseUrl } from '../../constants/urls'
import { GlobalContext } from '../../global/GlobalContext'
import backgroundLogin from "../../assets/backgroundLogin.jpg"


export default function Login() {
  const { authentication, setAuthentication } = useContext(GlobalContext)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    switch (localStorage.getItem('token')) {
      case false:
        setAuthentication(false)
      case true:
        setAuthentication(true)
        break
    }

  })

  const Login = (event) => {
    event.preventDefault()

    const body = {
      "email": email,
      "password": password
    }

    axios.post(
      `${BaseUrl}/users/login`, body
    ).then((response) => {
      localStorage.setItem('token', response.data.token)
      setAuthentication(true)
      goToFeed(navigate)
    }).catch((error) => {
      console.log(error)
      alert(error.response.data)
    })
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <MainDiv>
        <InfoDiv>
          <img
            src={logo}
            alt='logo'
          />
          <p>O projeto de rede social da Labenu</p>
        </InfoDiv>
        <FormStyled onSubmit={Login}>
          <input
            onChange={onChangeEmail}
            placeholder='E-mail'
            type='email'
            required
          />
          <input
            onChange={onChangePassword}
            placeholder='Senha'
            type='password'
            required
          />
          <ButtonsDiv>
            <ButtonContinue
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
