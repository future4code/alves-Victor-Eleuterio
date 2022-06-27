// import axios from 'axios'
// import React, { Component } from 'react'
// import { DivPrincipal } from './Styled'
// import { ItemAddM } from './Styled'
// import { UrlAddPlaylist } from '../../constants/constants'
// import { BodyAddPlaylist } from '../../constants/constants'

// export default class Nav extends Component {
//     state = {
//         tela: "lista",
//         playlists: [],
//         nomePlaylist: "",

//     }

//     pegarPlaylist = (event) => {
//         this.setState({ nomePlaylist: event.target.value })
//         console.log(this.state.nomePlaylist)
//     }

//     adicionarPlaylist = () => {
//         const body = {
//             "name": this.state.nomePlaylist
//         }

//         axios.post(
//             UrlAddPlaylist,
//             body,
//             {
//                 headers: {
//                     Authorization: "victor-eleuterio-alves"
//                 }
//             }
//         ).then((resposta) => alert('Playlist adicionada com sucesso!'))
//             .catch((erro) => alert('Ocorreu um erro, tente novamente', erro.response))
//     }

//     botaoVoltar = () => {
//         this.setState({tela: 'lista'})
//     }

//     listaAddPlaylist = () => {
//         this.setState({tela: "addPlaylist"})
//     }

//     listaSuasPlaylists =() =>{

//         this.setState({tela: "suasPlaylists"})
//     }

//     trocarTela = () => {
//         switch (this.state.tela) {
//             case "addPlaylist":
//                 return (
//                     <div>
//                         <button
//                         onClick={this.botaoVoltar}
//                         >Voltar</button>
//                         <input
//                             placeholder='Digite o nome da sua playlist'
//                             onChange={this.pegarPlaylist}
//                         ></input>
//                         <button
//                         onClick={this.adicionarPlaylist}
//                         >Adicionar Playlist</button>

//                     </div>
//                 );
//             case "suasPlaylists":
//                 return (
//                     <div>
//                         <button
//                         onClick={this.botaoVoltar}
//                         >Voltar</button>
//                         Minhas playlists
//                     </div>
//                 );
//                 case "lista":
//                     return this.listaDeOpcoes()
                    
//         }

//     }

//     listaDeOpcoes = () => {
//         return (
//             <div>
//                 <button
//                 onClick={this.listaAddPlaylist}
//                 >Adicionar Playlist</button>
//                 {/* <button>Adicionar Músicas</button> */}
//                 <button
//                 onClick={this.listaSuasPlaylists}
//                 >Suas Playlists</button>

//             </div>
//         )

//     }

//     render() {
//         return (
//             <DivPrincipal>
//                 {/* {this.listaDeOpcoes()} */}
//                 {this.trocarTela()}
//             </DivPrincipal>
//         )
//     }
// }
