import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const DivFormulario = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: solid black 1px;
  width: 270px;
  padding: 20px;
  background-color: whitesmoke;
`

const Botao = styled.button`
  font-size: 18px;
  padding: 10px;
  background-color: gray;
  border: none;
  border-radius: 5px;
`


class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/150/150"
      },
      {
        nome: "luizinho",
        fotoUsuario: "https://picsum.photos/40/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nome: "julinha",
        fotoUsuario: "https://picsum.photos/30/50",
        fotoPost: "https://picsum.photos/100/150"
      }
    ],
    inputNome: "",
    inputFotoUsuario: "",
    inputFotoPost: "",
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputNome,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }

    const novaPostagem = [novoPost, ...this.state.post]

    this.setState({ post: novaPostagem, inputNome: "", inputFotoPost: "", inputFotoUsuario: "" })
  }

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value })
  }

  render() {

    const ListaDeComponentes = this.state.post.map((info) => {
      return (
        <Post
          nomeUsuario={info.nomeUsuario}
          fotoUsuario={info.fotoUsuario}
          fotoPost={info.fotoPost}
        />

      )

    })
    return (
      <MainContainer>
        <DivFormulario>
          <input
            value={this.state.inputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Seu Nome"}
          />

          <input
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Sua foto de perfil"}

          />

          <input
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Sua foto para postagem"}
          />

          <Botao onClick={this.adicionaPost}>Adicionar Postagem</Botao>
        </DivFormulario>
        {ListaDeComponentes}

      </MainContainer>

    );
  }
}

export default App;
