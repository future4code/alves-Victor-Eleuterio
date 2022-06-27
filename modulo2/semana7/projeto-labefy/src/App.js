import React, { Component } from 'react'
import styled from 'styled-components'
import Home from './components/home/Home'
import { Login } from './components/login/Login'
import Nav from './components/nav/Nav'
import { Header } from './components/header/Header'
import Footer from './components/footer/Footer'
import { BoxLogin } from './components/login/Styled'
import { InputStyled } from './components/login/Styled'
import { ButonStyled } from './components/login/Styled'
import { BoxCadastro } from './components/login/Styled'
import axios from 'axios'
import { Cadastro } from './components/cadastro/Cadastro'
import { DivLogin } from './components/login/Styled'
import { DivCadastro } from './components/cadastro/Styled'


const LayoutMain = styled.div`
  display: grid;
  height:90vh;
  background-color: #0d0f11;
`

export default class App extends Component {
  state = {
    tela: "cadastro",
    usuario: '',
    email: '',
    login: 'Usuário'
  }

  pegarUsuario = (event) => {
    this.setState({ usuario: event.target.value })

  }

  pegarEmail = (event) => {
    this.setState({ email: event.target.value })

  }

  adicionarUsuario = () => {
    const body = {
      name: this.state.usuario,
      email: this.state.email
    }


    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body, {
      headers: {
        Authorization: "victor-eleuterio-alves"
      }
    }
    )
    // .then((resposta) => {
    //   alert("Cadastro Realizado com sucesso!")


    // }).catch((erro) => {
    //   alert(erro.response.data.message)
    // })

    this.setState({ tela: "login" })
  }

  fazerLogin = () => {
    this.setState({ tela: "home" })
    this.setState({ login: this.state.usuario })
  }

  trocarTelaLogin = () => {
    if (this.state.tela === "login") {
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
                onClick={this.fazerLogin}
              >Entrar</ButonStyled>
            </div>
          </BoxLogin>
        </DivLogin>
      )
    } else if (this.state.tela === "cadastro") {
      return (
        <DivCadastro>
          <BoxCadastro>
            <div>
              <h3>Cadastre sua conta</h3>
            </div>
            <div>
              <InputStyled
                placeholder="Usuário"
                onChange={this.pegarUsuario}
              />
            </div>
            <div>
              <InputStyled
                placeholder="E-mail"
                onChange={this.pegarEmail}
              />
            </div>
            <div>
              <InputStyled
                type="password"
                placeholder="Senha"
              />
            </div>
            <div>
              <InputStyled
                type="password"
                placeholder="Digite a senha novamente"
              />
            </div>
            <div>
              <ButonStyled
                onClick={this.adicionarUsuario}
              >Cadastrar</ButonStyled>
            </div>
          </BoxCadastro>
        </DivCadastro>
      )
    } else if (this.state.tela === "home") {
      return <Home />
    }
  }



  render() {

    return (
      <div>
        <Header
          usuario={this.state.login}
        />
        <LayoutMain>
          <div>
            {/* <Nav>
            </Nav> */}
          </div>
          <div>
            {this.trocarTelaLogin()}
          </div>
        </LayoutMain>
        {/* <Footer /> */}
      </div>

    )
  }

}
