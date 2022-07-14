import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { authenticate, BaseUrl } from '../../constants/Constants'
import { GoBack, GoToAdmPage } from '../../routes/Coordinator'
import CreateTripPage from '../CreateTripPage/CreateTripPage'
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage'
import axios from 'axios'
import { useState } from 'react'
import { token } from '../../constants/Constants'

export default function AdminHomePage() {
  const [trips, setTrips] = useState([])
  const [auth, setAuth] = useState(true)

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    authenticate(navigate)
  }, [auth])

  useEffect(() => {
    axios.get(
      `${BaseUrl}/trips`
    ).then((response) => {
      setTrips(response.data.trips)
    }).catch((error) => {
      alert("Ocorreu um erro", error.response.data.message)
    })
  }, [auth])

  const logout = () => {
    localStorage.removeItem('token')
    setAuth(!auth)
  }

  const deleteTrip = (id) => {
    axios.delete(
      `${BaseUrl}/trips/${id}`, {
      headers: {
        auth: token
      }
    }
    ).then(()=>{
      alert('Viagem deletada com sucesso!')
      setAuth(!auth)
    }).catch((error)=>{
      console.log(error.response)
    })
  }

  const ChoosePage = () => {

    switch (params.address) {
      case 'list':
        return (
          <div>
            <div>
              <h2>Painel Administrativo</h2>
              {trips.map((trip) => {
                return (
                  <div key={trip.id}
                    onClick={() => GoToAdmPage(navigate, trip.id)}
                  >
                    <p>{trip.name}</p>
                    <button
                    onClick={()=>deleteTrip(trip.id)}
                    >Deletar</button>
                  </div>
                )
              })
              }
            </div>
            <div>
              <button
                onClick={() => GoBack(navigate)}
              >Voltar</button>
              <button
                onClick={() => GoToAdmPage(navigate, 'create')}
              >Criar Viagem</button>
              <button
                onClick={logout}
              >Logout</button>
            </div>
          </div>
        )
      case 'create':
        return <CreateTripPage />
      default:
        return <TripDetailsPage />

    }


  }

  return (
    <div>
      {ChoosePage()}
    </div>
  )
}
