import { useState } from 'react'
import Error from './Error'
import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import FrontHome from './Frontend/FrontHome'
import BackHome from './Backend/BackHome'
import Service from './Frontend/Service'
import Dome from './Frontend/Dome'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontHome />} />
        <Route path="/service" element={<Service />} >
          <Route path="data" element={<Dome />} />
        </Route>
        <Route path="/backend" element={<BackHome />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
