import React, { useEffect, useState } from 'react'
import { ButtonDiv, ButtonsDiv, MainDiv } from './Styled'
import arrowUp from '../../assets/arrowUp.png'
import arrowDown from '../../assets/arrowDown.png'
import axios from 'axios'
import { BaseUrl } from '../../constants/urls'

export default function Post(props) {
    const token = localStorage.getItem('token')

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
                        onClick={props.voteUp}
                    ><img src={arrowUp} alt="vote +" />
                    </button>
                    {props.votes}
                    <button
                        onClick={props.voteDown}
                    ><img src={arrowDown} alt="vote -" /></button>
                </ButtonDiv>
                {chooseDiv()}
            </ButtonsDiv>
        </MainDiv>
    )
}
