import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GoBack, GoToAdmPage } from '../../routes/Coordinator'
import CreateTripPage from '../CreateTripPage/CreateTripPage'
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage'

export default function AdminHomePage() {
  const navigate = useNavigate()
  const params = useParams()

  const ChoosePage = () => {
    switch (params.address) {
      case 'list':
        return (
          <div>
            <div>
              <h2>Painel Administrativo</h2>
              <div>
                <p>Nome da Viagem</p>
                <button>Deletar</button>
              </div>
            </div>
            <div>
              <button
                onClick={() => GoBack(navigate)}
              >Voltar</button>
              <button
                onClick={() => GoToAdmPage(navigate, 'create')}
              >Criar Viagem</button>
              <button>Logout</button>
            </div>
          </div>
        )
        case 'create':
          return <CreateTripPage />
        case ':id':
          return <TripDetailsPage />
    }
  }

  return (
    <div>
      {ChoosePage()}
    </div>
  )
}
