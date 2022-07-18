import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoBack, ChangePage } from '../../routes/Coordinator'
import { authenticate, BaseUrl, token } from '../../constants/Constants'
import axios from 'axios'
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
import { MainDiv, TripDiv, SecundaryDiv, ImageDiv,InfoDiv, CreateTripDiv, FormStyled, ButtonStyled } from './styled'

export default function CreateTripPage() {
  const [name, setName] = useState('')
  const [planet, setPlanet] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [days, setDays] = useState(0)

  const navigate = useNavigate()
  // const today = new Date()
  // const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

  useEffect(() => {
    authenticate(navigate)
  })

  const createTrip = (event) => {
    event.preventDefault()
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: days
    }
    axios.post(
      `${BaseUrl}/trips`, body, {
      headers: {
        auth: token
      }
    }
    ).then(() => {
      alert('Viagem criada com sucesso! 🚀')
    }).catch((error) => {
      alert('ocorreu um erro', error.reponse)
    })
  }

  const ChooseImage = () => {
    switch (planet) {
      case 'Júpiter':
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
  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }
  const onChangePlanet = (event) => {
    setPlanet(event.target.value)
  }
  const onChangeDate = (event) => {
    setDate(event.target.value)
  }
  const onChangeDays = (event) => {
    setDays(event.target.value)
  }
  return (
    <MainDiv>
      <SecundaryDiv>
        <div>
          <TripDiv>
            <ImageDiv>
              <img
                src={ChooseImage()}
                alt='Imagem do Planeta'
              />
            </ImageDiv>
            <InfoDiv>
              <p><b>Nome:</b> {name}</p>
              <p><b>Descrição:</b> {description}</p>
              <p><b>Planeta:</b> {planet}</p>
              <p><b>Duração:</b> {days}</p>
              <p><b>Data:</b> {date}</p>
            </InfoDiv>
          </TripDiv>
        </div>
        <CreateTripDiv>
          <h2>Criar Viagem</h2>
          <FormStyled onSubmit={createTrip}>
            <input
              onChange={onChangeName}
              placeholder='Nome:'
              pattern={'^.{5,}'}
              title='• Ter no mínimo 5 caracteres'
              required
            />
            <select required onChange={onChangePlanet}>
              <option value disabled selected>Escolha um Planeta</option>
              <option value='Mercúrio'>Mercúrio</option>
              <option value='Vênus'>Vênus</option>
              <option value='Terra'>Terra</option>
              <option value='Marte'>Marte</option>
              <option value='Júpiter'>Júpiter</option>
              <option value='Saturno'>Saturno</option>
              <option value='Urano'>Urano </option>
              <option value='Netuno'>Netuno</option>
              <option value='Plutão'>Plutão (planeta anão)</option>
            </select>
            <input
              onChange={onChangeDate}
              type='date'
              title='• Deve ser uma data futura'
              required
              min='2022-07-15'
            // Não consegui elaborar um método de trocar a data atual.
            // Realizei algumas tentativas, mas sem sucesso.
            // O método {date} está localizado na linha 9 e 10.
            // Se possível, me retorne um feedback sobre isso😊.
            // pattern={`^.${date}`}
            // min={date}
            />
            <input
              onChange={onChangeDescription}
              placeholder='Descrição:'
              pattern={'^.{30,}'}
              title='• Ter no mínimo 30 caracteres'
              required
            />
            <input
              onChange={onChangeDays}
              placeholder='Duração em dias:'
              type='number'
              min='50'
              title='• Ter no mínimo 50 dias'
              required
            />
            <ButtonStyled>Criar</ButtonStyled>
          </FormStyled>
          <div>
            <ButtonStyled
              onClick={() => GoBack(navigate)}
            >Voltar</ButtonStyled>
          </div>
        </CreateTripDiv>
      </SecundaryDiv>
    </MainDiv>
  )
}
