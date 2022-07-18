import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { authenticate, BaseUrl } from '../../constants/Constants'
import { GoBack, GoToAdmPage } from '../../routes/Coordinator'
import CreateTripPage from '../CreateTripPage/CreateTripPage'
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage'
import axios from 'axios'
import { useState } from 'react'
import { token } from '../../constants/Constants'
//styled
import { TripDiv, TripsDiv, MainDiv, ButtonsDiv, ButtonStyled, NameDiv } from './styled'
import Header from '../../components/Header/Header'

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
    ).then(() => {
      alert('Viagem deletada com sucesso!')
      setAuth(!auth)
    }).catch((error) => {
      alert(error.response)
    })
  }

  const ChoosePage = () => {

    switch (params.address) {
      case 'list':
        return (
          <MainDiv>
            <TripsDiv>
              <h2>Painel Administrativo</h2>
              {trips.map((trip) => {
                return (
                  <TripDiv key={trip.id}>
                    <NameDiv onClick={() => GoToAdmPage(navigate, trip.id)}>
                      <p>{trip.name}</p>
                    </NameDiv>
                    <button
                      onClick={() => deleteTrip(trip.id)}
                    >Deletar</button>
                  </TripDiv>
                )
              })
              }
            </TripsDiv>
            <ButtonsDiv>
              <ButtonStyled
                onClick={() => GoBack(navigate)}
              >Voltar</ButtonStyled>
              <ButtonStyled
                onClick={() => GoToAdmPage(navigate, 'create')}
              >Criar Viagem</ButtonStyled>
              <ButtonStyled
                onClick={logout}
              >Logout</ButtonStyled>
            </ButtonsDiv>
          </MainDiv>
        )
      case 'create':
        return <CreateTripPage />
      default:
        return <TripDetailsPage />

    }


  }

  return (
    <div>
      <Header />
      {ChoosePage()}
    </div>
  )
}
