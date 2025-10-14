import React from 'react'
import carImg1 from './assets/carImg1.png'
import gearshifter from './assets/gearshifter.png'
import frost from './assets/frost.png'
import g17 from './assets/g17.png'

const Card = (props) => {
    return (
        <div>
            <div className='w-90 bg-gray-50 rounded-xl p-4'>
                <img src={props.Image} alt="" />
                <div className='flex justify-between'>
                    <div>
                        <div className='font-semibold text-2xl'>{props.Brand}</div>
                        <div className='text-base text-gray-500'>{props.Type}</div>
                    </div>
                    <div>
                        <div className='text-2xl text-[#5937E0] font-bold'>{props.Price}$</div>
                        <div className='text-base text-gray-500'>per day</div>
                    </div>
                </div>
                <div className='flex gap-5 mt-10 justify-center '>
                    <div className='flex'>
                        <img src={gearshifter} className='w-6 h-6' alt="" />
                        <span>{props.Gearbox}</span>
                    </div>
                    <div className='flex'>
                        <img src={g17} alt="" />
                        <span>PB 95</span>
                    </div>
                    <div className='flex'>
                        <img src={frost} alt="" />
                        <span>Air conditioner</span>
                    </div>
                </div>
                <div className='flex justify-center'>

                    <button className=' text-center w-85 rounded-xl bg-[#5937E0] text-white text-base font-semibold h-10 mt-10 mb-6'>
                        View details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card