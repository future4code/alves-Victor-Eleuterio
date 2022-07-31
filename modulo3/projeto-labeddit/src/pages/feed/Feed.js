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
import commentIcon from '../../assets/commentIcon.png'

export default function Feed() {
  const { authentication, setAuthentication, comments, setComments, posts, setPosts, postId, setPostId } = useContext(GlobalContext)
  const [postText, setPostText] = useState()
  const [vote, setVote] = useState(false)

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    authenticate(navigate)
    getPosts()
  }, [])

  const getPosts = () => {
    axios.get(
      `${BaseUrl}/posts?page=1&size=10`, {
      headers: {
        'Authorization': token
      }
    }
    ).then((response) => {
      setPosts(response.data)
    }).catch((error) => {
      alert('Ocorreu um erro. Por favor, faça login novamente', error.response.data)
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
      setComments(response.data)
      JSON.stringify(localStorage.setItem('comments', response.data))
      setPostId(id)
      goToPostPage(navigate, id)
      localStorage.setItem('postId', id)
    }).catch((error) => {
      alert(error)
      alert("Ocorreu um erro. Tente novamente mais tarde!", error.response.data)
    })
  }

  const onChangePost = (event) => {
    setPostText(event.target.value)
  }
  const createPost = (event) => {
    event.preventDefault()

    const body = {
      "title": "comment",
      "body": postText
    }
    axios.post(
      `${BaseUrl}/posts`, body, {
      headers: {
        Authorization: token
      }
    }
    ).then((response) => {
      getPosts()
      alert(response.data)
    }).catch((error) => {
      alert(error)
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
        setVote(true)
      }).catch((error) => {
        alert(error)
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
      }).catch((error) => {
        alert(error)
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
      }).catch((error) => {
        alert(error)
      })
    } else {
      axios.delete(
        `${BaseUrl}/posts/${id}/votes`, {
        headers: {
          "Authorization": token
        }
      }
      ).then((response) => {
        alert(response)
        setVote(false)
      }).catch((error) => {
        alert(error)
      })
    }
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
                voteUp={() => createPostVote(post.id)}
                voteDown={() => changePostVote(post.id)}
                buttonComments={
                  <button
                    onClick={() => getPostsComments(post.id)}
                  ><img src={commentIcon} /></button>
                }
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
            value={postText}
            onChange={onChangePost}
            placeholder='Escreva seu Post...'
          />
          <ButtonPost
            onClick={createPost}
          >Postar</ButtonPost>
          <hr />
        </FormStyled>
      </FormDiv>
      <PostDiv>
        {chooseScreen()}
      </PostDiv>
    </MainDiv>
  )
}
