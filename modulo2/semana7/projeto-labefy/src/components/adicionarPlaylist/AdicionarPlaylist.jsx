import React, { Component } from 'react'

export default class AdicionaPlaylist extends Component {


  render() {
    return (
      <div>
        <input
        placeholder='Digite o nome da sua playlist'
        />
        <button>Criar Playlist</button>
      </div>
    )
  }
}
