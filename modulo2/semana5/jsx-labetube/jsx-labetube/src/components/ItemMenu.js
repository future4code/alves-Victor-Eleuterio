import React from "react";

export function ItemMenu(props){
    return(
        <a href="App.js"><li className="botoes-meunu-vertical">{props.texto}</li></a>
    )

}