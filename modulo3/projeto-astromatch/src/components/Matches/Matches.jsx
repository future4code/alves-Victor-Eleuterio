import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {DivPrincipal, DivPerfil, DivImg, Img} from './styled'

export default function Matches() {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        GetMatches()
    }, [])

    const GetMatches = () => {
        axios.get(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-eleuterio-alves/matches"
        ).then((resposta) => {
            setMatches(resposta.data.matches)
            console.log(matches)
        }).catch((erro) => {
            console.log(erro.response)
        })
    }
    return (
        <DivPrincipal>
            {matches.map((match) => {
                return (
                    <DivPerfil key={match.id}>
                        <DivImg>
                        <Img

                            src={match.photo}
                        />
                        </DivImg>
                        <div>
                        {match.name}
                        </div>
                    </DivPerfil>
                )
            })}
        </DivPrincipal>
    )
}
