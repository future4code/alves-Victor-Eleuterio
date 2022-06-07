import React from "react"
import { DivPrimaria, Imagens } from "./CardPequeno-styled"


export function CardPequeno(props){
    return (
      
            <DivPrimaria>
               <Imagens src={props.imagem}/>
               <p><b>{props.info}</b> {props.infoUser}</p>
            </DivPrimaria>
    )
}