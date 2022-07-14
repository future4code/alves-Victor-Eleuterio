import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoBack } from '../../routes/Coordinator'

export default function ApplicationFormPage() {
  const [trip, setTrip] = useState()

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
          <form>
            <select required>
              <option value disabled selected>Escolha uma viagem</option>
            </select>
            <input
              placeholder='Nome:'
              type='text'
              pattern='3+'
              title='• Ter no mínimo 3 letras'
            />
            <input
              placeholder='Idade:'
              type='number'
              minLength='18'
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
            <button>Enviar</button>
          </form>
          <div>
            <button
              onClick={() => GoBack(navigate)}
            >Voltar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
