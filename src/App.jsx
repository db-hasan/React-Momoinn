import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import FrontHome from './Frontend/FrontHome'
import BackHome from './Backend/BackHome'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fh" element={<FrontHome />} />
        <Route path="/" element={<BackHome />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
