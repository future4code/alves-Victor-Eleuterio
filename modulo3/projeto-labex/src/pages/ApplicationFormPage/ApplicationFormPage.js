import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BaseUrl, token } from '../../constants/Constants'
import { GoBack } from '../../routes/Coordinator'
import axios from 'axios'
import { ChooseImage, countries } from '../../constants/Constants'
//styled
import { MainDiv, SecundaryDiv, TripDiv, ImageDiv, InfoDiv, SignUpTripDiv, FormStyled, ButtonStyled, DivButton } from './Styled'

export default function ApplicationFormPage() {
  const [trips, setTrips] = useState([])
  const [travel, setTravel] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [applyText, setApllyText] = useState('')
  const [profession, setProfession] = useState('')
  const [country, setCountry] = useState('')
  const [id, setId] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    getTrips()
    getId()
  }, [travel])

  const getTrips = () => {
    axios.get(
      `${BaseUrl}/trips`
    ).then((response) => {
      setTrips(response.data.trips)
    }).catch((error) => {
      alert('Algo deu errado, favor atualize a página', error.response)
    })
  }
  const onChangeTravel = (event) => {
    setTravel(event.target.value)
  }
  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangeAge = (event) => {
    setAge(event.target.value)
  }
  const onChangeApplicationText = (event) => {
    setApllyText(event.target.value)
  }
  const onChangeProfession = (event) => {
    setProfession(event.target.value)
  }
  const onChangeCountry = (event) => {
    setCountry(event.target.value)
  }

  const applyToTrip = (event) => {
    event.preventDefault()

    const body = {
      name: name,
      age: age,
      applicationText: applyText,
      profession: profession,
      country: country
    }
    axios.post(
      `${BaseUrl}/trips/${id}/apply`, body, {
      headers: {
        auth: token
      }
    }
    ).then(() => {
      alert(`Você está inscrito para a viagem: ${travel}`)
      clearInputs()
    }).catch((error) => [
      alert("ocorreu um erro", error.response)
    ])
  }
  const getId = () => {
    trips.filter((trip) => {
      if (trip.name === travel) {
        setId(trip.id)
      }
    })
  }
  const clearInputs = () => {
    setName('')
    setAge('')
    setApllyText('')
    setProfession('')
    setCountry('')
  }
  const filterTrip = trips.filter((trip) => {
    const newName = `${trip.name}`
    return newName.trim() == travel.trim()
  })

  const ChooseInfo = () => {
    switch (travel) {
      case '':
        return (
          <div>
            <h2>Selecione uma viagem</h2>
            <h1>🚀</h1>

          </div>
        )
      default:
        return (
          <>
            {filterTrip.map((trip) => {
              return (
                <TripDiv key={trip.id}>
                  <ImageDiv>
                    <img
                      src={ChooseImage(trip.planet)}
                      alt='Imagem do Planeta'
                    />
                  </ImageDiv>
                  <InfoDiv>
                    <p><b>Nome:</b> {trip.name}</p>
                    <p><b>Descrição:</b> {trip.description}</p>
                    <p><b>Planeta:</b> {trip.planet}</p>
                    <p><b>Duração:</b> {trip.durationInDays}</p>
                    <p><b>Data:</b> {trip.date}</p>
                  </InfoDiv>
                </TripDiv>
              )
            })}
          </>
        )
    }
  }

  return (
    <MainDiv>
      <SecundaryDiv>
        {ChooseInfo()}
        <SignUpTripDiv>
          <h2>Inscreva-se para uma viagem</h2>
          <FormStyled onSubmit={applyToTrip}>
            <select required onChange={onChangeTravel}>
              <option value disabled selected>Escolha uma viagem</option>
              {trips.map((trip) => {
                return (
                  <>
                    <option key={trip.id}>{trip.name}</option>
                  </>
                )
              })}
            </select>
            <input
              onChange={onChangeName}
              value={name}
              placeholder='Nome:'
              type='text'
              pattern={'^.{3,}'}
              title='• Ter no mínimo 3 letras'
              required
            />
            <input
              onChange={onChangeAge}
              value={age}
              placeholder='Idade:'
              type='number'
              title='• Ter no mínimo 18 anos'
              min='18'
            />
            <input
              onChange={onChangeApplicationText}
              value={applyText}
              placeholder='Texto de Candidatura:'
              pattern={'^.{30,}'}
              title='• Ter no mínimo 30 caracteres'
              required
            />
            <input
              onChange={onChangeProfession}
              value={profession}
              placeholder='Profissão:'
              pattern={'^.{10,}'}
              title='• Ter no mínimo 10 letras'
              required
            />
            {countries(onChangeCountry)}
            <ButtonStyled>Enviar</ButtonStyled>
          </FormStyled>
          <DivButton>
            <ButtonStyled
              onClick={() => GoBack(navigate)}
            >Voltar</ButtonStyled>
          </DivButton>
        </SignUpTripDiv>
      </SecundaryDiv>
    </MainDiv>
  )
}
