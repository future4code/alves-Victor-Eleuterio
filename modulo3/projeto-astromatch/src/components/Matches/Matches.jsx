import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

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
        <div>
            Matches
            {matches.map((match) => {
                return (
                    <div key={match.id}>
                        <img
                            width='50px'
                            height='50px'
                            src={match.photo}
                        />
                        {match.name}
                    </div>
                )
            })}
        </div>
    )
}
