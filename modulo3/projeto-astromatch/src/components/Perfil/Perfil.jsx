import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Perfil() {
    const [perfil, setPerfil] = useState([])
    const [proximo, setProximo] = useState("")
    const [like, setLike] = useState(true)

    useEffect(() => {
        GetProfileToChoose()
    }, [proximo])

    const GetProfileToChoose = () => {
        axios.get(
            'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-eleuterio-alves/person'
        ).then((resposta) => {
            setPerfil([resposta.data.profile])
        }).catch((erro) => {
            console.log(erro.response)
        })
    }
    const ChoosePerson = () => {
        
        const idPerfil = perfil.map((info)=>{
            return(info.id.toString())
        })
        const body = {
            "id": idPerfil,
            "choise": like
        }
        axios.post(
            'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-eleuterio-alves/choose-person',
            body,{
                headers:{
                    "Content-Type" : "application/json",
                }
            }
        ).then(() => {
            setLike(true)
            alert("AEEEEEE")
        }).catch((erro) => {
            console.log(erro.response)
        })
    }

    const botaoLike = () => {
        setLike(true)
    }
    const botaoDislike = () => {
        setLike(false)
    }
    const cardPerfil = perfil.map((perfil) => {
        return (
            <div key={perfil.id}>
                <img
                    alt={perfil.photo_alt}
                    src={perfil.photo}
                    width='250px'
                    height='350px'
                />
                <h4>{perfil.name}, {perfil.age}</h4>
                <h5>{perfil.bio}</h5>
            </div>
        )
    })
    return (
        <div>
            <h2>Perfil</h2>
            {cardPerfil}
            <button
                onClick={GetProfileToChoose}
            >Próximo</button>
            {/* <button
                onClick={GetProfileToChoose}
            >Dislike</button>
            <button
                onClick={ChoosePerson}
            >Like</button> */}
        </div>
    )
}
