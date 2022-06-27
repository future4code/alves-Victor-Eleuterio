import React, { Component } from "react";
import { DivPrincipal } from "./Styled";
import { Card } from '../cardMusica/Card'
import { DivCards } from "./Styled";
import axios from "axios";
import { Musicas } from "../musicas/musicas";
import { UrlAddPlaylist } from "../../constants/constants";
import { DivPrincipalNav } from "../nav/Styled";
import { DivSecundaria } from "./Styled";
import { DivCard } from "./Styled";
import { ImgStyled } from "./Styled";
import MusicIcon from "../../assets/MusicIcon.png"
import { DivPlaylists } from "./Styled";
import { DivPlaylistPrincipal } from "./Styled";

export default class Home extends Component {
    state = {
        playlists: [],
        musicas: [],
        tela: "lista",
        telaHome: "",
        nomePlaylist: "",
        playlistId: '',
        nomeMusica: '',
        artista: '',
        url: '',
    }

    componentDidUpdate() {
        this.getAllPlaylists()
    }

    pegarPlaylist = (event) => {
        this.setState({ nomePlaylist: event.target.value })
    }

    adicionarPlaylist = () => {
        const body = {
            "name": this.state.nomePlaylist
        }

        axios.post(
            UrlAddPlaylist,
            body,
            {
                headers: {
                    "Authorization": "victor-eleuterio-alves"
                }
            }
        ).then((resposta) => alert('Playlist adicionada com sucesso!'))
            .catch((erro) => alert('Ocorreu um erro, tente novamente', erro.response))
    }

    getAllPlaylists = () => {

        axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
            {
                headers: {
                    "Authorization": "victor-eleuterio-alves"
                }
            }
        ).then((resposta) => {
            this.setState({ playlists: resposta.data.result.list })
        }).catch((erro) => {
            alert('Ocorreu um erro, tente novamente', erro.response.data.message)
        })
    }

    deletePlaylist = (id) => {
        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
            headers: {
                "Authorization": "victor-eleuterio-alves"
            }
        }
        ).then((resposta) => {
            const musicasAdd = this.state.playlists.filter((musicas) => {
                return (id !== musicas.id)
            })
            this.setState({ playlists: musicasAdd })
        }).catch((erro) => {
            console.log(erro.response.data.message)
        })
    }

    getPlaylistTracks = (id, nomePlaylist) => {
        axios.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers: {
                "Authorization": "victor-eleuterio-alves"
            }
        }
        ).then((resposta) => {
            this.setState({ musicas: resposta.data.result.tracks, playlistId: id, nomePlaylist: nomePlaylist, telaHome: "infoplaylist" })
        }).catch((erro) => {
            alert('Ocorreu um erro, tente novamente', erro.response.data.message)
        })
    }


    addTrackToPlayList = (id) => {
        const body = {
            name: this.state.nomeMusica,
            artist: this.state.artista,
            url: this.state.url
        }
        axios.post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
            body, {
            headers: {
                Authorization: "victor-eleuterio-alves"
            }
        }
        ).then(() => {
            this.setState({ nomeMusica: "", url: "", artista: "" })
            alert('musica adicionada com sucesso!')
        }).catch((erro) => {
            alert('Ocorreu um erro, tente novamente', erro.response.data.message)

        })
    }

    removeTrackFromPlaylist = (id) => {
        const playlistId = this.state.playlistId

        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${id}`, {
            headers: {
                "Authorization": "victor-eleuterio-alves"
            }
        }
        ).then(() => {
            const Lista = this.state.musicas.filter((musica) => {
                return id !== musica
            })
            this.setState({ musicas: Lista })
        }).catch((erro) => {
            alert('Ocorreu um erro, tente novamente', erro.response.data.message)
        })
    }




    botaoVoltar = () => {
        this.setState({ tela: 'lista' })
    }

    listaAddPlaylist = () => {
        this.setState({ tela: "addPlaylist" })
    }

    listaSuasPlaylists = () => {
        this.setState({ telaHome: "suasPlaylists" })

    }



    trocarTela = () => {
        switch (this.state.tela) {
            case "addPlaylist":
                return (
                    <div>
                        <button
                            onClick={this.botaoVoltar}
                        >Voltar</button>
                        <input
                            placeholder='Digite o nome da sua playlist'
                            onChange={this.pegarPlaylist}
                        ></input>
                        <button
                            onClick={this.adicionarPlaylist}
                        >Adicionar Playlist</button>

                    </div>
                );
            case "suasPlaylists":
                return (
                    <div>
                        <button
                            onClick={this.botaoVoltar}
                        >Voltar</button>
                        <ul>

                            {this.state.playlists.map((playlist) => {
                                return <button
                                    onClick={this.imprimirPlaylist}
                                ><li key={playlist.id}>{playlist.name}</li></button>
                            })}

                        </ul>

                    </div>
                );
            case "lista":
                return this.listaDeOpcoes()

        }

    }


    listaDeOpcoes = () => {
        return (
            <div>
                <button
                    onClick={this.listaAddPlaylist}
                >Adicionar Playlist</button>
                <button
                    onClick={this.listaSuasPlaylists}
                >Suas Playlists</button>

            </div>
        )

    }

    Card = () => {
        return (
            <DivCard >
                <ImgStyled
                    src={MusicIcon}
                    alt='Imagem da musica/artista'
                />
                <h3>Nome:</h3>
                <h4>Artista:</h4>
                <button>Tocar</button>
                <button>Remover Musica</button>
            </DivCard>
        )
    }

    musicaPlaylist = () => {
        this.setState({ telaHome: "addmusica" })
    }


    pegarMusica = (event) => {
        this.setState({ nomeMusica: event.target.value })
        console.log(this.state.nomeMusica)
    }

    pegarArtista = (event) => {
        this.setState({ artista: event.target.value })
        console.log(this.state.artista)
    }

    pegarUrl = (event) => {
        this.setState({ url: event.target.value })
        console.log(this.state.url)
    }

    telaHome = () => {
        switch (this.state.telaHome) {
            case 'suasPlaylists':
                return (
                    <DivPlaylistPrincipal>

                        {this.state.playlists.map((playlist) => {
                            return (
                                <DivPlaylists
                                    key={playlist.id}>{playlist.name}

                                    <button
                                        onClick={() => this.getPlaylistTracks(playlist.id, playlist.name)}
                                    >Visualizar</button>
                                    <button
                                        onClick={() => { this.deletePlaylist(playlist.id) }}
                                    >Deletar Playlist</button>


                                </DivPlaylists>
                            )
                        })}

                    </DivPlaylistPrincipal>
                );
            case 'addmusica':
                return (
                    <div>
                        <button
                            onClick={this.listaSuasPlaylists}
                        >Voltar</button>
                        <input
                            onChange={this.pegarMusica}
                            placeholder="Nome da música"
                        ></input>
                        <input
                            onChange={this.pegarArtista}
                            placeholder="Artista"
                        ></input>
                        <input
                            onChange={this.pegarUrl}
                            placeholder="Endereço URL da música"
                        ></input>
                        <button
                            onClick={() => this.addTrackToPlayList(this.state.playlistId)}
                        >Adicionar</button>
                    </div>
                );
            case "infoplaylist":
                return (

                    <div>
                        <button
                            onClick={this.musicaPlaylist}
                        >Adicionar Música</button>
                        <div>
                            {this.state.musicas.map((musica) => {
                                return (

                                    <div key={musica.id}>
                                        <div><img
                                            src={MusicIcon}
                                        />
                                        </div>
                                        <div>
                                            {musica.name}
                                        </div>
                                        <div>
                                            {musica.artist}
                                        </div>
                                        <button
                                        onClick={()=>this.removeTrackFromPlaylist(musica.id)}
                                        >Deletar música</button>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                );
        }
    }



    render() {
        return (

            <DivPrincipal>
                <DivPrincipalNav>
                    {this.trocarTela()}
                </DivPrincipalNav>
                <DivSecundaria>
                    <DivCards>
                        {this.telaHome()}
                    </DivCards>
                </DivSecundaria>

            </DivPrincipal>
        )
    }
}