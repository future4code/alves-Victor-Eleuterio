import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import { ButtonAuthentication } from '../../components/header/Styled'
import Post from '../../components/post/Post'
import { FormDiv, MainDiv, FormStyled, PostDiv, ButtonPost } from './Styled'
import { GlobalContext } from '../../global/GlobalContext'
import { authenticate } from '../../hooks/authentication'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToPostPage } from '../../routes/Coordinator'
import useRequestData from '../../hooks/useRequestData'
import { BaseUrl } from '../../constants/urls'
import axios from 'axios'

export default function Feed() {
  const { authentication, setAuthentication } = useContext(GlobalContext)
  const [posts, setPosts] = useState()

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    authenticate(navigate)
    getPosts()
  }, [])

  const getPosts = () => {
    axios.get(
      `${BaseUrl}/posts?page=1&size=20`, {
      headers: {
        'Authorization': token
      }
    }
    ).then((response) => {
      setPosts(response.data)
    }).catch((error) => {
      console.log(error.response.data)
      alert('Ocorreu um erro. Por favor, faça login novamente')
    })
  }

  const logout = () => {
    localStorage.removeItem('token')
    setAuthentication(false)
    goToFeed(navigate)
  }

  const getPostsComments = (id) => {
    axios.get(
      `${BaseUrl}/posts/${id}/comments`, {
      headers: {
        Authorization: token
      }
    }
    ).then((response) => {
      goToPostPage(navigate, id)
    }).catch((error) => {
      console.log(error)
    })
  }

  const onChangePost = () =>{
    
  }
  const createPost = () => {
    axios.post(
      `${BaseUrl}/posts`, {
      headers: {
        Authorization: token
      }
    }
    )
  }


  const chooseScreen = () => {
    switch (posts) {
      case undefined:
        return <h3>Carregando...</h3>
      default:
        return (
          posts.map((post) => {
            return (
              <Post
                key={post.id}
                user={post.username}
                textPost={post.body}
                votes={post.voteSum}
                comments={post.commentCount}
                getComments={() => getPostsComments(post.id)}
              />
            )
          })
        )
    }
  }
  return (
    <MainDiv>
      <Header
        buttonAuthentication={
          <div>
            <ButtonAuthentication
              onClick={logout}
            >Logout</ButtonAuthentication>
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
        {chooseScreen()}
      </PostDiv>
    </MainDiv>
  )
}
