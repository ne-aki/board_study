import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Board from './pages/Board'
import RegBoard from './pages/RegBoard'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/board" element={ <Board /> } />
        <Route path="/reg-board" element={ <RegBoard /> } />
      </Routes>
    </>
  )
}

export default App
