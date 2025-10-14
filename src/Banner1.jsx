import React from 'react'
import Banner_design1 from './assets/Banner_design1.png'
import Banner_design2 from './assets/Banner_design2.png'
import Icon5 from './assets/Icon5.png'
import Icon6 from './assets/Icon6.png'
import Icon7 from './assets/Icon7.png'
import Icon8 from './assets/Icon8.png'


const Banner1 = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-300 h-121 bg-[#5937E0] relative rounded-2xl'>
            <div>
                <img src={Banner_design1} className='absolute'alt="" />
                <img src={Banner_design2} alt="" className='absolute bottom-0 left-1/6 mix-blend-multiply opacity-85  '/>
            </div>
            <div className='text-center text-white text-5xl font-bold mt-15 mb-5'>Facts in Numbers</div>
            <div className=' text-white text-base w-178 text-center m-auto'>Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper fermentum</div>
            <div className='flex mt-20 justify-center gap-12 relative z-10'>
                <div className='w-55 bg-white h-25 rounded-2xl p-4'>
                    <div className='flex'>
                    <img src={Icon5} alt="" />
                    <div className='ml-4'>
                        <div className='text-2xl font-bold '>540+</div>
                        <div className='mt-2 text-gray-500 font-semibold'>Cars</div>
                    </div>
                    </div>
                    
                </div>
                 <div className='w-55 bg-white h-25 rounded-2xl p-4'>
                    <div className='flex'>
                    <img src={Icon6} alt="" />
                    <div className='ml-4'>
                        <div className='text-2xl font-bold '>20k+</div>
                        <div className='mt-2 text-gray-500 font-semibold'>Customers</div>
                    </div>
                    </div>
                    
                </div>
                 <div className='w-55 bg-white h-25 rounded-2xl p-4'>
                    <div className='flex'>
                    <img src={Icon7} alt="" />
                    <div className='ml-4'>
                        <div className='text-2xl font-bold '>25+</div>
                        <div className='mt-2 text-gray-500 font-semibold'>Years</div>
                    </div>
                    </div>
                    
                </div>
                 <div className='w-55 bg-white h-25 rounded-2xl p-4'>
                    <div className='flex'>
                    <img src={Icon8} alt="" />
                    <div className='ml-4'>
                        <div className='text-2xl font-bold '>20m+</div>
                        <div className='mt-2 text-gray-500 font-semibold'>Miles</div>
                    </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Banner1