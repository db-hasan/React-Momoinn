import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Error'
import Home from './Frontend/Home'
import Package from './Frontend/Package'
import Events from './Frontend/Events'
import Restaurants from './Frontend/Restaurants'
import Facilities from './Frontend/Facilities'
import Booking from './Frontend/Booking'
import About from './Frontend/About'
import Contact from './Frontend/Contact'
import Service from './Frontend/Service'
import Dame from './Frontend/Dame'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />
        <Route path="/events" element={<Events />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/service" element={<Service />} >
          <Route path="dame" element={<Dame />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
export default App
