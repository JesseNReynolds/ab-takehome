import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Views/LandingPage/LandingPage'
import UsersIndex from './Views/UsersIndex/UsersIndex'

function App() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path='/users' element={<UsersIndex/>} />
    </Routes>
  )
}

export default App