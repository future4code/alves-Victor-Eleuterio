import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Matches() {
    const [matches, setMatches] = useState([])

    const GetMatches = () => { 
        axios.get(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-eleuterio-alves/matches"
        ).then((resposta)=>{
            setMatches(resposta.data.matches)
            console.log(resposta.data)
        }).catch((erro)=>{
            console.log(erro.response)
        })
    }
    return (
        <div>Matches

            <button
            onClick={GetMatches}
            >X</button>
        </div>
    )
}
