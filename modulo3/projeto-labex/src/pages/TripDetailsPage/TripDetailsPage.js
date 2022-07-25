import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authenticate, BaseUrl, headers } from '../../constants/Constants'
import { GoBack } from '../../routes/Coordinator'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { MainDiv, SecundaryDiv, TripDiv, ButtonStyled, ButtonDecision, PendingDiv, ApprovedDiv, DivCandidate } from './Styled'

export default function TripDetailsPage() {
  const [tripDetails, setTripDetails] = useState({})
  const [trip, setTrip] = useState({})
  const [candidates, setCandidates] = useState([])
  const [approveds, setApproveds] = useState([])

  const navigate = useNavigate()
  const params = useParams()
  const token = localStorage.getItem('token')

  useEffect(() => {
    setTripDetails(params.address)
  }, [params.address])
  useEffect(() => {
    authenticate(navigate)
    axios.get(
      `${BaseUrl}/trip/${tripDetails}`, {
      headers: {
        auth: token
      }
    }
    ).then((response) => {
      setTrip(response.data.trip)
      setCandidates(response.data.trip.candidates)
      setApproveds(response.data.trip.approved)
    }).catch((error) => {
      alert(error.response.data.message)
    })
  })

  const decideCandidate = (candidateId, decide) => {
    const body = {
      approve: decide
    }
    axios.put(
      `${BaseUrl}/trips/${trip.id}/candidates/${candidateId}/decide`,
      body,
      {
        headers: {
          auth: token
        }
      }
    ).then((response) => {

    }).catch((error) => {
      alert("Algo deu errado", error.response)

    })
  }
  return (
    <MainDiv>
      <SecundaryDiv>
        <TripDiv>
          <h1>{trip.name}</h1>
          <p><b>Descrição:</b> {trip.description}</p>
          <p><b>Planeta:</b> {trip.planet}</p>
          <p><b>Duração:</b> {trip.durationInDays}</p>
          <p><b>Data:</b> {trip.date}</p>
          <ButtonStyled
            onClick={() => GoBack(navigate)}
          >Voltar</ButtonStyled>
        </TripDiv>
        <PendingDiv>
          <h1>Candidatos Pendentes</h1>
          {candidates.map((candidate) => {
            return (
              <DivCandidate key={candidate.id}>
                <p><b>Nome:</b> {candidate.name}</p>
                <p><b>Idade:</b> {candidate.age}</p>
                <p><b>Profissão:</b> {candidate.profession}</p>
                <p><b>País:</b> {candidate.country}</p>
                <p><b>Texto de candidatura:</b> {candidate.applicationText}</p>
                <div>
                  <ButtonDecision
                    onClick={() => decideCandidate(candidate.id, true)}
                  >Aprovar</ButtonDecision>
                  <ButtonDecision
                    onClick={() => decideCandidate(candidate.id, false)}
                  >Reprovar</ButtonDecision>
                </div>
              </DivCandidate>
            )
          })}
        </PendingDiv>
        <ApprovedDiv>
          <h1>Candidatos Aprovados</h1>
          {approveds.map((approved) => {
            return (
              <DivCandidate key={approved.id}>
                <p><b>Nome:</b> {approved.name}</p>
                <p><b>Idade:</b> {approved.age}</p>
                <p><b>Profissão:</b> {approved.profession}</p>
                <p><b>País:</b> {approved.country}</p>
                <p><b>Texto de candidatura:</b> {approved.applicationText}</p>
              </DivCandidate>
            )
          })}
        </ApprovedDiv>
      </SecundaryDiv>
    </MainDiv>
  )
}
