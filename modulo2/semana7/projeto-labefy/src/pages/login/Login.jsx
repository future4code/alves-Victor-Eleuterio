import React, { Component } from "react";
import { Header } from "../../components/header/Header";
import { DivPrincipal } from "./Styled";

export class Login extends Component {
    render() {
        return (
            <DivPrincipal>
                <Header />
                Login
            </DivPrincipal>
        )
    }
}