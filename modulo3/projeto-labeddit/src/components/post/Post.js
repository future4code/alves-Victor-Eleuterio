import React, { useEffect, useState } from 'react'
import { ButtonDiv, ButtonsDiv, MainDiv } from './Styled'
import arrowUp from '../../assets/arrowUp.png'
import arrowDown from '../../assets/arrowDown.png'
import axios from 'axios'
import { BaseUrl } from '../../constants/urls'

export default function Post(props) {
    const [vote, setVote] = useState(false)

    const token = localStorage.getItem('token')

    const refresh = () => {
        axios.get(
            `${BaseUrl}/posts?page=1&size=10`, {
            headers: {
                'Authorization': token
            }
        }
        ).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    const createPostVote = (id) => {
        if (vote == false) {
            const body = {
                "direction": 1
            }
            axios.post(
                `${BaseUrl}/posts/${id}/votes`, body, {
                headers: {
                    "Authorization": token
                }
            }
            ).then((response) => {
                refresh()
                setVote(true)
            }).catch((error) => {
                console.log(error)
            })
        } else {
            axios.delete(
                `${BaseUrl}/posts/${id}/votes`, {
                headers: {
                    "Authorization": token
                }
            }
            ).then((response) => {
                setVote(false)
                refresh()
            }).catch((error) => {
                console.log(error)
            })
        }
    }
    const changePostVote = (id) => {
        const body = {
            "direction": -1
        }
        if (vote == false) {
            axios.put(
                `${BaseUrl}/posts/${id}/votes`, body, {
                headers: {
                    "Authorization": token
                }
            }
            ).then((response) => {
                setVote(true)
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
        } else {
            axios.delete(
                `${BaseUrl}/posts/${id}/votes`, {
                headers: {
                    "Authorization": token
                }
            }
            ).then((response) => {
                console.log(response)
                setVote(false)
            }).catch((error) => {
                console.log(error)
            })
        }
    }
    const chooseDiv = () => {
        if (props.buttonComments || props.comments) {
            return (
                <ButtonDiv>
                    {props.buttonComments}
                    {props.comments}
                </ButtonDiv>
            )
        }
    }
    return (
        <MainDiv>
            <div>
                <p>Enviado por: {props.user}</p>
            </div>
            <div>
                <h4>
                    {props.textPost}
                </h4>
            </div>
            <ButtonsDiv>
                <ButtonDiv>
                    <button
                        onClick={() => createPostVote(props.vote)}
                    ><img src={arrowUp} alt="vote +" />
                    </button>
                    {props.votes}
                    <button
                        onClick={() => changePostVote(props.vote)}
                    ><img src={arrowDown} alt="vote -" /></button>
                </ButtonDiv>
                {chooseDiv()}
            </ButtonsDiv>
        </MainDiv>
    )
}
