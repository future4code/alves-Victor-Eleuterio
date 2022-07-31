import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feed from '../pages/feed/Feed'
import Login from '../pages/login/Login'
import PostPage from '../pages/postPage/PostPage'
import Registration from '../pages/registration/Registration '

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='feed' element={<Feed />} />
        <Route path='registration' element={<Registration />} />
        <Route path='postpage/:id' element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  )
}
