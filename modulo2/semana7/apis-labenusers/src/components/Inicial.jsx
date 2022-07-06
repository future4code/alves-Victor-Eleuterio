import React, { Component } from 'react'
import { DivPrincipal } from './Styled/InicialStyled'
import axios from "axios"


export default class Inicial extends Component {
    state = {
        erro: "",
        name: "",
        email: ""
    }



    onChangeInputNome = (event) => {
        this.setState({ name: event.target.value })
    }
    onChangeInputEmail = (event) => {
        this.setState({ email: event.target.value })
    }


    adicionarUsuario = () => {
        const body = {
            name: this.state.name,
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
            alert("O usuário foi adicionado com sucesso!")
            this.setState({ name: '', email: '' })


        }).catch((erro) => {
            alert(erro.response.data.message)
        })
    }


    render() {
        return (
            <DivPrincipal>
                <div>
                    <input
                        placeholder='Nome:'
                        value={this.state.name}
                        onChange={this.onChangeInputNome}
                    ></input>
                </div>
                <div>
                    <input
                        placeholder='E-mail:'
                        value={this.state.email}
                        onChange={this.onChangeInputEmail}

                    ></input>
                </div>
                <button
                    onClick={this.adicionarUsuario}
                >Criar Usuário</button>
            </DivPrincipal>
        )
    }
}
