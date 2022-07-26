import React from "react"
import App from "../App"
export function CardVideo(props){
    return (
        <div className="box-pagina-principal media1" onClick="Reproduzir">
        <img src={props.imagem} alt="" />
        <h4>{props.titulo}</h4>
      </div>
    )
}