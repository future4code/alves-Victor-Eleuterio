import React from 'react'
import icon from '../../assets/icon.png'
import { MainDiv, ButtonStyled, ButtonsDiv} from './Styled'
import { useNavigate } from 'react-router'
import { GoToAdmPage, GoHome } from '../../routes/Coordinator'

export default function Header() {
    const navigate = useNavigate()

    return (
        <MainDiv>
            <div>
                <img
                    src={icon}
                    alt='Logo'
                    width='60px'
                />
            </div>
            <ButtonsDiv>
                <ButtonStyled
                onClick={()=>GoHome(navigate)}
                >Home</ButtonStyled>
                <ButtonStyled
                onClick={()=>GoToAdmPage(navigate, 'list')}
                >Administrador</ButtonStyled>
            </ButtonsDiv>
        </MainDiv>
    )
}
