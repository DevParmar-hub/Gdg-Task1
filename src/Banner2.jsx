import React from 'react'
import Banner_design3 from './assets/Banner_design3.png'
import Icon12 from './assets/Icon12.png'
import carLogo2 from './assets/carLogo2.png'

const Banner2 = () => {
    return (
        <div className='flex justify-center mb-15'>
            <div className='w-300 h-105 bg-[#5937E0] relative z-0 rounded-2xl'>

                <div>
                    <img src={Banner_design3} className='absolute top-15' alt="" />
                </div>
                <div className='flex'>
                    <div>
                        <div className='ml-21 mt-15 text-white text-5xl font-bold mb-5 w-165'>Enjoy every mile with adorable companionship.</div>
                        <div className='text-white text-base w-130 h-10 ml-21 mt-15 mb-10'>Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat</div>
                        <div>
                        <input type="text" placeholder='City' className='bg-white h-12 pl-4 w-105 border-none rounded-2xl font-semibold ml-21 relative' />
                        <button className='bg-[#FF9E0C] text-white w-23 h-10 rounded-2xl relative right-24'>Search</button>
                        </div>
                    </div>
                    <div>
                        <img src={carLogo2} alt="" className='mt-4' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner2