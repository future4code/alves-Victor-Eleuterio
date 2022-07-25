import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoBack } from '../../routes/Coordinator'
import { MainDiv, SecondaryDiv, ThirdDiv, FormStyled, ImageDiv, CopyrightDiv, ButtonStyled, InputStyled } from './Styled'
import Logo from '../../assets/logo.png'
import axios from 'axios'
import { BaseUrl } from '../../constants/Constants'

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const onSubmitLogin = (event) => {
        event.preventDefault()
        const body = {
            "email": email,
            "password": password
        }
        axios.post(
            `${BaseUrl}/login`, body
        ).then((res) => {
            localStorage.setItem('token', res.data.token)
            navigate('/admin/trips/list')
        }).catch((err) => {
            alert(err.response.data.message)
        })
    }

    return (
        <MainDiv>
            <SecondaryDiv>
                <ThirdDiv>
                    <FormStyled onSubmit={onSubmitLogin}>
                        <h4>Login</h4>
                        <InputStyled
                            placeholder='E-mail:'
                            type='email'
                            onChange={onChangeEmail}
                            required
                        />
                        <InputStyled
                            placeholder='Senha:'
                            type="password"
                            onChange={onChangePassword}
                            required
                        />
                        <ButtonStyled>Entrar</ButtonStyled>
                    </FormStyled>
                    <ButtonStyled
                        onClick={() => GoBack(navigate)}
                    >Voltar</ButtonStyled>
                </ThirdDiv>
                <ImageDiv>
                    <img
                        src={Logo}
                        alt="Logo da empresa"
                    />
                    <h3>Encontre as melhores <br /> viagens espaciais</h3>
                </ImageDiv>
            </SecondaryDiv>
            <CopyrightDiv>
                <p>Copyright © 2022 IntoSpace - Todos os direitos reservados</p>
            </CopyrightDiv>
        </MainDiv>
    )
}
