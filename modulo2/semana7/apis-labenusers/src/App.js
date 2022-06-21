import React, { Component } from 'react'
import axios from 'axios'
import Inicial from './components/Inicial'
import Detalhes from './components/Detalhes'

export default class App extends Component {
  state = {
    tela: false
  }

  mudarTela = () => {
    this.setState({tela: !this.state.tela})
  }

  exibirTela = () => {
    if (this.state.tela === false){
      return <Inicial/>
    }else {
      return <Detalhes/>
    }
  }

  

  render() {
    return (
      <div>
        <button
        onClick={this.mudarTela}
        >Mudar Tela</button>
        {this.exibirTela()}
      </div>
    )
  }
}