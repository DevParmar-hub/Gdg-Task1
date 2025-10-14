import React from 'react'
import Icon16 from './assets/Icon16.png'
import Icon14 from './assets/Icon14.png'
import Icon15 from './assets/Icon15.png'

const Banner3 = () => {
    return (
        <div className='flex justify-center gap-14 mb-15'>
            <div className='flex items-center'>
                <img src={Icon14} alt="" className='h-10' />
                <div className='ml-3'>
                    <div>Address</div>
                    <div className='font-semibold text-base '>Oxford Ave. Cary, NC 27511</div>
                </div>
            </div>
            <div className='flex items-center'>
                <img src={Icon15} alt="" className='h-10' />
                <div className='ml-3'>
                    <div>Email</div>
                    <div className='font-semibold text-base '>nwiger@yahoo.com</div>
                </div>
            </div>
            <div className='flex items-center'>
                <img src={Icon16} alt="" className='h-10' />
                <div className='ml-3'>
                    <div>Phone</div>
                    <div className='font-semibold text-base '>+537 547-6401</div>
                </div>
            </div>
            <div className='flex items-center'>
                <img src={Icon16} alt="" className='h-10' />
                <div className='ml-3'>
                    <div>Opening hours</div>
                    <div className='font-semibold text-base '>Sun-Mon: 10am - 10pm</div>
                </div>
            </div>

        </div>
    )
}

export default Banner3