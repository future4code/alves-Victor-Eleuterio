import React, { Component } from 'react'
import { DivPrincipal } from "../styled/styled.js";
import { DivTitulo } from "../styled/styled.js";
import { InputStyled } from '../styled/styled.js';

export default class Etapa2 extends Component {
    render() {
        return (
            <DivPrincipal>
                <DivTitulo><h3>ETAPA 2 Informações educacionais</h3></DivTitulo>
                
                <p>Qual curso está em andamento ou concluiu?</p>
                <InputStyled
                 placeholder='Digite aqui...'
                 />

                <p>Em qual instituição de ensino?</p>
                <InputStyled
                 placeholder='Digite aqui...'
                />

            </DivPrincipal>
        )
    }
}
