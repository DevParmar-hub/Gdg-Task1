import React from 'react'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'

const Info1 = () => {
    return (
        <div>
            <div className='flex justify-center mt-15 gap-20 mb-25'>
                <div className='w-80 flex flex-col items-center'>
                    <img src={icon2} alt="" />
                    <div className='text-2xl font-semibold mb-5'>
                        Availability
                    </div>
                    <div className='text-center'>
                        Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis
                    </div>
                </div>
                <div className='w-80 flex flex-col items-center'>
                    <img src={icon3} alt="" />
                    <div className='text-2xl font-semibold mb-7'>
                        Comfort
                    </div>
                    <div className='text-center '>
                        Gravida auctor fermentum morbi vulputate
                        ac egestas orcietium convallis
                    </div>
                </div>
                <div className='w-80 flex flex-col items-center'>
                    <img src={icon4} alt="" />
                    <div className='text-2xl font-semibold mb-7'>
                        Savings
                    </div>
                    <div className='text-center'>
                        Pretium convallis id diam sed commodo vestibulum lobortis volutpat
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info1