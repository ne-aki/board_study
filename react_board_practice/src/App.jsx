import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Board from './pages/user/Board'
import RegBoard from './pages/user/RegBoard'
import UserLayout from './layout/user/UserLayout'
import Join from './pages/Join'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/join' element={ <Join /> } />
        <Route path='/' element={ <UserLayout /> }>
          <Route path="board" element={ <Board /> } />
          <Route path="reg-board" element={ <RegBoard /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
