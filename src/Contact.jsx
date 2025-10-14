import React from 'react'
import Navbar from './Navbar'
import HeroSection2 from './HeroSection2'
import Banner3 from './Banner3'
import Logos from './Logos'
import Footer from './Footer'
import Blog from './Blog'

const Contact = () => {
    return (
        <div>
            <div className='mt-17 font-bold text-5xl text-center mb-5'>Contact Us</div>
            <div className='text-center mb-15'><span className='text-gray-400'>Home  / </span>  Contact Us</div>
            <HeroSection2/>
            <Banner3/>
            <Blog/>
            <Logos/>

        </div>
    )
}

export default Contact