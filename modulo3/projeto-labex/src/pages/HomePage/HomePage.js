import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GoToAdmPage, GoToListTrips } from '../../routes/Coordinator'
import Logo from '../../assets/logo.png'
import { MainDiv, SecondaryDiv, ButtonDiv, ImageDiv, CopyrightDiv, ButtonStyled } from './Styled'

export default function HomePage() {
    const navigate = useNavigate()

    return (
        <MainDiv>
            <SecondaryDiv >
                <ButtonDiv>
                    <ButtonStyled
                        onClick={() => GoToListTrips(navigate, 'list')}
                    >Ver lista de viagens</ButtonStyled>
                    <ButtonStyled
                        onClick={() => GoToAdmPage(navigate, 'list')}
                    >Administrador</ButtonStyled>
                </ButtonDiv>
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
