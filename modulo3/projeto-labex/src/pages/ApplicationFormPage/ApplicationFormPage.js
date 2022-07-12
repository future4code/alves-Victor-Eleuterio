import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GoBack, ChangePage } from '../../routes/Coordinator'

export default function ApplicationFormPage() {
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
          <h2>Inscreva-se para uma viagem</h2>
          <select>
            <option>Escolha uma viagem</option>
          </select>
          <input
            placeholder='Nome:'
          />
          <input
            placeholder='Idade:'
          />
          <input
            placeholder='Texto de Candidatura:'
          />
          <input
            placeholder='Profissão:'
          />
          <select>
            <option>Escolha um país</option>
          </select>
          <div>
          <button
            onClick={() => GoBack(navigate)}
          >Voltar</button>
            <button>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
