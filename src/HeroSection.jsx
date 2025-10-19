import React from 'react'
import Bg_design from './assets/Bg_design.png'
import Bg_design2 from './assets/Bg_design2.png'

const HeroSection = () => {
    return (
        <div className='flex justify-center'>

            <div className='h-165 w-300 bg-[#5937E0] rounded-4xl relative z-10'>
                <div className='relative'>
                    <img src={Bg_design} className='absolute z--1' alt="" />
                    <img src={Bg_design2} className='absolute top-80 left-50 z--1' alt="" />
                </div>
                <div className='flex'>
                    <div>
                        <div className='font-sans font-bold text-6xl mt-42 ml-16 w-160 text-white'>
                            Experience the road like never before
                        </div>
                        <div className='ml-16 mt-6 w-100 text-base text-white'>
                            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper
                        </div>
                        <button className='bg-[#FF9E0C] hover:bg-[#FFDC97] cursor-pointer text-base mt-8 ml-16 w-34 h-10 rounded-xl text-white'>
                            View all cars
                        </button>
                    </div>
                    <div className='flex h-165 items-center'>
                        <div className='bg-white h-125 w-106 rounded-2xl p-8 relative z-1'>
                            <div className='text-center font-semibold text-[28px] mb-6'>
                                Book your car
                            </div>
                            <div>
                                <select id="cars" name="cars" className='bg-gray-100 w-84 h-9 text-xl'>
                                    <option >Car type</option>
                                    <option >SUV</option>
                                    <option >Sedan</option>
                                    <option >Hatchback</option>
                                    <option >Convertible</option>
                                </select>
                            </div>
                            <div>
                                <select id="cars" name="cars" className='bg-gray-100 w-84 h-9 text-xl mt-6'>
                                    <option >Place of rental</option>
                                    <option >Kandivali</option>
                                    <option >Borivali</option>
                                    <option >Malad</option>
                                    <option >Dahisar</option>
                                </select>
                            </div>
                            <div>
                                <select id="cars" name="cars" className='bg-gray-100 w-84 h-9 text-xl mt-6'>
                                    <option >Place of return</option>
                                    <option >Kandivali</option>
                                    <option >Borivali</option>
                                    <option >Malad</option>
                                    <option >Dahisar</option>
                                </select>
                            </div>
                            <div className='bg-gray-100 h-9 mt-6'>
                                <span className='mr-29 text-xl'>Rental date</span>
                                <input type="date" />
                            </div>
                            <div className='bg-gray-100 h-9 mt-6'>
                                <span className='mr-29 text-xl'>Return date</span>
                                <input type="date" />
                            </div>
                                <button className='h-10 w-90 mt-10 text-base font-semibold rounded-xl text-white bg-[#FF9E0C] ' >
                                    Book now
                                </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection