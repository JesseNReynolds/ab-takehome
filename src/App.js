import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Views/LandingPage/LandingPage'
import MessagesIndex from './Views/MessagesIndex/MessagesIndex'
import UsersIndex from './Views/UsersIndex/UsersIndex'
import NavBar from './Views/NavBar/NavBar.js'
import { Stack } from '@mui/system'

function App() {
  return (
    <Stack>
      <NavBar/>
      <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path='/users' element={<UsersIndex/>} />
          <Route path='/messages' element={<MessagesIndex/>} />
      </Routes>
    </Stack>
  )
}

export default App