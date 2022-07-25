import React from 'react'
import Header from '../../components/header/Header'
import { ButtonAuthentication } from '../../components/header/Styled'
import Post from '../../components/post/Post'
import { FormDiv, MainDiv, FormStyled, PostDiv, ButtonPost } from './Styled'

export default function Feed() {
  return (
    <MainDiv>
      <Header 
      buttonAuthentication={
        <div>
          <ButtonAuthentication>Logout</ButtonAuthentication>
        </div>
      }
      />
      <FormDiv>
        <FormStyled >
          <textarea
            placeholder='Escreva seu Post...'
          />
          <ButtonPost>Postar</ButtonPost>
          <hr />
        </FormStyled>
      </FormDiv>
      <PostDiv>
        <Post />
      </PostDiv>
    </MainDiv>
  )
}
