import React, { Component } from 'react'
import { DivPrincipal } from './Styled/DetalhesStyled'
import axios from 'axios'


export default class Detalhes extends Component {
  state = {
    usuarios: []
  }

  componentDidMount() {
    this.pegarUsuarios()
  }

  pegarUsuarios = () => {
    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "victor-eleuterio-alves"
      }
    }
    ).then((resposta) => {
      this.setState({ usuarios: resposta.data })
    }).catch((erro) => {
      this.setState({ erro: erro.response.data })
    })
  }

  deletarUsuario = (id) => {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: 'victor-eleuterio-alves'
      }
    }).then((resposta) => {
      alert('Usuário deletado com sucesso!')
      this.pegarUsuarios()
    }).catch((erro) => {
      alert(erro.response.data.message)
    })
  }

  render() {
    const listaUsuarios = this.state.usuarios.map((usuario) => {
      return <div
        key={usuario.id}>
        {usuario.name}
        <button
          onClick={() => this.deletarUsuario(usuario.id)}>X</button>
      </div>

    })
    return (
      <div>
        <h2>Lista de Usuários</h2>
        {listaUsuarios}
      </div>
    )
  }
}
