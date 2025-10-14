import React from 'react'
import carLogo from './assets/carLogo.png'
import Icon from './assets/Icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex mt-9 justify-center mb-9'>
            <img src={carLogo} className='w-12' alt="" />
            <div className='flex items-center ml-3'>Car Rental</div>
            <ul className='flex gap-5 ml-46 items-center'>
                <li> <Link to="/" >Home</Link></li>
                <li><Link to="/vehicles">Vehicles </Link></li>
                <li>Details</li>
                <li>About Us</li>
                <li><Link to="/contactus"> Contact Us</Link></li>
            </ul>
            <img src={Icon} className='ml-46.5 h-10' alt="" />
            <div className='ml-3'>
                <div>Need help?</div>
                <div>+996 247-1680</div>
            </div>
        </div>
    )
}

export default Navbar