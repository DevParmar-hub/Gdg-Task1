import React from 'react'
import sedan from './assets/sedan.png'
import cabrio from './assets/cabrio.png'
import pickup from './assets/pickup.png'
import suv from './assets/suv.png'
import minivan from './assets/minivan.png'

const Navbar2 = () => {
  return (
    <div>
                <div className='mt-15 text-5xl font-bold text-center'>Select a vehicle group</div>
        <div className='mt-10 mb-10 flex flex-col items-center'>
            <ul className='flex '>
            <li className='w-34 h-12'>All vehicles</li>
            <li className='w-34 h-12'>
                <div className='flex'>
                    <img src={sedan} alt="" />
                Sedan
                </div>
                </li>
            <li className='w-34 h-12'><div className='flex'>
                <img src={cabrio} alt="" />
                Cabriolet
                </div>
                </li>
            <li className='w-34 h-12'><div className='flex'>
                <img src={pickup} alt="" />
                Pickup
                </div>
                </li><li className='w-34 h-12'><div className='flex'>
                <img src={suv} alt="" />
                SUV
                </div>
                </li><li className='w-34 h-12'><div className='flex'>
                <img src={minivan} alt="" />
                Minivan
                </div>
                </li>
            </ul>
            </div>
    </div>
  )
}

export default Navbar2