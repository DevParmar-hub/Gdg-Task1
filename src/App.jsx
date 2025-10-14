import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Vehicle from './Vehicle'
import Contact from './Contact'
import Home from './Home'
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicle />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App