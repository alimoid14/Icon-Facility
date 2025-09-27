import { useState } from 'react'
import Home from './Pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import ContactPage from "./Pages/ContactPage"
import ServicePage from "./Pages/ServicePage"
import ProjectsPage from "./Pages/ProjectsPage"
import Header from './assets/Header'
import Footer from './assets/Footer'
import Team from './Pages/Team'


function App() {
  

  return (
    <>
    <Header  />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/services' element={<ServicePage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/Team' element={<Team />} />
    </Routes>

    <Footer />
      
      
    </>
  )
}

export default App
