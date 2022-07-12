import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GoBack, ChangePage } from '../../routes/Coordinator'

export default function TripDetailsPage() {
  const navigate = useNavigate()

  return (
    <div>
      <div>
        <div>
          <h1>Nome da viagem</h1>
          <p>Nome:</p>
          <p>Descrição:</p>
          <p>Planeta:</p>
          <p>Duração:</p>
          <p>Data:</p>
          <button
            onClick={() => GoBack(navigate)}
          >Voltar</button>
        </div>
        <div>
          <h1>Candidatos Pendentes</h1>
          <div>
            <p>Nome:</p>
            <p>Idade:</p>
            <p>Profissão:</p>
            <p>País:</p>
            <p>Texto de candidatura:</p>
            <div>
              <button>Aprovar</button>
              <button>Reprovar</button>
            </div>
          </div>
        </div>
        <div>
          <h1>Candidatos Aprovados</h1>
          <div>
            <p>Nome:</p>
            <p>Idade:</p>
            <p>Profissão:</p>
            <p>País:</p>
            <p>Texto de candidatura:</p>
          </div>
        </div>
      </div>
    </div>
  )
}
