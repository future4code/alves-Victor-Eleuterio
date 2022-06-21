import React, { Component } from 'react'
import { DivPrincipal } from './Styled/InicialStyled'
import axios from "axios"


export default class Inicial extends Component {
    state = {
        usuarios: [],
        erro:"",
        name: "",
        email: ""
    }

    // componentDidMount() {
    //     this.pegarUsuario()
    // }

    onChangeInputNome = (event) => {
        this.setState({ name: event.target.value })
    }
    onChangeInputEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    pegarUsuarios = () => {
        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
                headers: {
                    Authorization: "victor-eleuterio-alves"
                }
            }
        ).then((resposta) => {
            this.setState({usuarios: resposta.data.results.list})
        }).catch((erro) => {
            this.setState({erro: erro.response.data})
        })
    }

    adicionarUsuario = () => {
    

        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            this.state.usuarios, {
            headers: {
                Authorization: "victor-eleuterio-alves"
            }
        }
        ).then((resposta) => {
            resposta.status === 200 && alert("O usuário foi adicionado com sucesso!")


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
                        onChange={this.onChangeInputNome}
                    ></input>
                </div>
                <div>
                    <input
                        placeholder='E-mail:'
                        onChange={this.onChangeInputEmail}

                    ></input>
                </div>
                <button

                >Criar Usuário</button>
            </DivPrincipal>
        )
    }
}
