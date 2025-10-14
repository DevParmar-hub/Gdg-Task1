import React from 'react'
import photo2 from './assets/photo2.png'

const HeroSection2 = () => {
    return (
        <div className='flex justify-center gap-6'>
            <div className='flex h-165 '>
                <div className='bg-[#5937E0] h-125 w-106 rounded-2xl p-8 '>
                    <div className='text-center font-semibold text-[28px] mb-6 text-white'>
                        Book your car
                    </div>
                    <div>
                        <select id="cars" name="cars" className='bg-gray-200/20 font-normal text-white rounded-xl w-84 h-9 text-xl'>
                            <option >Car type</option>
                            <option >SUV</option>
                            <option >Sedan</option>
                            <option >Hatchback</option>
                            <option >Convertible</option>
                        </select>
                    </div>
                    <div>
                        <select id="cars" name="cars" className='bg-gray-200/20 font-normal text-white rounded-xl w-84 h-9 text-xl mt-6'>
                            <option >Place of rental</option>
                            <option >Kandivali</option>
                            <option >Borivali</option>
                            <option >Malad</option>
                            <option >Dahisar</option>
                        </select>
                    </div>
                    <div >
                        <select id="cars" name="cars" className='bg-gray-200/20 font-normal text-white rounded-xl w-84 h-9 text-xl mt-6'>
                            <option >Place of return</option>
                            <option >Kandivali</option>
                            <option >Borivali</option>
                            <option >Malad</option>
                            <option >Dahisar</option>
                        </select>
                    </div>
                    <div className='bg-gray-200/20 font-normal text-white h-9 mt-6 rounded-xl' >
                        <span className='mr-28 ml-1 text-xl'>Rental date</span>
                        <input type="date" />
                    </div>
                    <div className='bg-gray-200/20 font-normal h-9 mt-6 rounded-xl text-white'>
                        <span className=' ml-1 mr-28 text-xl'>Return date</span>
                        <input type="date" />
                    </div>
                    <button className='h-10 w-90 mt-10 text-base font-semibold rounded-xl text-white bg-[#FF9E0C] '>
                        Book now
                    </button>
                </div>
            </div>
            <img src={photo2} alt="" className='h-125' />
        </div>
    )
}

export default HeroSection2