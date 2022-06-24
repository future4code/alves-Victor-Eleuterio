import React, { Component } from 'react'
import styled from 'styled-components'
import Home from './pages/home/Home'
import { Login } from './pages/login/Login'



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
        {this.trocarTela()}
      </div>
    )
  }

}
