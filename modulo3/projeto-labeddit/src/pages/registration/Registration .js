import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import { ButtonAuthentication } from '../../components/header/Styled'
import { FormStyled, InfoDiv, InfoSubDiv2, MainDiv } from './Styled'
import { goToFeed, goToLogin } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BaseUrl } from '../../constants/urls'
import axios from 'axios'
import { GlobalContext } from '../../global/GlobalContext'

export default function Registration() {
    const { authentication, setAuthentication } = useContext(GlobalContext)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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

    const Signup = (event) => {
        event.preventDefault()
        const body = {
            "username": username,
            "email": email,
            "password": password
        }
        axios.post(
            `${BaseUrl}/users/signup`, body
        ).then((response) => {
            localStorage.setItem('token', response.data.token)
            if (localStorage.getItem('token')) {
                goToFeed(navigate)
            }
        }).catch((error) => {
            console.log(error)
            switch (error.response.status) {
                case 422:
                    return alert("Sua senha é muito curta")
                case 409:
                    return alert("E-mail já cadastrado")
                default:
                    return alert(error.response.message)
            }
        })
    }
    const onChangeUsername = (event) => {
        setUsername(event.target.value)
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <MainDiv>
            <Header
                buttonAuthentication={
                    <div>
                        <ButtonAuthentication
                            onClick={() => goToLogin(navigate)}
                        >Entrar</ButtonAuthentication>
                    </div>
                }
            />
            <div>
                <h1>Olá, boas vindas ao LabEddit ;)</h1>
            </div>
            <FormStyled onSubmit={Signup}>
                <input
                    onChange={onChangeUsername}
                    placeholder='Nome de usuário'
                    pattern={'^.{3,}'}
                    title='• Ter no mínimo 3 caracteres'
                    required
                />
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
                    pattern={'^.{6,}'}
                    title='• Ter no mínimo 6 caracteres'
                    required
                />
                <InfoDiv>
                    <div>
                        <p>Ao continuar, você concorda com o nosso <a href='#'>Contrato de usuário</a> e nossa <a href='#'>Política de Privacidade</a></p>
                    </div>
                    <InfoSubDiv2>
                        <div>
                            <input
                                type='checkbox'
                            />
                        </div>
                        <div>
                            <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
                        </div>
                    </InfoSubDiv2>
                    <button>Cadastrar</button>
                </InfoDiv>
            </FormStyled>
        </MainDiv>
    )
}
