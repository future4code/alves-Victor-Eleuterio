import React, { Component } from "react";
import { Logo } from "./Styled";
import LogoLabefy from "../../assets/LabefyLogo.png"
import { DivPrincipal } from "./Styled";


export class Header extends Component {
    render() {
        return (
            <DivPrincipal>
                <div>
                    a
                </div>
                <div>
                    <Logo
                        src={LogoLabefy}
                        alt="Logo Labefy"
                    />
                </div>
                c
                <div>

                </div>
            </DivPrincipal>
        )
    }
}