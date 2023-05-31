import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Portfolio from '../pages/portfolio/Portfolio'
import Services from '../pages/services/Services'
import Contact from '../pages/contact/Contact'
import ServiceDetail from '../pages/service-detail/ServiceDetail'
import NoMatch from '../pages/noMatch/NoMatch'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='services' element={<Services />} />
      <Route path='services/:id' element={<ServiceDetail />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  )
}

export default Routers
