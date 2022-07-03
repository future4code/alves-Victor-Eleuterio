import React, { Component } from 'react'
import App from '../App.js';
import { DivPrincipal } from "../styled/styled.js";
import { DivTitulo } from "../styled/styled.js";
import { InputStyled } from "../styled/styled.js";
import { SelectStyled } from "../styled/styled.js";

export default class Etapa1 extends Component {

    state = {
        opcao: "Ensino médio incompleto"
    }

    pegaDado = (event) => {
        this.setState({opcao: event.target.value})
    }
    
    passaDado(){
        <App
        dado = {this.state.opcao}
        />
    }

    render() {
        return (
            <DivPrincipal>
                <DivTitulo><h3>ETAPA 1: Dados Gerais</h3></DivTitulo>
                <p>Digite seu nome:</p>
                <InputStyled
                    placeholder='Digite aqui...'
                /><br />

                <p>Digite sua idade:</p>
                <InputStyled
                    placeholder='Digite aqui...'
                /><br />

                <p>Digite seu melhor E-mail:</p>
                <InputStyled
                    placeholder='Digite aqui...'
                    /><br />

                <p>Qual o seu grau de escolaridade?</p>
                <SelectStyled value={this.state.opcao} onChange={this.pegaDado}>
                    <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                    <option value="Ensino médio completo">Ensino médio completo</option>
                    <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                    <option value="Ensino superior completo">Ensino superior completo</option>
                </SelectStyled><br />

            </DivPrincipal>
        )
    }
}