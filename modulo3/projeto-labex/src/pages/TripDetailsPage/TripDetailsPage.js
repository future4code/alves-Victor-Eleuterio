import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authenticate, BaseUrl, headers } from '../../constants/Constants'
import { GoBack } from '../../routes/Coordinator'
import axios from 'axios'
import { useParams } from 'react-router-dom'

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
      console.log(error.response.data.message)
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
      alert('Candidato decidido')
    }).catch((error) => {
      alert("deu erro")
      console.log(error.response)
    })
  }
  return (
    <div>
      <div>
        <div>
          <h1>{trip.name}</h1>
          <p><b>Descrição:</b> {trip.description}</p>
          <p><b>Planeta:</b>{trip.planet}</p>
          <p><b>Duração:</b>{trip.durationInDays}</p>
          <p><b>Data:</b>{trip.date}</p>
          <button
            onClick={() => GoBack(navigate)}
          >Voltar</button>
        </div>
        <div>
          <h1>Candidatos Pendentes</h1>
          {candidates.map((candidate) => {
            return (
              <div key={candidate.id}>
                <p>Nome: {candidate.name}</p>
                <p>Idade: {candidate.age}</p>
                <p>Profissão: {candidate.profession}</p>
                <p>País: {candidate.country}</p>
                <p>Texto de candidatura: {candidate.applicationText}</p>
                <div>
                  <button
                    onClick={() => decideCandidate(candidate.id, true)}
                  >Aprovar</button>
                  <button
                    onClick={() => decideCandidate(candidate.id, false)}
                  >Reprovar</button>
                </div>
              </div>
            )
          })}
        </div>
        <div>
          <h1>Candidatos Aprovados</h1>
          {approveds.map((approved) => {
            return (
              <div key={approved.id}>
                <p>Nome: {approved.name}</p>
                <p>Idade: {approved.age}</p>
                <p>Profissão: {approved.profession}</p>
                <p>País: {approved.country}</p>
                <p>Texto de candidatura: {approved.applicationText}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
