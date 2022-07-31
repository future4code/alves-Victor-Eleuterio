import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { ButtonAuthentication, CloseIcon } from '../../components/header/Styled'
import Post from '../../components/post/Post'
import { GlobalContext } from '../../global/GlobalContext'
import { goToFeed } from '../../routes/Coordinator'
import { FormDiv, MainDiv, FormStyled, PostDiv, PostComments, ButtonPost } from './Styled'
import colseIcon from '../../assets/closeIcon.png'
import axios from 'axios'
import { BaseUrl } from '../../constants/urls'
import { token } from '../../constants/constants'

export default function PostPage() {
  const { authentication, setAuthentication, comments, posts, postId } = useContext(GlobalContext)
  const [comment, setComment] = useState()
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    setAuthentication(false)
    goToFeed(navigate)
  }
  const choosePost = () => {
    switch (posts) {
      case undefined:
        return <h3>Carregando...</h3>
      default:
        return (
          posts.filter((post) => {
            return (post.id === postId)
          }).map((post) => {
            return (
              <Post
                key={postId}
                user={post.username}
                textPost={post.body}
                votes={post.voteSum}
              />
            )
          })
        )
    }
  }
  const chooseScreenComments = () => {
    switch (comments) {
      case undefined:
        return <h3>Carregando...</h3>
      default:
        return (
          comments.map((comment) => {
            return (
              <Post
                key={comment.id}
                user={comment.username}
                textPost={comment.body}
                votes={comment.voteSum}
              />
            )
          })
        )
    }
  }
  const onChangeComment = (event) => {
    setComment(event.target.value)
  }
  const createComment = (event) => {
    event.preventDefault()

    const body = {
      "body": comment
    }
    axios.post(
      `${BaseUrl}/posts/${postId}/comments`, body, {
      headers: {
        "Authorization": token
      }
    }
    ).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <MainDiv>
      <Header
        buttonClose={<CloseIcon onClick={() => goToFeed(navigate)} src={colseIcon} />}
        buttonAuthentication={
          <div>
            <ButtonAuthentication
              onClick={logout}
            >Logout</ButtonAuthentication>
          </div>
        }
      />
      <PostDiv>
        {choosePost()}
      </PostDiv>
      <FormDiv>
        <FormStyled
          onSubmit={createComment}
        >
          <textarea
            onChange={onChangeComment}
            placeholder='Adicionar comentário'
          />
          <ButtonPost>Responder</ButtonPost>
          <hr />
        </FormStyled>
      </FormDiv>
      <PostComments>
        {chooseScreenComments()}
      </PostComments>
    </MainDiv>
  )
}
