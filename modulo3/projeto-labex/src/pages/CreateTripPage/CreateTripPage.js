import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoBack, ChangePage } from '../../routes/Coordinator'
import { authenticate } from '../../constants/Constants'

export default function CreateTripPage() {
  const navigate = useNavigate()

  useEffect(() => {
    if(window.localStorage.getItem('token') === null){
      navigate('/login')
    }
  })

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
          <form>
            <input
              placeholder='Nome:'
              pattern='5+'
              title='• Ter no mínimo 5 caracteres'
              required
            />
            <select
              required
            >
              <option value disabled selected>Escolha um Planeta</option>
              <option>Mercúrio</option>
              <option>Vênus</option>
              <option>Terra</option>
              <option>Marte</option>
              <option>Júpiter</option>
              <option>Saturno</option>
              <option>Urano </option>
              <option>Netuno</option>
              <option>Plutão (planeta anão)</option>
            </select>
            <input
              type='date'
              required

            />
            <input
              placeholder='Descrição:'
              pattern='30+'
              title='• Ter no mínimo 30 caracteres'
              required
            />
            <input
              placeholder='Duração em Dias'
              type='number'
              pattern={'^.{50,}'}
              required
            />
            <button>Criar</button>
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
