
import React from 'react'
import { Navbar, Signin, Login, About, Vedicmaterials, Vedicpractitioner, Patientfeedback, Home } from './components/allcomponents'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (

    < BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/About' element={<About />} />
        <Route path='/Vedicmaterials' element={<Vedicmaterials />} />
        <Route path='/Vedicpractitioner' element={<Vedicpractitioner />} />
        <Route path='/Patientfeedback' element={<Patientfeedback />} />
        
      
      </Routes>
    </BrowserRouter>
  )
}
