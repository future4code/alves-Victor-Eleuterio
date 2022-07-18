//others
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GoBack, GoToListTrips, GoContact } from '../../routes/Coordinator'
import ApplicationFormPage from '../ApplicationFormPage/ApplicationFormPage'
import axios from 'axios'
import { useEffect } from 'react'
import { BaseUrl } from '../../constants/Constants'
//images
import Jupiter from '../../assets/jupiter.jpg'
import Marte from '../../assets/marte.jpg'
import Netuno from '../../assets/netuno.jpg'
import Plutao from '../../assets/plutao.jpg'
import Mercurio from '../../assets/mercurio.jpeg'
import Saturno from '../../assets/saturno.jpg'
import Vênus from '../../assets/venus.jpg'
import Urano from '../../assets/urano.jpg'
import Desconhecido from '../../assets/desconhecido.jpg'
//styled
import { MainDiv, SecondaryDiv, PlanetsDiv, PlanetDiv, ButtonsDiv, ButtonStyled, InfoDiv, ImgStyled } from './Styled'
import Header from '../../components/Header/Header'

export default function ListTripsPage() {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    GetTrips()
  }, [])

  const navigate = useNavigate()
  const params = useParams()

  const ChooseImage = (planet) => {
    switch (planet) {
      case 'Jupiter':
        return Jupiter
      case 'Marte':
        return Marte
      case 'Netuno':
        return Netuno
      case 'Plutão':
        return Plutao
      case 'Mercúrio':
        return Mercurio
      case 'Saturno':
        return Saturno
      case 'Vênus':
        return Vênus
      case 'Urano':
        return Urano
      default:
        return Desconhecido
    }
  }
  const GetTrips = () => {
    axios.get(
      `${BaseUrl}/trips`
    ).then((res) => {
      setTrips(res.data.trips)
    }).catch((error) => [
      alert("Algo deu errado")
    ])
  }

  const ChoosePage = () => {
    switch (params.address) {
      case 'list':
        return (
          <SecondaryDiv>
            <PlanetsDiv>
              {trips.map((trip) => {
                return (
                  <PlanetDiv key={trip.id}>
                    <div>
                      <ImgStyled
                        src={ChooseImage(trip.planet)}
                        alt='Imagem do planeta'
                        width='230px'
                      />
                    </div>
                    <InfoDiv >
                      <p><b>Nome:</b> {trip.name}</p>
                      <p><b>Descrição:</b> {trip.description}</p>
                      <p><b>Planeta:</b> {trip.planet}</p>
                      <p><b>Duração:</b> {trip.durationInDays} dias</p>
                      <p><b>Data:</b> {trip.date}</p>
                    </InfoDiv>
                  </PlanetDiv>
                )
              })}
            </PlanetsDiv>
            <ButtonsDiv>
              <ButtonStyled
                onClick={() => GoToListTrips(navigate, 'application')}
              >Inscreva-se</ButtonStyled>
              <ButtonStyled
              ><a target='_blank' href='https://web.whatsapp.com/'>Contato</a></ButtonStyled>
              <ButtonStyled
                onClick={() => GoBack(navigate)}
              >Voltar</ButtonStyled>
            </ButtonsDiv>
          </SecondaryDiv>
        )
      case 'application':
        return <ApplicationFormPage />
    }
  }
  return (
    <MainDiv>
      <Header />
      {ChoosePage()}
    </MainDiv>
  )
}
