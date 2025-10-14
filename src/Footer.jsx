import React from 'react'
import carLogo from './assets/carLogo.png'
import Icon13 from './assets/Icon13.png'
import Icon14 from './assets/Icon14.png'
import Icon15 from './assets/Icon15.png'
import Icon16 from './assets/Icon16.png'
import Icon17 from './assets/Icon17.png'
import Icon18 from './assets/Icon18.png'

const Footer = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex justify-center gap-10'>
                <div>
                    <div className='flex'>
                        <img src={carLogo} alt="" />
                        <div className='mt-[10px] ml-2 font-semibold'>Car Rental</div>
                    </div>
                    <div className='mt-10 w-50 font-semibold'>Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem t</div>
                    <div><img src={Icon13} alt="" className='mt-9' /></div>
                </div>
                <div>
                    <div className='flex items-center'>
                        <img src={Icon14} alt="" className='h-10' />
                        <div className='ml-3'>
                            <div>Address</div>
                            <div className='font-semibold text-base '>Oxford Ave. Cary, NC 27511</div>
                        </div>
                    </div>
                    <div className='mt-10 flex flex-col items-center'>
                        <div className='font-semibold'>Useful links</div>
                        <ul className='mt-3 text-[14px]'>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Gallery</li>
                            <li>Blog</li>
                            <li>F.A.Q</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='flex items-center'>
                        <img src={Icon15} alt="" className='h-10' />
                        <div className='ml-3'>
                            <div>Email</div>
                            <div className='font-semibold text-base '>nwiger@yahoo.com</div>
                        </div>
                    </div>
                    <div className='mt-10 flex flex-col items-center'>
                        <div className='font-semibold'>Vehicles</div>
                        <ul className='mt-3 text-[14px]'>
                            <li>Sedan</li>
                            <li>Cabriolet</li>
                            <li>Pickup</li>
                            <li>Minivan</li>
                            <li>SUV</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='flex items-center'>
                        <img src={Icon16} alt="" className='h-10' />
                        <div className='ml-3'>
                            <div>Phone</div>
                            <div className='font-semibold text-base '>+537 547-6401</div>
                        </div>
                    </div>
                    <div className='mt-10 flex flex-col items-center'>
                        <div className='font-semibold'>Download App</div>
                        <div className='mt-3'>
                            <img src={Icon17} alt="" />
                            <img src={Icon18} alt="" className='mt-6' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-[14px] text-gray-500 mt-20'> © Copyright Car Rental  2024. Design by Figma. guru</div>
        </div>

    )
}

export default Footer