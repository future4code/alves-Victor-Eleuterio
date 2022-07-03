import React, { Component } from 'react'
import { DivPrincipal } from "../styled/styled.js";
import { DivTitulo } from "../styled/styled.js";

export default class EtapaFinal extends Component {
    render() {
        return (
            <DivPrincipal>
                <DivTitulo><h3>O FORMULÁRIO ACABOU</h3></DivTitulo>
                <p>A <b>LabenuForms</b> agradece por participar, entraremos em contato logo!</p>
            </DivPrincipal>
        )
    }
}
