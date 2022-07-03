import React, { Component } from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
        background-color: whitesmoke;
        border:solid gray 1px;
        border-radius: 7px;
        padding: 5px;
        width:100%;
    `
const ButtonStyled = styled.button`
    border: 0;
    border-radius:10px;
    background-color: aquamarine;
    padding: 8px;
    padding-left: 30px;
    padding-right: 30px;

`

const DivGeral = styled.div`
    padding: 30px;
    bottom: 0;
    background-color: whitesmoke;
    position:fixed;
    width:100%;

`

const DivInput = styled.div`
    display: grid;
    grid-template-columns:100px 200px 100px;
    justify-content: flex-start;
    align-items:center;
    justify-items:center;
    column-gap: 15px;

`

export default class Inputs extends Component {

    state = {
        chat: [
            {
                usuario: "",
                ponto: "",
                mensagem: "",
            }
        ],
        inputUsuario: "",
        inputMensagem: "",
        ponto: "",
    }

    enviaMensagem = () => {
        const adicionaMensagem = {
            usuario: this.state.inputUsuario,
            ponto: this.state.ponto,
            mensagem: this.state.inputMensagem
        }

        const novaMensagem = [...this.state.chat, adicionaMensagem]

        this.setState({ chat: novaMensagem, inputMensagem: "", inputUsuario: "", ponto: ":"})

    }

    onChangeUsuario = (event) => {
        this.setState({ inputUsuario: event.target.value, ponto: ":"})
    }

    onChangeMensagem = (event) => {
        this.setState({ inputMensagem: event.target.value })
    }

    render() {

        const mensagensChat = this.state.chat.map((info) => {

            return (
                <p>
                    <b>{info.usuario}{info.ponto}</b> {info.mensagem}
                </p>
            )

        })
        return (
            <DivGeral key={1}>
                {mensagensChat}
                <DivInput>
                    <div>
                        <InputStyled
                            placeholder='Usuário'
                            value={this.state.inputUsuario}
                            onChange={this.onChangeUsuario}
                        />
                    </div>
                    <div>
                        <InputStyled
                            placeholder='Digite sua menssagem...'
                            value={this.state.inputMensagem}
                            onChange={this.onChangeMensagem}
                        />
                    </div>
                    <div>
                        <ButtonStyled onClick={this.enviaMensagem}>Enviar</ButtonStyled>
                    </div>
                </DivInput>
            </DivGeral>

        )
    }
}
