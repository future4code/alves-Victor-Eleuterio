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
import { ButtonStyled } from "./Styled";
import { InputStyled } from "./Styled";
import { DivNav } from "./Styled";
import { AudioStyled } from "./Styled";
import { DivPlaylistsHome } from "./Styled";
import { DivMusica } from "./Styled";
import { DivMusicas } from "./Styled";
import home from "../../assets/home.png"


export default class Home extends Component {
    state = {
        playlists: [],
        todasPlaylists: [],
        musicas: [],
        tela: "lista",
        telaHome: "home",
        nomePlaylist: "",
        playlistId: '',
        nomeMusica: '',
        artista: '',
        url: '',
        urlPlayer: ''
    }

    componentDidMount() {
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
            this.setState({ playlists: resposta.data.result.list, todasPlaylists: resposta.data.result.list })
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
            alert('Música adicionada com sucesso!')
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
    listaHome = () => {
        this.setState({ telaHome: "home" })
    }



    trocarTela = () => {
        switch (this.state.tela) {
            case "addPlaylist":
                return (
                    <DivNav>
                        <img src={home}
                            width='50px'
                            alt="home"
                            onClick={this.listaHome}
                        />
                        <ButtonStyled
                            onClick={this.botaoVoltar}
                        >Voltar</ButtonStyled>
                        <InputStyled
                            placeholder='Digite o nome da sua playlist'
                            onChange={this.pegarPlaylist}
                        ></InputStyled>
                        <ButtonStyled
                            onClick={this.adicionarPlaylist}
                        >Adicionar Playlist</ButtonStyled>

                    </DivNav>
                );
            case "suasPlaylists":
                return (
                    <div>
                        <img src={home}
                            width='50px'
                            alt="home"
                            onClick={this.listaHome}
                        />
                        <ButtonStyled
                            onClick={this.botaoVoltar}
                        >Voltar</ButtonStyled>
                        <ul>

                            {this.state.playlists.map((playlist) => {
                                return (<ButtonStyled
                                    onClick={this.imprimirPlaylist}
                                ><li key={playlist.id}>{playlist.name}</li></ButtonStyled>)
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
            <DivNav>
                <img src={home}
                    width='50px'
                    alt="home"
                    onClick={this.listaHome}
                />
                <ButtonStyled
                    onClick={this.listaAddPlaylist}
                >Adicionar Playlist</ButtonStyled>
                <ButtonStyled
                    onClick={this.listaSuasPlaylists}
                >Suas Playlists</ButtonStyled>

            </DivNav>
        )

    }


    musicaPlaylist = () => {
        this.setState({ telaHome: "addmusica" })
    }


    pegarMusica = (event) => {
        this.setState({ nomeMusica: event.target.value })
    }

    pegarArtista = (event) => {
        this.setState({ artista: event.target.value })
    }

    pegarUrl = (event) => {
        this.setState({ url: event.target.value })
    }

    tocarMusica = (id) => {
        this.setState({ urlPlayer: id })
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

                                    <ButtonStyled
                                        onClick={() => this.getPlaylistTracks(playlist.id, playlist.name)}
                                    >Visualizar</ButtonStyled>
                                    <ButtonStyled
                                        onClick={() => { this.deletePlaylist(playlist.id) }}
                                    >Deletar Playlist</ButtonStyled>


                                </DivPlaylists>
                            )
                        })}

                    </DivPlaylistPrincipal>
                );
            case 'addmusica':
                return (
                    <div>
                        <ButtonStyled
                            onClick={this.listaSuasPlaylists}
                        >Voltar</ButtonStyled>
                        <InputStyled
                            onChange={this.pegarMusica}
                            placeholder="Nome da música"
                        ></InputStyled>
                        <InputStyled
                            onChange={this.pegarArtista}
                            placeholder="Artista"
                        ></InputStyled>
                        <InputStyled
                            onChange={this.pegarUrl}
                            placeholder="Endereço URL da música"
                        ></InputStyled>
                        <ButtonStyled
                            onClick={() => this.addTrackToPlayList(this.state.playlistId)}
                        >Adicionar</ButtonStyled>
                    </div>
                );
            case "infoplaylist":
                return (

                    <div>
                        <ButtonStyled
                            onClick={this.musicaPlaylist}
                        >Adicionar Música</ButtonStyled>
                        <div>
                            {this.state.musicas.map((musica) => {
                                return (

                                    <DivMusica key={musica.id}>
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
                                        <ButtonStyled
                                            onClick={() => { this.tocarMusica(musica.url) }}
                                        >Play</ButtonStyled>
                                        <ButtonStyled
                                            onClick={() => this.removeTrackFromPlaylist(musica.id)}
                                        >Deletar música</ButtonStyled>
                                    </DivMusica>

                                )
                            })}
                        </div>
                    </div>
                );
            case "home":
                return (
                    <DivPlaylistsHome>
                            {this.state.playlists.map((playlist) => {
                                return (
                                    <DivCard key={playlist.id}>
                                        <ImgStyled
                                            src={MusicIcon}
                                            alt='Imagem da musica/artista'
                                        />
                                        <h3>{playlist.name}</h3>
                                        <ButtonStyled>Visualizar</ButtonStyled>
                                    </DivCard>
                                )
                            })}

                    </DivPlaylistsHome>

                )
        }
    }



    render() {
        return (

            <DivPrincipal>
                <DivPrincipalNav>
                    {this.trocarTela()}
                </DivPrincipalNav>
                <DivSecundaria>
                    {this.telaHome()}
                </DivSecundaria>

            </DivPrincipal>
        )
    }
}