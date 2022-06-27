import React, { Component } from "react";
import { Header } from "../header/Header";
import { DivLogin } from "./Styled";
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


    render() {
        return (
            <DivLogin>
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
                {/* {this.trocarTela()} */}
            </DivLogin>
        )
    }
}