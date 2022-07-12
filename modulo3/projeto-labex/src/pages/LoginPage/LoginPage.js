import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GoBack, ChangePage } from '../../routes/Coordinator'
import { MainDiv, SecondaryDiv, FormDiv, ImageDiv, CopyrightDiv, ButtonStyled, IputStyled } from './Styled'
import Logo from '../../assets/logo.png'

export default function () {
    const navigate = useNavigate()

    return (
        <MainDiv>
            <SecondaryDiv>
                <FormDiv>
                    <h4>Login</h4>
                    <IputStyled
                        placeholder='E-mail:'
                    />
                    <IputStyled
                        placeholder='Senha:'
                        type="password"
                    />
                    <ButtonStyled
                        onClick={() => GoBack(navigate)}
                    >Voltar</ButtonStyled>
                    <ButtonStyled
                    >Entrar</ButtonStyled>
                </FormDiv>
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
