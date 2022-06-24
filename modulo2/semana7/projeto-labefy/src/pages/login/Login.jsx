import React, { Component } from "react";
import { Header } from "../../components/header/Header";
import { DivPrincipal } from "./Styled";
import { BoxLogin } from "./Styled";
import { BoxCadastro } from "./Styled";
import { InputStyled } from "./Styled";
import { ButonStyled } from "./Styled";
import axios from "axios";

export class Login extends Component {
    state = {
        usuario: '',
        email: '',
        tela: "cadastro"
    }

    pegarUsuario = (event) => {
        this.setState({ usuario: event.target.value })

    }

    pegarEmail = (event) => {
        this.setState({ email: event.target.value })

    }

    adicionarUsuario = () => {
        const body = {
            name: this.state.usuario,
            email: this.state.email
        }


        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body, {
            headers: {
                Authorization: "victor-eleuterio-alves"
            }
        }
        ).then((resposta) => {
            alert("Cadastro Realizado com sucesso!")


        }).catch((erro) => {
            alert(erro.response.data.message)
        })

        this.setState({ tela: "login" })
    }

    verificarUsuario = () => {
        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=&email=",{
                headers: {
                    Authorization: "victor-eleuterio-alves"
                }
            }
        )
    }

    trocarTela = () => {
        if (this.state.tela === "login") {
            return (
                <BoxLogin>
                    <div>
                        <h3>Faça Login em sua conta</h3>
                    </div>
                    <div>
                        <InputStyled
                            placeholder="Usuário"
                            onChange={this.pegarUsuario}
                        />
                    </div>
                    <div>
                        <InputStyled
                            type="password"
                            placeholder="Senha"
                        />
                    </div>
                    <div>
                        <ButonStyled
                            onClick={this.adicionarUsuario}
                        >Entrar</ButonStyled>
                    </div>
                </BoxLogin>
            )
        } else {
            return (
                <BoxCadastro>
                    <div>
                        <h3>Cadastre sua conta</h3>
                    </div>
                    <div>
                        <InputStyled
                            placeholder="Usuário"
                            onChange={this.pegarUsuario}
                        />
                    </div>
                    <div>
                        <InputStyled
                            placeholder="E-mail"
                            onChange={this.pegarEmail}
                        />
                    </div>
                    <div>
                        <InputStyled
                            type="password"
                            placeholder="Senha"
                        />
                    </div>
                    <div>
                        <InputStyled
                            type="password"
                            placeholder="Digite a senha novamente"
                        />
                    </div>
                    <div>
                        <ButonStyled
                            onClick={this.adicionarUsuario}
                        >Cadastrar</ButonStyled>
                    </div>
                </BoxCadastro>
            )
        }
    }



    render() {
        return (
            <DivPrincipal>
                {this.trocarTela()}
            </DivPrincipal>
        )
    }
}