import React, { Component } from 'react'
import { DivPrincipal } from "../styled/styled.js";
import { DivTitulo } from "../styled/styled.js";
import { InputStyled } from "../styled/styled.js";
import { SelectStyled } from "../styled/styled.js";

export default class Etapa3 extends Component {
    render() {
        return (
            <DivPrincipal>
                <DivTitulo><h3>ETAPA 3 Informações gerais de ensino</h3></DivTitulo>
                <p>Qual motivo de não ter finalizado o curso de graduação?</p>
                <InputStyled
                    placeholder='Digite aqui...'
                />

                <p>Você possui algum curso complementar?</p>
                <SelectStyled>
                    <option value='curso técnico'>Curso Técnico</option>
                    <option value='curso de inglês'>Curso de inglês</option>
                    <option value='não fiz curso'>Não fiz curso complementar</option>
                </SelectStyled>
            </DivPrincipal>
        )
    }
}
