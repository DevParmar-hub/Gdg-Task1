import React from 'react'
import carLogo from './assets/carLogo.png'
import Icon from './assets/Icon.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const getLinkClass = ({ isActive }) => {
        return isActive
            ? 'font-bold text-black' // Classes for the active link
            : 'text-gray-600 hover:text-black'; // Classes for inactive links
    };
    return (
        <div className='flex mt-9 justify-center mb-9'>
            <img src={carLogo} className='w-12' alt="" />
            <div className='flex items-center ml-3'>Car Rental</div>
            <ul className='flex gap-5 ml-46 items-center'>
                <li> <NavLink to="/" className={getLinkClass}>Home</NavLink></li>
                <li><NavLink to="/vehicles" className={getLinkClass}>Vehicles </NavLink></li>
                <li>Details</li>
                <li>About Us</li>
                <li><NavLink to="/contactus" className={getLinkClass}> Contact Us</NavLink></li>
                <li><NavLink to="/buy" className={getLinkClass}>Buy</NavLink></li>
                <li><NavLink to="/sell" className={getLinkClass}>Sell</NavLink></li>

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