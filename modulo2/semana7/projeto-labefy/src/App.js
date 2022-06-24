import React, { Component } from 'react'
import styled from 'styled-components'
import Home from './pages/home/Home'
import { Login } from './pages/login/Login'
import Nav from './components/nav/Nav'
import { Header } from './components/header/Header'
import Footer from './components/footer/Footer'

const LayoutMain = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  height: 80.1vh;
  background-color: #0d0f11;
`

export default class App extends Component {
  state = {
    login: false
  }

  trocarTela = () => {
    if (this.state.login) {
      return <Home />
    } else {
      return <Login />
    }

  }
  render() {

    return (
      <div>
        <Header />
        <LayoutMain>
          <div>
            <Nav />
          </div>
          <div>
            {this.trocarTela()}
          </div>
        </LayoutMain>
        <Footer />
      </div>

    )
  }

}
