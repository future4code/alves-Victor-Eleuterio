import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GoBack, ChangePage } from '../../routes/Coordinator'

export default function CreateTripPage() {
  const navigate = useNavigate()

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <img alt='Imagem do Planeta' />
            </div>
            <div>
              <p>Nome:</p>
              <p>Descrição:</p>
              <p>Planeta:</p>
              <p>Duração:</p>
              <p>Data:</p>
            </div>
          </div>
        </div>
        <div>
          <h2>Criar Viagem</h2>
          <input
            placeholder='Nome:'
          />
          <select>
            <option>Escolha um Planeta</option>
          </select>
          <input
            type='date'
          />
          <input
            placeholder='Descrição:'
          />
          <input
            placeholder='Duração em Dias'
          />
          <select>
            <option>Escolha um país</option>
          </select>
          <div>
          <button
            onClick={() => GoBack(navigate)}
          >Voltar</button>
            <button>Criar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
