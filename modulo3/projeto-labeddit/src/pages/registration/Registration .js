import React from 'react'
import Header from '../../components/header/Header'
import { ButtonAuthentication } from '../../components/header/Styled'
import { FormStyled, InfoDiv, InfoSubDiv2, MainDiv } from './Styled'
import { goToFeed, goToLogin } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'

export default function Registration() {
    const navigate = useNavigate()

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
            <FormStyled>
                <input
                    placeholder='Nome de usuário'
                    pattern={'^.{3,}'}
                    title='• Ter no mínimo 3 caracteres'
                    required
                />
                <input
                    placeholder='E-mail'
                    type='email'
                    required
                />
                <input
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
                    <button
                        onClick={() => goToFeed(navigate)}
                    >Cadastrar</button>
                </InfoDiv>
            </FormStyled>
        </MainDiv>
    )
}
