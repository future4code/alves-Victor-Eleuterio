import React, { Component } from 'react'
import styled from 'styled-components'
import Inputs from '../inputs/inputs'

const ChatStyled = styled.div`
  height: 99.3vh;
  justify-content: center;
  border-left: solid gray 2px;
  margin-left:30%;
  background-color: darkgray;
;

`
const Body = styled.body`
  background-image: url(https://i.pinimg.com/564x/1f/5a/31/1f5a318df7f66a3929d34dbf9ebf5d51.jpg);
  background-repeat: no-repeat;
`

export default class Chat extends Component {
  render() {
    return (
      <Body>
        <ChatStyled>
          <Inputs />
        </ChatStyled>
      </Body>
    )
  }
}
