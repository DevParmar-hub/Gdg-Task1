import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Vehicle from './Vehicle'
import Contact from './Contact'
import Home from './Home'
import Buy from './buy'
import Sell from './Sell'
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicle />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App