import React, { Component } from "react";
import { Logo } from "./Styled";
import LogoLabefy from "../../assets/LabefyLogo.png"
import { DivPrincipal } from "./Styled";
import { DivImg } from "./Styled";
import IconLogin from "../../assets/IconLogin.png"
import { DivLogin } from "./Styled"
import { ButtonStyled } from "./Styled"
import { Login } from "../../pages/login/Login";
import axios from 'axios'


export class Header extends Component {
    state = {
        usuario: [],
        nome: ''
    }

    // componentDidMount() {
    //     this.pegarUsuario()
    // }

    pegarUsuario = () => {
        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "victor-eleuterio-alves"
            }
        }
        ).then((resposta) => {
            this.setState({ usuario: resposta.data })
        }).catch((erro) => {
            this.setState({ erro: erro.response.data })
        })
    }
    
    pegarNomeUsuario = () => {
        this.state.usuario.map((user) => {
            this.setState({nome: user.name})
        })
    }

    render() {

        return (
            <DivPrincipal>
                <DivImg>
                    <Logo
                        src={LogoLabefy}
                        alt="Logo Labefy"
                    />
                </DivImg>
                <div>
                    <ButtonStyled
                    >Seja Premium</ButtonStyled>
                </div>
                <DivLogin>
                    <img src={IconLogin} /><h4>{this.state.nome}</h4>
                </DivLogin>
            </DivPrincipal>
        )
    }
}