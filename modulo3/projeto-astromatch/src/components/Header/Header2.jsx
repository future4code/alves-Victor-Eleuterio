import React from 'react'

export default function Header2 (props) {
  return (
    <div>
      <div><h1>Astromatch</h1></div>
      <div>
        <button
        onClick={props.mudarTela}
        >🔎</button>
      </div>
    </div>
  )
}
