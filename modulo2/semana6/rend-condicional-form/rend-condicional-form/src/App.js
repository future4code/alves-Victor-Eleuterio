import React, { Component } from 'react'
import Etapa1 from "./pages/etapa1"
import Etapa2 from "./pages/etapa2"
import Etapa3 from "./pages/etapa3"
import EtapaFinal from "./pages/etapaFinal"


export default class App extends Component {

  state = {
    pagina: ""
  }

  proximaPagina (props){
    this.props.setState({pagina: this.dado})
  }

  render() {
    return (
    <div>
      <Etapa1/>
      {/* <Etapa2/>
      <Etapa3/>
      <EtapaFinal/> */}
      <button>Próxima Etapa</button>
    </div>
    )
  }
}


