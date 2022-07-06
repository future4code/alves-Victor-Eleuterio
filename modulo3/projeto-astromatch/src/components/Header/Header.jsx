import React from 'react'
import { useState } from 'react'

export default function Header(props) {
  const [botao, setBotao] = useState(true)
  return (
    <div>
      <div><h1>Astromatch</h1></div>
      <div>
        <button
        onClick={props.mudarTela}
        >Ir para Matches</button>
      </div>
    </div>
  )
}
