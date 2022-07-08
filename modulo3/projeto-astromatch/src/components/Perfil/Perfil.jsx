import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { URL } from '../../contants/contants'
import { ImgPerfil, DivImg, DivNome, DivBio, BotaoLike, BotaoDislike, DivPerfil, DivPrincipal, DivBotoes } from './styled'

export default function Perfil() {
    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        GetProfileToChoose()
    }, [])

    const GetProfileToChoose = () => {
        axios.get(
            `${URL}/person`
        ).then((resposta) => {
            setPerfil(resposta.data.profile)
        }).catch((erro) => {
            console.log(erro.response)
        })
    }
    const ChoosePerson = (id) => {
        const body = {
            "id": id,
            "choice": true
        }
        axios.post(
            `${URL}/choose-person`,
            body, {
            headers: {
                "Content-Type": "application/json",
            }
        }
        ).then((resposta) => {
            if (resposta.data.isMatch) {
                alert("Deu match!")
            }
            GetProfileToChoose()
        }).catch((erro) => {
            alert("Ocorreu um erro, tente novamente", erro.response)
        })
    }
    const Clear = () => {
        axios.put(
            `${URL}/clear`
        ).then((resposta) => {
            alert("Perfis resetados com sucesso!")
            GetProfileToChoose()
        }).catch((erro) => {
            alert("OCorreu um erro, tente novamente", erro.response)
        })
    }
    return (
        <DivPrincipal>
            {perfil ? (
                <DivPerfil key={perfil.id}>
                    <DivImg>
                        <ImgPerfil
                            alt={perfil.photo_alt}
                            src={perfil.photo}
                        />
                    </DivImg>
                    <DivNome>
                        <h4>{perfil.name}, {perfil.age}</h4>
                    </DivNome>
                    <DivBio>
                        <h5>{perfil.bio}</h5>
                    </DivBio>
                    <DivBotoes>
                        <div>
                            <BotaoDislike
                                onClick={GetProfileToChoose}
                            >✖</BotaoDislike>
                        </div>
                        <div>
                            <BotaoLike
                                onClick={() => ChoosePerson(perfil.id)}
                            >❤</BotaoLike>
                        </div>
                    </DivBotoes>
                </DivPerfil>
            )
                :
                (
                    <div>
                        <h3>Você já viu todos os perfis 😊</h3>
                        <h4>Clique no botão abaixo para recomeçar</h4>
                        <button
                            onClick={Clear}
                        >Resetar Perfis</button>
                    </div>
                )
            }


        </DivPrincipal>
    )
}
